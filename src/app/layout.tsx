import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VCISO | Cywreck",
  description: "A V-CISO (Virtual Chief Information Security Officer) is an outsourced security executive who provides strategic guidance, risk management, and oversight of an organization's cybersecurity program on a part-time or contract basis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/icon.jpeg" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
