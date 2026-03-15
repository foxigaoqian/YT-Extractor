/** @type {import('next').NextConfig} */
const nextConfig = {
  // 确保 images 配置正确
  images: {
    unoptimized: true,
  },
  // 确保 output 配置正确
  output: 'standalone', // 或者不设置这个
};

export default nextConfig;
