const CACHE_NAME = 'music-player-tius-cache-v19'; // <--- UBAH INI!
const BASE_PATH = '/tius-Radio'; // <--- UBAH INI!

const urlsToCache = [
  `${BASE_PATH}/`,
  `${BASE_PATH}/index.html`,
  `${BASE_PATH}/manifest.json`,
  // URL eksternal tetap sama
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
  // Path ikon (dengan BASE_PATH baru)
  `${BASE_PATH}/icons/logo1.png`,
  `${BASE_PATH}/icons/logo.png`,
  `${BASE_PATH}/favicon-32x32.png`,
  // ... (URL picsum lainnya, pastikan tidak ada BASE_PATH di depannya karena itu URL eksternal)
];
// ... sisanya
