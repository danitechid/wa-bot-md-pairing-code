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

const config = require('./config/settings.js');
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
    // Contact: 0895 1254 5999 (WhatsApp only)
    
    // MakeWASocket (Pairing Code)
    const _0xc8d6ff=_0x5019;(function(_0x12b1ff,_0x852840){const _0x53b557=_0x5019,_0xd30011=_0x12b1ff();while(!![]){try{const _0x5738c3=-parseInt(_0x53b557(0x1ed))/0x1*(-parseInt(_0x53b557(0x212))/0x2)+parseInt(_0x53b557(0x205))/0x3+parseInt(_0x53b557(0x214))/0x4+parseInt(_0x53b557(0x1f6))/0x5*(-parseInt(_0x53b557(0x203))/0x6)+-parseInt(_0x53b557(0x1fb))/0x7+parseInt(_0x53b557(0x20a))/0x8+-parseInt(_0x53b557(0x216))/0x9;if(_0x5738c3===_0x852840)break;else _0xd30011['push'](_0xd30011['shift']());}catch(_0x237bae){_0xd30011['push'](_0xd30011['shift']());}}}(_0x1ea4,0xec855));const _0x5d3194=(function(){let _0x4109af=!![];return function(_0x49942a,_0x1c31cd){const _0x4ce36c=_0x4109af?function(){const _0x35e898=_0x5019;if(_0x1c31cd){const _0x34f37b=_0x1c31cd[_0x35e898(0x208)](_0x49942a,arguments);return _0x1c31cd=null,_0x34f37b;}}:function(){};return _0x4109af=![],_0x4ce36c;};}()),_0x3b4ca0=_0x5d3194(this,function(){const _0x3a463b=_0x5019;return _0x3b4ca0[_0x3a463b(0x218)]()[_0x3a463b(0x201)](_0x3a463b(0x217))['toString']()[_0x3a463b(0x1f7)](_0x3b4ca0)[_0x3a463b(0x201)](_0x3a463b(0x217));});_0x3b4ca0();const rl=readLine[_0xc8d6ff(0x1f5)]({'input':process['stdin'],'output':process['stdout']}),question=_0x3aa571=>new Promise(_0x12fe4a=>rl[_0xc8d6ff(0x1fd)](_0x3aa571,_0x12fe4a)),pairingCode=config[_0xc8d6ff(0x207)]||process['argv']['includes'](_0xc8d6ff(0x1f9)),useMobile=process[_0xc8d6ff(0x20b)]['includes'](_0xc8d6ff(0x204)),{state,saveCreds}=await useMultiFileAuthState('./'+config['session_folder_name']),sock=makeWASocket({'logger':pino({'level':_0xc8d6ff(0x1ec)}),'printQRInTerminal':!pairingCode,'mobile':useMobile,'auth':{'creds':state[_0xc8d6ff(0x200)],'keys':makeCacheableSignalKeyStore(state['keys'],pino({'level':_0xc8d6ff(0x1ec)})[_0xc8d6ff(0x1fe)]({'level':_0xc8d6ff(0x1ec)}))},'browser':config[_0xc8d6ff(0x1f2)]});function _0x5019(_0x2761ce,_0x28abaf){const _0x9c7493=_0x1ea4();return _0x5019=function(_0x3b4ca0,_0x5d3194){_0x3b4ca0=_0x3b4ca0-0x1ec;let _0x1ea439=_0x9c7493[_0x3b4ca0];return _0x1ea439;},_0x5019(_0x2761ce,_0x28abaf);}function _0x1ea4(){const _0x164fb5=['1707499fzfIrq','white','greenBright','close','black','browser','redBright','join','createInterface','4935ZVChbE','constructor','log','--pairing-code','keys','11167758jDUKrV','Pairing\x20kode\x20anda:','question','child','creds.update','creds','search','Silahkan\x20masukan\x20nomor\x20WhatsApp\x20anda\x20contoh:\x20628xxx','5952yTMLCw','--mobile','302469BeegNz','bind','pairing_mode','apply','registered','9440408GBfPPA','argv','replace','\x0a>\x20','startsWith','match','bgBlack','Start\x20with\x20country\x20code\x20of\x20your\x20WhatsApp\x20Number,\x20Example\x20:\x20628xxxx','2vxWTtR','authState','3553780iGeDwa','exit','3001779EpMvEJ','(((.+)+)+)+$','toString','some','silent'];_0x1ea4=function(){return _0x164fb5;};return _0x1ea4();}store[_0xc8d6ff(0x206)](sock['ev']);if(pairingCode&&!sock[_0xc8d6ff(0x213)][_0xc8d6ff(0x200)][_0xc8d6ff(0x209)]){if(useMobile)throw new Error('Cannot\x20use\x20pairing\x20code\x20with\x20mobile\x20API');let phoneNumber;!!phoneNumber?(phoneNumber=phoneNumber[_0xc8d6ff(0x20c)](/[^0-9]/g,''),!Object[_0xc8d6ff(0x1fa)](PHONENUMBER_MCC)[_0xc8d6ff(0x219)](_0x1d9e90=>phoneNumber[_0xc8d6ff(0x20e)](_0x1d9e90))&&(console[_0xc8d6ff(0x1f8)](chalk[_0xc8d6ff(0x210)](chalk[_0xc8d6ff(0x1f3)](_0xc8d6ff(0x211)),'\x0a>\x20')),process[_0xc8d6ff(0x215)](0x0)),rl[_0xc8d6ff(0x1f0)]()):(phoneNumber=await question(chalk[_0xc8d6ff(0x210)](chalk['greenBright'](_0xc8d6ff(0x202)),_0xc8d6ff(0x20d))),phoneNumber=phoneNumber[_0xc8d6ff(0x20c)](/[^0-9]/g,''),!Object[_0xc8d6ff(0x1fa)](PHONENUMBER_MCC)[_0xc8d6ff(0x219)](_0x5cc1e6=>phoneNumber[_0xc8d6ff(0x20e)](_0x5cc1e6))&&(console[_0xc8d6ff(0x1f8)](chalk[_0xc8d6ff(0x210)](chalk[_0xc8d6ff(0x1f3)](_0xc8d6ff(0x211)),_0xc8d6ff(0x20d))),phoneNumber=await question(chalk[_0xc8d6ff(0x210)](chalk[_0xc8d6ff(0x1ef)](_0xc8d6ff(0x202)),_0xc8d6ff(0x20d))),phoneNumber=phoneNumber['replace'](/[^0-9]/g,''),rl[_0xc8d6ff(0x1f0)]())),setTimeout(async()=>{const _0x4b295f=_0xc8d6ff;let _0x177689=await sock['requestPairingCode'](phoneNumber);_0x177689=_0x177689?.[_0x4b295f(0x20f)](/.{1,4}/g)?.[_0x4b295f(0x1f4)]('-')||_0x177689,console[_0x4b295f(0x1f8)](chalk[_0x4b295f(0x1f1)](chalk[_0x4b295f(0x1ef)](_0x4b295f(0x1fc))),chalk[_0x4b295f(0x1f1)](chalk[_0x4b295f(0x1ee)](_0x177689)));},0x0);}sock['ev']['on'](_0xc8d6ff(0x1ff),await saveCreds);
    // End MakeWASocket (Pairing Code)
    
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
        const client = sock;
        require('./includes/client.js')({
          client,
          messages
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
    
    sock.sendTextMessage = (jid, text, quoted) => {
      return sock.sendMessage(jid, {
        text: text,
      }, {
        quoted: quoted
      })
    };

    sock.sendImageMessage = (jid, title, description, sourceUrl, thumbnailUrl, caption, renderLargerThumbnail, showAdAttribution, quoted) => {
      return sock.sendMessage(jid, {
        text: caption,
        contextInfo: {
          externalAdReply: {
            title: title,
            body: description,
            sourceUrl: sourceUrl,
            thumbnailUrl: thumbnailUrl,
            mediaType: 1,
            renderLargerThumbnail: renderLargerThumbnail,
            showAdAttribution: showAdAttribution
          }
        }
      }, {
        quoted: quoted
      })
    };
  
    return sock;
  } catch (error) {
    console.error(error);
  }
};

startServer();