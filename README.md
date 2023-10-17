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
### Instal perangkat lunak/paket-paket
#### Untuk Linux
```bash
sudo apt-get install nodejs
sudo apt-get install git
sudo apt-get install npm
sudo apt-get install yarn
sudo apt-get install ffmpeg
sudo apt-get install libwebp
```

#### Untuk Windows
```bash
choco install nodejs
choco install git
choco install yarn
choco install ffmpeg
choco install libwebp
```

#### Untuk MacOS
```bash
brew install node
brew install git
brew install yarn
brew install ffmpeg
brew install webp
```

#### Untuk Android (Termux)
```bash
pkg install nodejs
pkg install git
pkg install yarn
pkg install ffmpeg
pkg install libwebp
```

### Download/klon proyek
```bash
git clone https://github.com/danitechid/wa-bot-md-pairing-code.git
```

### Pindah Direktori (CD)
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
1. <a href="https://api.danitechno.com">https://api.danitechno.com</a>
2. <a href="https://api.caliph.biz.id">https://api.caliph.biz.id</a>

#### Edit ./config/mainConfig.js > api
```javascript
api: {
  dani: {
    ...
    api_key: 'Your_API_key' // Register here: https://daniapi.my.id/#sign-up
  },
  caliph: {
    ...
    api_key: 'Your_API_key' // Register here: https://api.caliph.biz.id/#sign-up
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

## Information
* Information
* Creator / Developer: Dani Ramdani (Dani Techno.) - FullStack Engineer
* Contact creator / Developer: 0895 1254 5999 (WhatsApp), contact@danitechno.com (Email)

## Thanks to
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