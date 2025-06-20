const CACHE_NAME = 'music-player-tius-cache-v21'; // <--- UBAH INI! (misal ke v21)
const BASE_PATH = '/tius-Radio';

const urlsToCache = [
  `${BASE_PATH}/`,
  `${BASE_PATH}/index.html`,
  `${BASE_PATH}/manifest.json`,
  // ... (URL Font Awesome dan Google Fonts, tetap sama)
  // Path ikon (tanpa 'icons/')
  `${BASE_PATH}/logo1.png`, // <--- UBAH INI!
  `${BASE_PATH}/logo.png`, // <--- UBAH INI!
  `${BASE_PATH}/favicon-32x32.png`, // Jika favicon juga di root
  // ... (URL picsum.photos, tetap sama)
];
// ... (sisanya kode service worker Anda)
