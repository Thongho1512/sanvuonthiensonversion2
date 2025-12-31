"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight, Fish, Mountain, TreePalm } from "lucide-react"

const services = [
  {
    icon: Fish,
    title: "Thi Công Hồ Cá Koi",
    description:
      "Thiết kế và thi công hồ cá Koi theo tiêu chuẩn Nhật Bản. Hệ thống lọc nước tiên tiến, đảm bảo môi trường sống lý tưởng cho cá Koi.",
    image: "/beautiful-japanese-koi-pond-with-colorful-koi-fish.jpg",
    href: "/dich-vu/ho-ca-koi",
    features: ["Thiết kế chuẩn Nhật Bản", "Hệ thống lọc đa tầng", "Bảo hành 5 năm", "Bảo trì trọn đời"],
  },
  {
    icon: Mountain,
    title: "Hòn Non Bộ & Tiểu Cảnh",
    description:
      "Tạo tác hòn non bộ, tiểu cảnh nghệ thuật mang vẻ đẹp thiên nhiên thu nhỏ. Kết hợp phong thủy và thẩm mỹ hiện đại.",
    image: "/elegant-rock-garden-bonsai-miniature-landscape-wit.jpg",
    href: "/dich-vu/hon-non-bo",
    features: ["Tư vấn phong thủy", "Đá tự nhiên cao cấp", "Nghệ nhân lành nghề", "Thiết kế độc quyền"],
  },
  {
    icon: TreePalm,
    title: "Thiết Kế Sân Vườn",
    description:
      "Quy hoạch và thiết kế sân vườn biệt thự, resort với phong cách hiện đại kết hợp thiên nhiên. Tối ưu không gian và công năng.",
    image: "/luxury-villa-garden-design-with-pathway-fountain-a.jpg",
    href: "/dich-vu/thiet-ke-san-vuon",
    features: ["Thiết kế 3D chi tiết", "Cây xanh nhập khẩu", "Hệ thống tưới tự động", "Chiếu sáng cảnh quan"],
  },
]

export function ServicesOverview() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm tracking-widest uppercase text-accent">Dịch vụ của chúng tôi</span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-semibold text-foreground tracking-tight">
            Giải pháp toàn diện cho không gian xanh
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Với hơn 15 năm kinh nghiệm, chúng tôi mang đến các dịch vụ thiết kế và thi công sân vườn đẳng cấp, đáp ứng
            mọi nhu cầu của khách hàng.
          </p>
        </motion.div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <Link href={service.href} className="group block">
                <div
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  {/* Image */}
                  <div className={`relative overflow-hidden rounded-lg ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 mb-6">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{service.description}</p>

                    <ul className="mt-6 grid grid-cols-2 gap-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex items-center gap-2 text-primary font-medium">
                      <span>Tìm hiểu thêm</span>
                      <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
