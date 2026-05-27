import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shopify Photo Audit — Auto-detect missing product photos killing conversions",
  description: "Scan your Shopify store to identify products with missing, low-quality, or non-compliant photos that hurt conversion rates."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6552d846-fdbe-4238-a830-6c905d1b0b74"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
