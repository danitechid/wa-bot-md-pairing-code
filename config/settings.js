/*
 * Information
 * Creator / Developer: Dani Ramdani (Dani Techno.) - FullStack Engineer
 * Contact creator / Developer: 0895 1254 5999 (WhatsApp), contact@danitechno.com (Email)
*/

/* Thanks to
 * Dani Techno. - FullStack Engineer (Creator / Developer)
 * daniapi.biz.id (API provider)
 * api.caliph.biz.id (API provider)
 * @danitech/scraper (Scraper provider)
 * @whiskeysockets/baileys (Library "Baileys" provider)
 * @adiwajshing/keyed-db
 * @hapi/boom
 * pino
 * qrcode-terminal
 * chalk
 * mongoose
 * node-cron
 * nodemon
 * other
*/

/*
true = enable,
false = disable.

understand?
*/

module.exports = {
  pairing_mode: true,
  session_folder_name: 'session',
  browser: ["Chrome (Linux)"],
  prefix: '.',
  public_mode: true,
  chat_mode: 'both', // Private, Group, Both/All
  offline_status: false,
  auto_update_profile_status: false,
  auto_read_messages: true,
  auto_typing: true,
  auto_recording: false,
  mongodb_uri: 'Your-MongoDb-URI', // Register here: https://mongodb.com/#sign-up
  api: {
    url: 'https://daniapi.biz.id',
    key: 'Your-API-key' // Register here: https://daniapi.biz.id/#sign-up
  },
  bot: {
    name: 'Your Bot Name',
    profile_status: 'Bot aktif hingga kiamat or 24/7'
  },
  owner: {
    name: ["Your Name"],
    number: ["628xxx"]
  },
  daily_limit: {
    free: 25,
    premium: Infinity
  },
  watermark: {
    sticker: {
      package_name: 'Created by',
      author_name: 'Your Name'
    }
  },
  react: {
    process: '⏳',
    success: '✅',
    failed: '❌'
  },
  cron_jobs: {
    time: '0 0 * * *',
    timzone: 'Asia/Jakarta'
  },
  media: {
    image: { url: 'https://telegra.ph/file/c3ad72f45c2cc7cad691a.jpg' },
    audio: { url: 'https://cdn.danitechno.com/audio/dj-joanna-breakbeat.mp3' }
  },
  message: {
    plans_and_pricing: '*Plans & Pricing*\n\n*Plan:*\n- Free (benefit): Limit 10/day\n- Premium (benefit): Limit infinity/unlimited\n\n*Price:*\n- Premium 7 hari: 3rb\n- Premium 14 hari: 5rb\n- Premium 1 bulan 10rb\n- Premium 2 bulan: 20rb\n- Premium 1 tahun: 120rb\n\n*Contact owner:* 6289512545999',
    not_registered: 'Anda belum terdaftar sebagai pengguna. Untuk mendaftar, ketik: *.register*.',
    especially_premium: 'Anda harus memiliki akun Premium untuk mengakses fitur ini. Ketik: *.upgrade* untuk mengupgrade akun.',
    especially_owners: 'Anda tidak diizinkan mengakses fitur ini. Fitur ini hanya bisa diakses oleh owner bot.',
    daily_limit: 'Maaf, limit harian Anda telah habis. Limit akan direset setiap pukul jam 12 malam WIB.\nKetik: *.upgrade* untuk mengupgrade akun, dan dapatkan benefit limit tanpa batas.'
  },
  date: {
    country: 'id-ID',
    time_zone: 'Asia/Jakarta'
  }
};