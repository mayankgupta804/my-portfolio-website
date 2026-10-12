# Directive: Portfolio Asset Extraction & Deployment (`mayankgupta.space`)

## Goal
Maintain, verify, and deploy Mayank Gupta's Next.js portfolio SPA to GitHub (`github.com/mayankgupta804`) and Vercel (`mayankgupta.space`).

## Deterministic Tools (`execution/`)
- `execution/extract_resume_assets.py`: Extracts full-resolution portrait images from the source resume PDF using Python stdlib and copies the latest resume PDF to `public/Mayank_Gupta_Resume.pdf`.

## Workflow
1. Run `python3 execution/extract_resume_assets.py <source_pdf> public/` when updating the resume PDF.
2. Verify build integrity via `npm run build`.
3. Push to GitHub (`mayankgupta804/my-portfolio-website`) and deploy via Vercel linked to `mayankgupta.space`.
