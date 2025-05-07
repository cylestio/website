/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['extraordinary-daifuku-3b51b1.netlify.app'],
  },
  // Configure experimental features for better hydration handling
  experimental: {
    // Ensure proper hydration in the App Router
    appDir: true,
  },
}

export default nextConfig; 