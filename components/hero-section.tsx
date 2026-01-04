"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const stats = [
    { value: "15+", label: "Năm kinh nghiệm" },
    { value: "50+", label: "Dự án hoàn thành" },
    { value: "100%", label: "Khách hàng hài lòng" },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/beautiful-koi-pond-garden-landscape-with-rocks-and.jpg"
          alt="Sân vườn Thiên Sơn - Hồ cá Koi cao cấp"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" /> {/* Overlay tối để chữ nổi bật */}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-6 py-3 mb-8 text-sm tracking-widest uppercase text-card bg-card/20 rounded-full border border-card/40 backdrop-blur-sm font-medium">
              Chuyên gia sân vườn cao cấp
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-card leading-tight tracking-tight text-balance drop-shadow-2xl"
          >
            Kiến tạo không gian
            <br />
            <span className="text-accent drop-shadow-2xl">xanh hoàn mỹ</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-lg sm:text-xl text-card/90 max-w-2xl leading-relaxed drop-shadow-md"
          >
            Thiết kế và thi công hồ cá Koi, hòn non bộ, tiểu cảnh sân vườn với hơn 15 năm kinh nghiệm và đội ngũ chuyên nghiệp hàng đầu.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10"
          >
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-card/50 text-card hover:bg-card/20 hover:border-card text-lg px-10 py-6 bg-card/10 backdrop-blur-sm transition-all duration-300"
            >
              <Link href="/du-an" className="flex items-center gap-3">
                <Play className="h-6 w-6" />
                Xem dự án
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Stats - Bố trí lại đẹp mắt, căn giữa, 3 ô đều nhau */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-24 flex flex-col items-center"
        >
          <div className="flex flex-wrap justify-center gap-12 lg:gap-20 xl:gap-28">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <p className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-accent drop-shadow-2xl">
                  {stat.value}
                </p>
                <p className="mt-4 text-lg sm:text-xl text-card/90 font-medium tracking-wide drop-shadow-md">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-7 h-12 border-2 border-card/60 rounded-full flex justify-center pt-3"
        >
          <div className="w-2 h-4 bg-card/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}