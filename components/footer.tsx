"use client"

import Link from "next/link"
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Clock } from "lucide-react"

const services = [
  { name: "Hồ cá Koi", href: "/dich-vu/ho-ca-koi" },
  { name: "Hòn non bộ", href: "/dich-vu/hon-non-bo" },
  { name: "Thiết kế sân vườn", href: "/dich-vu/thiet-ke-san-vuon" },
  { name: "Thi công cảnh quan", href: "/dich-vu/thi-cong-canh-quan" },
]

const company = [
  { name: "Về chúng tôi", href: "/ve-chung-toi" },
  { name: "Dự án", href: "/du-an" },
  { name: "Blog", href: "/blog" },
  { name: "Liên hệ", href: "/lien-he" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 lg:py-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-semibold text-xl">TS</span>
              </div>
              <div>
                <p className="text-xl font-semibold tracking-wide text-background">Thiên Sơn</p>
                <p className="text-xs tracking-widest uppercase text-background/60">Sân Vườn</p>
              </div>
            </Link>
            <p className="mt-6 text-background/70 leading-relaxed">
              Chuyên thiết kế và thi công sân vườn, hồ cá Koi, hòn non bộ cao cấp với hơn 15 năm kinh nghiệm.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-background">Dịch vụ</h3>
            <ul className="mt-6 space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-background/70 hover:text-accent transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-background">Công ty</h3>
            <ul className="mt-6 space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-background/70 hover:text-accent transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-background">Liên hệ</h3>
            <ul className="mt-6 space-y-4">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-background/70">123 Đường ABC, Quận 1, TP. Hồ Chí Minh</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="tel:0901234567" className="text-background/70 hover:text-accent transition-colors">
                  090 123 4567
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="mailto:info@thienson.vn" className="text-background/70 hover:text-accent transition-colors">
                  info@thienson.vn
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-background/70">8:00 - 18:00, Thứ 2 - Thứ 7</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">© 2025 Sân Vườn Thiên Sơn. Tất cả quyền được bảo lưu.</p>
          <div className="flex gap-6 text-sm text-background/60">
            <Link href="/chinh-sach-bao-mat" className="hover:text-accent transition-colors">
              Chính sách bảo mật
            </Link>
            <Link href="/dieu-khoan" className="hover:text-accent transition-colors">
              Điều khoản sử dụng
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
