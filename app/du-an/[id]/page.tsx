import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectDetail } from "@/components/project-detail"
import { notFound } from "next/navigation"

const projects = [
  {
    id: "1",
    title: "Biệt thự Vinhomes Riverside",
    category: "Hồ cá Koi",
    location: "Long Biên, Hà Nội",
    year: "2024",
    area: "120m²",
    duration: "3 tháng",
    client: "Ông Nguyễn Văn A",
    description:
      "Dự án thiết kế và thi công hồ cá Koi 120m² tại biệt thự Vinhomes Riverside. Áp dụng tiêu chuẩn Nhật Bản với hệ thống lọc 4 tầng, đảm bảo môi trường sống lý tưởng cho đàn cá Koi quý giá.",
    challenge:
      "Khách hàng yêu cầu một hồ Koi lớn trong không gian hạn chế, đồng thời phải đảm bảo tính thẩm mỹ hài hòa với kiến trúc biệt thự hiện đại.",
    solution:
      "Chúng tôi thiết kế hồ Koi theo hình dạng tự nhiên, tận dụng tối đa diện tích sân sau. Hệ thống lọc được đặt ngầm dưới sàn gỗ, tạo không gian nghỉ ngơi và ngắm cá thoải mái.",
    images: [
      "/project-koi-pond-vinhomes-riverside.jpg",
      "/koi-pond-luxury-villa-night-lighting-waterfall.jpg",
      "/natural-koi-pond-with-rocks-and-waterfall.jpg",
      "/koi-pond-with-wooden-deck-and-gazebo.jpg",
    ],
    features: [
      "Hồ Koi 120m² với độ sâu 1.8m",
      "Hệ thống lọc Bakki Shower 4 tầng",
      "Đèn LED dưới nước thay đổi màu",
      "Sàn gỗ Teak nhập khẩu",
      "Đài phun nước nghệ thuật",
      "Hệ thống oxy tự động",
    ],
  },
]

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return { title: "Dự án không tồn tại" }
  }

  return {
    title: `${project.title} | Sân Vườn Thiên Sơn`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  return (
    <>
      <Header />
      <main>
        <ProjectDetail project={project} />
      </main>
      <Footer />
    </>
  )
}
