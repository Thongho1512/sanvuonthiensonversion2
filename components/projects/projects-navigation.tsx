"use client"

import { useState, useEffect } from "react"
import { Camera, Video } from "lucide-react"

interface ProjectsNavigationProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export default function ProjectsNavigation({ activeSection, onSectionChange }: ProjectsNavigationProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const sections = [
    { id: "images", label: "Hình Ảnh", icon: Camera },
    { id: "videos", label: "Video", icon: Video },
  ]

  return (
    <nav
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-300 ${
        scrolled ? "bottom-4" : "bottom-6"
      }`}
    >
      <div className="bg-[#1a2f26]/95 backdrop-blur-lg rounded-full shadow-2xl border border-gray-700/30 p-1.5 flex items-center gap-1">
        {sections.map((section) => {
          const Icon = section.icon
          const isActive = activeSection === section.id
          
          return (
            <button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                isActive
                  ? "bg-[#00ff41] text-[#0d1f19]"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{section.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}