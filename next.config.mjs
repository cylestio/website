/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['extraordinary-daifuku-3b51b1.netlify.app'],
  },
  // Updated configuration for Next.js 14+
  experimental: {
    // App Router is now the default in Next.js 14+
  },
}

export default nextConfig; 