const CACHE_NAME = 'music-player-tius-cache-v11'; // <--- UBAH INI!
// Definisikan BASE_PATH sesuai nama repositori Anda
const BASE_PATH = '/Radio-Player-Cloud-Music-Tius'; // <-- PASTI ADA AWALAN SLASH, TANPA AKHIR SLASH

const urlsToCache = [
  `${BASE_PATH}/`, // Ini akan menjadi https://tius75.github.io/Radio-Player-Cloud-Music-Tius/
  `${BASE_PATH}/index.html`,
  `${BASE_PATH}/manifest.json`,
  // Font Awesome CSS - Ini URL eksternal, jadi TIDAK perlu BASE_PATH
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
  // Google Fonts CSS - Ini URL eksternal, jadi TIDAK perlu BASE_PATH
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
  // Ikon-ikon PWA Anda (pastikan BASE_PATH ditambahkan di awal)
  `${BASE_PATH}/icons/icon-72x72.png`,
  `${BASE_PATH}/icons/icon-96x96.png`,
  `${BASE_PATH}/icons/logo1.png`,
  `${BASE_PATH}/icons/icon-144x144.png`,
  `${BASE_PATH}/icons/icon-152x152.png`,
  `${BASE_PATH}/icons/icon-192x192.png`,
  `${BASE_PATH}/icons/icon-384x384.png`,
  `${BASE_PATH}/icons/logo.png`,
  // Favicon Anda
  `${BASE_PATH}/favicon-32x32.png`,
  // HAPUS BARIS INI (jika masih ada) KARENA CSS ANDA INLINE DI INDEX.HTML
  // `${BASE_PATH}/style.css`,
  // Tambahkan URL gambar placeholder jika ingin di-cache (URL eksternal TIDAK perlu BASE_PATH)
  'https://picsum.photos/300/300?random=1',
  'https://picsum.photos/300/300?random=2',
  'https://picsum.photos/300/300?random=3',
  'https://picsum.photos/300/300?random=4',
  'https://picsum.photos/300/300?random=5',
  'https://picsum.photos/300/300?random=6',
  'https://picsum.photos/300/300?random=7',
  'https://picsum.photos/300/300?random=8',
  'https://picsum.photos/300/300?random=9',
  'https://picsum.photos/300/300?random=10',
  'https://picsum.photos/300/300?random=19',
  'https://picsum.photos/300/300?random=20',
  'https://picsum.photos/300/300?random=21',
  'https://picsum.photos/300/300?random=22',
  'https://picsum.photos/300/300?random=23',
  'https://picsum.photos/60/60?random=11',
  'https://picsum.photos/60/60?random=12',
  'https://picsum.photos/60/60?random=13',
  'https://picsum.photos/60/60?random=14',
  'https://picsum.photos/60/60?random=15',
  'https://picsum.photos/60/60?random=16',
  'https://picsum.photos/60/60?random=17',
  'https://picsum.photos/60/60?random=18'
];