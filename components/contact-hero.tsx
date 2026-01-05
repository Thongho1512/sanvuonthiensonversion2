"use client"

import { motion } from "framer-motion"
import { Phone, MessageCircle, Clock } from "lucide-react"
import Link from "next/link"

export function ContactHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/beautiful-zen-garden-with-morning-mist-and-sunligh.jpg" 
          alt="Sân vườn Thiên Sơn" 
          className="w-full h-full object-cover brightness-[0.35]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/25 border border-emerald-400/40 text-sm text-emerald-300 font-semibold backdrop-blur-md shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-lg shadow-emerald-400/50" />
              Sẵn sàng hỗ trợ 24/7
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance"
            style={{
              color: '#ffffff',
              textShadow: '0 4px 12px rgba(0, 0, 0, 0.8), 0 2px 4px rgba(0, 0, 0, 0.9)'
            }}
          >
            Hãy bắt đầu <span className="text-emerald-400" style={{
              textShadow: '0 4px 12px rgba(16, 185, 129, 0.5), 0 2px 4px rgba(0, 0, 0, 0.9)'
            }}>câu chuyện sân vườn</span> của bạn
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg leading-relaxed"
            style={{
              color: '#e5e7eb',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.9), 0 1px 3px rgba(0, 0, 0, 1)'
            }}
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
              href="tel:0907997759"
              className="group flex items-center gap-3 px-6 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl transition-all shadow-xl shadow-emerald-900/30 hover:shadow-2xl hover:shadow-emerald-900/40"
            >
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Phone className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="text-sm text-white/90 font-medium">Gọi ngay</p>
                <p className="font-bold text-lg">0907 99 77 59</p>
              </div>
            </Link>

            <Link
              href="https://zalo.me/0907997759"
              target="_blank"
              className="group flex items-center gap-3 px-6 py-4 bg-gray-800/60 backdrop-blur-md border-2 border-gray-600/50 rounded-xl hover:bg-gray-700/70 hover:border-blue-400/60 transition-all shadow-xl"
            >
              <div className="w-10 h-10 rounded-full bg-blue-500/30 flex items-center justify-center border border-blue-400/40">
                <MessageCircle className="h-5 w-5 text-blue-300" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-200 font-medium">Chat Zalo</p>
                <p className="font-bold text-white">Tư vấn nhanh</p>
              </div>
            </Link>

            <div className="flex items-center gap-3 px-6 py-4 bg-gray-800/60 backdrop-blur-md border-2 border-gray-600/50 rounded-xl shadow-xl">
              <div className="w-10 h-10 rounded-full bg-amber-500/30 flex items-center justify-center border border-amber-400/40">
                <Clock className="h-5 w-5 text-amber-300" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-200 font-medium">Phản hồi trong</p>
                <p className="font-bold text-white">Dưới 2 giờ</p>
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
          <div className="w-32 h-32 rounded-full bg-emerald-600/30 backdrop-blur-md border-2 border-emerald-400/40 flex items-center justify-center shadow-2xl">
            <div className="text-center">
              <p className="text-3xl font-bold text-white" style={{
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)'
              }}>50+</p>
              <p className="text-xs text-gray-200 font-medium" style={{
                textShadow: '0 1px 4px rgba(0, 0, 0, 0.8)'
              }}>Dự án hoàn thành</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}