"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

export function HonNonBoIntro() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/20 mb-8">
              <Sparkles className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight mb-8">
              Thi Công Hòn Non Bộ
            </h2>
            <div className="space-y-10 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-foreground leading-relaxed font-medium">
  <p>
    Bạn đang tìm kiếm sự hài hòa và vẻ đẹp tự nhiên trong không gian sân vườn của mình? 
    Thi công hòn non bộ và thiết kế non bộ là lựa chọn lý tưởng để tạo nên một tiểu cảnh 
    hài hòa, hợp phong thủy và đẹp mắt.
  </p>
  <p>
    Chúng tôi không chỉ là những người thực hiện công việc, mà còn là những người đồng hành, 
    hiểu rõ về văn hóa phong thủy và nghệ thuật thiết kế. Sau khi chúng tôi thăm quan vị trí 
    và hiểu rõ quang cảnh xung quanh, đội ngũ thiết kế của chúng tôi sẽ tạo ra hình ảnh hòn 
    non bộ 3D để bạn có cái nhìn trực quan nhất về kết quả cuối cùng.
  </p>
</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <video
                src="/hon-non-bo-waterfall.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="absolute -bottom-8 -left-8 bg-card border border-border p-8 rounded-xl shadow-2xl hidden lg:block">
              <p className="text-5xl lg:text-6xl font-bold text-primary">3D</p>
              <p className="mt-2 text-lg text-muted-foreground">Thiết kế trực quan</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}