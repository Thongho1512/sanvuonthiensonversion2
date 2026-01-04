"use client"

import { useState, useRef, useEffect } from "react"
import { Play, X, Video as VideoIcon } from "lucide-react"

interface VideoType {
  id: number
  title: string
  category: string
  type: "construction" | "design3d"
  videoPath: string
  duration: string
}

// Video về công trình đã thi công
const constructionVideos: VideoType[] = [
  {
    id: 1,
    title: "Thi công hồ cá Koi biệt thự Vinhomes",
    category: "Hồ cá Koi",
    type: "construction",
    videoPath: "/video/1.mp4",
    duration: "1:22",
  },
  {
    id: 2,
    title: "Tiểu cảnh hòn non bộ Quận 7",
    category: "Hòn non bộ",
    type: "construction",
    videoPath: "/video/2.mp4",
    duration: "0:34",
  },
  {
    id: 3,
    title: "Cảnh quan sân vườn Resort Nha Trang",
    category: "Sân vườn",
    type: "construction",
    videoPath: "/video/3.mp4",
    duration: "4:32",
  },
  {
    id: 4,
    title: "Hồ Koi kết hợp thác nước",
    category: "Hồ cá Koi",
    type: "construction",
    videoPath: "/video/4.mp4",
    duration: "6:20",
  },
  {
    id: 5,
    title: "Thi công sân vườn biệt thú Villa",
    category: "Sân vườn",
    type: "construction",
    videoPath: "/video/construction-5.mp4",
    duration: "3:45",
  },
  {
    id: 6,
    title: "Hồ Koi có cầu gỗ và đèn lồng",
    category: "Hồ cá Koi",
    type: "construction",
    videoPath: "/video/construction-6.mp4",
    duration: "2:18",
  },
  {
    id: 7,
    title: "Tiểu cảnh non bộ văn phòng",
    category: "Hòn non bộ",
    type: "construction",
    videoPath: "/video/construction-7.mp4",
    duration: "1:55",
  },
  {
    id: 8,
    title: "Sân vườn Zen phong cách Nhật",
    category: "Sân vườn",
    type: "construction",
    videoPath: "/video/construction-8.mp4",
    duration: "5:10",
  },
]

// Video thiết kế 3D
const design3dVideos: VideoType[] = [
  {
    id: 9,
    title: "Thiết kế 3D hồ Koi biệt thự sang trọng",
    category: "Hồ cá Koi",
    type: "design3d",
    videoPath: "/video/design-1.mp4",
    duration: "2:30",
  },
  {
    id: 10,
    title: "Mô phỏng 3D sân vườn hiện đại",
    category: "Sân vườn",
    type: "design3d",
    videoPath: "/video/design-2.mp4",
    duration: "3:15",
  },
  {
    id: 11,
    title: "Thiết kế 3D hòn non bộ phong thủy",
    category: "Hòn non bộ",
    type: "design3d",
    videoPath: "/video/design-3.mp4",
    duration: "1:48",
  },
  {
    id: 12,
    title: "Render 3D hồ Koi có thác nước",
    category: "Hồ cá Koi",
    type: "design3d",
    videoPath: "/video/design-4.mp4",
    duration: "2:55",
  },
  {
    id: 13,
    title: "Thiết kế 3D vườn sân thượng",
    category: "Sân vườn",
    type: "design3d",
    videoPath: "/video/design-5.mp4",
    duration: "4:20",
  },
  {
    id: 14,
    title: "Mô phỏng 3D tiểu cảnh trong nhà",
    category: "Hòn non bộ",
type: "design3d",
videoPath: "/video/design-6.mp4",
duration: "2:05",
},
{
id: 15,
title: "Render 3D hồ Koi phong cách Nhật",
category: "Hồ cá Koi",
type: "design3d",
videoPath: "/video/design-7.mp4",
duration: "3:40",
},
{
id: 16,
title: "Thiết kế 3D sân vườn resort",
category: "Sân vườn",
type: "design3d",
videoPath: "/video/design-8.mp4",
duration: "5:25",
},
]
export default function ProjectsVideoGallery() {
const [activeTab, setActiveTab] = useState<"construction" | "design3d">("construction")
const [selectedVideo, setSelectedVideo] = useState<VideoType | null>(null)
const videoRef = useRef<HTMLVideoElement>(null)
const currentVideos = activeTab === "construction" ? constructionVideos : design3dVideos
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
<div className="mb-10 text-center">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
Video Công Trình & Thiết Kế 3D
</h2>
<p className="text-gray-300/80 text-lg mb-8">
Khám phá quy trình thi công thực tế và các mẫu thiết kế 3D chuyên nghiệp
</p>
        {/* Video Type Tabs */}
        <div className="inline-flex gap-2 p-2 bg-[#1a2f26] rounded-full">
          <button
            onClick={() => setActiveTab("construction")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all ${
              activeTab === "construction"
                ? "bg-[#00ff41] text-[#0d1f19]"
                : "text-gray-300 hover:text-white hover:bg-white/5"
            }`}
          >
            <VideoIcon className="w-4 h-4" />
            Công Trình Thực Tế ({constructionVideos.length})
          </button>
          <button
            onClick={() => setActiveTab("design3d")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all ${
              activeTab === "design3d"
                ? "bg-[#00ff41] text-[#0d1f19]"
                : "text-gray-300 hover:text-white hover:bg-white/5"
            }`}
          >
            <VideoIcon className="w-4 h-4" />
            Thiết Kế 3D ({design3dVideos.length})
          </button>
        </div>
      </div>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {currentVideos.map((video) => (
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

              {/* Video Type Badge */}
              <div className="absolute top-3 right-3">
                <span className={`px-2.5 py-1 backdrop-blur-sm rounded-md text-xs font-medium ${
                  video.type === "construction" 
                    ? "bg-blue-500/80 text-white" 
                    : "bg-purple-500/80 text-white"
                }`}>
                  {video.type === "construction" ? "Thi công" : "3D"}
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
        className="relative max-w-5xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="aspect-video rounded-xl overflow-hidden mb-6">
          <video
            ref={videoRef}
            src={selectedVideo.videoPath}
            className="w-full h-full object-contain bg-black"
            controls
            playsInline
          />
        </div>

        {/* Video Info */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="px-3 py-1 bg-black/60 backdrop-blur-sm rounded-md text-white text-sm font-medium">
              {selectedVideo.category}
            </span>
            <span className={`px-3 py-1 backdrop-blur-sm rounded-md text-sm font-medium ${
              selectedVideo.type === "construction" 
                ? "bg-blue-500/80 text-white" 
                : "bg-purple-500/80 text-white"
            }`}>
              {selectedVideo.type === "construction" ? "Thi công thực tế" : "Thiết kế 3D"}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">{selectedVideo.title}</h3>
          <p className="text-gray-400">Thời lượng: {selectedVideo.duration}</p>
        </div>
      </div>
    </div>
  )}
</>
)
}