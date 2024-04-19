/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcPlugins: [['@swc-jotai/react-refresh', {}]],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  transpilePackages: ['lucide-react'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*', // Match all domains and subdomains
      },
    ],
  },
}

export default nextConfig
