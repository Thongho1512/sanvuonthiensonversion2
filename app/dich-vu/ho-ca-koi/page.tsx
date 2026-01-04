import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceHero } from "@/components/service-hero"
import { ServiceFeatures } from "@/components/service-features"
import { ServiceProcess } from "@/components/service-process"
import { ServiceGallery } from "@/components/service-gallery"
import { ServiceCTA } from "@/components/service-cta"
import { RelatedServices } from "@/components/related-services"
import { KoiPondBenefits } from "@/components/koi-pond-benefits"
import { KoiFengShui } from "@/components/koi-feng-shui"
import { KoiPondStandards } from "@/components/koi-pond-standards"
import { KoiPondLocations } from "@/components/koi-pond-locations"
import { KoiPondStructure } from "@/components/koi-pond-structure"
import { KoiPondCommitment } from "@/components/koi-pond-commitment"
import { KoiPondShapes } from "@/components/koi-pond-shapes"

export const metadata: Metadata = {
  title: "Thi Công Hồ Cá Koi Chuẩn Nhật Bản | Thiên Sơn Landscape",
  description:
    "Chuyên thiết kế thi công hồ cá Koi đẹp theo tiêu chuẩn Nhật Bản. Hệ thống lọc hiện đại, bảo hành 5 năm. Tư vấn miễn phí 24/7. Hotline: 0938 38 66 79",
  keywords: [
    "hồ cá koi",
    "thi công hồ koi",
    "thiết kế hồ koi",
    "hồ koi nhật bản",
    "xây hồ koi",
    "hồ cá koi đẹp",
    "làm hồ cá koi",
    "hồ koi chuẩn nhật",
    "giá hồ cá koi",
    "thi công hồ cá koi tphcm",
    "hồ cá koi mini",
    "thiết kế hồ cá koi sân vườn"
  ],
  openGraph: {
    title: "Thi Công Hồ Cá Koi Chuẩn Nhật Bản | Thiên Sơn",
    description: "Chuyên thiết kế thi công hồ cá Koi đẹp. Hệ thống lọc hiện đại, bảo hành 5 năm",
    images: ["/beautiful-japanese-koi-pond-with-colorful-koi-fish.jpg"],
  },
}

const features = [
  {
    icon: "Waves",
    title: "Thiết kế theo tiêu chuẩn Nhật Bản",
    description: "Áp dụng các nguyên tắc thiết kế hồ Koi truyền thống Nhật Bản với tỷ lệ vàng, đảm bảo tính thẩm mỹ cao và môi trường sống lý tưởng cho cá Koi phát triển khỏe mạnh.",
  },
  {
    icon: "Filter",
    title: "Hệ thống lọc đa tầng hiện đại",
    description: "Trang bị hệ thống lọc 3-4 tầng (lọc cơ, lọc sinh học, lọc UV), máy bơm tiết kiệm điện, hệ thống sục khí tự động duy trì chất lượng nước tối ưu 24/7.",
  },
  {
    icon: "Thermometer",
    title: "Kiểm soát nhiệt độ thông minh",
    description: "Hệ thống điều hòa nhiệt độ tự động, máy sưởi/làm mát phù hợp khí hậu nhiệt đới Việt Nam, giúp cá Koi thoải mái quanh năm.",
  },
  {
    icon: "Wrench",
    title: "Thi công bởi nghệ nhân chuyên nghiệp",
    description: "Đội ngũ nghệ nhân với hơn 15 năm kinh nghiệm, đào tạo bài bản về xây dựng hồ Koi, thi công theo quy trình nghiêm ngặt từng bước.",
  },
  {
    icon: "ShieldCheck",
    title: "Chống thấm tuyệt đối - Bảo hành 5 năm",
    description: "Sử dụng màng chống thấm HDPE cao cấp nhập khẩu hoặc sơn Epoxy chuyên dụng, đảm bảo không rò rỉ, nứt vỡ. Bảo hành kết cấu 5 năm.",
  },
  {
    icon: "Trees",
    title: "Thiết kế cảnh quan tích hợp hài hòa",
    description: "Kết hợp hồ Koi với sân vườn, thác nước, đá non bộ, ánh sáng cảnh quan tạo nên không gian thư giãn hoàn hảo, tăng giá trị bất động sản.",
  },
]

const processSteps = [
  {
    number: "01",
    title: "Tư vấn & Khảo sát chi tiết",
    description: "Nghệ nhân trực tiếp đến tận nơi khảo sát miễn phí, đo đạc chính xác, tư vấn thiết kế phù hợp với không gian, phong thủy và ngân sách của bạn.",
  },
  {
    number: "02",
    title: "Thiết kế 3D & Báo giá minh bạch",
    description: "Bản vẽ 3D chi tiết giúp bạn hình dung rõ công trình theo yêu cầu trước khi thi công, lựa chọn vật liệu và trang thiết bị. Báo giá chi tiết từng hạng mục, minh bạch 100%.",
  },
  {
    number: "03",
    title: "Thi công chuẩn theo bản vẽ thiết kế",
    description: "Thi công theo đúng bản vẽ đã duyệt, giám sát chất lượng chặt chẽ từng công đoạn, đảm bảo tiến độ và an toàn tuyệt đối.",
  },
  {
    number: "04",
    title: "Lắp đặt hệ thống lọc, xử lý nước",
    description: "Lắp đặt hệ thống lọc nước hiện đại, hướng dẫn vận hành và bàn giao công trình hoàn thiện với chế độ bảo hành dài hạn.",
  },
]

const galleryImages = [
  {
    src: "/koi-pond-luxury-villa-night-lighting-waterfall.jpg",
    alt: "Hồ Koi biệt thự cao cấp với hệ thống đèn LED đẹp lung linh",
    caption: "Hồ Koi biệt thự Vinhomes - 50m²",
  },
  {
    src: "/japanese-style-koi-pond-with-bridge-and-lantern.jpg",
    alt: "Hồ Koi phong cách Nhật Bản với cầu gỗ và đèn lồng",
    caption: "Hồ Koi phong cách Nhật - Resort Nha Trang",
  },
  {
    src: "/modern-koi-pond-glass-wall-viewing-panel.jpg",
    alt: "Hồ Koi hiện đại với tấm kính ngắm cá độc đáo",
    caption: "Hồ Koi kính - Penthouse Quận 1",
  },
  {
    src: "/natural-koi-pond-with-rocks-and-waterfall.jpg",
    alt: "Hồ Koi tự nhiên với thác nước và đá tự nhiên",
    caption: "Hồ Koi tự nhiên - Biệt thự Thảo Điền",
  },
  {
    src: "/koi-pond-with-wooden-deck-and-gazebo.jpg",
    alt: "Hồ Koi với sàn gỗ và chòi nghỉ sang trọng",
    caption: "Hồ Koi sàn gỗ - Villa Đà Lạt",
  },
  {
    src: "/indoor-koi-pond-lobby-design.jpg",
    alt: "Hồ Koi trong nhà thiết kế hiện đại",
    caption: "Hồ Koi sảnh - Khách sạn 5 sao",
  },
]

const relatedServices = [
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

export default function KoiPondServicePage() {
  return (
    <>
      <Header />
      <main>
        <ServiceHero
          title="Thi Công Hồ Cá Koi"
          subtitle="Dịch vụ chuyên nghiệp"
          description="Thiết kế và thi công hồ cá Koi theo tiêu chuẩn Nhật Bản, kết hợp kỹ thuật hiện đại và nghệ thuật truyền thống để tạo nên không gian sống lý tưởng cho cá Koi."
          image="/beautiful-japanese-koi-pond-with-colorful-koi-fish.jpg"
          breadcrumbs={[{ label: "Dịch vụ", href: "/dich-vu" }, { label: "Hồ cá Koi" }]}
        />
        
        <KoiPondBenefits />
        
        <KoiFengShui />
        
        <ServiceFeatures 
          title="Tại sao chọn dịch vụ của chúng tôi" 
          subtitle="Ưu điểm vượt trội" 
          features={features} 
        />
        
        <ServiceProcess 
          title="Quy trình thi công" 
          subtitle="4 bước chuyên nghiệp" 
          steps={processSteps} 
        />
        
        <KoiPondStandards />

        <KoiPondShapes />
        
        <KoiPondLocations />
        
        <KoiPondStructure />
        
        <ServiceGallery 
          title="Dự án hồ Koi tiêu biểu" 
          subtitle="Công trình thực tế" 
          images={galleryImages} 
        />
        
        <KoiPondCommitment />
        
        <ServiceCTA
          title="Bạn muốn sở hữu một hồ cá Koi đẳng cấp?"
          description="Liên hệ ngay để được nghệ nhân tư vấn miễn phí tận nơi và nhận báo giá chi tiết cho dự án của bạn."
        />
        
        <RelatedServices 
          currentService="Thi Công Hồ Cá Koi" 
          services={relatedServices} 
        />
      </main>
      <Footer />
    </>
  )
}