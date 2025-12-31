"use client"

import { motion } from "framer-motion"

const team = [
  {
    name: "Nguyễn Văn Thiên",
    role: "Founder & CEO",
    image: "/team-ceo.jpg",
    description: "Hơn 20 năm kinh nghiệm trong ngành cảnh quan",
  },
  {
    name: "Trần Thị Hương",
    role: "Giám đốc thiết kế",
    image: "/team-design-director.jpg",
    description: "Kiến trúc sư cảnh quan, tốt nghiệp tại Nhật Bản",
  },
  {
    name: "Lê Minh Đức",
    role: "Giám đốc kỹ thuật",
    image: "/team-tech-director.jpg",
    description: "Chuyên gia về hệ thống hồ Koi và lọc nước",
  },
  {
    name: "Phạm Thị Mai",
    role: "Trưởng nhóm thi công",
    image: "/team-construction-lead.jpg",
    description: "15 năm kinh nghiệm thi công sân vườn",
  },
]

export function AboutTeam() {
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
          <span className="text-sm tracking-widest uppercase text-accent">Đội ngũ</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">
            Những con người tạo nên Thiên Sơn
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
              <p className="text-accent font-medium">{member.role}</p>
              <p className="mt-2 text-sm text-muted-foreground">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
