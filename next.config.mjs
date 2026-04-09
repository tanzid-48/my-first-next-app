/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
   
  // https://images.unsplash.com/photo-1775716021167-e8133881470a

   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/photo-1775716021167-e8133881470a/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
