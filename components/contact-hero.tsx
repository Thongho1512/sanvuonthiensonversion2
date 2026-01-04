"use client"

import { motion } from "framer-motion"
import { Phone, MessageCircle, Clock } from "lucide-react"
import Link from "next/link"

export function ContactHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/beautiful-zen-garden-with-morning-mist-and-sunligh.jpg" alt="Sân vườn Thiên Sơn" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Sẵn sàng hỗ trợ 24/7
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight text-balance"
          >
            Hãy bắt đầu <span className="text-primary">câu chuyện sân vườn</span> của bạn
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground leading-relaxed"
          >
            Đội ngũ chuyên gia với hơn 15 năm kinh nghiệm sẵn sàng lắng nghe và hiện thực hóa không gian xanh trong mơ
            của bạn.
          </motion.p>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="tel:0901234567"
              className="group flex items-center gap-3 px-6 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
            >
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <Phone className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="text-sm text-primary-foreground/80">Gọi ngay</p>
                <p className="font-semibold">090 123 4567</p>
              </div>
            </Link>

            <Link
              href="https://zalo.me/0901234567"
              target="_blank"
              className="group flex items-center gap-3 px-6 py-4 bg-card border border-border rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-blue-500" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Chat Zalo</p>
                <p className="font-semibold text-foreground">Tư vấn nhanh</p>
              </div>
            </Link>

            <div className="flex items-center gap-3 px-6 py-4 bg-card border border-border rounded-xl">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Clock className="h-5 w-5 text-accent" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Phản hồi trong</p>
                <p className="font-semibold text-foreground">Dưới 2 giờ</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="hidden lg:block absolute right-10 bottom-10 z-10"
      >
        <div className="relative">
          <div className="w-32 h-32 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">50+</p>
              <p className="text-xs text-muted-foreground">Dự án hoàn thành</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
