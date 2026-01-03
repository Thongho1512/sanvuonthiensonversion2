"use client"

import { useState } from "react"
import { Eye, X, MapPin, Calendar } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Biệt thự Vinhomes Riverside",
    category: "Hồ cá Koi",
    location: "Long Biên, Hà Nội",
    year: "2024",
    image: "/project-koi-pond-vinhomes-riverside.jpg",
  },
  {
    id: 2,
    title: "Resort Amanoi Nha Trang",
    category: "Sân vườn",
    location: "Nha Trang, Khánh Hòa",
    year: "2024",
    image: "/project-resort-garden-nha-trang.jpg",
  },
  {
    id: 3,
    title: "Nhà phố Thảo Điền",
    category: "Hòn non bộ",
    location: "Quận 2, TP.HCM",
    year: "2024",
    image: "/project-rock-garden-thao-dien.jpg",
  },
  {
    id: 4,
    title: "Villa Đà Lạt",
    category: "Sân vườn",
    location: "Đà Lạt, Lâm Đồng",
    year: "2023",
    image: "/project-villa-garden-dalat.jpg",
  },
  {
    id: 5,
    title: "Penthouse Landmark 81",
    category: "Hồ cá Koi",
    location: "Bình Thạnh, TP.HCM",
    year: "2023",
    image: "/project-rooftop-koi-landmark.jpg",
  },
  {
    id: 6,
    title: "Biệt thự Phú Mỹ Hưng",
    category: "Hòn non bộ",
    location: "Quận 7, TP.HCM",
    year: "2023",
    image: "/project-miniature-phu-my-hung.jpg",
  },
]

export default function ProjectsImageGallery() {
  const [lightboxProject, setLightboxProject] = useState<typeof projects[0] | null>(null)

  return (
    <>
      <section className="py-16 sm:py-20 bg-[#0d1f19] relative overflow-hidden" id="images">
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Dự án tiêu biểu tháng này
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#1a2f26] cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setLightboxProject(project)}
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Eye Icon on Hover */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#00ff41]/20 backdrop-blur-sm flex items-center justify-center border border-[#00ff41]/30">
                    <Eye className="w-7 h-7 text-[#00ff41]" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-[#00ff41]/15 backdrop-blur-sm border border-[#00ff41]/25 text-[#00ff41] text-xs font-medium rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-1.5 line-clamp-1">{project.title}</h3>
                  <div className="flex items-center gap-3 text-xs text-gray-300/80">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {project.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="mt-10 text-center">
            <button className="inline-flex items-center gap-2 px-6 py-3 text-[#00ff41] font-medium hover:text-[#00ff41]/80 transition-colors">
              Xem tất cả video
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxProject && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setLightboxProject(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors z-10"
            onClick={() => setLightboxProject(null)}
          >
            <X className="w-5 h-5 text-white" />
          </button>
          
          <div className="relative max-w-6xl w-full">
            <div className="relative aspect-video">
              <Image
                src={lightboxProject.image || "/placeholder.svg"}
                alt={lightboxProject.title}
                fill
                className="object-contain"
              />
            </div>
            
            <div className="mt-6 text-center">
              <span className="inline-block px-4 py-1.5 bg-[#00ff41]/15 backdrop-blur-sm border border-[#00ff41]/25 text-[#00ff41] text-sm font-medium rounded-full mb-3">
                {lightboxProject.category}
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">{lightboxProject.title}</h3>
              <div className="flex items-center justify-center gap-6 text-gray-300">
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {lightboxProject.location}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {lightboxProject.year}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}