/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'admin.give-gk.tobiastoklund.dk',
          },
        ],
        destination: '/admin/:path*',
      },
    ]
  }
}

module.exports = nextConfig 