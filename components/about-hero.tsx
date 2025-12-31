"use client"

import { motion } from "framer-motion"

export function AboutHero() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-sm tracking-widest uppercase text-accent">Về chúng tôi</span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight text-balance">
              Kiến tạo không gian xanh từ năm 2009
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Thiên Sơn là đơn vị tiên phong trong lĩnh vực thiết kế và thi công sân vườn cao cấp tại Việt Nam. Với đam
              mê và tâm huyết, chúng tôi đã mang thiên nhiên vào hàng trăm ngôi nhà, biệt thự và resort trên khắp cả
              nước.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-xl overflow-hidden">
              <img
                src="/about-team-working-garden.jpg"
                alt="Đội ngũ Thiên Sơn"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl hidden lg:block">
              <p className="text-4xl font-semibold">15+</p>
              <p className="mt-1 text-primary-foreground/80">Năm kinh nghiệm</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
