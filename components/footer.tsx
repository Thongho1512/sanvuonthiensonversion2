import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - Logo, Info & Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-6 pb-6 border-b border-slate-700">
          {/* Company Logo & Info */}
          <div className="lg:col-span-1">
            <div className="mb-6 transition-transform duration-300 hover:scale-105">
              <Image
                src="/logo-removebg-preview.png"
                alt="Thiên Sơn Logo"
                width={180}
                height={72}
                className="h-20 w-auto object-contain drop-shadow-lg"
                priority
              />
            </div>
            <h3 className="font-extrabold text-xl mb-2 text-white">
              Thiên Sơn Landscape
            </h3>
            <p className="text-white text-sm leading-relaxed mb-2">
              Công ty TNHH Sân Vườn Thiên Sơn
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Thiết kế & thi công hồ cá Koi, hòn non bộ, cảnh quan sân vườn
            </p>

            {/* Contact Info */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-emerald-400 flex-shrink-0" />
                <a
                  href="mailto:sanvuonthienson@gmail.com"
                  className="text-white hover:text-emerald-400 transition-colors text-sm"
                >
                  sanvuonthienson@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-emerald-400 flex-shrink-0" />
                <a
                  href="tel:0938386679"
                  className="text-white hover:text-emerald-400 transition-colors text-sm font-semibold"
                >
                  0938 38 66 79
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/SanVuonThienSon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-700 hover:bg-emerald-500 flex items-center justify-center transition-all"
                title="Facebook"
              >
                <span className="text-lg">f</span>
              </a>
              <a
                href="https://www.youtube.com/@sanvuonthienson"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-700 hover:bg-emerald-500 flex items-center justify-center transition-all"
                title="YouTube"
              >
                <span className="text-lg">▶</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-extrabold text-base mb-4 text-white">Dịch Vụ</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/thi-cong-ho-ca-koi"
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-sm"
                >
                  Thi Công Hồ Cá Koi
                </Link>
              </li>
              <li>
                <Link
                  href="/thi-cong-hon-non-bo"
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-sm"
                >
                  Thi Công Hòn Non Bộ
                </Link>
              </li>
              <li>
                <Link
                  href="/thu-vien-cong-trinh"
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-sm"
                >
                  Thư Viện Công Trình
                </Link>
              </li>
              <li>
                <Link
                  href="/lien-he"
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-sm"
                >
                  Liên Hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Branches Info */}
          <div>
            <h3 className="font-extrabold text-base mb-4 text-white">Cơ Sở</h3>
            <ul className="space-y-3">
              <li>
                <p className="font-semibold text-white text-sm mb-1">Cơ Sở 1</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  315 Hùng Vương, TT Ngãi Giao, Châu Đức – BR-VT
                </p>
              </li>
              <li>
                <p className="font-semibold text-white text-sm mb-1">Cơ Sở 2</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Phonghenh, Campuchia
                </p>
              </li>
            </ul>
          </div>

          {/* Main Office */}
          <div className="lg:col-span-2">
            <h3 className="font-extrabold text-base mb-4 text-white">Trụ Sở Chính</h3>
            <div className="flex items-start gap-2">
              <MapPin size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />
              <p className="text-gray-300 text-sm leading-relaxed">
                178/19/33 Trương Thị Hoa, P.Tân Thới Hiệp, Q12, TP.HCM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-4">
          {/* Copyright */}
          <div className="text-xs text-gray-400">
            <p>© 2025 thiensonkoi.com</p>
          </div>

          {/* Policies */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs">
            <Link
              href="/dieu-khoan-dich-vu"
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              Điều Khoản Dịch Vụ
            </Link>
            <span className="text-gray-500 hidden sm:inline">|</span>
            <Link
              href="/chinh-sach-bao-mat"
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              Chính Sách Bảo Mật
            </Link>
            <span className="text-gray-500 hidden sm:inline">|</span>
            <Link
              href="/chinh-sach-thanh-toan"
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              Chính Sách Thanh Toán
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}