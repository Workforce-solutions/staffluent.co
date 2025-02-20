/** @type {import('next').NextConfig} */
const config = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    assetPrefix: '/',
    trailingSlash: true,  // Add this
    basePath: '',         // Add this
};

export default config;