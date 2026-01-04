"use client"

import { motion } from "framer-motion"
import * as LucideIcons from "lucide-react"

const features = [
  {
    icon: "Award",
    title: "Chất lượng hàng đầu",
    description: "Cam kết sử dụng vật liệu cao cấp và kỹ thuật thi công chuẩn quốc tế.",
  },
  {
    icon: "Users",
    title: "Đội ngũ chuyên nghiệp",
    description: "Hơn 50 kỹ sư và nghệ nhân với nhiều năm kinh nghiệm trong ngành.",
  },
  {
    icon: "Clock",
    title: "Đúng tiến độ",
    description: "Cam kết hoàn thành công trình đúng thời gian thỏa thuận với khách hàng.",
  },
  {
    icon: "Shield",
    title: "Bảo hành dài hạn",
    description: "Chế độ bảo hành lên đến 5 năm và hỗ trợ bảo trì trọn đời.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Nội dung bên trái */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <motion.span
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-widest uppercase text-accent"
>
  Tại sao chọn chúng tôi
</motion.span>

            {/* Tiêu đề phụ - nhỏ hơn, làm phần mô tả chính */}
            <h2 className="mt-8 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance text-primary-foreground">
              Đối tác đáng tin cậy
              <br />
              cho không gian xanh của bạn
            </h2>

            {/* Mô tả */}
            <p className="mt-8 text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed max-w-2xl">
              Với hơn 15 năm kinh nghiệm, chúng tôi tự hào mang đến những công trình sân vườn đẳng cấp, kết hợp hoàn hảo giữa nghệ thuật và kỹ thuật.
            </p>

            {/* Các feature */}
            <div className="mt-12 lg:mt-16 grid sm:grid-cols-2 gap-10 lg:gap-12">
              {features.map((feature, index) => {
                const IconComponent = LucideIcons[feature.icon as keyof typeof LucideIcons] as React.ElementType

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="flex gap-5"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-xl bg-accent/20 flex items-center justify-center">
                        {IconComponent && <IconComponent className="h-8 w-8 text-accent" />}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-primary-foreground">
                        {feature.title}
                      </h3>
                      <p className="mt-3 text-lg text-primary-foreground/80 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Hình ảnh bên phải */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            <div className="aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/professional-landscaper-working-on-koi-pond-constr.jpg"
                alt="Đội ngũ thi công chuyên nghiệp tại Thiên Sơn Landscape"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-10 -left-10 lg:-bottom-12 lg:-left-12 bg-card text-card-foreground p-8 rounded-2xl shadow-2xl max-w-sm hidden lg:block"
            >
              <p className="text-5xl lg:text-6xl font-extrabold text-primary">
                50+
              </p>
              <p className="mt-3 text-lg lg:text-xl text-foreground font-medium">
                Dự án hoàn thành xuất sắc
                <br />
                trên toàn quốc
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}