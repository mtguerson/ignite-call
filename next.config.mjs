/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
