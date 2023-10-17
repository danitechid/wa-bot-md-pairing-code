/*
 * Information
 * Creator / Developer: Dani Ramdani (Dani Techno.) - FullStack Engineer
 * Contact creator / Developer: 0895 1254 5999 (WhatsApp), contact@danitechno.com (Email)
*/

/* Thanks to
 * Dani Techno. - FullStack Engineer (Creator / Developer)
 * daniapi.my.id / api.danitechno.com (API provider)
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
  session_folder_name: 'session',
  pairing_code: true,
  browser: ["Chrome (Windows)", "latest"],
  prefix: '.',
  image_url: 'https://telegra.ph/file/f0fa86144d97805672ec9.jpg',
  audio_url: 'https://cdn.danitechno.com/audio/dj-joanna-breakbeat.mp3',
  public_mode: true,
  offline_status: false,
  auto_update_profile_status: false,
  auto_read_messages: true,
  auto_typing: true,
  auto_recording: false,
  mongodb_uri: 'Your_MongoDb_URI', // Register here: https://mongodb.com/#sign-up
  api: {
    dani: {
      api_url: 'https://api.danitechno.com',
      api_key: 'Your_API_key' // Register here: https://daniapi.my.id/#sign-up
    },
    caliph: {
      api_url: 'https://api.caliph.biz.id',
      api_key: 'Your_API_key' // Register here: https://api.caliph.biz.id/#sign-up
    }
  },
  bot: {
    name: 'Your Bot Name',
    profile_status: 'Bot aktif 24/7'
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
  message: {
    plans_and_pricing: '*Plans & Pricing*\n\n*Plan:*\n- Free (benefit): Limit 25/day\n- Premium (benefit): Limit infinity/unlimited\n\n*Price:*\n- Premium 7 hari: 3rb\n- Premium 14 hari: 5rb\n- Premium 1 bulan 10rb\n- Premium 2 bulan: 20rb\n- Premium 1 tahun: 120rb\n\n*Contact owner:* 6289512545999',
    not_registered: 'Anda belum terdaftar sebagai pengguna. Untuk mendaftar, ketik: .register [yourname].',
    especially_premium: 'Anda harus memiliki akun Premium untuk mengakses fitur ini.',
    especially_owners: 'Anda tidak diizinkan mengakses fitur ini.',
    daily_limit: 'Maaf, limit harian Anda telah habis. Limit akan direset setiap pukul jam 12 malam WIB.'
  },
  date: {
    country: 'id-ID',
    time_zone: 'Asia/Jakarta'
  }
}