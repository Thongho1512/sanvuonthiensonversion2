import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { ProjectsGrid } from "@/components/projects-grid"
import { ServiceCTA } from "@/components/service-cta"

export const metadata: Metadata = {
  title: "Dự Án | Sân Vườn Thiên Sơn",
  description:
    "Khám phá các dự án sân vườn, hồ cá Koi, hòn non bộ tiêu biểu của Thiên Sơn. Hơn 500 công trình hoàn thành xuất sắc trên toàn quốc.",
  keywords: ["dự án sân vườn", "công trình hồ koi", "tiểu cảnh đẹp", "thiết kế cảnh quan", "portfolio sân vườn"],
}

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Dự án" }]} />
        </div>
        <ProjectsGrid />
        <ServiceCTA
          title="Bạn muốn có một công trình tương tự?"
          description="Liên hệ ngay để được tư vấn miễn phí và nhận báo giá chi tiết cho dự án của bạn."
        />
      </main>
      <Footer />
    </>
  )
}
