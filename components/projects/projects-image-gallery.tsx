"use client"

import { useState } from "react"
import { Eye, X, MapPin, Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

// 40 hình ảnh công trình
const allProjects = [
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
  {
    id: 7,
    title: "Hồ Koi Biệt thự Vũng Tàu",
    category: "Hồ cá Koi",
    location: "Vũng Tàu, BR-VT",
    year: "2024",
    image: "/natural-koi-pond-with-rocks-and-waterfall.jpg",
  },
  {
    id: 8,
    title: "Sân vườn Villa Quận 9",
    category: "Sân vườn",
    location: "Quận 9, TP.HCM",
    year: "2024",
    image: "/luxury-villa-garden-design-with-pathway-fountain-a.jpg",
  },
  {
    id: 9,
    title: "Hồ Koi có cầu gỗ",
    category: "Hồ cá Koi",
    location: "Bình Dương",
    year: "2023",
    image: "/koi-pond-with-wooden-deck-and-gazebo.jpg",
  },
  {
    id: 10,
    title: "Hồ Koi phong cách Nhật",
    category: "Hồ cá Koi",
    location: "Hà Nội",
    year: "2024",
    image: "/japanese-style-koi-pond-with-bridge-and-lantern.jpg",
  },
  {
    id: 11,
    title: "Hồ Koi đèn LED đêm",
    category: "Hồ cá Koi",
    location: "TP.HCM",
    year: "2024",
    image: "/koi-pond-luxury-villa-night-lighting-waterfall.jpg",
  },
  {
    id: 12,
    title: "Hồ Koi kính hiện đại",
    category: "Hồ cá Koi",
    location: "Quận 1, TP.HCM",
    year: "2023",
    image: "/modern-koi-pond-glass-wall-viewing-panel.jpg",
  },
  {
    id: 13,
    title: "Hồ Koi sảnh khách sạn",
    category: "Hồ cá Koi",
    location: "Đà Nẵng",
    year: "2024",
    image: "/indoor-koi-pond-lobby-design.jpg",
  },
  {
    id: 14,
    title: "Sân vườn nhiệt đới",
    category: "Sân vườn",
    location: "Phú Quốc",
    year: "2023",
    image: "/tropical-resort-garden-landscape-design.jpg",
  },
  {
    id: 15,
    title: "Sân vườn Nhật Bản",
    category: "Sân vườn",
    location: "Thảo Điền",
    year: "2024",
    image: "/japanese-garden-design-with-pathway.jpg",
  },
  {
    id: 16,
    title: "Sân vườn tối giản",
    category: "Sân vườn",
    location: "Quận 2",
    year: "2023",
    image: "/minimalist-garden-design-modern-home.jpg",
  },
  {
    id: 17,
    title: "Vườn sân thượng",
    category: "Sân vườn",
    location: "Landmark 81",
    year: "2024",
    image: "/rooftop-garden-terrace-design.jpg",
  },
  {
    id: 18,
    title: "Vườn hoa cottage",
    category: "Sân vườn",
    location: "Đà Lạt",
    year: "2023",
    image: "/cottage-garden-design-flowers.jpg",
  },
  {
    id: 19,
    title: "Hòn non bộ truyền thống",
    category: "Hòn non bộ",
    location: "Phú Mỹ Hưng",
    year: "2024",
    image: "/traditional-vietnamese-rock-garden-with-waterfall.jpg",
  },
  {
    id: 20,
    title: "Tiểu cảnh Zen",
    category: "Hòn non bộ",
    location: "Spa Resort",
    year: "2023",
    image: "/zen-rock-garden-japanese-style-meditation.jpg",
  },
  {
    id: 21,
    title: "Non bộ với thác nước",
    category: "Hòn non bộ",
    location: "Văn phòng",
    year: "2024",
    image: "/miniature-mountain-landscape-bonsai-waterfall.jpg",
  },
  {
    id: 22,
    title: "Tiểu cảnh cổng vào",
    category: "Hòn non bộ",
    location: "Biệt thự Q9",
    year: "2023",
    image: "/rock-garden-entrance-gate-feng-shui.jpg",
  },
  {
    id: 23,
    title: "Tiểu cảnh trong nhà",
    category: "Hòn non bộ",
    location: "Tòa nhà văn phòng",
    year: "2024",
    image: "/indoor-rock-garden-lobby-corporate.jpg",
  },
  {
    id: 24,
    title: "Non bộ + hồ Koi",
    category: "Hòn non bộ",
    location: "Villa Vũng Tàu",
    year: "2023",
    image: "/rock-garden-with-koi-pond-integration.jpg",
  },
  {
    id: 25,
    title: "Sân vườn biệt thự hiện đại",
    category: "Sân vườn",
    location: "Phú Mỹ Hưng",
    year: "2024",
    image: "/modern-villa-garden-with-swimming-pool.jpg",
  },
  {
    id: 26,
    title: "Hồ cá Koi đẹp lung linh",
    category: "Hồ cá Koi",
    location: "TP.HCM",
    year: "2024",
    image: "/beautiful-japanese-koi-pond-with-colorful-koi-fish.jpg",
  },
  {
    id: 27,
    title: "Hòn non bộ tinh tế",
    category: "Hòn non bộ",
    location: "Hà Nội",
    year: "2023",
    image: "/elegant-rock-garden-bonsai-miniature-landscape-wit.jpg",
  },
  {
    id: 28,
    title: "Sân vườn Zen buổi sáng",
    category: "Sân vườn",
    location: "Đà Lạt",
    year: "2024",
    image: "/beautiful-zen-garden-with-morning-mist-and-sunligh.jpg",
  },
  {
    id: 29,
    title: "Sân vườn hoàng hôn",
    category: "Sân vườn",
    location: "Nha Trang",
    year: "2023",
    image: "/beautiful-zen-garden-sunset-golden-hour-with-water.jpg",
  },
  {
    id: 30,
    title: "Hồ Koi ban đêm",
    category: "Hồ cá Koi",
    location: "Vinhomes",
    year: "2024",
    image: "/luxury-villa-koi-pond-at-night-with-lighting.jpg",
  },
  {
    id: 31,
    title: "Hồ Koi với cây cọ",
    category: "Hồ cá Koi",
    location: "Phú Quốc",
    year: "2023",
    image: "/tropical-resort-garden-with-palm-trees-and-pool.jpg",
  },
  {
    id: 32,
    title: "Tiểu cảnh nhà phố",
    category: "Hòn non bộ",
    location: "Quận 2",
    year: "2024",
    image: "/modern-townhouse-rock-garden-with-water-feature.jpg",
  },
  {
    id: 33,
    title: "Vườn Zen sân thượng",
    category: "Sân vườn",
    location: "Penthouse",
    year: "2023",
    image: "/rooftop-zen-garden-with-city-view.jpg",
  },
  {
    id: 34,
    title: "Nghệ nhân thi công",
    category: "Quy trình",
    location: "TP.HCM",
    year: "2024",
    image: "/professional-landscaper-working-on-koi-pond-constr.jpg",
  },
  {
    id: 35,
    title: "Showroom sân vườn",
    category: "Showroom",
    location: "TP.HCM",
    year: "2024",
    image: "/modern-garden-showroom-.jpg",
  },
  {
    id: 36,
    title: "Đội ngũ thi công",
    category: "Đội ngũ",
    location: "Công trường",
    year: "2024",
    image: "/about-team-working-garden.jpg",
  },
  {
    id: 37,
    title: "Hồ Koi tự nhiên",
    category: "Hồ cá Koi",
    location: "Biệt thự",
    year: "2023",
    image: "/beautiful-koi-pond-garden-landscape-with-rocks-and.jpg",
  },
  {
    id: 38,
    title: "CEO & Giám đốc",
    category: "Đội ngũ",
    location: "Văn phòng",
    year: "2024",
    image: "/team-ceo.jpg",
  },
  {
    id: 39,
    title: "Giám đốc thiết kế",
    category: "Đội ngũ",
    location: "Studio",
    year: "2024",
    image: "/team-design-director.jpg",
  },
  {
    id: 40,
    title: "Giám đốc kỹ thuật",
    category: "Đội ngũ",
    location: "Phòng Lab",
    year: "2024",
    image: "/team-tech-director.jpg",
  },
]

const ITEMS_PER_PAGE = 10

export default function ProjectsImageGallery() {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE)
  const [lightboxProject, setLightboxProject] = useState<typeof allProjects[0] | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const visibleProjects = allProjects.slice(0, visibleCount)
  const hasMore = visibleCount < allProjects.length

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + ITEMS_PER_PAGE, allProjects.length))
  }

  const openLightbox = (project: typeof allProjects[0], index: number) => {
    setLightboxProject(project)
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setLightboxProject(null)
  }

  const nextImage = () => {
    const newIndex = (lightboxIndex + 1) % allProjects.length
    setLightboxIndex(newIndex)
    setLightboxProject(allProjects[newIndex])
  }

  const prevImage = () => {
    const newIndex = (lightboxIndex - 1 + allProjects.length) % allProjects.length
    setLightboxIndex(newIndex)
    setLightboxProject(allProjects[newIndex])
  }

  return (
    <>
      <section className="py-16 sm:py-20 bg-[#0d1f19] relative overflow-hidden" id="images">
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Hình Ảnh Công Trình Thực Tế
            </h2>
            <p className="text-gray-300/80 text-lg">
              {allProjects.length} dự án hoàn thành xuất sắc trên toàn quốc
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {visibleProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#1a2f26] cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => openLightbox(project, index)}
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
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

          {/* Load More Button */}
          {hasMore && (
            <div className="mt-12 text-center">
              <Button
                onClick={loadMore}
                size="lg"
                className="bg-[#00ff41] text-[#0d1f19] hover:bg-[#00ff41]/90 font-semibold px-8 py-6 text-lg"
              >
                Xem thêm
              </Button>
            </div>
          )}

          
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxProject && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors z-10"
            onClick={closeLightbox}
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Navigation Buttons */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
          
          <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
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
              <p className="mt-4 text-gray-400 text-sm">
                {lightboxIndex + 1} / {allProjects.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}