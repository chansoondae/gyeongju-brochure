import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gyeongju.museum.go.kr',
        pathname: '/_prog/bbs/**',
      },
    ],
  },
}

export default nextConfig
