"use client"

import { useState } from "react"
import { Eye, X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

// Tạo danh sách 40 dự án với id từ 1 đến 40
// Hàm getImageUrl sẽ tự thử các đuôi .jpg → .jpeg → .png (cả chữ thường và hoa)
const getImageUrl = (id: number): string => {
  const extensions = ["jpg", "jpeg", "png", "JPG", "JPEG", "PNG"]
  for (const ext of extensions) {
    // Next.js tự động hỗ trợ fallback nếu file tồn tại
    // Chúng ta chỉ cần trả về URL – browser sẽ load cái nào tồn tại đầu tiên
    // Tuy nhiên, để tối ưu, ta có thể dùng một trick nhỏ với Image component
    return `/${id}.${ext}`
  }
  return "/placeholder.svg" // fallback nếu không có ảnh nào
}

const allProjects = Array.from({ length: 40 }, (_, i) => ({
  id: i + 1,
  // Image sẽ được xử lý trong component để hỗ trợ nhiều đuôi
}))

const ITEMS_PER_PAGE = 10

export default function ProjectsImageGallery() {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const visibleProjects = allProjects.slice(0, visibleCount)
  const hasMore = visibleCount < allProjects.length

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + ITEMS_PER_PAGE, allProjects.length))
  }

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
  }

  const nextImage = () => {
    if (lightboxIndex !== null) {
      const newIndex = (lightboxIndex + 1) % allProjects.length
      setLightboxIndex(newIndex)
    }
  }

  const prevImage = () => {
    if (lightboxIndex !== null) {
      const newIndex = (lightboxIndex - 1 + allProjects.length) % allProjects.length
      setLightboxIndex(newIndex)
    }
  }

  const currentProjectId = lightboxIndex !== null ? allProjects[lightboxIndex].id : null

  return (
    <>
      <section className="py-16 sm:py-20 bg-[#0d1f19] relative overflow-hidden" id="images">
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Hình Ảnh Công Trình Thực Tế
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {visibleProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#1a2f26] cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={`/${project.id}.jpg`} // Next.js sẽ tự fallback nếu không tồn tại
                  alt={`Công trình thực tế Thiên Sơn Landscape - Dự án số ${project.id}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  onError={(e) => {
                    // Nếu .jpg lỗi → thử .jpeg → .png (tự động bằng cách thay src)
                    const img = e.target as HTMLImageElement
                    if (img.src.endsWith(".jpg")) {
                      img.src = `/${project.id}.jpeg`
                    } else if (img.src.endsWith(".jpeg")) {
                      img.src = `/${project.id}.png`
                    } else if (img.src.endsWith(".png")) {
                      img.src = `/${project.id}.JPG`
                    } else if (img.src.endsWith(".JPG")) {
                      img.src = `/${project.id}.JPEG`
                    } else if (img.src.endsWith(".JPEG")) {
                      img.src = `/${project.id}.PNG`
                    }
                  }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Eye Icon on Hover */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#00ff41]/20 backdrop-blur-sm flex items-center justify-center border border-[#00ff41]/30">
                    <Eye className="w-7 h-7 text-[#00ff41]" />
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
      {lightboxIndex !== null && currentProjectId !== null && (
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
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={`/${currentProjectId}.jpg`}
                alt={`Công trình thực tế Thiên Sơn Landscape - Dự án số ${currentProjectId}`}
                fill
                className="object-contain"
                onError={(e) => {
                  const img = e.target as HTMLImageElement
                  if (img.src.endsWith(".jpg")) img.src = `/${currentProjectId}.jpeg`
                  else if (img.src.endsWith(".jpeg")) img.src = `/${currentProjectId}.png`
                  else if (img.src.endsWith(".png")) img.src = `/${currentProjectId}.JPG`
                  else if (img.src.endsWith(".JPG")) img.src = `/${currentProjectId}.JPEG`
                  else if (img.src.endsWith(".JPEG")) img.src = `/${currentProjectId}.PNG`
                }}
              />
            </div>
            
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">
                Dự án #{currentProjectId}
              </h3>
              <p className="text-gray-400 text-sm">
                {lightboxIndex + 1} / {allProjects.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}