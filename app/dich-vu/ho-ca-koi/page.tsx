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
    "Chuyên thiết kế thi công hồ cá Koi đẹp theo tiêu chuẩn Nhật Bản. Hệ thống lọc hiện đại, bảo hành 10 năm. Tư vấn miễn phí 24/7. Hotline: 0907 99 77 59",
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
    description: "Chuyên thiết kế thi công hồ cá Koi đẹp. Hệ thống lọc hiện đại, bảo hành 10 năm",
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
    icon: "Trees",
    title: "Thiết kế cảnh quan tích hợp hài hòa",
    description: "Kết hợp hồ Koi với sân vườn, thác nước, đá non bộ, ánh sáng cảnh quan tạo nên không gian thư giãn hoàn hảo, tăng giá trị bất động sản.",
  },
]

// === QUY TRÌNH THI CÔNG MỚI - ĐÚNG THEO ẢNH ===
const processSteps = [
  {
    number: "01",
    title: "Khảo sát địa điểm thi công thực tế",
    description: "Khảo sát địa điểm thi công thực tế. Tiên hành vẽ sơ bộ hồ cá, lấy thêm ý tưởng khách hàng muốn làm thêm cảnh quan của hồ.",
  },
  {
    number: "02",
    title: "Lên ý tưởng & Thiết kế 3D",
    description: "Lên ý tưởng về thiết kế 3D. Thiết kế vị trí hồ cá, độ dài, độ rộng, độ hợp nhất với mệnh của gia chủ, để hồ cá koi phong thủy nhất.",
  },
  {
    number: "03",
    title: "Thi công theo đúng bản vẽ thiết kế",
    description: "Thi công theo đúng bản vẽ thiết kế lắp đặt hệ thống lọc: hệ thống này giúp làm sạch, không cặn, không rêu, sạch mùi tanh, hệ thống này làm sạch đến 63%, các hệ thống dưới đây giúp sạch hồ cá triệt để.",
  },
  {
    number: "04",
    title: "Bảo hành dài hạn",
    description: "Bảo hành dài hạn. Các trường hợp bảo hành sẽ được ghi nhận và xử lý trong vòng 24h trong ngày làm việc hành chính từ thứ 2 – thứ 6, thứ 7 chủ nhật và các ngày nghỉ lễ chỉ hỗ trợ các trường hợp khẩn cấp.",
  },
]

const galleryImages = [
  {
    src: "/15.jpg",
    alt: "Hồ Koi biệt thự cao cấp với hệ thống đèn LED đẹp lung linh",
  },
  {
    src: "/16.jpg",
    alt: "Hồ Koi phong cách Nhật Bản với cầu gỗ và đèn lồng",
  },
  {
    src: "/23.jpg",
    alt: "Hồ Koi hiện đại với tấm kính ngắm cá độc đáo",
  },
  {
    src: "/28.png",
    alt: "Hồ Koi tự nhiên với thác nước và đá tự nhiên",
  },
  {
    src: "/32.jpg",
    alt: "Hồ Koi với sàn gỗ và chòi nghỉ sang trọng",
  },
]

const relatedServices = [
  {
    title: "Hòn Non Bộ & Tiểu Cảnh",
    description: "Tạo tác hòn non bộ, tiểu cảnh nghệ thuật theo phong thủy",
    image: "/43.jpg",
    href: "/dich-vu/hon-non-bo",
  },
  {
    title: "Thiết Kế Sân Vườn",
    description: "Quy hoạch và thiết kế sân vườn biệt thự, resort cao cấp",
    image: "/44.jpg",
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
          image="/42.jpg"
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
          title="Quy trình thi công hồ cá Koi" 
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