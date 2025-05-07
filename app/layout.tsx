import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cylestio - Secure Your AI Workforce",
  description: "Secure Your Organization's AI Workforce from Development to Production, Seamlessly",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
} 