#!/usr/bin/env python3
"""
Deterministic script to extract full-resolution embedded image XObjects from a PDF
into PNG format using only the Python standard library.
"""
import os
import re
import struct
import sys
import zlib


def write_png(path: str, width: int, height: int, rgb_bytes: bytes):
    """Write raw RGB24 bytes to a standard PNG file using only stdlib."""
    def chunk(chunk_type: bytes, data: bytes) -> bytes:
        c = chunk_type + data
        return struct.pack(">I", len(data)) + c + struct.pack(">I", zlib.crc32(c) & 0xFFFFFFFF)

    raw_rows = bytearray()
    row_bytes = width * 3
    for y in range(height):
        raw_rows.append(0)  # Filter type 0 (None)
        raw_rows.extend(rgb_bytes[y * row_bytes : (y + 1) * row_bytes])

    ihdr = struct.pack(">IIBBBBB", width, height, 8, 2, 0, 0, 0)
    idat = zlib.compress(bytes(raw_rows), 9)
    png = b"\x89PNG\r\n\x1a\n" + chunk(b"IHDR", ihdr) + chunk(b"IDAT", idat) + chunk(b"IEND", b"")
    with open(path, "wb") as f:
        f.write(png)


def extract_pdf_images(pdf_path: str, out_dir: str):
    with open(pdf_path, "rb") as f:
        data = f.read()

    # Find all objects with stream
    pattern = re.compile(rb"<<(.*?)>>\s*stream\r?\n(.*?)\r?\nendstream", re.DOTALL)
    candidates = []
    for idx, m in enumerate(pattern.finditer(data)):
        header = m.group(1)
        stream = m.group(2)
        if b"/Image" in header or b"/Width" in header:
            w_m = re.search(rb"/Width\s+(\d+)", header)
            h_m = re.search(rb"/Height\s+(\d+)", header)
            if not (w_m and h_m):
                continue
            w = int(w_m.group(1))
            h = int(h_m.group(1))
            if stream.startswith(b"\xff\xd8\xff"):
                out_p = os.path.join(out_dir, f"img_{idx}.jpg")
                with open(out_p, "wb") as out:
                    out.write(stream)
                candidates.append((w * h, out_p, w, h))
            else:
                try:
                    dec = zlib.decompress(stream)
                    if dec.startswith(b"\xff\xd8\xff"):
                        out_p = os.path.join(out_dir, f"img_{idx}.jpg")
                        with open(out_p, "wb") as out:
                            out.write(dec)
                        candidates.append((w * h, out_p, w, h))
                    elif len(dec) == w * h * 3:
                        out_p = os.path.join(out_dir, f"img_{idx}.png")
                        write_png(out_p, w, h, dec)
                        candidates.append((w * h, out_p, w, h))
                except Exception as e:
                    print(f"Skip stream {idx}: {e}")
    return sorted(candidates, reverse=True)


if __name__ == "__main__":
    pdf_file = sys.argv[1]
    public_dir = sys.argv[2]
    os.makedirs(public_dir, exist_ok=True)
    imgs = extract_pdf_images(pdf_file, public_dir)
    for area, path, w, h in imgs:
        print(f"Extracted {path} ({w}x{h})")
