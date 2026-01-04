"use client"

import { motion } from "framer-motion"

export function KoiPondShapes() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Tiêu đề phần - lớn và nổi bật */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h3 className="text-3xl sm:text-4xl font-semibold text-accent tracking-tight">
Hình dáng hồ cá koi</h3> 
          <p className="mt-8 text-xl lg:text-2xl text-muted-foreground max-w-5xl mx-auto leading-relaxed px-4">
            Có rất nhiều mẫu hồ cá Koi đẹp với các hình dáng khác nhau. Tùy thuộc vào không gian, sở thích của gia chủ mà các kiến trúc sư có thể sáng tạo ra các hình dáng phù hợp. 
            Để đảm bảo tính thẩm mỹ và sự độc đáo, bạn nên được các chuyên gia tư vấn về mẫu và lên ý tưởng bản vẽ 3D. 
            Điều này sẽ giúp bạn có cái nhìn thực tế hơn và hình dung được không gian chuẩn nhất trước khi thi công.
          </p>
        </motion.div>

        {/* Chỉ một ảnh duy nhất - kích thước vừa phải, centered */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-5xl w-full">
            <img
              src="/hinh-dang-thiet-ke-ho-ca-Koi.jpeg"
              alt="Tổng hợp các mẫu thiết kế hồ cá Koi hiện đại với nhiều hình dáng đa dạng: chữ nhật, bầu dục, hình thận, tự nhiên, hiện đại..."
              className="w-full h-auto object-cover max-h-[600px] lg:max-h-[700px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
              <p className="text-white text-lg lg:text-2xl font-medium">
                Từ hình chữ nhật cổ điển đến thiết kế tự do hiện đại – Thiên Sơn Landscape đều có thể thực hiện
              </p>
            </div>
          </div>
        </motion.div>

        {/* Lời khuyên cuối phần */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto">
            <strong>Lời khuyên từ Thiên Sơn:</strong> Hãy để chúng tôi thiết kế bản vẽ 3D miễn phí để bạn hình dung chính xác hồ Koi tương lai trong không gian nhà mình trước khi quyết định thi công.
          </p>
        </motion.div>
      </div>
    </section>
  )
}