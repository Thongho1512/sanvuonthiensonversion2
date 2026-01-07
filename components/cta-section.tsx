"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/21.jpg" 
          alt="Background" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-card tracking-tight text-balance">
              Sẵn sàng biến ý tưởng thành hiện thực?
            </h2>
            <p className="mt-6 text-lg text-card/80 leading-relaxed max-w-2xl mx-auto">
              Liên hệ ngay để được tư vấn miễn phí và nhận báo giá chi tiết cho dự án của bạn.
            </p>

            {/* Contact Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-base h-14 px-8"
              >
                <Link href="/lien-he">
                  Xem thông tin liên hệ
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-card/30 text-card hover:bg-card/10 text-base bg-transparent h-14 px-8"
              >
                <a href="tel:0907997759">
                  <Phone className="mr-2 h-5 w-5" />
                  0907 99 77 59
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-card/30 text-card hover:bg-card/10 text-base bg-transparent h-14 px-8"
              >
                <a href="https://zalo.me/0907997759" target="_blank" rel="noopener noreferrer">
                  <img src="/zalo-logo.png" alt="Zalo" className="mr-2 h-5 w-5" />
                  Chat Zalo
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: "15+", label: "Năm kinh nghiệm" },
              { value: "50+", label: "Dự án hoàn thành" },
              { value: "100%", label: "Khách hài lòng" },
              { value: "24/7", label: "Hỗ trợ tư vấn" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl sm:text-4xl font-semibold text-accent">{stat.value}</p>
                <p className="mt-2 text-sm text-card/70">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 p-6 bg-card/10 backdrop-blur-sm border border-card/20 rounded-2xl inline-block"
          >
            <p className="text-card/90 text-sm">
              <span className="font-semibold">Phản hồi nhanh trong 2 giờ</span> · 
              Tư vấn miễn phí tại nhà · 
              Bảo hành 10 năm
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}