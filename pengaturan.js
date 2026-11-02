// ============================================================
// PENGATURAN TOKO
// File ini dipakai oleh index.html dan pembayaran.html.
// Cukup ubah tulisan di antara tanda kutip. Jangan hapus tanda kutip,
// koma, atau kurung yang ada.
// ============================================================

// 1. NAMA TOKO (otomatis ikut berubah di judul halaman dan pesan WhatsApp)
var STORE = "Fachrizal Store";

// 2. NOMOR WHATSAPP: awali 62, tanpa 0 di depan, tanpa +, tanpa spasi
var WA_NUMBER = "6289526532553";

// 3. PEMBAYARAN QRIS
//   QRIS_IMAGE : nama file gambar QRIS tokomu. Unggah gambarnya ke GitHub
//                dengan nama yang sama persis (contoh: qris.jpg).
var QRIS_IMAGE = "qris.jpg";

// 4 dan 5. PRODUK: foto (image) dan harga (price)
//   image : nama file foto. Foto bawaan sudah ada di foto.js.
//           Foto baru: unggah ke GitHub lalu tulis nama filenya di sini.
//   price : angka saja, tanpa titik dan tanpa "Rp"  (contoh 1500000)
//   unit  : satuan harga, boleh dihapus barisnya (contoh "pcs" jadi Rp2.000 /pcs)
//   sizes : pilihan ukuran, contoh sizes: [39, 40, 41]. Hapus barisnya kalau tidak ada ukuran.
var PRODUCTS = [
  {
    id: "peci",
    name: "Peci Hitam Polos",
    desc: "Peci hitam polos bahan beludru",
    price: 45000,
    image: "peci.jpg",
    color: "#1b1b1f"
  },
  {
    id: "pulpen",
    name: "Pulpen Hitam",
    desc: "Pulpen tinta hitam",
    price: 2000,
    unit: "pcs",
    image: "pulpen.jpg",
    color: "#2b2f36"
  },
  {
    id: "novel",
    name: "Novel Tenggelamnya Kapal Van der Wijck",
    desc: "Karya Hamka",
    price: 65000,
    image: "novel.jpg",
    color: "#2f6f8f"
  }
];
