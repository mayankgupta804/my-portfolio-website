import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mayankgupta.space"),
  title: "Mayank Gupta | Senior Distributed Systems Engineer (Go • Elixir)",
  description:
    "Portfolio of Mayank Gupta — Senior Software Engineer with 9+ years of experience architecting high-throughput distributed systems and microservices in Go & Elixir on Linux.",
  keywords: [
    "Mayank Gupta",
    "Senior Software Engineer",
    "Distributed Systems",
    "Go",
    "Golang",
    "Elixir",
    "Microservices",
    "Kubernetes",
    "Kafka",
    "Bangalore",
    "mayankgupta.space",
  ],
  openGraph: {
    title: "Mayank Gupta | Senior Distributed Systems Engineer",
    description:
      "Architecting low-latency distributed systems & microservices in Go and Elixir. Beyond the IDE: Mountain hiking & travel, strength & endurance training, rock/metal guitar, and hands-on DIY.",
    url: "https://mayankgupta.space",
    siteName: "Mayank Gupta Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 500,
        height: 500,
        alt: "Mayank Gupta",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayank Gupta | Senior Distributed Systems Engineer",
    description:
      "9+ years scaling Go & Elixir distributed systems. Mountain hiking, fitness, rock & metal guitar, and DIY.",
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Orbitron:wght@500;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
