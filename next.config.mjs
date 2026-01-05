/** @type {import('next').NextConfig} */
const nextConfig = {
  // Bắt buộc cho static export
  output: 'export',
  
  // 🔥 QUAN TRỌNG: Phải set TRUE để tạo index.html cho root route
  trailingSlash: true,

  // Bắt buộc: Next.js Image Optimization không hoạt động trên Cloudflare Pages
  images: {
    unoptimized: true,
  },

  // Giữ lại nếu bạn muốn bỏ qua lỗi TypeScript khi build
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Đảm bảo ESLint không block build
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig