/** @type {import('next').NextConfig} */
const nextConfig = {
  // Bắt buộc cho static export: xuất toàn bộ site thành HTML/CSS/JS tĩnh
  output: 'export',

  // Giữ lại nếu bạn muốn bỏ qua lỗi TypeScript khi build (không khuyến khích production)
  typescript: {
    ignoreBuildErrors: true,
  },

  // Bắt buộc trên Cloudflare Pages: Next.js Image Optimization không hoạt động
  // (Bạn có thể dùng Cloudflare Polish hoặc Cloudflare Images để optimize riêng)
  images: {
    unoptimized: true,
  },

  // Tùy chọn: Đặt base path nếu deploy dưới subfolder (thường không cần)
  // basePath: '/your-subpath',

  // Tùy chọn: Trailing slash để tránh lỗi 404 trên một số route
  trailingSlash: true,
}

export default nextConfig