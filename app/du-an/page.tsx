import type { Metadata } from "next"
import ProjectsPageClient from "./projects-page-client"

export const metadata: Metadata = {
  title: "Dự Án | Sân Vườn Thiên Sơn",
  description:
    "Khám phá các dự án sân vườn, hồ cá Koi, hòn non bộ tiêu biểu của Thiên Sơn. Hơn 500 công trình hoàn thành xuất sắc trên toàn quốc.",
  keywords: ["Hồ cá koi", "dự án sân vườn", "công trình hồ koi", "tiểu cảnh đẹp", "thiết kế cảnh quan", "portfolio sân vườn"],
}

export default function ProjectsPage() {
  return <ProjectsPageClient />
}