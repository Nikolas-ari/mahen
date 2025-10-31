"use client";
import { useState } from "react";
import Link from "next/link";
import { supabase } from "../../lib/supabaseClient"; // pastikan path ini sesuai dengan struktur projectmu

export default function LaundryExpertSystem() {
  const [formData, setFormData] = useState({
    fabricType: "",
    color: "",
    dirtLevel: "",
    hasOilStain: "",
    hasInkStain: "",
    clothesCount: "",
    clothingType: "",
    sensitiveMaterial: "",
    needIron: "",
    needExpress: "",
  });

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const {
      fabricType,
      color,
      dirtLevel,
      hasOilStain,
      hasInkStain,
      clothesCount,
      clothingType,
      sensitiveMaterial,
      needIron,
      needExpress,
    } = formData;

    let recommendation = "Cuci Setrika Reguler";

    if (sensitiveMaterial === "ya" || fabricType === "sutra" || fabricType === "wol") {
      recommendation = "Dry Clean Premium";
    } else if (dirtLevel === "sangat kotor" && (hasOilStain === "ya" || hasInkStain === "ya")) {
      recommendation = "Cuci Kering";
    } else if (needExpress === "ya") {
      recommendation = "Cuci Setrika Express";
    } else if (needIron === "tidak") {
      recommendation = "Cuci Lipat Saja";
    } else if (color === "putih" && dirtLevel !== "ringan") {
      recommendation = "Cuci Setrika Premium (Pemutih Aman)";
    } else if (clothesCount === "banyak" && dirtLevel === "ringan") {
      recommendation = "Cuci Reguler (Kiloan)";
    }

    setResult(recommendation);

    // Simpan hasil konsultasi ke Supabase
    const { error } = await supabase.from("consultations").insert([
      {
        fabric_type: fabricType,
        color,
        dirt_level: dirtLevel,
        has_oil_stain: hasOilStain,
        has_ink_stain: hasInkStain,
        clothes_count: clothesCount,
        clothing_type: clothingType,
        sensitive_material: sensitiveMaterial,
        need_iron: needIron,
        need_express: needExpress,
        recommendation,
      },
    ]);

    if (error) {
      console.error("❌ Gagal menyimpan ke Supabase:", error.message);
      alert("Gagal menyimpan hasil ke database!");
    } else {
      console.log("✅ Data berhasil disimpan ke Supabase!");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-6 text-black">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-center mb-6 text-black">
          🧺 Sistem Pakar Laundry
        </h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Form Select */}
          {[
            { name: "fabricType", label: "Jenis Kain", options: ["Katun", "Sutra", "Wol", "Denim", "Lainnya"] },
            { name: "color", label: "Warna Pakaian", options: ["Putih", "Berwarna", "Gelap"] },
            { name: "dirtLevel", label: "Tingkat Kotor", options: ["Ringan", "Sedang", "Sangat Kotor"] },
            { name: "hasOilStain", label: "Ada Noda Minyak?", options: ["Ya", "Tidak"] },
            { name: "hasInkStain", label: "Ada Noda Tinta?", options: ["Ya", "Tidak"] },
            { name: "clothesCount", label: "Jumlah Pakaian", options: ["Sedikit", "Banyak"] },
            { name: "clothingType", label: "Jenis Pakaian", options: ["Baju", "Celana", "Jas", "Sprei", "Lainnya"] },
            { name: "sensitiveMaterial", label: "Ada Bahan Sensitif?", options: ["Ya", "Tidak"] },
            { name: "needIron", label: "Butuh Disetrika?", options: ["Ya", "Tidak"] },
            { name: "needExpress", label: "Butuh Cepat Selesai?", options: ["Ya", "Tidak"] },
          ].map((field) => (
            <div key={field.name}>
              <label className="block font-medium mb-1">{field.label}</label>
              <select
                name={field.name}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              >
                <option value="">Pilih</option>
                {field.options.map((opt) => (
                  <option key={opt.toLowerCase()} value={opt.toLowerCase()}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          ))}

          {/* Tombol Submit */}
          <div className="md:col-span-2 text-center mt-4">
            <button
              type="submit"
              disabled={loading}
              className={`${
                loading ? "bg-gray-400 cursor-not-allowed" : "bg-black hover:bg-gray-800"
              } text-white font-semibold px-6 py-2 rounded-lg transition-all`}
            >
              {loading ? "Menyimpan..." : "Dapatkan Rekomendasi"}
            </button>
          </div>

          {/* Tombol Kembali */}
          <div className="md:col-span-2 text-center mt-2">
            <Link
              href="/"
              className="inline-block bg-gray-300 hover:bg-gray-400 text-black font-medium px-6 py-2 rounded-lg transition-all"
            >
              ← Kembali ke Beranda
            </Link>
          </div>
        </form>

        {result && (
          <div className="mt-6 p-4 text-center bg-gray-100 border border-gray-300 rounded-xl">
            <h2 className="text-lg font-semibold text-black">Rekomendasi:</h2>
            <p className="text-xl font-bold text-black mt-1">{result}</p>
          </div>
        )}
      </div>
    </div>
  );
}
