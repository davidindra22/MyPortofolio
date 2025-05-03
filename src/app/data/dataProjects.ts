const projects = [
  {
    id: 1,
    title: "Website Wisata Watu Aji",
    description:
      "Wisata Watu aji adalah platform yang menampilkan informasi mengenai destinasi wisata dan UMKM di Desa Watu Aji.  Pengunjung situs dapat menemukan berbagai pilihan wisata alam, seperti pemandangan pegunungan, Camping Ground, serta spot-spot bersejarah atau budaya lokal. Selain itu, terdapat juga informasi mengenai produk-produk UMKM lokal, seperti kerajinan tangan, makanan khas, dan produk lokal lainnya yang dapat dibeli langsung dari para pelaku usaha di desa tersebut. Situs ini menyediakan fitur untuk reservasi wisata, beli tiket wisata, dan beli UMKM.",
    image: "/assets/bg-web-wisata.png",
    link: "https://wisatawatuaji.com/",
    github: "https://github.com/davidindra22",
    slug: "wisata-watu-aji",
    technologies: ["ReactJS", "MySQL", "Bootstrap", "JavaScript", "Vite"],
    features: [
      {
        bold: "Manajemen Wisata",
        desc: " – Admin dapat menambahkan, mengedit, atau menghapus destinasi wisata, lengkap dengan informasi seperti deskripsi, harga tiket, jam operasional, dan gambar.",
      },
      {
        bold: "Manajemen UMKM",
        desc: " – Admin dapat menambahkan, mengedit, atau menghapus produk UMKM, lengkap dengan informasi seperti deskripsi, harga, dan gambar.",
      },
      {
        bold: "Manajemen Berita",
        desc: " – Admin dapat mempublikasikan berita terbaru, update acara desa, serta artikel seputar perkembangan Desa Watu Aji.",
      },
      {
        bold: "Analitik Pengunjung",
        desc: " – Fitur statistik yang memberikan data tentang jumlah pengunjung website, halaman yang paling sering dikunjungi, serta interaksi pengguna.",
      },
      {
        bold: "Upload & Media Library",
        desc: " – Admin dapat dengan mudah mengunggah foto dan video yang bisa digunakan dalam berbagai halaman website.",
      },
    ],
  },
  {
    id: 2,
    title: "Clone IMBD",
    description:
      "Website ini adalah IMDB Clone, sebuah platform yang meniru fitur utama dari IMDb dengan tampilan dan fungsionalitas yang disesuaikan. Website ini dibangun dengan framework Next.js, Tailwind CSS, dan MongoDB, sehingga memiliki performa cepat, desain modern, dan penyimpanan data yang scalable. Dengan kombinasi Next.js untuk pengembangan frontend, Tailwind CSS untuk desain responsif, dan MongoDB sebagai sistem basis data, website ini menawarkan pengalaman yang optimal bagi pengguna. Website ini memanfaatkan API untuk mengambil data film terbaru, termasuk detail seperti judul, tanggal rilis, deskripsi, rating, dan popularitas.",
    image: "/assets/bg-web-imdbClone.png",
    link: "https://next-imdb-orcin.vercel.app/",
    github: "https://github.com/davidindra22/next-imdb",
    slug: "wisata-clone-IMDB",
    technologies: ["NextJS", "MongoDB", "TailwindCSS", "Git"],
    features: [
      {
        bold: "Trending & Top Rated",
        desc: " – Menampilkan daftar film populer dan berperingkat tinggi berdasarkan ulasan pengguna.",
      },
      {
        bold: "Search System",
        desc: " – Memungkinkan pengguna untuk mencari film berdasarkan judul atau kata kunci yang relevan.",
      },
      {
        bold: "Film Details",
        desc: " – Setiap film memiliki halaman khusus yang berisi sinopsis, tanggal rilis, dan informasi lainnya.",
      },
    ],
  },
];

export default projects;
