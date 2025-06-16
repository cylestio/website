import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const sora = Sora({
  subsets: ["latin"],
  weight: ['400', '600', '700'],
  variable: '--font-sora',
});

export const metadata: Metadata = {
  title: "Cylestio | Agentic AI Runtime Protection",
  description: "The future is agentic. Security must be too. Cylestio is defining the DevSecAgentOps paradigm, building the future of AI cybersecurity.",
  openGraph: {
    title: "Cylestio | Agentic AI Runtime Protection",
    description: "The future is agentic. Security must be too. Cylestio is defining the DevSecAgentOps paradigm, building the future of AI cybersecurity.",
    url: "https://cylestio.com", // Replace with actual URL when live
    siteName: "Cylestio",
    images: [
      {
        url: "/og-image.png", // Make sure to create this image
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cylestio | Agentic AI Runtime Protection",
    description: "The future is agentic. Security must be too. Cylestio is defining the DevSecAgentOps paradigm, building the future of AI cybersecurity.",
    images: ["/og-image.png"], // Make sure to create this image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        
        {/* Google Analytics */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-E54G06JMKM" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E54G06JMKM');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${sora.variable} font-sans`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
} 