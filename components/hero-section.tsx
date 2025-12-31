"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/beautiful-koi-pond-garden-landscape-with-rocks-and.jpg"
          alt="Sân vườn Thiên Sơn"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-2 mb-6 text-sm tracking-widest uppercase text-card bg-card/10 rounded-full border border-card/30 text-shadow-sm">
              Chuyên gia sân vườn cao cấp
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-card leading-tight tracking-tight text-balance text-shadow-lg"
          >
            Kiến tạo không gian
            <br />
            <span className="text-accent text-shadow-lg">xanh hoàn mỹ</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-card/90 max-w-xl leading-relaxed text-shadow"
          >
            Thiết kế và thi công hồ cá Koi, hòn non bộ, tiểu cảnh sân vườn với hơn 15 năm kinh nghiệm và đội ngũ chuyên
            nghiệp hàng đầu.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8">
              <Link href="/lien-he">
                Nhận tư vấn miễn phí
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-card/30 text-card hover:bg-card/10 text-base px-8 bg-transparent"
            >
              <Link href="/du-an">
                <Play className="mr-2 h-5 w-5" />
                Xem dự án
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "15+", label: "Năm kinh nghiệm" },
            { value: "500+", label: "Dự án hoàn thành" },
            { value: "100%", label: "Khách hàng hài lòng" },
            { value: "50+", label: "Đội ngũ chuyên gia" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl sm:text-4xl font-semibold text-accent text-shadow-lg">{stat.value}</p>
              <p className="mt-2 text-sm text-card/80 text-shadow-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-card/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-card/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
