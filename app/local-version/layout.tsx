import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Cylestio - Secure Your AI Workforce",
  description: "Secure Your Organization's AI Workforce from Development to Production, Seamlessly",
};

export default function LocalVersionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div suppressHydrationWarning>
      {children}
    </div>
  );
} 