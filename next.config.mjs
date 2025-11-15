/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Remove ignoreBuildErrors to catch TypeScript issues
    ignoreBuildErrors: false,
  },
  images: {
    // Enable image optimization for better performance
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
}

export default nextConfig
