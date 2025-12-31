import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { AboutHero } from "@/components/about-hero"
import { AboutStory } from "@/components/about-story"
import { AboutValues } from "@/components/about-values"
import { AboutTeam } from "@/components/about-team"
import { ServiceCTA } from "@/components/service-cta"

export const metadata: Metadata = {
  title: "Về Chúng Tôi | Sân Vườn Thiên Sơn",
  description:
    "Tìm hiểu về Thiên Sơn - đơn vị thiết kế và thi công sân vườn hàng đầu với hơn 15 năm kinh nghiệm và hơn 500 dự án hoàn thành.",
  keywords: ["về thiên sơn", "công ty sân vườn", "thiết kế cảnh quan", "đội ngũ thiên sơn"],
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Về chúng tôi" }]} />
        </div>
        <AboutHero />
        <AboutStory />
        <AboutValues />
        <AboutTeam />
        <ServiceCTA
          title="Hãy cùng Thiên Sơn kiến tạo không gian xanh"
          description="Liên hệ ngay để được đội ngũ chuyên gia tư vấn giải pháp phù hợp nhất cho dự án của bạn."
        />
      </main>
      <Footer />
    </>
  )
}
