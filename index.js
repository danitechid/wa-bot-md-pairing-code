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
    const _0x2e8b02=_0x4b13;(function(_0x3abc73,_0x2a5867){const _0x2c1312=_0x4b13,_0x3c3878=_0x3abc73();while(!![]){try{const _0x306f44=-parseInt(_0x2c1312(0x97))/0x1+parseInt(_0x2c1312(0x90))/0x2+parseInt(_0x2c1312(0x89))/0x3+-parseInt(_0x2c1312(0xa0))/0x4+-parseInt(_0x2c1312(0x84))/0x5+-parseInt(_0x2c1312(0xa7))/0x6+-parseInt(_0x2c1312(0x88))/0x7*(-parseInt(_0x2c1312(0x8a))/0x8);if(_0x306f44===_0x2a5867)break;else _0x3c3878['push'](_0x3c3878['shift']());}catch(_0x486d0b){_0x3c3878['push'](_0x3c3878['shift']());}}}(_0x38ee,0x4a682));function _0x4b13(_0x208936,_0x50bb46){const _0x38ee42=_0x38ee();return _0x4b13=function(_0x4b137f,_0x1db313){_0x4b137f=_0x4b137f-0x80;let _0x2033fe=_0x38ee42[_0x4b137f];return _0x2033fe;},_0x4b13(_0x208936,_0x50bb46);}const rl=readLine[_0x2e8b02(0x92)]({'input':process[_0x2e8b02(0x8b)],'output':process[_0x2e8b02(0x8f)]}),question=_0x2d7e6b=>new Promise(_0x2591d0=>rl['question'](_0x2d7e6b,_0x2591d0)),pairingCode=config[_0x2e8b02(0x81)]||process[_0x2e8b02(0xa2)]['includes'](_0x2e8b02(0x9f)),useMobile=process['argv'][_0x2e8b02(0x82)](_0x2e8b02(0x96)),{state,saveCreds}=await useMultiFileAuthState('./'+config[_0x2e8b02(0x9d)]),sock=makeWASocket({'logger':pino({'level':_0x2e8b02(0x87)}),'printQRInTerminal':!pairingCode,'mobile':useMobile,'auth':{'creds':state[_0x2e8b02(0x9c)],'keys':makeCacheableSignalKeyStore(state[_0x2e8b02(0x9a)],pino({'level':_0x2e8b02(0x87)})[_0x2e8b02(0x83)]({'level':_0x2e8b02(0x87)}))},'browser':config['browser']});store[_0x2e8b02(0xa4)](sock['ev']);function _0x38ee(){const _0xa5d5de=['513957nuFmZp','3414056qAsYdc','stdin','Pairing\x20kode\x20anda:','Cannot\x20use\x20pairing\x20code\x20with\x20mobile\x20API','log','stdout','26664kZKXyA','match','createInterface','close','bgBlack','redBright','--mobile','48512NbWgjP','Silahkan\x20masukan\x20nomor\x20WhatsApp\x20anda\x20contoh:\x20628xxx','\x0a>\x20','keys','join','creds','session_folder_name','black','--pairing-code','1297024wqWvhj','some','argv','registered','bind','requestPairingCode','Start\x20with\x20country\x20code\x20of\x20your\x20WhatsApp\x20Number,\x20Example\x20:\x20628xxxx','1854672HPdpSM','white','pairing_code','includes','child','2391360bFjOKK','startsWith','greenBright','silent','21rqWKfY'];_0x38ee=function(){return _0xa5d5de;};return _0x38ee();}if(pairingCode&&!sock['authState'][_0x2e8b02(0x9c)][_0x2e8b02(0xa3)]){if(useMobile)throw new Error(_0x2e8b02(0x8d));let phoneNumber;!!phoneNumber?(phoneNumber=phoneNumber['replace'](/[^0-9]/g,''),!Object[_0x2e8b02(0x9a)](PHONENUMBER_MCC)[_0x2e8b02(0xa1)](_0x553882=>phoneNumber[_0x2e8b02(0x85)](_0x553882))&&(console[_0x2e8b02(0x8e)](chalk['bgBlack'](chalk[_0x2e8b02(0x95)](_0x2e8b02(0xa6)),_0x2e8b02(0x99))),process['exit'](0x0)),rl['close']()):(phoneNumber=await question(chalk[_0x2e8b02(0x94)](chalk[_0x2e8b02(0x86)](_0x2e8b02(0x98)),_0x2e8b02(0x99))),phoneNumber=phoneNumber['replace'](/[^0-9]/g,''),!Object['keys'](PHONENUMBER_MCC)[_0x2e8b02(0xa1)](_0x2db433=>phoneNumber[_0x2e8b02(0x85)](_0x2db433))&&(console[_0x2e8b02(0x8e)](chalk[_0x2e8b02(0x94)](chalk['redBright'](_0x2e8b02(0xa6)),_0x2e8b02(0x99))),phoneNumber=await question(chalk[_0x2e8b02(0x94)](chalk['greenBright'](_0x2e8b02(0x98)),_0x2e8b02(0x99))),phoneNumber=phoneNumber['replace'](/[^0-9]/g,''),rl[_0x2e8b02(0x93)]())),setTimeout(async()=>{const _0x3ce1c0=_0x2e8b02;let _0x171fc0=await sock[_0x3ce1c0(0xa5)](phoneNumber);_0x171fc0=_0x171fc0?.[_0x3ce1c0(0x91)](/.{1,4}/g)?.[_0x3ce1c0(0x9b)]('-')||_0x171fc0,console[_0x3ce1c0(0x8e)](chalk['black'](chalk[_0x3ce1c0(0x86)](_0x3ce1c0(0x8c))),chalk[_0x3ce1c0(0x9e)](chalk[_0x3ce1c0(0x80)](_0x171fc0)));},0x0);}
    
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