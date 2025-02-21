/** @type {import('next').NextConfig} */
const config = {
    images: {
      unoptimized: true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',
        },
      ],
    },
    assetPrefix: '/',
  }
  
  export default config