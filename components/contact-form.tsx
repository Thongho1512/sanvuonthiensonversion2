"use client"

import { motion } from "framer-motion"
import { Send, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactForm() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Content */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-sm tracking-widest uppercase text-accent">Liên hệ với chúng tôi</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-semibold text-foreground tracking-tight text-balance">
              Sẵn sàng biến ý tưởng thành hiện thực?
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Điền thông tin bên dưới để được đội ngũ chuyên gia của chúng tôi tư vấn miễn phí. Chúng tôi sẽ liên hệ lại
              trong vòng 24 giờ.
            </p>

            {/* Quick Contact */}
            <div className="mt-10 space-y-6">
              <a href="tel:0901234567" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Hotline</p>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    090 123 4567
                  </p>
                </div>
              </a>
              <a href="mailto:info@thienson.vn" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    info@thienson.vn
                  </p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Văn phòng</p>
                  <p className="font-semibold text-foreground">123 Đường ABC, Quận 1, TP.HCM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="bg-card border border-border rounded-xl p-8 lg:p-10 shadow-sm">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Họ và tên *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
                    placeholder="Nguyễn Văn A"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Số điện thoại *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
                    placeholder="090 123 4567"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
                  placeholder="email@example.com"
                />
              </div>

              <div className="mt-6">
                <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                  Dịch vụ quan tâm *
                </label>
                <select
                  id="service"
                  required
                  className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Chọn dịch vụ
                  </option>
                  <option value="ho-ca-koi">Thi công Hồ cá Koi</option>
                  <option value="hon-non-bo">Hòn non bộ & Tiểu cảnh</option>
                  <option value="thiet-ke-san-vuon">Thiết kế sân vườn</option>
                  <option value="khac">Khác</option>
                </select>
              </div>

              <div className="mt-6">
                <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                  Ngân sách dự kiến
                </label>
                <select
                  id="budget"
                  className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Chọn ngân sách
                  </option>
                  <option value="under-100">Dưới 100 triệu</option>
                  <option value="100-300">100 - 300 triệu</option>
                  <option value="300-500">300 - 500 triệu</option>
                  <option value="500-1000">500 triệu - 1 tỷ</option>
                  <option value="over-1000">Trên 1 tỷ</option>
                </select>
              </div>

              <div className="mt-6">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mô tả yêu cầu
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none text-foreground placeholder:text-muted-foreground"
                  placeholder="Mô tả chi tiết về dự án của bạn: diện tích, vị trí, phong cách mong muốn..."
                />
              </div>

              <Button
                type="submit"
                className="w-full mt-8 bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-base"
              >
                <Send className="mr-2 h-5 w-5" />
                Gửi yêu cầu tư vấn
              </Button>

              <p className="mt-4 text-sm text-muted-foreground text-center">
                Bằng việc gửi form, bạn đồng ý với{" "}
                <a href="/chinh-sach-bao-mat" className="text-primary hover:underline">
                  chính sách bảo mật
                </a>{" "}
                của chúng tôi.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
