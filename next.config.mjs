/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // basePath is set for GitHub Pages subpath hosting; remove for root-domain/Vercel deploys
  basePath: '/pediatric-health-app',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig