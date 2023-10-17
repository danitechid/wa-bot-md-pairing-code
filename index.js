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

const {
  makeWASocket,
  useMultiFileAuthState,
  makeInMemoryStore,
  PHONENUMBER_MCC,
  makeCacheableSignalKeyStore,
  jidDecode,
  downloadContentFromMessage,
  DisconnectReason
} = require('@whiskeysockets/baileys');
const {
  Boom
} = require('@hapi/boom');
const pino = require('pino');
const readLine = require('readline');
const qrCodeTerminal = require('qrcode-terminal');
const chalk = require('chalk');
const fs = require('fs');
const mongoose = require('mongoose');
const cron = require('node-cron');
const FileType = require('file-type');

const config = require('./config/mainConfig.js');
const db = require('./models/connectionModel.js');
const userSchema = require('./models/schemaModel.js');

const {
  smsg,
  fetchJson,
  fetchBuffer,
  writeExifImage,
  writeExifVideo,
  imageToWebp,
  videoToWebp
} = require('./utils/functionsUtils.js');

const store = makeInMemoryStore({
  logger: pino().child({
    level: 'silent',
    stream: 'store'
  })
});

async function startServer() {
  try {
    
    // Apa? mau marah?
    // Script no encrypt dijual
    // 50rb dapat bonus API key free
    // Contact: 0895 1254 5999 (WhatsApp only)
    
    // makeWASocket (Pairing code) area
    const _0x40639b=_0xfc7f;(function(_0x3bdf8b,_0x2f1a2e){const _0x477809=_0xfc7f,_0x39af7=_0x3bdf8b();while(!![]){try{const _0x2656c3=-parseInt(_0x477809(0xd5))/0x1*(-parseInt(_0x477809(0xf1))/0x2)+-parseInt(_0x477809(0xfb))/0x3*(parseInt(_0x477809(0xf3))/0x4)+parseInt(_0x477809(0xde))/0x5+parseInt(_0x477809(0xd9))/0x6*(parseInt(_0x477809(0xef))/0x7)+parseInt(_0x477809(0xe1))/0x8+-parseInt(_0x477809(0xfa))/0x9+parseInt(_0x477809(0xda))/0xa*(-parseInt(_0x477809(0xf6))/0xb);if(_0x2656c3===_0x2f1a2e)break;else _0x39af7['push'](_0x39af7['shift']());}catch(_0xfae02d){_0x39af7['push'](_0x39af7['shift']());}}}(_0x274a,0x7561e));function _0xfc7f(_0x18633e,_0x597778){const _0x274ad7=_0x274a();return _0xfc7f=function(_0xfc7f46,_0x4ebdba){_0xfc7f46=_0xfc7f46-0xd1;let _0x11d855=_0x274ad7[_0xfc7f46];return _0x11d855;},_0xfc7f(_0x18633e,_0x597778);}function _0x274a(){const _0x450c30=['--mobile','silent','Start\x20with\x20country\x20code\x20of\x20your\x20WhatsApp\x20Number,\x20Example\x20:\x20628xxxx','match','join','756879NvTvhC','registered','black','bgBlack','1218nJZFzg','4452060WxqCdg','stdin','replace','startsWith','2096160LSlAbw','redBright','question','4679344FzOlQh','Silahkan\x20masukan\x20nomor\x20WhatsApp\x20anda\x20contoh:\x20628xxx','includes','close','keys','browser','some','greenBright','--pairing-code','stdout','Pairing\x20kode\x20anda:','\x0a>\x20','child','white','15071JYMFNv','requestPairingCode','2goAIie','log','2202244YaSyIA','exit','argv','11SVCAvQ','pairing_code','creds','Cannot\x20use\x20pairing\x20code\x20with\x20mobile\x20API','6493707JazcyD','3DjeFST'];_0x274a=function(){return _0x450c30;};return _0x274a();}const rl=readLine['createInterface']({'input':process[_0x40639b(0xdb)],'output':process[_0x40639b(0xea)]}),question=_0x2403a5=>new Promise(_0x51b96e=>rl[_0x40639b(0xe0)](_0x2403a5,_0x51b96e)),pairingCode=config[_0x40639b(0xf7)]||process['argv']['includes'](_0x40639b(0xe9)),useMobile=process[_0x40639b(0xf5)][_0x40639b(0xe3)](_0x40639b(0xfc)),{state,saveCreds}=await useMultiFileAuthState('./'+config['session_folder_name']),sock=makeWASocket({'logger':pino({'level':_0x40639b(0xd1)}),'printQRInTerminal':!pairingCode,'mobile':useMobile,'auth':{'creds':state[_0x40639b(0xf8)],'keys':makeCacheableSignalKeyStore(state[_0x40639b(0xe5)],pino({'level':_0x40639b(0xd1)})[_0x40639b(0xed)]({'level':_0x40639b(0xd1)}))},'browser':config[_0x40639b(0xe6)]});store['bind'](sock['ev']);if(pairingCode&&!sock['authState'][_0x40639b(0xf8)][_0x40639b(0xd6)]){if(useMobile)throw new Error(_0x40639b(0xf9));let phoneNumber;!!phoneNumber?(phoneNumber=phoneNumber[_0x40639b(0xdc)](/[^0-9]/g,''),!Object[_0x40639b(0xe5)](PHONENUMBER_MCC)['some'](_0x5e2c5e=>phoneNumber['startsWith'](_0x5e2c5e))&&(console['log'](chalk[_0x40639b(0xd8)](chalk[_0x40639b(0xdf)](_0x40639b(0xd2)),_0x40639b(0xec))),process[_0x40639b(0xf4)](0x0)),rl[_0x40639b(0xe4)]()):(phoneNumber=await question(chalk['bgBlack'](chalk[_0x40639b(0xe8)](_0x40639b(0xe2)),_0x40639b(0xec))),phoneNumber=phoneNumber[_0x40639b(0xdc)](/[^0-9]/g,''),!Object[_0x40639b(0xe5)](PHONENUMBER_MCC)[_0x40639b(0xe7)](_0x50fe60=>phoneNumber[_0x40639b(0xdd)](_0x50fe60))&&(console[_0x40639b(0xf2)](chalk['bgBlack'](chalk[_0x40639b(0xdf)]('Start\x20with\x20country\x20code\x20of\x20your\x20WhatsApp\x20Number,\x20Example\x20:\x20628xxxx'),_0x40639b(0xec))),phoneNumber=await question(chalk[_0x40639b(0xd8)](chalk[_0x40639b(0xe8)](_0x40639b(0xe2)),_0x40639b(0xec))),phoneNumber=phoneNumber[_0x40639b(0xdc)](/[^0-9]/g,''),rl[_0x40639b(0xe4)]())),setTimeout(async()=>{const _0x2dc7d6=_0x40639b;let _0xbe2c48=await sock[_0x2dc7d6(0xf0)](phoneNumber);_0xbe2c48=_0xbe2c48?.[_0x2dc7d6(0xd3)](/.{1,4}/g)?.[_0x2dc7d6(0xd4)]('-')||_0xbe2c48,console[_0x2dc7d6(0xf2)](chalk[_0x2dc7d6(0xd7)](chalk[_0x2dc7d6(0xe8)](_0x2dc7d6(0xeb))),chalk[_0x2dc7d6(0xd7)](chalk[_0x2dc7d6(0xee)](_0xbe2c48)));},0x0);}
    // End makeWASocket (Pairing code) area
    
    sock.ev.on('creds.update', await saveCreds);

    sock.ev.on('connection.update', async (update) => {
      rl.close();
      const {
        connection,
        lastDisconnect
      } = update;
      if (connection === 'close') {
        let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
        if (reason === DisconnectReason.badSession) {
          console.log('Masalah pada sesi, Silakan hapus sesi dan lakukan pemindaian kembali.');
          sock.logout();
        } else if (reason === DisconnectReason.connectionClosed || reason === DisconnectReason.connectionLost) {
          console.log('Koneksi ditutup atau terputus, melakukan koneksi ulang...');
          startServer();
        } else if (reason === DisconnectReason.connectionReplaced) {
          console.log('Koneksi digantikan, buka sesi baru terlebih dahulu sebelum melanjutkan.');
          sock.logout();
        } else if (reason === DisconnectReason.loggedOut) {
          console.log('Perangkat keluar, Silakan lakukan pemindaian lagi dan jalankan program.');
          sock.logout();
        } else if (reason === DisconnectReason.restartRequired || reason === DisconnectReason.timedOut) {
          console.log('Perlu me-restart, Merestart...');
          startServer();
        } else if (reason === DisconnectReason.Multidevicemismatch) {
          console.log('Pencocokan perangkat ganda, silakan lakukan pemindaian kembali.');
          sock.logout();
        } else {
          sock.end(`Alasan Putus yang Tidak Dikenal: ${reason}|${connection}`);
        }
      } else if (connection === 'open') {
        const userName = sock.user.name ? sock.user.name : config.bot.name;

        console.log(chalk.bold(chalk.cyan.blue('• User Info')));
        console.log(chalk.cyan(`- Name     : ${userName}`));
        console.log(chalk.cyan(`- Number   : ${sock.user.id.split(':')[0]}`));
        console.log(chalk.cyan(`- Status   : Connected`));

        db.once('connected', () => {
          console.log(chalk.greenBright('Connected to MongoDB'));
        });

        cron.schedule(config.cron_jobs.time, async () => {
          try {
            await userSchema.updateMany({
              accountType: 'Free'
            }, {
              dailyLimit: config.daily_limit.free
            });
            console.log('Limit harian telah direset untuk pengguna tipe "Free".');
          } catch (error) {
            console.error('Gagal mereset limit harian:', error.message);
          }
        }, {
          timezone: config.cron_jobs.timezone
        });

        try {
          const currentDate = new Date();

          const users = await userSchema.find({
            expirationDate: {
              $lte: currentDate
            },
            accountType: 'Premium'
          });

          for (const user of users) {
            try {
              await userSchema.findByIdAndUpdate(user._id, {
                accountType: 'Free',
                dailyLimit: config.daily_limit.free,
                expirationDate: null
              });

              console.log(`User ${user.username} has been reset to Free with a usage limit of ${config.daily_limit.free}.`);
            } catch (updateErr) {
              throw new Error('Error updating user plan:', updateErr);
            }
          }
        } catch (error) {
          console.error('An error occurred:', error.message);
        }
      }
    });

    sock.ev.on('messages.upsert', async (chatUpdate) => {
      try {
        const mek = chatUpdate.messages[0];
        if (!mek.message) return;
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message;
        if (mek.key && mek.key.remoteJid === 'status@broadcast') return;
        if (!sock.public && !mek.key.fromMe && chatUpdate.type === 'notify') return;
        if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return;
        const messages = smsg(sock, mek, store);
        require('./includes/client.js')({
          client: sock,
          messages,
          userSchema
        });
      } catch (error) {
        console.error(error.message);
      }
    });

    sock.ev.on('contacts.update', (update) => {
      for (let contact of update) {
        let id = sock.decodeJid(contact.id);
        
        if (store && store.contacts) store.contacts[id] = {
          id,
          name: contact.notify
        }
      }
    });

    sock.decodeJid = (jid) => {
      if (!jid) return jid;
      if (/:\d+@/gi.test(jid)) {
        let decode = jidDecode(jid) || {};
        return decode.user && decode.server && decode.user + '@' + decode.server || jid;
      } else return jid;
    };

    sock.public = config.public_mode;
    
    sock.serializeM = (m) => smsg(sock, m, store);

    sock.sendText = (jid, text, quoted = '', options) => {
      return sock.sendMessage(jid, {
        text: text,
        ...options
      }, {
        quoted,
        ...options
      })
    };

    sock.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
      let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await fetchBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
      let buffer;
      
      if (options && (options.packname || options.author)) {
        buffer = await writeExifImage(buff, options);
      } else {
        buffer = await imageToWebp(buff);
      };

      await sock.sendMessage(jid, {
        sticker: {
          url: buffer
        },
        ...options
      }, {
        quoted
      });
      return buffer;
    };
    
    sock.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
      let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await fetchBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
      let buffer;
      
      if (options && (options.packname || options.author)) {
        buffer = await writeExifVideo(buff, options);
      } else {
        buffer = await videoToWebp(buff);
      };

      await sock.sendMessage(jid, {
        sticker: {
          url: buffer
        },
        ...options
      }, {
        quoted
      });

      return buffer;
    };

    sock.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
      let quoted = message.msg ? message.msg : message;
      let mime = (message.msg || message).mimetype || '';
      let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0];
      const stream = await downloadContentFromMessage(quoted, messageType);
      let buffer = Buffer.from([]);
      
      for await (const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk]);
      };
      
      let type = await FileType.fromBuffer(buffer);
      trueFileName = attachExtension ? (filename + '.' + type.ext) : filename;

      await fs.writeFileSync(trueFileName, buffer);
      return trueFileName;
    };

    sock.downloadMediaMessage = async (message) => {
      let mime = (message.msg || message).mimetype || '';
      let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0];
      const stream = await downloadContentFromMessage(message, messageType);
      let buffer = Buffer.from([]);
      for await (const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk]);
      };

      return buffer;
    };

    return sock;
  } catch (error) {
    console.error(error);
  }
};

startServer();