"use client"

import { useState, useRef, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingContact } from "@/components/floating-contact"
import ProjectsHero from "@/components/projects/projects-hero"
import ProjectsImageGallery from "@/components/projects/projects-image-gallery"
import ProjectsVideoGallery from "@/components/projects/projects-video-gallery"
import ProjectsNavigation from "@/components/projects/projects-navigation"

export default function ProjectsPageClient() {
  const [activeSection, setActiveSection] = useState("images")
  const imagesRef = useRef<HTMLDivElement>(null)
  const videosRef = useRef<HTMLDivElement>(null)

  const handleSectionChange = (section: string) => {
    setActiveSection(section)
    
    let targetElement: HTMLDivElement | null = null
    
    switch (section) {
      case "images":
        targetElement = imagesRef.current
        break
      case "videos":
        targetElement = videosRef.current
        break
    }

    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 100
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  // Auto-update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      const videosElement = videosRef.current
      const imagesElement = imagesRef.current

      if (videosElement && scrollPosition >= videosElement.offsetTop) {
        setActiveSection("videos")
      } else if (imagesElement && scrollPosition >= imagesElement.offsetTop) {
        setActiveSection("images")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="w-full overflow-x-hidden">
      <Header />
      <ProjectsHero />
      
      <div ref={imagesRef}>
        <ProjectsImageGallery />
      </div>
      
      <div ref={videosRef}>
        <ProjectsVideoGallery />
      </div>
      
      <Footer />
      <FloatingContact />
      
      <ProjectsNavigation 
        activeSection={activeSection} 
        onSectionChange={handleSectionChange} 
      />
    </main>
  )
}