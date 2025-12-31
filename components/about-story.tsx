"use client"

import { motion } from "framer-motion"

const milestones = [
  { year: "2009", title: "Thành lập", description: "Khởi đầu với 5 thành viên tại TP.HCM" },
  { year: "2012", title: "Mở rộng", description: "Mở văn phòng thứ 2 tại Hà Nội" },
  { year: "2015", title: "100 dự án", description: "Cột mốc 100 công trình hoàn thành" },
  { year: "2018", title: "Chứng nhận ISO", description: "Đạt chứng nhận ISO 9001:2015" },
  { year: "2020", title: "Đối tác Nhật Bản", description: "Hợp tác với chuyên gia Koi Nhật" },
  { year: "2024", title: "500+ dự án", description: "Phục vụ khách hàng toàn quốc" },
]

export function AboutStory() {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm tracking-widest uppercase text-accent">Hành trình phát triển</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">
            Câu chuyện của chúng tôi
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground font-semibold mb-4 relative z-10">
                  {milestone.year}
                </div>
                <h3 className="font-semibold text-foreground">{milestone.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
