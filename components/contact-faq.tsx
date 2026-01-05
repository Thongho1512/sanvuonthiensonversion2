"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown, MessageCircleQuestion } from "lucide-react"

const faqs = [
  {
    question: "Chi phí tư vấn và khảo sát có miễn phí không?",
    answer:
      "Có, chúng tôi hoàn toàn miễn phí tư vấn và khảo sát tại nhà trong bán kính 50km từ văn phòng. Đội ngũ kỹ sư sẽ đến tận nơi để đo đạc, tư vấn thiết kế và báo giá chi tiết.",
  },
  {
    question: "Thời gian thi công một hồ cá Koi mất bao lâu?",
    answer:
      "Tùy thuộc vào quy mô và độ phức tạp, thời gian thi công dao động từ 2-6 tuần. Hồ cá Koi nhỏ (dưới 20m³) thường hoàn thành trong 2-3 tuần, hồ lớn hơn có thể mất 4-6 tuần.",
  },
  {
    question: "Thiên Sơn có bảo hành công trình không?",
    answer:
      "Có, tất cả công trình của Thiên Sơn được bảo hành 15 năm về kết cấu, chống thấm và hệ thống lọc. Chúng tôi cũng cung cấp dịch vụ bảo trì định kỳ với mức phí ưu đãi.",
  },
  {
    question: "Tôi có thể xem các mẫu thiết kế trước khi thi công không?",
    answer:
      "Chắc chắn rồi! Sau khi khảo sát, đội ngũ thiết kế sẽ cung cấp bản vẽ 3D chi tiết để bạn hình dung được công trình hoàn thiện. Bạn có thể điều chỉnh cho đến khi hài lòng 100%.",
  },
  {
    question: "Thiên Sơn có thi công ở tỉnh thành khác không?",
    answer:
      "Có, chúng tôi nhận thi công trên toàn quốc. Đối với các tỉnh thành ngoài TP.HCM và Hà Nội, sẽ có phụ phí vận chuyển và di chuyển tùy theo khoảng cách.",
  },
]
