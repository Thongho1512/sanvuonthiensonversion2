"use client"

import { motion } from "framer-motion"
import * as LucideIcons from "lucide-react"

const values = [
  {
    icon: "Heart",
    title: "Tâm huyết",
    description: "Mỗi công trình là một tác phẩm nghệ thuật, được chăm chút từ những chi tiết nhỏ nhất.",
  },
  {
    icon: "Target",
    title: "Chuyên nghiệp",
    description: "Quy trình làm việc bài bản, đảm bảo tiến độ và chất lượng công trình.",
  },
  {
    icon: "Users",
    title: "Đồng hành",
    description: "Luôn lắng nghe và thấu hiểu nhu cầu khách hàng để mang đến giải pháp tối ưu.",
  },
  {
    icon: "Leaf",
    title: "Bền vững",
    description: "Cam kết sử dụng vật liệu thân thiện môi trường và phát triển bền vững.",
  },
]

export function AboutValues() {
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
          <span className="text-sm tracking-widest uppercase text-accent">Giá trị cốt lõi</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">
            Điều chúng tôi theo đuổi
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = LucideIcons[value.icon as keyof typeof LucideIcons] as React.ElementType
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 bg-card border border-border rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  {IconComponent && <IconComponent className="h-8 w-8 text-primary" />}
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">{value.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}