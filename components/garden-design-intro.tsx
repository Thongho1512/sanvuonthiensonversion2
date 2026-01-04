"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

export function GardenDesignIntro() {
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
              Tiểu Cảnh Sân Vườn Là Gì?
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Thiết kế tiểu cảnh sân vườn là nghệ thuật tạo ra không gian ngoại trời hài hòa và 
                thú vị bằng cách sắp xếp cây cỏ, hoa lá, đá, nước, và các chi tiết trang trí theo 
                cách độc đáo và sáng tạo.
              </p>
              <p>
                Nó không chỉ là việc tạo ra một môi trường sống đẹp mắt mà còn mang lại nhiều lợi ích khác. 
                Thiết kế tiểu cảnh sân vườn tạo ra không gian thư giãn, giúp tạo nên cảm giác yên bình 
                và tận hưởng tự nhiên.
              </p>
              <p>
                Điều quan trọng là nó giúp kết nối con người với thiên nhiên, tạo nên môi trường sống 
                tốt cho tâm hồn và sức khỏe.
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
              <img
                src="/luxury-villa-garden-design-with-pathway-fountain-a.jpg"
                alt="Tiểu cảnh sân vườn đẹp"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-8 -left-8 bg-card border border-border p-8 rounded-xl shadow-2xl hidden lg:block">
              <p className="text-5xl lg:text-6xl font-bold text-primary">15+</p>
              <p className="mt-2 text-lg text-muted-foreground">Năm kinh nghiệm</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}