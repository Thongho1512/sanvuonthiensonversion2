"use client"

import { motion } from "framer-motion"
import { Sparkles, TrendingUp, Heart, Wind } from "lucide-react"

const benefits = [
  {
    icon: Sparkles,
    title: "Gia tăng tính thẩm mỹ cho ngôi nhà",
    description: "Hồ cá Koi là điểm nhấn quan trọng trong thiết kế cảnh quan sân vườn, mang đến vẻ đẹp tĩnh lặng và sự hài hòa.",
  },
  {
    icon: TrendingUp,
    title: "Thể hiện sự khác biệt, đẳng cấp",
    description: "Cá Koi xuất phát từ Nhật Bản, là biểu tượng của sự may mắn, phú quý và có tuổi thọ cao.",
  },
  {
    icon: Wind,
    title: "Không khí trong lành, nâng cao sức khỏe",
    description: "Hồ cá Koi đem lại cảm giác thư thái và yên bình, kết nối con người với thiên nhiên.",
  },
  {
    icon: Heart,
    title: "Giá trị tinh thần to lớn",
    description: "Tận hưởng sự thanh lọc tinh thần và vẻ đẹp vĩnh cửu trong không gian sống của bạn.",
  },
]

export function KoiPondBenefits() {
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
  Lý do nên chọn
</h3>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">
            Tại sao hồ cá Koi lại được ưa chuộng tại Việt Nam?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hồ cá Koi không chỉ là nét đặc sắc thẩm mỹ, mà còn mang giá trị tinh thần to lớn, 
            là điểm nhấn nổi bật tạo nên vẻ đẹp cho khu vườn của bạn.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}