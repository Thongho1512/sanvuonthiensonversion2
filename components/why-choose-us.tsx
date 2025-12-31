"use client"

import { motion } from "framer-motion"
import { Award, Users, Clock, Shield } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Chất lượng hàng đầu",
    description: "Cam kết sử dụng vật liệu cao cấp và kỹ thuật thi công chuẩn quốc tế.",
  },
  {
    icon: Users,
    title: "Đội ngũ chuyên nghiệp",
    description: "Hơn 50 kỹ sư và nghệ nhân với nhiều năm kinh nghiệm trong ngành.",
  },
  {
    icon: Clock,
    title: "Đúng tiến độ",
    description: "Cam kết hoàn thành công trình đúng thời gian thỏa thuận với khách hàng.",
  },
  {
    icon: Shield,
    title: "Bảo hành dài hạn",
    description: "Chế độ bảo hành lên đến 5 năm và hỗ trợ bảo trì trọn đời.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm tracking-widest uppercase text-accent">Tại sao chọn chúng tôi</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
              Đối tác đáng tin cậy cho không gian xanh của bạn
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
              Với hơn 15 năm kinh nghiệm, chúng tôi tự hào mang đến những công trình sân vườn đẳng cấp, kết hợp hoàn hảo
              giữa nghệ thuật và kỹ thuật.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="mt-1 text-sm text-primary-foreground/70">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src="/professional-landscaper-working-on-koi-pond-constr.jpg"
                alt="Đội ngũ thi công chuyên nghiệp"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-card text-card-foreground p-6 rounded-lg shadow-xl max-w-xs hidden lg:block">
              <p className="text-4xl font-semibold text-primary">500+</p>
              <p className="mt-2 text-muted-foreground">Dự án hoàn thành xuất sắc trên toàn quốc</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
