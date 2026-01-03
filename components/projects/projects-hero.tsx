"use client"

import { motion } from "framer-motion"
import { Camera, Video, Briefcase } from "lucide-react"
import Image from "next/image"

export default function ProjectsHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20 bg-[#0d1f19]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/luxury-villa-koi-pond-at-night-with-lighting.jpg"
          alt="Background"
          fill
          className="object-cover opacity-200"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1f19]/95 via-[#0d1f19]/90 to-[#0d1f19]/95" />
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2Mmgtdi0yem0wIDhoMnYyaC0ydi0yem0wIDRoMnYyaC0ydi0yem0tNC0xNnYyaC0ydi0yaDF6bTAtNGgydjJoLTJ2LTJ6bTAgOGgydjJoLTJ2LTJ6bTAgNGgydjJoLTJ2LTJ6bS00LTE2djJoLTJ2LTJoMnptMC00aDJ2Mmgtdi0yem0wIDhoMnYyaC0ydi0yem0wIDRoMnYyaC0ydi0yem0tNC0xNnYyaC0ydi0yaDJ6bTAtNGgydjJoLTJ2LTJ6bTAgOGgydjJoLTJ2LTJ6bTAgNGgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')]" />
        </div>
      </div>

      <div className="relative z-20 container mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-white">Thư viện </span>
            <span className="text-[#00ff41]">Dự án</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300/90 mb-4 max-w-3xl mx-auto leading-relaxed">
            Khám phá bộ sưu tập các dự án tâm huyết đã hoàn thành. Từ hồ cá Koi chuẩn Nhật, 
            hòn non bộ phong thủy đến những quy trình thi công tỉ mỉ nhất.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-400 mb-12">
            <span>500+ dự án hoàn thành</span>
            <span className="w-1 h-1 rounded-full bg-gray-600" />
            <span>150+ video</span>
            <span className="w-1 h-1 rounded-full bg-gray-600" />
            <span>15+ năm kinh nghiệm</span>
          </div>

          
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-500/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gray-400/60 rounded-full animate-scroll-down" />
        </div>
      </div>
    </section>
  )
}