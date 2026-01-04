"use client"

import { motion } from "framer-motion"
import { Droplet, Ruler, Shapes, CheckCircle2 } from "lucide-react"

const standards = [
  {
    icon: Droplet,
    title: "Chất lượng nước",
    description: "Nước trong hồ chất lượng tốt là điều kiện quan trọng để cá koi sinh trưởng và phát triển khỏe mạnh. Nước cần phải trong, không vẩn đục, ít rêu và không mang mầm bệnh.",
    highlight: "Độ pH lý tưởng: 7 - 7.5",
    color: "bg-blue-500/10",
    iconColor: "text-blue-500",
  },
  {
    icon: Ruler,
    title: "Kích thước hồ cá koi tiêu chuẩn",
    description: "Kích thước hồ phù hợp là yếu tố quan trọng để cá Koi có không gian bơi lội thoải mái và phát triển khỏe mạnh.",
    specs: [
      "Chiều dài tối thiểu: 2m",
      "Chiều rộng tối thiểu: 0.8 - 1m",
      "Độ sâu cá nhỏ: tối thiểu 0.6m",
      "Độ sâu cá lớn: 0.8 - 1.6m",
    ],
    color: "bg-emerald-500/10",
    iconColor: "text-emerald-500",
  },
  {
    icon: Shapes,
    title: "Hình dáng hồ cá koi",
    description: "Có rất nhiều mẫu hồ cá koi đẹp với các hình dáng khác nhau. Tùy thuộc vào không gian, sở thích của gia chủ mà các kiến trúc sư có thể sáng tạo ra các hình dáng phù hợp.",
    highlight: "Thiết kế 3D trước khi thi công",
    color: "bg-purple-500/10",
    iconColor: "text-purple-500",
  },
]

export function KoiPondStandards() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
<h3 className="text-3xl sm:text-4xl font-semibold text-accent tracking-tight">
  Tiêu chuẩn thi công
</h3>          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">
            Tiêu chí thiết kế thi công hồ cá Koi đạt chuẩn
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Đảm bảo các tiêu chuẩn kỹ thuật để tạo ra môi trường sống lý tưởng cho đàn cá Koi của bạn
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {standards.map((standard, index) => {
            const Icon = standard.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group"
              >
                <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 h-full">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${standard.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-8 w-8 ${standard.iconColor}`} />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {standard.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {standard.description}
                  </p>

                  {standard.specs && (
                    <ul className="space-y-2 mt-6">
                      {standard.specs.map((spec, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {standard.highlight && (
                    <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <p className="text-sm font-semibold text-primary">
                        ✓ {standard.highlight}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}