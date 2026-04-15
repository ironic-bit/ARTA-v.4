export interface Arsip {
  id: string;
  kodeKlasifikasi: string;
  nomorSurat: string;
  judul: string;
  jenisNaskah: string;
  klasifikasiKeamanan: "SR" | "R" | "T" | "B";
  tahun: number;
  tanggalSurat: string;
  deskripsi: string;
  retensiAktif: number;
  retensiInaktif: number;
  keteranganRetensi: "Musnah" | "Permanen";
  statusArsip: "Aktif" | "Inaktif";
  linkCloud: string;
  tanggalRegistrasi: string;
  registeredBy: string;
}

// Kode Klasifikasi Arsip sesuai Perwako Sungai Penuh No 49/2022
export const KODE_KLASIFIKASI = [
  // UMUM - 000
  { kode: "000", nama: "UMUM" },
  { kode: "000.1", nama: "KETATAUSAHAAN DAN KERUMAHTANGGAAN" },
  { kode: "000.1.1", nama: "Telekomunikasi" },
  { kode: "000.1.2", nama: "Perjalanan Dinas Dalam Negeri" },
  { kode: "000.1.2.1", nama: "Perjalanan Dinas Kepala Daerah" },
  { kode: "000.1.2.2", nama: "Perjalanan Dinas DPRD" },
  { kode: "000.1.2.3", nama: "Perjalanan Dinas Pegawai" },
  { kode: "000.1.3", nama: "Perjalanan Dinas Luar Negeri" },
  { kode: "000.1.3.1", nama: "Perjalanan Dinas Kepala Daerah" },
  { kode: "000.1.3.2", nama: "Perjalanan Dinas DPRD" },
  { kode: "000.1.3.3", nama: "Perjalanan Dinas Pegawai" },
  { kode: "000.1.4", nama: "Penggunaan Fasilitas Kantor" },
  { kode: "000.1.5", nama: "Rapat pimpinan" },
  { kode: "000.1.6", nama: "Penyediaan Konsumsi" },
  { kode: "000.1.7", nama: "Pengurusan Kendaraan Dinas" },
  { kode: "000.1.8", nama: "Pemeliharaan Gedung, Taman dan Peralatan Kantor" },
  { kode: "000.1.9", nama: "Pengelolaan Jaringan Listrik, Air, Telepon dan Komputer" },
  { kode: "000.1.10", nama: "Ketertiban dan Keamanan" },
  { kode: "000.1.11", nama: "Administrasi Pengelolaan Parkir" },
  { kode: "000.1.12", nama: "Administrasi Pakaian Dinas Pegawai" },
  
  { kode: "000.2", nama: "PERLENGKAPAN" },
  { kode: "000.2.1", nama: "Inventarisasi dan Penyimpanan" },
  { kode: "000.2.2", nama: "Pemeliharaan peralatan kantor" },
  { kode: "000.2.3", nama: "Distribusi" },
  { kode: "000.2.4", nama: "Penghapusan Barang Milik Daerah" },
  { kode: "000.2.5", nama: "Pengelolaan Database Barang Milik Daerah" },
  
  { kode: "000.3", nama: "PENGADAAN" },
  { kode: "000.3.1", nama: "Rencana Pengadaan Barang dan Jasa" },
  { kode: "000.3.2", nama: "Pengadaan Langsung" },
  { kode: "000.3.3", nama: "Pengadaan Tidak Langsung/Lelang" },
  { kode: "000.3.4", nama: "Swakelola" },
  { kode: "000.3.5", nama: "Pengolahan Sistem Informasi Pengadaan" },
  { kode: "000.3.6", nama: "Monitoring dan Evaluasi" },

  { kode: "000.4", nama: "PERPUSTAKAAN" },
  { kode: "000.5", nama: "KEARSIPAN" },
  { kode: "000.5.1", nama: "Kebijakan di Bidang Kearsipan" },
  { kode: "000.5.2", nama: "Pembinaan Kearsipan" },
  { kode: "000.5.3", nama: "Pengelolaan Arsip Dinamis" },
  { kode: "000.5.4", nama: "Program Arsip Vital" },
  { kode: "000.5.5", nama: "Pengelolaan Arsip Terjaga" },
  { kode: "000.5.6", nama: "Penyusutan Arsip" },
  { kode: "000.5.7", nama: "Alih Media Arsip" },
  { kode: "000.5.8", nama: "Database Pengelolaan Arsip Dinamis" },
  { kode: "000.5.9", nama: "Pengelolaan Arsip Statis" },
  { kode: "000.5.10", nama: "Jasa Kearsipan" },
  { kode: "000.5.11", nama: "Pengelolaan SIKN dan JIKN" },
  { kode: "000.5.12", nama: "Pelindungan dan Penyelamatan Arsip Akibat Bencana" },
  { kode: "000.5.13", nama: "Penyelamatan Arsip Perangkat Daerah" },
  { kode: "000.5.14", nama: "Penerbitan Izin Penggunaan Arsip Tertutup" },
  { kode: "000.5.15", nama: "Pengawasan Kearsipan" },
  
  { kode: "000.6", nama: "PERSANDIAN" },
  { kode: "000.7", nama: "PERENCANAAN PEMBANGUNAN" },
  { kode: "000.8", nama: "ORGANISASI DAN TATA LAKSANA" },
  { kode: "000.9", nama: "PENELITIAN, PENGKAJIAN, DAN PENGEMBANGAN" },

  // PEMERINTAHAN - 100
  { kode: "100", nama: "PEMERINTAHAN" },
  { kode: "100.1", nama: "OTONOMI DAERAH" },
  { kode: "100.1.1", nama: "Kebijakan di bidang Otonomi Daerah" },
  { kode: "100.1.2", nama: "Penyelenggaraan Pemerintah Daerah" },
  { kode: "100.1.3", nama: "Penataan Daerah, Pembinaan Daerah Pemekaran, Otonomi Khusus" },
  { kode: "100.1.4", nama: "Pemilihan Kepala Daerah, DPRD, dan Hubungan Antar Lembaga" },
  { kode: "100.1.5", nama: "Peningkatan Kapasitas Dan Evaluasi Kinerja Daerah" },
  { kode: "100.1.6", nama: "LKPJ/LKPJAMJ dan LPPD" },

  { kode: "100.2", nama: "PEMERINTAHAN UMUM" },
  { kode: "100.2.1", nama: "Kebijakan di bidang Pemerintahan Umum" },
  { kode: "100.2.2", nama: "Dekonsentrasi dan Kerjasama" },
  { kode: "100.2.3", nama: "Wilayah Administrasi dan Perbatasan" },

  { kode: "100.3", nama: "HUKUM" },
  { kode: "100.3.1", nama: "Program Legislasi" },
  { kode: "100.3.2", nama: "Rancangan Peraturan Perundang-Undangan" },
  { kode: "100.3.3", nama: "Keputusan/Ketetapan Pimpinan Pemerintah" },
  { kode: "100.3.4", nama: "Instruksi/Surat Edaran" },
  { kode: "100.3.5", nama: "Surat Perintah" },
  { kode: "100.3.6", nama: "Standar/Pedoman/Prosedur Kerja/Petunjuk Pelaksanaan" },
  { kode: "100.3.7", nama: "Nota Kesepakatan/MoU/Kontrak/Perjanjian Kerja Sama" },
  { kode: "100.3.8", nama: "Dokumentasi Hukum" },
  { kode: "100.3.9", nama: "Sosialisasi/Penyuluhan/Pembinaan Hukum" },
  { kode: "100.3.10", nama: "Bantuan/Konsultasi Hukum/Advokasi" },
  { kode: "100.3.11", nama: "Kasus/Sengketa Hukum" },
  { kode: "100.3.12", nama: "Perijinan" },
  { kode: "100.3.13", nama: "Hak atas Kekayaan Intelektual (HaKI)" },

  // POLITIK - 200
  { kode: "200", nama: "POLITIK" },
  { kode: "200.1", nama: "KESATUAN BANGSA DAN POLITIK" },
  { kode: "200.1.1", nama: "Kebijakan di bidang Kesatuan Bangsa dan Politik" },
  { kode: "200.1.2", nama: "Bina Ideologi dan Wawasan Kebangsaan" },
  { kode: "200.1.3", nama: "Kewaspadaan Nasional" },
  { kode: "200.1.4", nama: "Ketahanan Seni, Budaya, Adat, Agama, dan Kemasyarakatan" },
  { kode: "200.1.5", nama: "Politik Dalam Negeri" },
  { kode: "200.1.6", nama: "Ketahanan Ekonomi" },
  
  { kode: "200.2", nama: "PEMILU" },
  { kode: "200.2.1", nama: "Kebijakan di bidang Pemilu" },
  { kode: "200.2.2", nama: "Pemutakhiran dan Penyusunan Daftar Pemilih" },
  { kode: "200.2.3", nama: "Pendaftaran dan Verifikasi Peserta Pemilu" },
  { kode: "200.2.4", nama: "Penetapan Peserta Pemilu" },
  { kode: "200.2.5", nama: "Pencalonan Pemilu" },
  { kode: "200.2.6", nama: "Kampanye Pemilu" },
  { kode: "200.2.7", nama: "Dana Kampanye" },
  { kode: "200.2.8", nama: "Pemungutan dan Penghitungan Suara" },
  { kode: "200.2.9", nama: "Penetapan Hasil Pemilu" },
  { kode: "200.2.10", nama: "Perselisihan Hasil Pemilu" },
  { kode: "200.2.11", nama: "Laporan hasil penyelenggaraan Pemilu" },

  // KEAMANAN DAN KETERTIBAN - 300
  { kode: "300", nama: "KEAMANAN DAN KETERTIBAN" },
  { kode: "300.1", nama: "SATUAN POLISI PAMONG PRAJA" },
  { kode: "300.2", nama: "PENANGGULANGAN BENCANA, PENCARIAN, DAN PERTOLONGAN" },

  // KESEJAHTERAAN RAKYAT - 400
  { kode: "400", nama: "KESEJAHTERAAN RAKYAT" },
  { kode: "400.1", nama: "PEMBANGUNAN DAERAH TERTINGGAL" },
  { kode: "400.2", nama: "PEMBERDAYAAN PEREMPUAN DAN PERLINDUNGAN ANAK" },
  { kode: "400.3", nama: "PENDIDIKAN" },
  { kode: "400.4", nama: "KEOLAHRAGAAN" },
  { kode: "400.5", nama: "KEPEMUDAAN" },
  { kode: "400.6", nama: "KEBUDAYAAN" },
  { kode: "400.7", nama: "KESEHATAN" },
  { kode: "400.8", nama: "AGAMA DAN KEPERCAYAAN" },
  { kode: "400.9", nama: "SOSIAL" },
  { kode: "400.10", nama: "PEMBERDAYAAN MASYARAKAT DESA" },
  { kode: "400.11", nama: "PERTAMANAN DAN PEMAKAMAN" },
  { kode: "400.12", nama: "KEPENDUDUKAN DAN CATATAN SIPIL" },
  { kode: "400.13", nama: "KELUARGA BERENCANA" },
  { kode: "400.14", nama: "HUBUNGAN MASYARAKAT" },

  // PEREKONOMIAN - 500
  { kode: "500", nama: "PEREKONOMIAN" },
  { kode: "500.1", nama: "KETAHANAN PANGAN" },
  { kode: "500.2", nama: "PERDAGANGAN" },
  { kode: "500.3", nama: "KOPERASI DAN USAHA KECIL MENENGAH" },
  { kode: "500.4", nama: "KEHUTANAN" },
  { kode: "500.5", nama: "KELAUTAN DAN PERIKANAN" },
  { kode: "500.6", nama: "PERTANIAN" },
  { kode: "500.7", nama: "PETERNAKAN" },
  { kode: "500.8", nama: "PERKEBUNAN" },
  { kode: "500.9", nama: "PERINDUSTRIAN" },
  { kode: "500.10", nama: "ENERGI DAN SUMBER DAYA MINERAL" },
  { kode: "500.11", nama: "PERHUBUNGAN" },
  { kode: "500.12", nama: "KOMUNIKASI DAN INFORMATIKA" },
  { kode: "500.13", nama: "PARIWISATA DAN EKONOMI KREATIF" },
  { kode: "500.14", nama: "STATISTIK" },
  { kode: "500.15", nama: "KETENAGAKERJAAN" },
  { kode: "500.16", nama: "PENANAMAN MODAL" },
  { kode: "500.17", nama: "PERTANAHAN" },
  { kode: "500.18", nama: "TRANSMIGRASI" },

  // PEKERJAAN UMUM DAN KETENAGAAN UMUM - 600
  { kode: "600", nama: "PEKERJAAN UMUM DAN KETENAGAAN UMUM" },
  { kode: "600.1", nama: "PEKERJAAN UMUM" },
  { kode: "600.2", nama: "PERUMAHAN RAKYAT DAN KAWASAN PEMUKIMAN" },
  { kode: "600.3", nama: "TATA RUANG (TATA KOTA)" },
  { kode: "600.4", nama: "LINGKUNGAN HIDUP" },

  // PENGAWASAN - 700
  { kode: "700", nama: "PENGAWASAN" },
  { kode: "700.1", nama: "PENGAWASAN INTERNAL" },

  // KEPEGAWAIAN - 800
  { kode: "800", nama: "KEPEGAWAIAN" },
  { kode: "800.1", nama: "SUMBER DAYA MANUSIA" },
  { kode: "800.2", nama: "PENDIDIKAN DAN PELATIHAN" },

  // KEUANGAN - 900
  { kode: "900", nama: "KEUANGAN" },
  { kode: "900.1", nama: "KEUANGAN DAERAH" },

] as const;

// Jenis Naskah Dinas sesuai Perwako 31/2023
export const JENIS_NASKAH = [
  { value: "Surat Masuk", label: "Surat Masuk" },
  { value: "Surat Keluar", label: "Surat Keluar" },
  { value: "Keputusan", label: "Keputusan" },
  { value: "Peraturan", label: "Peraturan" },
  { value: "Nota Dinas", label: "Nota Dinas" },
  { value: "Memo", label: "Memo" },
  { value: "Disposisi", label: "Disposisi" },
  { value: "Surat Perintah", label: "Surat Perintah" },
  { value: "Surat Tugas", label: "Surat Tugas" },
  { value: "Surat Perjalanan Dinas", label: "Surat Perjalanan Dinas" },
  { value: "Surat Edaran", label: "Surat Edaran" },
  { value: "Surat Kuasa", label: "Surat Kuasa" },
  { value: "Berita Acara", label: "Berita Acara" },
  { value: "Surat Keterangan", label: "Surat Keterangan" },
  { value: "Surat Pengantar", label: "Surat Pengantar" },
  { value: "Pengumuman", label: "Pengumuman" },
  { value: "Laporan", label: "Laporan" },
  { value: "Telaahan Staf", label: "Telaahan Staf" },
  { value: "Notula", label: "Notula" },
  { value: "Surat Undangan", label: "Surat Undangan" },
  { value: "Surat Izin", label: "Surat Izin" },
  { value: "Rekomendasi", label: "Rekomendasi" },
  { value: "Sertifikat", label: "Sertifikat" },
  { value: "Piagam", label: "Piagam" },
  { value: "Surat Perjanjian", label: "Surat Perjanjian" },
  { value: "SOP", label: "Standar Operasional Prosedur" },
  { value: "Lainnya", label: "Lainnya" },
] as const;

// Klasifikasi Keamanan sesuai Perwako 31/2023
export const KLASIFIKASI_KEAMANAN = [
  { value: "B", label: "Biasa/Terbuka", color: "bg-green-100 text-green-800 border-green-200" },
  { value: "T", label: "Terbatas", color: "bg-yellow-100 text-yellow-800 border-yellow-200" },
  { value: "R", label: "Rahasia", color: "bg-orange-100 text-orange-800 border-orange-200" },
  { value: "SR", label: "Sangat Rahasia", color: "bg-red-100 text-red-800 border-red-200" },
] as const;

// Retensi Arsip sesuai Perwako 11/2025
export const KETERANGAN_RETENSI = [
  { value: "Musnah", label: "Musnah", color: "bg-slate-100 text-slate-800" },
  { value: "Permanen", label: "Permanen", color: "bg-blue-100 text-blue-800" },
] as const;

export const STATUS_ARSIP = [
  { value: "Aktif", label: "Aktif", color: "bg-emerald-100 text-emerald-800" },
  { value: "Inaktif", label: "Inaktif", color: "bg-amber-100 text-amber-800" },
] as const;
