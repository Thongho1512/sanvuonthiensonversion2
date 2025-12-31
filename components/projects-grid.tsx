"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { MapPin, Calendar, ArrowUpRight } from "lucide-react"

const categories = [
  { id: "all", name: "Tất cả" },
  { id: "ho-koi", name: "Hồ cá Koi" },
  { id: "hon-non-bo", name: "Hòn non bộ" },
  { id: "san-vuon", name: "Sân vườn" },
]

const projects = [
  {
    id: 1,
    title: "Biệt thự Vinhomes Riverside",
    category: "ho-koi",
    location: "Long Biên, Hà Nội",
    year: "2024",
    area: "120m²",
    image: "/project-koi-pond-vinhomes-riverside.jpg",
    description: "Hồ cá Koi 120m² với thiết kế Nhật Bản hiện đại, tích hợp hệ thống lọc 4 tầng.",
  },
  {
    id: 2,
    title: "Resort Amanoi Nha Trang",
    category: "san-vuon",
    location: "Nha Trang, Khánh Hòa",
    year: "2024",
    area: "5000m²",
    image: "/project-resort-garden-nha-trang.jpg",
    description: "Thiết kế cảnh quan resort 5 sao với phong cách nhiệt đới Đông Dương.",
  },
  {
    id: 3,
    title: "Nhà phố Thảo Điền",
    category: "hon-non-bo",
    location: "Quận 2, TP.HCM",
    year: "2024",
    area: "25m²",
    image: "/project-rock-garden-thao-dien.jpg",
    description: "Hòn non bộ phong thủy với thác nước tự nhiên và cây bonsai quý.",
  },
  {
    id: 4,
    title: "Villa Đà Lạt",
    category: "san-vuon",
    location: "Đà Lạt, Lâm Đồng",
    year: "2023",
    area: "800m²",
    image: "/project-villa-garden-dalat.jpg",
    description: "Sân vườn phong cách châu Âu với hoa hồng và cây ôn đới.",
  },
  {
    id: 5,
    title: "Penthouse Landmark 81",
    category: "ho-koi",
    location: "Bình Thạnh, TP.HCM",
    year: "2023",
    area: "45m²",
    image: "/project-rooftop-koi-landmark.jpg",
    description: "Hồ Koi sân thượng với view thành phố và hệ thống đèn LED cảnh quan.",
  },
  {
    id: 6,
    title: "Biệt thự Phú Mỹ Hưng",
    category: "hon-non-bo",
    location: "Quận 7, TP.HCM",
    year: "2023",
    area: "35m²",
    image: "/project-miniature-phu-my-hung.jpg",
    description: "Tiểu cảnh sân vườn với suối nhân tạo và đèn đá Nhật Bản.",
  },
  {
    id: 7,
    title: "Resort Fusion Phú Quốc",
    category: "san-vuon",
    location: "Phú Quốc, Kiên Giang",
    year: "2023",
    area: "3000m²",
    image: "/project-resort-phu-quoc.jpg",
    description: "Cảnh quan resort với hồ bơi vô cực và vườn nhiệt đới.",
  },
  {
    id: 8,
    title: "Văn phòng Techcombank",
    category: "hon-non-bo",
    location: "Quận 1, TP.HCM",
    year: "2024",
    area: "50m²",
    image: "/project-office-lobby-tcb.jpg",
    description: "Tiểu cảnh sảnh văn phòng với thiết kế hiện đại và chất liệu cao cấp.",
  },
  {
    id: 9,
    title: "Biệt thự Nine South",
    category: "ho-koi",
    location: "Nhà Bè, TP.HCM",
    year: "2024",
    area: "80m²",
    image: "/project-koi-nine-south.jpg",
    description: "Hồ Koi kết hợp sân vườn với cầu gỗ và đèn lồng truyền thống.",
  },
]

export function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects = activeCategory === "all" ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm tracking-widest uppercase text-accent">Dự án thực tế</span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-semibold text-foreground tracking-tight">
            Công trình tiêu biểu
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Khám phá hơn 500 dự án sân vườn, hồ cá Koi và hòn non bộ đã được chúng tôi thực hiện trên khắp Việt Nam.
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Link href={`/du-an/${project.id}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                        {categories.find((c) => c.id === project.category)?.name}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center">
                        <ArrowUpRight className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{project.description}</p>

                  <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {project.year}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-muted rounded-xl"
        >
          {[
            { value: "500+", label: "Dự án hoàn thành" },
            { value: "63", label: "Tỉnh thành" },
            { value: "15+", label: "Năm kinh nghiệm" },
            { value: "100%", label: "Khách hài lòng" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl sm:text-4xl font-semibold text-primary">{stat.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
