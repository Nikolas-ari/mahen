"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "./components/navbar";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-blue-200 flex flex-col items-center justify-center text-center px-6 pt-28 pb-10">
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-4">
          Smart Laundry Expert System
        </h1>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          System Pakar Ber basis web yang membantu menentukans{" "}
          <span className="font-semibold text-indigo-600">
            jenis layanan laundry terbaik
          </span>{" "}
          berdasarkan kondisi pakaian Anda.  
          Menggunakan metode <span className="font-semibold">Rule-Based</span> dengan
          10 kondisi seperti jenis kain, warna, tingkat kotor, noda, dan kebutuhan khusus.
        </p>

        <Link href="/laundry-expert">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all shadow-lg"
          >
            Mulai Konsultasi
          </motion.button>
        </Link>
      </motion.div>

      {/* Bagian tentang sistem */}
      <motion.div
        id="about"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl"
      >
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all">
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">
            💡 10 Kondisi Penilaian
          </h3>
          <p className="text-gray-600">
            Sistem menganalisis hingga 10 faktor berbeda seperti jenis kain, noda, warna, dan kebutuhan.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all">
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">
            ⚙️ Rekomendasi Otomatis
          </h3>
          <p className="text-gray-600">
            Hasil rekomendasi diberikan secara instan berdasarkan aturan pakar yang telah ditentukan.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all">
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">
            🌐 Ber basis Web Modern
          </h3>
          <p className="text-gray-600">
            Di bangun dengan <strong>Next.js</strong> dan <strong>Tailwind CSS</strong> untuk tampilan cepat, interaktif, dan responsif.
          </p>
        </div>
      </motion.div>

      <footer className="mt-16 text-gray-500 text-sm">
        © {new Date().getFullYear()} Smart Laundry Expert System — Developed by{" "}
        <span className="font-medium text-indigo-600">Tian</span>
      </footer>
    </div>
  );
}
