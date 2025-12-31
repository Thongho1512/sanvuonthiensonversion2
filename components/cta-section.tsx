"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src="/beautiful-zen-garden-sunset-golden-hour-with-water.jpg" alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
            <p className="mt-6 text-lg text-card/80 leading-relaxed">
              Liên hệ ngay để được tư vấn miễn phí và nhận báo giá chi tiết cho dự án của bạn.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-base">
                <Link href="/lien-he">
                  Nhận tư vấn ngay
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-card/30 text-card hover:bg-card/10 text-base bg-transparent"
              >
                <a href="tel:0901234567">
                  <Phone className="mr-2 h-5 w-5" />
                  090 123 4567
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-lg p-8 lg:p-10"
          >
            <h3 className="text-2xl font-semibold text-card-foreground">Gửi yêu cầu tư vấn</h3>
            <form className="mt-6 space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Họ và tên"
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Số điện thoại"
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <select
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Chọn dịch vụ quan tâm
                  </option>
                  <option value="ho-ca-koi">Hồ cá Koi</option>
                  <option value="hon-non-bo">Hòn non bộ</option>
                  <option value="san-vuon">Thiết kế sân vườn</option>
                </select>
              </div>
              <div>
                <textarea
                  rows={3}
                  placeholder="Mô tả yêu cầu của bạn"
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Mail className="mr-2 h-4 w-4" />
                Gửi yêu cầu
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
