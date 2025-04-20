import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plutonia Global Logistics Ltd",
  description: "AI-Powered Global Sourcing & Logistics Partner",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-light text-gray-900 font-body">{children}</body>
    </html>
  );
}