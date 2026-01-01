import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceHero } from "@/components/service-hero"
import { ServiceFeatures } from "@/components/service-features"
import { ServiceProcess } from "@/components/service-process"
import { ServiceGallery } from "@/components/service-gallery"
import { ServiceCTA } from "@/components/service-cta"
import { RelatedServices } from "@/components/related-services"

export const metadata: Metadata = {
  title: "Thiết Kế Sân Vườn | Sân Vườn Thiên Sơn",
  description:
    "Dịch vụ thiết kế và thi công sân vườn biệt thự, resort cao cấp. Phong cách hiện đại, tích hợp hệ thống tưới tự động và chiếu sáng cảnh quan.",
  keywords: ["thiết kế sân vườn", "sân vườn biệt thự", "cảnh quan sân vườn", "thi công sân vườn", "sân vườn resort"],
}

const features = [
  {
    icon: "Ruler",
    title: "Thiết kế 3D chuyên nghiệp",
    description: "Bản vẽ 3D chi tiết giúp khách hàng hình dung rõ ràng không gian sân vườn trước khi thi công.",
  },
  {
    icon: "TreePalm",
    title: "Cây xanh nhập khẩu",
    description: "Hệ thống cây xanh từ các vườn ươm uy tín, đảm bảo chất lượng và độ phát triển.",
  },
  {
    icon: "Droplets",
    title: "Hệ thống tưới tự động",
    description: "Tích hợp hệ thống tưới nhỏ giọt, phun sương thông minh, tiết kiệm nước và công chăm sóc.",
  },
  {
    icon: "Lightbulb",
    title: "Chiếu sáng cảnh quan",
    description: "Thiết kế hệ thống đèn LED cảnh quan, tạo điểm nhấn và không gian lung linh về đêm.",
  },
  {
    icon: "Sun",
    title: "Tối ưu ánh sáng tự nhiên",
    description: "Bố trí cây xanh và không gian nghỉ ngơi theo hướng nắng, tạo bóng mát hợp lý.",
  },
  {
    icon: "Leaf",
    title: "Bảo trì định kỳ",
    description: "Dịch vụ chăm sóc cây xanh, cắt tỉa và bảo dưỡng hệ thống định kỳ hàng tháng.",
  },
]

const processSteps = [
  {
    number: "01",
    title: "Khảo sát & Lắng nghe",
    description: "Khảo sát thực địa, tìm hiểu nhu cầu và phong cách yêu thích của gia chủ.",
  },
  {
    number: "02",
    title: "Thiết kế concept",
    description: "Đề xuất 2-3 concept thiết kế, bản vẽ 3D và dự toán chi tiết.",
  },
  {
    number: "03",
    title: "Thi công & Giám sát",
    description: "Thi công theo bản vẽ với đội ngũ giám sát chất lượng chặt chẽ.",
  },
  {
    number: "04",
    title: "Bàn giao & Hướng dẫn",
    description: "Bàn giao công trình, hướng dẫn chăm sóc và chế độ bảo hành toàn diện.",
  },
]

const galleryImages = [
  {
    src: "/modern-villa-garden-with-swimming-pool.jpg",
    alt: "Sân vườn biệt thự hiện đại",
    caption: "Biệt thự Phú Mỹ Hưng - 500m²",
  },
  {
    src: "/tropical-resort-garden-landscape-design.jpg",
    alt: "Sân vườn resort nhiệt đới",
    caption: "Resort Phú Quốc - 2000m²",
  },
  {
    src: "/japanese-garden-design-with-pathway.jpg",
    alt: "Sân vườn Nhật Bản",
    caption: "Villa Thảo Điền - Phong cách Nhật",
  },
  {
    src: "/minimalist-garden-design-modern-home.jpg",
    alt: "Sân vườn tối giản",
    caption: "Nhà phố Quận 2 - Minimalist",
  },
  {
    src: "/rooftop-garden-terrace-design.jpg",
    alt: "Vườn sân thượng",
    caption: "Penthouse Landmark 81",
  },
  {
    src: "/cottage-garden-design-flowers.jpg",
    alt: "Vườn hoa cottage",
    caption: "Villa Đà Lạt - English Garden",
  },
]

const relatedServices = [
  {
    title: "Thi Công Hồ Cá Koi",
    description: "Thiết kế và thi công hồ cá Koi theo tiêu chuẩn Nhật Bản",
    image: "/beautiful-japanese-koi-pond-with-colorful-koi-fish.jpg",
    href: "/dich-vu/ho-ca-koi",
  },
  {
    title: "Hòn Non Bộ & Tiểu Cảnh",
    description: "Tạo tác hòn non bộ, tiểu cảnh nghệ thuật theo phong thủy",
    image: "/elegant-rock-garden-bonsai-miniature-landscape-wit.jpg",
    href: "/dich-vu/hon-non-bo",
  },
  {
    title: "Thiết Kế Sân Vườn",
    description: "Quy hoạch và thiết kế sân vườn biệt thự, resort cao cấp",
    image: "/luxury-villa-garden-design-with-pathway-fountain-a.jpg",
    href: "/dich-vu/thiet-ke-san-vuon",
  },
]

export default function GardenDesignServicePage() {
  return (
    <>
      <Header />
      <main>
        <ServiceHero
          title="Thiết Kế Sân Vườn"
          subtitle="Kiến tạo không gian sống xanh"
          description="Quy hoạch và thiết kế sân vườn biệt thự, resort với phong cách đa dạng từ hiện đại đến cổ điển. Tích hợp công nghệ thông minh và tối ưu công năng sử dụng."
          image="/luxury-villa-garden-design-with-pathway-fountain-a.jpg"
          breadcrumbs={[{ label: "Dịch vụ", href: "/dich-vu" }, { label: "Thiết kế sân vườn" }]}
        />
        <ServiceFeatures title="Dịch vụ toàn diện" subtitle="Giải pháp trọn gói" features={features} />
        <ServiceProcess title="Quy trình thiết kế" subtitle="4 bước chuyên nghiệp" steps={processSteps} />
        <ServiceGallery title="Dự án sân vườn tiêu biểu" subtitle="Công trình thực tế" images={galleryImages} />
        <ServiceCTA
          title="Biến không gian ngoài trời thành thiên đường riêng?"
          description="Đội ngũ kiến trúc sư cảnh quan sẵn sàng tư vấn và thiết kế sân vườn trong mơ của bạn."
        />
        <RelatedServices currentService="Thiết Kế Sân Vườn" services={relatedServices} />
      </main>
      <Footer />
    </>
  )
}