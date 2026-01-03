"use client"

import { useState, useRef, useEffect } from "react"
import { Play, X } from "lucide-react"

interface VideoType {
  id: number
  title: string
  category: string
  videoPath: string
  duration: string
}

const videos: VideoType[] = [
  {
    id: 1,
    title: "Thi công hồ cá Koi biệt thự Vinhomes",
    category: "Hồ cá Koi",
    videoPath: "/video/1.mp4",
    duration: "1:22",
  },
  {
    id: 2,
    title: "Tiểu cảnh hòn non bộ Quận 7",
    category: "Hòn non bộ",
    videoPath: "/video/2.mp4",
    duration: "0:34",
  },
  {
    id: 3,
    title: "Cảnh quan sân vườn Resort Nha Trang",
    category: "Sân vườn",
    videoPath: "/video/3.mp4",
    duration: "4:32",
  },
  {
    id: 4,
    title: "Hồ Koi kết hợp thác nước",
    category: "Hồ cá Koi",
    videoPath: "/video/4.mp4",
    duration: "6:20",
  },
]

export default function ProjectsVideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<VideoType | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (selectedVideo && videoRef.current) {
      videoRef.current.play()
    }
  }, [selectedVideo])

  const closeModal = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
    setSelectedVideo(null)
  }

  return (
    <>
      <section className="py-16 bg-[#0d1f19] relative overflow-hidden" id="videos">
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Video thi công thực tế
            </h2>
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {videos.map((video) => (
              <div
                key={video.id}
                className="group cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative aspect-video rounded-xl overflow-hidden bg-[#1a2f26] mb-3 shadow-md hover:shadow-lg transition-all duration-300">
                  <video
                    src={video.videoPath}
                    className="w-full h-full object-cover"
                    muted
                    playsInline
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#00ff41]/20 backdrop-blur-sm border border-[#00ff41]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 text-[#00ff41] ml-0.5" fill="currentColor" />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-black/60 backdrop-blur-sm rounded-md text-white text-xs font-medium">
                      {video.category}
                    </span>
                  </div>

                  {/* Duration */}
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm text-white text-xs font-medium">
                    {video.duration}
                  </div>
                </div>

                <h3 className="text-base font-medium text-white group-hover:text-[#00ff41] transition-colors line-clamp-2">
                  {video.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors z-10"
            onClick={closeModal}
          >
            <X className="w-5 h-5 text-white" />
          </button>

          <div
            className="relative max-w-5xl w-full aspect-video rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={videoRef}
              src={selectedVideo.videoPath}
              className="w-full h-full object-contain bg-black"
              controls
              playsInline
            />
          </div>
        </div>
      )}
    </>
  )
}