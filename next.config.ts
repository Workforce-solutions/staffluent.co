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
    compiler: {
        styledComponents: true,
    }
  }
  
  export default config