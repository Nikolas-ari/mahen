"use client";
import { useState } from "react";
import Link from "next/link";

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

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

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
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-6 text-black">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-center mb-6 text-black">
          🧺 Sistem Pakar Laundry
        </h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Kondisi 1 */}
          <div>
            <label className="block font-medium mb-1">Jenis Kain</label>
            <select name="fabricType" onChange={handleChange} required className="w-full p-2 border rounded">
              <option value="">Pilih</option>
              <option value="katun">Katun</option>
              <option value="sutra">Sutra</option>
              <option value="wol">Wol</option>
              <option value="denim">Denim</option>
              <option value="lainnya">Lainnya</option>
            </select>
          </div>

          {/* Kondisi 2 */}
          <div>
            <label className="block font-medium mb-1">Warna Pakaian</label>
            <select name="color" onChange={handleChange} required className="w-full p-2 border rounded">
              <option value="">Pilih</option>
              <option value="putih">Putih</option>
              <option value="warna">Berwarna</option>
              <option value="gelap">Gelap</option>
            </select>
          </div>

          {/* Kondisi 3 */}
          <div>
            <label className="block font-medium mb-1">Tingkat Kotor</label>
            <select name="dirtLevel" onChange={handleChange} required className="w-full p-2 border rounded">
              <option value="">Pilih</option>
              <option value="ringan">Ringan</option>
              <option value="sedang">Sedang</option>
              <option value="sangat kotor">Sangat Kotor</option>
            </select>
          </div>

          {/* Kondisi 4 */}
          <div>
            <label className="block font-medium mb-1">Ada Noda Minyak?</label>
            <select name="hasOilStain" onChange={handleChange} required className="w-full p-2 border rounded">
              <option value="">Pilih</option>
              <option value="ya">Ya</option>
              <option value="tidak">Tidak</option>
            </select>
          </div>

          {/* Kondisi 5 */}
          <div>
            <label className="block font-medium mb-1">Ada Noda Tinta?</label>
            <select name="hasInkStain" onChange={handleChange} required className="w-full p-2 border rounded">
              <option value="">Pilih</option>
              <option value="ya">Ya</option>
              <option value="tidak">Tidak</option>
            </select>
          </div>

          {/* Kondisi 6 */}
          <div>
            <label className="block font-medium mb-1">Jumlah Pakaian</label>
            <select name="clothesCount" onChange={handleChange} required className="w-full p-2 border rounded">
              <option value="">Pilih</option>
              <option value="sedikit">Sedikit</option>
              <option value="banyak">Banyak</option>
            </select>
          </div>

          {/* Kondisi 7 */}
          <div>
            <label className="block font-medium mb-1">Jenis Pakaian</label>
            <select name="clothingType" onChange={handleChange} required className="w-full p-2 border rounded">
              <option value="">Pilih</option>
              <option value="baju">Baju</option>
              <option value="celana">Celana</option>
              <option value="jas">Jas</option>
              <option value="sprei">Sprei</option>
              <option value="lainnya">Lainnya</option>
            </select>
          </div>

          {/* Kondisi 8 */}
          <div>
            <label className="block font-medium mb-1">Ada Bahan Sensitif?</label>
            <select name="sensitiveMaterial" onChange={handleChange} required className="w-full p-2 border rounded">
              <option value="">Pilih</option>
              <option value="ya">Ya</option>
              <option value="tidak">Tidak</option>
            </select>
          </div>

          {/* Kondisi 9 */}
          <div>
            <label className="block font-medium mb-1">Butuh Disetrika?</label>
            <select name="needIron" onChange={handleChange} required className="w-full p-2 border rounded">
              <option value="">Pilih</option>
              <option value="ya">Ya</option>
              <option value="tidak">Tidak</option>
            </select>
          </div>

          {/* Kondisi 10 */}
          <div>
            <label className="block font-medium mb-1">Butuh Cepat Selesai?</label>
            <select name="needExpress" onChange={handleChange} required className="w-full p-2 border rounded">
              <option value="">Pilih</option>
              <option value="ya">Ya</option>
              <option value="tidak">Tidak</option>
            </select>
          </div>

          <div className="md:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="bg-black hover:bg-gray-800 text-white font-semibold px-6 py-2 rounded-lg transition-all"
            >
              Dapatkan Rekomendasi
            </button>
          </div>

          {/* Tombol Kembali ke Home */}
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
