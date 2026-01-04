"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, Calendar, Image as ImageIcon, Video } from "lucide-react"

const mediaTypes = [
  { id: "images", name: "Hình Ảnh", icon: ImageIcon },
  { id: "videos", name: "Video", icon: Video },
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
    type: "images",
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
    type: "images",
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
    type: "images",
  },
  {
    id: 4,
    title: "Villa Đà Lạt - Video Tour",
    category: "san-vuon",
    location: "Đà Lạt, Lâm Đồng",
    year: "2023",
    area: "800m²",
    image: "/project-villa-garden-dalat.jpg",
    description: "Sân vườn phong cách châu Âu với hoa hồng và cây ôn đới.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    type: "videos",
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
    type: "images",
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
    type: "images",
  },
  {
    id: 7,
    title: "Resort Fusion Phú Quốc - Video",
    category: "san-vuon",
    location: "Phú Quốc, Kiên Giang",
    year: "2023",
    area: "3000m²",
    image: "/project-resort-phu-quoc.jpg",
    description: "Cảnh quan resort với hồ bơi vô cực và vườn nhiệt đới.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    type: "videos",
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
    type: "images",
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
    type: "images",
  },
]

interface ProjectCardProps {
  project: typeof projects[0]
  index: number
  featured?: boolean
  onVideoClick: (id: number) => void
}

function ProjectCard({ project, index, featured = false, onVideoClick }: ProjectCardProps) {
  const hasVideo = !!project.videoUrl

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <div className="group relative overflow-hidden rounded-2xl bg-card shadow-lg hover:shadow-xl transition-shadow">
        <div className={`relative overflow-hidden ${featured ? "aspect-video" : "aspect-4/3"}`}>
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Video Play Button */}
          {hasVideo && (
            <button
              onClick={() => onVideoClick(project.id)}
              className="absolute inset-0 flex items-center justify-center transition-colors"
              aria-label={`Xem video ${project.title}`}
            >
              <div className="w-20 h-20 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center transition-all hover:scale-110 shadow-2xl">
                <svg className="w-10 h-10 text-primary-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          )}

          {/* Type Badge */}
          {project.type === "videos" && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1.5 bg-red-500 backdrop-blur-sm text-white text-xs font-semibold rounded-full shadow-lg flex items-center gap-1">
                <Video className="h-3 w-3" />
                VIDEO
              </span>
            </div>
          )}

          {/* Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-xl font-bold text-white mb-3">
              {project.title}
            </h3>
            <div className="flex items-center gap-4 text-sm text-white/90">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                {project.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {project.year}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function ProjectsGrid() {
  const [activeMediaType, setActiveMediaType] = useState("images")
  const [featuredVideo, setFeaturedVideo] = useState<number | null>(null)

  const filteredProjects = projects.filter(p => p.type === activeMediaType)
  
  const currentVideo = projects.find(p => p.id === featuredVideo)

  return (
    <section className="bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 bg-accent/20 backdrop-blur-sm text-accent-foreground rounded-full text-sm font-semibold mb-6">
              Thư Viện Dự Án
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Khám phá hình ảnh & video<br />dự án tiêu biểu
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              <span className="font-semibold text-accent">50+ dự án hoàn thành</span> · 
              <span className="font-semibold text-accent"> 150+ video</span> · 
              <span className="font-semibold text-accent"> 15+ năm kinh nghiệm</span>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Media Type Filter - Chỉ 2 nút */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex justify-center">
            <div className="inline-flex gap-2 p-2 bg-muted rounded-full">
              {mediaTypes.map((type) => {
                const Icon = type.icon
                return (
                  <button
                    key={type.id}
                    onClick={() => setActiveMediaType(type.id)}
                    className={`flex items-center gap-2 px-8 py-3 rounded-full text-base font-semibold transition-all ${
                      activeMediaType === type.id
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "text-foreground hover:bg-background"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    {type.name}
                  </button>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {activeMediaType === "images" ? "Hình Ảnh" : "Video"} <span className="text-primary">Công Trình Thực Tế</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Những dự án tiêu biểu đã được Thiên Sơn hoàn thành
          </p>
        </motion.div>

        {/* Projects Layout - Masonry Style */}
        <div className="space-y-6">
          {/* Row 1: 3 items */}
          {filteredProjects.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredProjects.slice(0, 3).map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} onVideoClick={setFeaturedVideo} />
              ))}
            </div>
          )}

          {/* Row 2: Featured (2 cols) + 2 side items (1 col) */}
          {filteredProjects.length > 3 && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <ProjectCard 
                  project={filteredProjects[3]} 
                  index={3} 
                  featured 
                  onVideoClick={setFeaturedVideo}
                />
              </div>
              <div className="space-y-6">
                {filteredProjects.slice(4, 6).map((project, index) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    index={index + 4} 
                    onVideoClick={setFeaturedVideo}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Row 3: 3 items */}
          {filteredProjects.length > 6 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredProjects.slice(6, 9).map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={index + 6} 
                  onVideoClick={setFeaturedVideo}
                />
              ))}
            </div>
          )}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-6">
              <ImageIcon className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Không tìm thấy dự án
            </h3>
            <p className="text-muted-foreground">
              Thử chuyển sang tab khác để xem thêm dự án
            </p>
          </div>
        )}

        {/* Video Modal */}
        <AnimatePresence>
          {featuredVideo !== null && currentVideo?.videoUrl && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
              onClick={() => setFeaturedVideo(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-6xl w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setFeaturedVideo(null)}
                  className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors backdrop-blur-sm"
                  aria-label="Đóng video"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <iframe
                  src={`${currentVideo.videoUrl}?autoplay=1`}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title={currentVideo.title}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 p-10 bg-muted rounded-3xl"
        >
          {[
            { value: "50+", label: "Dự án hoàn thành" },
            { value: "63", label: "Tỉnh thành" },
            { value: "15+", label: "Năm kinh nghiệm" },
            { value: "100%", label: "Khách hài lòng" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl sm:text-5xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}