# WhatsApp BOT Multi Device Pairing Code - NodeJs
## Fitur
* Artificial Intelligence
* Downloader
* Searcher
* Stalker
* Maker
* Random Image
* URL Shortener
* Converter
* Islamic
* Tools
* Authentication
* Owner/Admin

## Instalasi
### Instal/clone proyek
```bash
git clone https://github.com/danitechid/wa-bot-md-pairing-code.git
```

### Pimdah Direktori (CD)
```bash
cd wa-bot-md-pairing-code
```

### MongoDb
#### Buat akun dan database MongoDb
Daftar dan buat database dan dapatkan MongoDb URI: <a href="https://mongodb.com">https://mongodb.com</a>

#### Edit ./config/mainConfig.js > mongodb_uri
```javascript
mongodb_uri: 'Your_MongoDb_URI', // Register here: https://mongodb.com/#sign-up
```

### Application Programming Interface (API)
#### Dapatkan Kunci API
Daftar dan dapatkan kunci API:
1. <a href="https://daniapi.biz.id">https://daniapi.biz.id</a>
2. <a href="https://api.caliph.biz.id">https://api.caliph.biz.id</a>

#### Edit ./config/mainConfig.js > api
```javascript
api: {
  dani: {
    ...
    api_key: 'Your_API_key' // Registrasi disini: https://daniapi.biz.id/#sign-up
  },
  caliph: {
    ...
    api_key: 'Your_API_key' // API untuk fitur remini | Registrasi disini: https://api.caliph.biz.id/#sign-up
  }
}
```

### Instal dependensi
#### Menggunakan Npm
```bash
npm install
```
#### Atau menggunakan Yarn
```bash
yarn install
```

### Jalankan server
#### Menggunakan Npm
```bash
npm run start
```

#### Atau menggunakan Yarn
```bash
yarn run start
```

#### Atau menggunakan Node
```bash
node run start
```

#### Atau menggunakan Bun
```bash
bun run start
```

## Informasi
* Pembuat / Pengembang: Dani Ramdani (Dani Techno.) - FullStack Engineer
* Kontak pembuat / Pengembang: 0895 1254 5999 (WhatsApp), contact@danitechno.com (Email)

## Terimakasih kepada
* Dani Techno. - FullStack Engineer (Pembuat / Pengembang)
* daniapi.biz.id (Penyedia API)
* api.caliph.biz.id (Penyedia remini API)
* @danitech/scraper (Penyedia Scraper)
* @whiskeysockets/baileys (Penyedia Library "Baileys")
* @adiwajshing/keyed-db
* @hapi/boom
* pino
* qrcode-terminal
* chalk
* mongoose
* node-cron
* nodemon
* dan lain-lain