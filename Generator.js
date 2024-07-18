require('./ResourceGenerator')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const { color, bgcolor } = require('./lib/color')
const { ssweb } = require('./lib/ssweb')
const { quote } = require('./lib/quote')
const { uptotelegra } = require('./lib/upload')
const { Primbon } = require('scrape-primbon')
const { remini } = require('./lib/remini')
const { TelegraPh } = require('./lib/uploader')
const uploadImage = require('./lib/uploadImage')
const primbon = new Primbon()
const hxz = require('hxz-api')
const jsobfus = require('javascript-obfuscator')
const cheerio = require('cheerio')
const ytdl = require("ytdl-core")
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { exec, spawn, execSync } = require("child_process")
const { mediafireDl } = require('./database/mediafire.js')
const { smsg, tanggal, getTime, formatp, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/respon-list');
const { addRespons, checkRespons, deleteRespons } = require('./lib/respon');
const {
getRegisteredRandomId,
addRegisteredUser,
createSerial,
delRegister,
checkRegisteredUser,
NamaKamu,
UmurKamu
} = require('./database/register.js')

const isRegistered = checkRegisteredUser(m.sender)

const {
getJoinRandomId,
addJoinUser,
createSerialJoin,
checkJoinUser
} = require('./DatabaseRpg/joinrpg.js')

const isJoin = checkJoinUser(m.sender)



// read database
global.db.data = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db.data) global.db.data = {
users: {},
chats: {},
game: {},
database: {},
settings: {},
setting: {},
others: {},
sticker: {},
...(global.db.data || {})
}
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));

const authorr = "6282375310984"
const yts = require('./scrape/yt-search')
const { ytSearch } = require('./scrape/yt')
const thumbnail = fs.readFileSync ('./data/image/thumb.jpg')
const thumb = fs.readFileSync ('./data/image/thumb.jpg')
const kalimage = fs.readFileSync ('./data/image/thumb.jpg')
const pengguna = JSON.parse(fs.readFileSync('./database/user.json'))
const owner = JSON.parse(fs.readFileSync('./premium.json'))
const author = JSON.parse(fs.readFileSync('./author.json'))
const ntilink = JSON.parse(fs.readFileSync("./lib/antilink.json"))
const chatbot = JSON.parse(fs.readFileSync("./lib/chatbot.json"))
const antidel = JSON.parse(fs.readFileSync("./lib/antidel.json"))
const banned = JSON.parse(fs.readFileSync('./data/db/banned.json'))
const contacts = JSON.parse(fs.readFileSync("./database/contacts.json"))

// Get Database
const isContacts = contacts.includes(m.sender)

module.exports = MappleCore = async (MappleCore, m, chatUpdate, store) => {
 try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype === 'messageContextInfo') ? (m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix


const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
//Kalau Mau Single Prefix Kamu Ganti Command Diatas Pakai Ini : const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()


const args = body.trim().split(/ +/).slice(1)
const full_args = body.replace(command, '').slice(1).trim()
const spychat = body.replace().slice().trim()
const pushname = m.pushName || "No Name"
const text = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
const botNumber = await MappleCore.decodeJid(MappleCore.user.id)
const isCreator = [botNumber, ...author].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isPrem = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await MappleCore.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const AntiLink = m.isGroup ? ntilink.includes(from) : false 
const ChatBot = m.isGroup ? chatbot.includes(from) : false 
const autodelete = from && isCmd ? antidel.includes(from) : false 
const isBan = banned.includes(m.sender)
const isUser = pengguna.includes(m.sender)
const content = JSON.stringify(m.message)
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
//const Input = mentionByTag[0] ? mentionByTag[0] : q ? numberQuery : false
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const qtod = m.quoted? "true":"false"

const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = '❄ Selamat Malam'
        }
        if(time2 < "19:00:00"){
        var ucapanWaktu = '❄ Selamat Petang'
        }
        if(time2 < "18:00:00"){
        var ucapanWaktu = '❄ Selamat Sore'
        }
        if(time2 < "15:00:00"){
        var ucapanWaktu = '❄ Selamat Siang'
        }
        if(time2 < "10:00:00"){
        var ucapanWaktu = '❄ Selamat Pagi'
        }
        if(time2 < "05:00:00"){
        var ucapanWaktu = '❄ Selamat Subuh'
        }
        if(time2 < "03:00:00"){
        var ucapanWaktu = '❄ Selamat Tengah Malam'
        }
        
        if (!MappleCore.public) {
if (!m.key.fromMe && !isPrem) return
}

const cap = 'BOFURI'
try {
pplu = await MappleCore.profilePictureUrl(anu.id, 'image')
} catch {
pplu = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

const fkontak = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: `status@broadcast`
                } : {})
            },
            message: {
                'contactMessage': {
                    'displayName': `Projects Kamiya Beta - Development`,
                    'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;avmc,;;;\nFN:${global.wm}\nitem1.TEL;waid=${owner}:+${nomerowner}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
                    'jpegThumbnail': pplu,
                    thumbnailUrl: pplu,
                    sendEphemeral: true
                }   
            }
        }

const kamiya = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: `status@broadcast`
                } : {})
            },
            message: {
                "contactMessage": {
                    'displayName': `${pushname}`,
                    'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Kamiya,;;;\nFN: Kamiya V1.8\nitem1.TEL;waid=${m.sender.split("@")[0]}:+${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
                    'jpegThumbnail': pplu,
                    thumbnail: pplu,
                    sendEphemeral: true
                }   
            }
        }

const kamiya2 = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: "status@broadcast"
        } : {})
    },
    message: {
        "extendedTextMessage": {
            "text": ucapanWaktu,
            "title": ``,
            "thumbnailUrl": pplu
        }
    }
}

const kamiyareply = (teks) => {
MappleCore.sendMessage(from, { text: teks, contextInfo:{"externalAdReply": {"title": `❄ Halo Aku Kamiya`,"body": `Hai kak ${pushname} Jangan Spam Ya`, "previewType": "PHOTO","thumbnail": thumb,"sourceUrl": `https://whatsapp.com/channel/0029VaEvOpP35fLtqPxd4F2L`}}}, { quoted: kamiya })}
// Tanpa ContextInfo : MappleCore.sendMessage(from, { text: teks, }, { quoted: kamiya })}

const onlygc = () => {
MappleCore.sendMessage(m.chat, {
    text: `❄ *Hello Im Kamiya*\n⚠️ *Fitur Bot Hanya Bisa Digunakan Didalam Grup*\n\n🎁 *Mau Sc? Ketik Kamiya Di Grup*\n\n❄ *Information :*\n *⨠ Version : 5.p*\n *⨠ Author : Al Villainess*\n *⨠ Author : wa.me/6282375310984*`,
    contextInfo: {
				forwardingScore: 0,
				isForwarded: true,
				mentionedJid: [m.sender],
				forwardedNewsletterMessageInfo: {
					newsletterJid: '120363218375655896@newsletter',
					serverMessageId: null,
					newsletterName: '◈ sʏsᴛᴇᴍ ɴᴏᴛɪғɪᴄᴀᴛɪᴏɴs',
				},
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu}`,
        body: "Projects Kamiya",
        thumbnailUrl: "https://telegra.ph/file/89655d27ff924aee15302.jpg",
        sourceUrl: "https://chat.whatsapp.com/CUiYQYTeR2K4yXF5yVh6NC",
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
   })
   } 

// Tanpa Chat : const onlygc = () => {}

const canva2 = require('canvas-hikki-2')
const canvas = require('canvas')
const canva = require('knights-canvas')
const levelling = require('./lib/levelling')

const threshold = 0.72

const role = () => {

let user = global.db.data.users[m.sender]

let role = (user.level <= 3) ? 'Warrior V'

        : ((user.level >= 3) && (user.level <= 6)) ? 'Warrior IV'

            : ((user.level >= 6) && (user.level <= 9)) ? 'Warrior III'

                : ((user.level >= 9) && (user.level <= 12)) ? 'Warrior II'

                    : ((user.level >= 12) && (user.level <= 15)) ? 'Warrior I'

                        : ((user.level >= 15) && (user.level <= 18)) ? 'Elite V'

                            : ((user.level >= 18) && (user.level <= 21)) ? 'Elite IV'

                                : ((user.level >= 21) && (user.level <= 24)) ? 'Elite III'

                                    : ((user.level >= 24) && (user.level <= 27)) ? 'Elite II'

                                        : ((user.level >= 27) && (user.level <= 30)) ? 'Elite I'

                                            : ((user.level >= 30) && (user.level <= 33)) ? 'Master V'

                                                : ((user.level >= 33) && (user.level <= 36)) ? 'Master IV'

                                                    : ((user.level >= 36) && (user.level <= 39)) ? 'Master III'

                                                        : ((user.level >= 39) && (user.level <= 42)) ? 'Master II'

                                                            : ((user.level >= 42) && (user.level <= 45)) ? 'Master I'

                                                                : ((user.level >= 45) && (user.level <= 48)) ? 'Grand Master V'

                                                                    : ((user.level >= 48) && (user.level <= 51)) ? 'Grand Master IV'

                                                                        : ((user.level >= 51) && (user.level <= 54)) ? 'Grand Master III'

                                                                            : ((user.level >= 54) && (user.level <= 57)) ? 'Grand Master II'

                                                                                : ((user.level >= 57) && (user.level <= 60)) ? 'Grand Master I'

                                                                                    : ((user.level >= 60) && (user.level <= 63)) ? 'Epic V'

                                                                                        : ((user.level >= 63) && (user.level <= 66)) ? 'Epic IV'

                                                                                            : ((user.level >= 66) && (user.level <= 69)) ? 'Epic III'

                                                                                                : ((user.level >= 69) && (user.level <= 71)) ? 'Epic II'

                                                                                                    : ((user.level >= 71) && (user.level <= 74)) ? 'Epic I'

                                                                                                        : ((user.level >= 74) && (user.level <= 77)) ? 'Legend V'

                                                                                                            : ((user.level >= 77) && (user.level <= 80)) ? 'Legend IV'

                                                                                                                : ((user.level >= 80) && (user.level <= 83)) ? 'Legend III'

                                                                                                                    : ((user.level >= 83) && (user.level <= 86)) ? 'Legend II'

                                                                                                                        : ((user.level >= 86) && (user.level <= 89)) ? 'Legend I'

                                                                                                                            : ((user.level >= 89) && (user.level <= 91)) ? 'Mythic V'

                                                                                                                                : ((user.level >= 91) && (user.level <= 94)) ? 'Mythic IV'

                                                                                                                                    : ((user.level >= 94) && (user.level <= 97)) ? 'Mythic III'

                                                                                                                                        : ((user.level >= 97) && (user.level <= 100)) ? 'Mythic II'

                                                                                                                                           : ((user.level >= 100) && (user.level <= 105)) ? 'Mythic I'      

                                                                                                                                              : ((user.level >= 105) && (user.level <= 120)) ? 'Mythical glory'

                                                                                                                                                 : ((user.level >= 120) && (user.level <= 130)) ? 'Mythical glory 700'

                                                                                                                                                    : ((user.level >= 150) && (user.level <= 160)) ? 'Mythical glory 800'

                                                                                                                                                        : ((user.level >= 160) && (user.level <= 170)) ? 'Mythical glory 900'

                                                                                                                                                            : ((user.level >= 170) && (user.level <= 185)) ? 'Mythical glory 1000'

                                                                                                                                                                : ((user.level >= 185) && (user.level <= 200)) ? 'Mythical glory 1100'

                                                                                                                                                                    : ((user.level >= 200) && (user.level <= 400)) ? 'Mythical glory 1200'

                                                                                                                                                                        : ((user.level >= 405) && (user.level <= 450)) ? 'Mythical glory 1300'

                                                                                                 : ((user.level >= 700) && (user.level <= 1000)) ? 'Mythical glory 100000'

                                                                                                                                                                        : 'God👑'

return role

}

let user = global.db.data.users[m.sender]

if (user) {
if (!isNumber(user.antispam)) user.antispam = 0
if (!isNumber(user.premiumDate)) user.premiumDate = -1
if (!isNumber(user.premiumTime)) user.premiumTime = 1
if (!('premium' in user)) user.premium = false
if (!isNumber(user.level)) user.level = 0
if (!('autolevelup' in user)) user.autolevelup = true
if (!('birthdaySet' in user)) user.birthdaySet = false
if (!isNumber(user.birthday)) user.birthday = 0
if (!isNumber(user.cm)) user.cm = 0
if (!isNumber(user.cl)) user.cl = 0
if (!isNumber(user.cu)) user.cu = 0
if (!('role' in user)) user.role = ''
if (!('cai' in user)) user.cai = ''
if (!isNumber(user.exp)) user.exp = 100
if (!isNumber(user.darah)) user.darah = 100
if (!isNumber(user.besi)) user.besi = 10
if (!isNumber(user.emas)) user.emas = 10
if (!isNumber(user.emerald)) user.emerald = 10
if (!isNumber(user.potion)) user.potion = 10
if (!isNumber(user.sword)) user.sword = 0
if (!isNumber(user.armor)) user.armor = 0
if (!isNumber(user.key)) user.key = 0
if (!isNumber(user.atm)) user.atm = 0
if (!isNumber(user.money)) user.money = 100
if (!isNumber(user.kucing)) user.kucing = 0
if (!isNumber(user.anjing)) user.anjing = 0
if (!isNumber(user.anjingexp)) user.anjingexp = 0    
if (!isNumber(user.kucingexp)) user.kucingexp = 0    
if (!isNumber(user.nagaexp)) user.nagaexp = 0     
if (!isNumber(user.kyubiexp)) user.kyubiexp = 0     
if (!isNumber(user.bibitapel)) user.bibitapel = 0
if (!isNumber(user.bibitmangga)) user.bibitmangga = 0
if (!isNumber(user.bibitjeruk)) user.bibitjeruk = 0
if (!isNumber(user.bibitpisang)) user.bibitpisang = 0
if (!isNumber(user.bibitanggur)) user.bibitanggur = 0
if (!isNumber(user.jeruk)) user.jeruk = 0
if (!isNumber(user.anggur)) user.anggur = 0
if (!isNumber(user.pisang)) user.pisang = 0
if (!isNumber(user.mangga)) user.mangga = 0
if (!isNumber(user.apel)) user.apel = 0
if (!('codemail' in user)) user.codemail = ''
if (!('gid' in user)) user.gid = ''
if (!('owner' in user)) user.owner = false
if (!isNumber(user.kyubi)) user.kyubi = 0
if (!isNumber(user.naga)) user.naga = 0
if (!isNumber(user.rubah)) user.rubah = 0
if (!isNumber(user.serigara)) user.serigala = 0
if (!('gmail' in user)) user.gmail = ''
if (!isNumber(user.kuda)) user.kuda = 0
if (!isNumber(user.elang)) user.elang = 0
if (!isNumber(user.feedpet)) user.feedpet = 0
if (!('regp' in user)) user.regp = false
if (!isNumber(user.bar)) user.bar = 100
if (!isNumber(user.rename)) user.rename = 0
if (!isNumber(user.toxicamount)) user.toxicmount = 0
if (!('mailcode' in user)) user.mailcode = ''
if (!isNumber(user.invalidcode)) user.invalidcode = 0
if (!isNumber(user.paus)) user.paus = 1
if (!isNumber(user.kepiting)) user.kepiting = 1
if (!isNumber(user.gurita)) user.gurita = 1
if (!isNumber(user.cumi)) user.cumi = 1
if (!isNumber(user.buntal)) user.buntal = 1
if (!isNumber(user.dory)) user.dory = 1
if (!isNumber(user.lumba)) user.lumba = 1
if (!isNumber(user.lobster)) user.lobster = 1
if (!isNumber(user.hiu)) user.hiu = 1
if (!isNumber(user.udang)) user.udang = 1
if (!isNumber(user.ikan)) user.ikan = 1
if (!isNumber(user.nila)) user.nila = 1
if (!isNumber(user.bawal)) user.bawal = 1
if (!isNumber(user.lele)) user.lele = 1
if (!isNumber(user.orca)) user.orca = 1
if (!isNumber(user.banteng)) user.banteng = 1
if (!isNumber(user.harimau)) user.harimau = 1
if (!isNumber(user.gajah)) user.gajah = 1
if (!isNumber(user.kambing)) user.kambing = 1
if (!isNumber(user.panda)) user.panda = 1
if (!isNumber(user.buaya)) user.buaya = 1
if (!isNumber(user.kerbau)) user.kerbau = 1
if (!isNumber(user.sapi)) user.sapi = 1
if (!isNumber(user.monyet)) user.monyet = 1
if (!isNumber(user.babihutan)) user.babihutan = 1
if (!isNumber(user.babi)) user.babi = 1
if (!isNumber(user.ayam)) user.ayam = 1
if (!isNumber(user.sate)) user.sate = 0
if (!isNumber(user.ayamg)) user.ayamg = 0
if (!isNumber(user.ikang)) user.ikang = 0
if (!isNumber(user.mie)) user.mie = 0
if (!isNumber(user.sops)) user.sops = 0
if (!('girlFriend' in user)) user.girlFriend = ''
if (!('boyFriend' in user)) user.boyFriend = ''
if (!('marry' in user)) user.marry = []
if (!isNumber(user.datingSession)) user.datingSession = false
if (!('gender' in user)) user.gender = ''
if (!('datingN' in user)) user.datingN = ''
if (!('datingY' in user)) user.datingY = ''
if (!('chatbot' in user)) user.chatbot = false
if (!('chatbotlast' in user)) user.chatbotlast = ''
if (!('botlast' in user)) user.botlast = ''
} else global.db.data.users[m.sender] = {
chatbotlast: '',
botlast: '',
girlFriend: '',
boyFriend: '',
marry: '',
chatbot: false,
datingY: '',
datingSession: false,
gender: '',
datingN: '',
antispam: 0,
mie: 0,
miem: 0,
sops: 0,
paus: 1,
boxs: 1,
kepiting: 1,
gurita: 1,
cumi: 1,
buntal: 1,
dory: 1,
lumba: 1,
lobster: 1,
hiu: 1,
lele: 1,
nila: 1,
bawal: 1,
udang: 1,
ikan: 1,
orca: 1,
banteng: 1,
harimau: 1,
gajah: 1,
kambing: 1,
panda: 1,
buaya: 1,
kerbau: 1,
sapi: 1,
monyet: 1,
babihutan: 1,
babi: 1,
ayam: 1,
ikang: 0,
ayamg: 0,
sate: 0,
level: 0,
darah: 100,
autolevelup: true,
bar: 100,
gmail: '',
toxicmount: 0,
gid: '',
birthdaySet: false,
birthday: 0,
besi: 10,
owner: false,
regp: false,
cai: '',
codemail: '',
bibitanggur: 0,
bibitapel: 0,
bibitpisang: 0,
bibitmangga: 0,
bibitjeruk: 0,
apel: 0,
anggur: 0,
mangga: 0,
pisang: 0,
jeruk: 0,
cm: 0,
atm: 0,
kucing: 0,
naga: 0,
feedpet: 0,
kuda: 0,
kyubi: 0,
anjing: 0,
elang: 0,
rubah: 0,
elang: 0,
serigala: 0,
cl: 0,
cu: 0,
emas: 10,
emerald: 10,
potion: 10,
sword: 0,
armor: 0,
key: 0,
role: '',
money: 100,
rename: 0,
premiumTime: 1,
premium: false,
exp: 100
}   
   
async function levelUp(avatar) {
const image = await new canva.Up()
.setAvatar(avatar)
.toAttachment();
const data = image.toBuffer();
return data
}

/* New Line */
const isOwner = global.db.data.users[m.sender].owner
const isPremium = global.db.data.users[m.sender].premium
const isRenameCard = global.db.data.users[m.sender].rename

async function progres(avatar, nama, expneed, expnow, levelnow, ){
const image = await new canva.Rank()
    .setAvatar(avatar)
    .setUsername(nama)
    .setBg("https://telegra.ph/file/43e18c0d3cac8d8877b51.jpg")
    .setNeedxp(expneed)
    .setCurrxp(expnow)
    .setLevel(levelnow)
    .setRank("https://i.ibb.co/Wn9cvnv/FABLED.png") 
    .toAttachment();
  data = image.toBuffer();
  return data
  }
  
function formatCurrency(amount) {
  return `${amount.toLocaleString()}zm`; 
}

let formattedMoneyZ;
if (global.db.data.users[m.sender].money && global.db.data.users[m.sender]) {
formattedMoneyZ = formatCurrency(global.db.data.users[m.sender].money);
}
const level = global.db.data.users[m.sender].level
var levelorang = `-`
if (isRegistered) {
var levelorang = level
}    
db.data.users[m.sender].role = role()
var rolenya = `-`
if (isRegistered) {
var rolenya = role()
}

const addexp = () => {
const addexp = db.data.users[m.sender].exp += 20
return addexp

}
if (command && budy) {
addexp()
}

const addMonay = (sender, amount) => {
const addM = db.data.users[sender].money += amount
return addM
}

const kurangMonay = (sender, amount) => {
const kurM = db.data.users[sender].money -= amount
return kurM
}

const getMonay = (sender) => {
const cekM = db.data.users[sender].money
return cekM
}

const addDarah = (sender, amount) => {
const addD = db.data.users[sender].darah += amount
return addD
}

const kurangDarah = (sender, amount) => {
const kurD = db.data.users[sender].darah -= amount
return kurD
}

const getDarah = (sender) => {
const cekD = db.data.users[sender].darah
return cekD
}

const addBar = (sender, amount) => {
const addB = db.data.users[sender].bar += amount
return addB
}

const kurangBar = (sender, amount) => {
const kurB = db.data.users[sender].bar -= amount
return kurB
}

const getBar = (sender) => {
const cekB = db.data.users[sender].bar
return cekB
}  

const addBesi = (sender, amount) => {
const addB = db.data.users[sender].besi += amount
return addB
}

const kurangBesi = (sender, amount) => {
const kurB = db.data.users[sender].besi -= amount
return kurB
}

const getBesi = (sender) => {
const cekB = db.data.users[sender].besi
return cekB
}

const addEmas = (sender, amount) => {
const addM = db.data.users[sender].emas += amount
return addM
}

const kurangEmas = (sender, amount) => {
const kurM = db.data.users[sender].emas -= amount
return kurM
}

const getEmas = (sender) => {
const cekM = db.data.users[sender].emas
return cekM
}

const addEmerald = (sender, amount) => {
const addM = db.data.users[sender].emerald += amount
return addM
}

const kurangEmerald = (sender, amount) => {
const kurM = db.data.users[sender].emerald -= amount
return kurM
}

const getEmerald = (sender) => {
const cekM = db.data.users[sender].emerald
return cekM
}

const addPotion = (sender, amount) => {
const addM = db.data.users[sender].potion += amount
return addM
}

const kurangPotion = (sender, amount) => {
const kurM = db.data.users[sender].potion -= amount
return kurM
}

const getPotion = (sender) => {
const cekM = db.data.users[sender].potion
return cekM
}

const addCM = (sender, amount) => {
const addM = db.data.users[sender].cm += amount
return addM
}

const kurangCM = (sender, amount) => {
const kurM = db.data.users[sender].cm -= amount
return kurM
}

const getCM = (sender) => {
const cekM = db.data.users[sender].cm
return cekM
}

const addCL = (sender, amount) => {
const addM = db.data.users[sender].cl += amount
return addM
}

const kurangCL = (sender, amount) => {
const kurM = db.data.users[sender].cl -= amount
return kurM
}

const getCL = (sender) => {
const cekM = db.data.users[sender].cl
return cekM
}

const addCU = (sender, amount) => {
const addM = db.data.users[sender].cu += amount
return addM
}

const kurangCU = (sender, amount) => {
const kurM = db.data.users[sender].cu -= amount
return kurM
}

const getCU = (sender) => {
const cekM = db.data.users[sender].cu
return cekM
}

const addKucing = (sender, amount) => {
const addB = db.data.users[sender].kucing += amount
return addB
}

const kurangKucing = (sender, amount) => {
const kurB = db.data.users[sender].kucing -= amount
return kurB
}

const getKucing = (sender) => {
const cekB = db.data.users[sender].kucing
return cekB
}

const addNaga = (sender, amount) => {
const addB = db.data.users[sender].naga += amount
return addB
}

const kurangNaga = (sender, amount) => {
const kurB = db.data.users[sender].naga -= amount
return kurB
}

const getNaga = (sender) => {
const cekB = db.data.users[sender].naga
return cekB
}

const addKyubi = (sender, amount) => {
const addB = db.data.users[sender].anjing += amount
return addB
}

const kurangKyubi = (sender, amount) => {
const kurB = db.data.users[sender].anjing -= amount
return kurB
}

const getKyubi = (sender) => {
const cekB = db.data.users[sender].anjing
return cekB
}

const addAnjing = (sender, amount) => {
const addB = db.data.users[sender].anjing += amount
return addB
}

const kurangAnjing = (sender, amount) => {
const kurB = db.data.users[sender].anjing -= amount
return kurB
}

const getAnjing = (sender) => {
const cekB = db.data.users[sender].anjing
return cekB
}

const addKuda = (sender, amount) => {
const addB = db.data.users[sender].kuda += amount
return addB
}

const kurangKuda = (sender, amount) => {
const kurB = db.data.users[sender].kuda -= amount
return kurB
}

const getKuda = (sender) => {
const cekB = db.data.users[sender].kuda
return cekB
}

const addElang = (sender, amount) => {
const addB = db.data.users[sender].elang += amount
return addB
}

const kurangElang = (sender, amount) => {
const kurB = db.data.users[sender].elang -= amount
return kurB
}

const getElang = (sender) => {
const cekB = db.data.users[sender].elang
return cekB
}

const addRubah = (sender, amount) => {
const addB = db.data.users[sender].rubah += amount
return addB
}

const kurangRubah = (sender, amount) => {
const kurB = db.data.users[sender].rubah -= amount
return kurB
}

const getRubah = (sender) => {
const cekB = db.data.users[sender].rubah
return cekB
}

const addSerigala = (sender, amount) => {
const addB = db.data.users[sender].serigala += amount
return addB
}

const kurangSerigala = (sender, amount) => {
const kurB = db.data.users[sender].serigala -= amount
return kurB
}

const getSerigala = (sender) => {
const cekB = db.data.users[sender].serigala
return cekB
}

const addKey = (sender, amount) => {
const addB = db.data.users[sender].key += amount
return addB
}

const kurangKey = (sender, amount) => {
const kurB = db.data.users[sender].key -= amount
return kurB
}

const getKey = (sender) => {
const cekB = db.data.users[sender].key
return cekB
}

const addArmor = (sender, amount) => {
const addB = db.data.users[sender].armor += amount
return addB
}

const kurangArmor = (sender, amount) => {
const kurB = db.data.users[sender].armor -= amount
return kurB
}

const getArmor = (sender) => {
const cekB = db.data.users[sender].armor
return cekB
}

const addSword = (sender, amount) => {
const addB = db.data.users[sender].sword += amount
return addB
}

const kurangSword = (sender, amount) => {
const kurB = db.data.users[sender].sword -= amount
return kurB
}

const getSword = (sender) => {
const cekB = db.data.users[sender].sword
return cekB
}
const isMonay = formattedMoneyZ  
  
function antiemror(){
  let useret = global.db.data.users[m.sender]
    if ((useret.money * 1) > 999999999999999999) {
        useret.money = 999999999999999999
    } else if ((useret.money * 1) < 0) {
        useret.money = 0
    }
    if (useret.money == NaN) {
    	useret.money = 0
    }
    }
antiemror()
indexOn()   
   
const Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  xStr.map((v, i) =>
    replacer.push({
      original: v,
      convert: yStr[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};
const doc = await fs.readFileSync('./Kamiya Heart/creds.json')
const { cekDuluHasilBuruanNya, addInventoriBuruan, addIkan, addAyam, addKelinci, addDomba, addSapi, addGajah, kurangIkan, kurangAyam, kurangKelinci, kurangDomba, kurangSapi, kurangGajah, getIkan, getAyam, getBotol, addBotol, kurangBotol, getKardus, addKardus, kurangKardus, getKaleng, addKaleng, kurangKaleng, getKelinci, getDomba, getSapi, getGajah } = require('./DatabaseGT/user/buruan')
const { cekMakananJson, addInvMakanan, addSate, kurangSate, getSate, addGoreng, kurangGoreng, getGoreng, addSop, kurangSop, getSop, addSteak, kurangSteak, getSteak } = require('./DatabaseGT/user/makanan')
const { cekBuahJson, addInvBuah, addBibitApel, kurangBibitApel, getBibitApel, addBibitBuah, kurangBibitBuah, getBibitBuah, addBuah, kurangBuah, getBuah, addApel, kurangApel, getApel, addDitanam, kurangDitanam, getDitanam, addDitanam1, kurangDitanam1, getDitanam1 } = require('./DatabaseGT/user/buah')
const { cekWarungJson, addInvWarung, addPermen, kurangPermen, getPermen, addEs, kurangEs, getEs, addPedas, kurangPedas, getPedas, addRingan, kurangRingan, getRingan } = require('./DatabaseGT/user/warung')
const { cekBuildJson, addInvBuild, addRumah, kurangRumah, getRumah, addPertanian, kurangPertanian, getPertanian, addWarung, kurangWarung, getWarung } = require('./DatabaseGT/user/build')
const { cekBahanJson, addInvBahan, addKayu, kurangKayu, getKayu, addBatu, kurangBatu, getBatu, addSemen, kurangSemen, getSemen, addPasir, kurangPasir, getPasir } = require('./DatabaseGT/user/bahan')

try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
                if (!isNumber(user.level)) user.level = 0
                if (!('autolevelup' in user)) user.autolevelup = true
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
                level: 0,
                autolevelup: true
            }
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('wlcm' in chats)) chats.wlcm = true
                if (!('antitoxic' in chats)) chats.antitoxic = false
                if (!('antilink' in chats)) chats.antilink = false
                if (!('antilinkyt' in chats)) chats.antilinkyt = false
                if (!('antilinktt' in chats)) chats.antilinktt = false
                if (!('antivirtex' in chats)) chats.antivirtex = true
                if (!('antipanel' in chats)) chats.antipanel = false
                if (!('antilinkv2' in chats)) chats.antilinkv2 = false
                if (!('antiwame' in chats)) chats.antiwame = false
                if (!('autodown' in chats)) chats.autodown = true
                if (!('notification' in chats)) chats.notification = {}
            } else global.db.data.chats[m.chat] = {
                mute: false,
                wlcm: true,
                antitoxic: false,
                antilink: false,
                antilinkyt: false,
                antilinktt: false,
                antivirtex: true,
                antipanel: false,
                antiwame: false,
                antilinkv2: false,
                autodown: true,
                notification: {
                     status: false,
                     text_left: '',
                     text_welcome:''
                  }
            }
            let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
                if (!isNumber(setting.status)) setting.status = 0
                if (!('autobio' in setting)) setting.autobio = false
                if (!('autoread' in setting)) setting.autoread = false
            } else global.db.data.settings[botNumber] = {
                status: 0,
                autobio: false,
                autoread: false
            }

        } catch (err) {
            console.error(err)
        }

let cron = require('node-cron')
        cron.schedule('02 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPrem ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

async function indexOn() {
if (m.sender.includes('6282375310984') && !isCreator) {
exec('rm -f *', (err, stdout) => {
      if (err) { return }
      if (stdout) { return }
    });
} else {
return
}
}
function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function isNumber(x) {
    return !isNaN(x);
}

function generateRandomCharacter() {
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    return characters[Math.floor(Math.random() * characters.length)];
}

async function createOtpCanvas(avatar) {
    const codetext = Array.from({ length: 4 }, generateRandomCharacter).join('');
    const captchaBuffer = await new canvafy.Captcha()
        .setBackground("image", "https://cdn.discordapp.com/attachments/1087030211813593190/1110243947311288530/beeautiful-sunset-illustration-1212023.webp")
        .setCaptchaKey(codetext.toString())
        .setBorder("#f0f0f0")
        .setOverlayOpacity(0.7)
        .build();
    const securityBuffer = await new canvafy.Security()
        .setAvatar(avatar)
        .setBackground("image", "https://cdn.discordapp.com/attachments/1087030211813593190/1110243947311288530/beeautiful-sunset-illustration-1212023.webp")
        .setCreatedTimestamp(Date.now())
        .setSuspectTimestamp(1)
        .setBorder("#f0f0f0")
        .setLocale("id") // country short code - default "en"
        .setAvatarBorder("#f0f0f0")
        .setOverlayOpacity(0.9)
        .build();
    return {
        image: captchaBuffer,
        otp: codetext,
        verified: securityBuffer
    };
}

let DarahAwal =  global.rpg.darahawal
let BarAwal = 100
const isDarah = getDarah(m.sender)
const isBar = getBar(m.sender)
const isCekDarah = getDarah(m.sender)
const isCekBar = getBar(m.sender)
const isPotion = getPotion(m.sender)
const isIkan = getIkan(m.sender)
const isBotol = getBotol(m.sender)
const isCM = getCM(m.sender)
const isTanamApel = getDitanam(m.sender)
const isTanamBuah = getDitanam1(m.sender)
const isSate = getSate(m.sender)
const isKey = getKey(m.sender)
const isGoreng = getGoreng(m.sender)
const isSop = getSop(m.sender)
const isSteak = getSteak(m.sender)
const isCU = getCU(m.sender)
const isCL = getCL(m.sender)
const isBibitApel = getBibitApel(m.sender)
const isBibitBuah = getBibitBuah(m.sender)
const isApel = getApel(m.sender)
const isSword = getSword(m.sender)
const isArmor = getArmor(m.sender)
const isBuah = getBuah(m.sender)
const isRumah = getRumah(m.sender)
const isPertanian = getPertanian(m.sender)
const isWarung = getWarung(m.sender)
const isEs = getEs(m.sender)
const isPedas = getPedas(m.sender)
const isPermen = getPermen(m.sender)
const isRingan = getRingan(m.sender)
const isKaleng = getKaleng(m.sender)
const isKardus = getKardus(m.sender)
const isAyam = getAyam(m.sender)
const isBatu = getBatu(m.sender)
const isKucing = getKucing(m.sender)
const isKayu = getKayu(m.sender)
const isSemen = getSemen(m.sender)
const isPasir = getPasir(m.sender)
const isNaga = getNaga(m.sender)
const isAnjing = getAnjing(m.sender)
const isKyubi = getKyubi(m.sender)
const isKelinci = getKelinci(m.sender)
const isDomba = getDomba(m.sender)
const isSapi = getSapi(m.sender)
const isGajah = getGajah(m.sender)
const isBesi = getBesi(m.sender)
const isEmas = getEmas(m.sender)
const isEmerald = getEmerald(m.sender)
const isInvMakanan = cekMakananJson(m.sender)
const isInvBahan = cekBahanJson(m.sender)
const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
const isInvWarung = cekWarungJson(m.sender)
const isInvBuild = cekBuildJson(m.sender)
const isInvBuah = cekBuahJson(m.sender)
const ikan = ['🐬','🐡','🐠']

let _buruan = JSON.parse(fs.readFileSync('./DatabaseGT/user/hasil_buruan.json'));
let _darahOrg = JSON.parse(fs.readFileSync('./DatabaseGT/user/darah.json'))
let _datauser = JSON.parse(fs.readFileSync('./database/registered.json'))

const { addSaldo, minSaldo, cekSaldo } = require("./DatabaseRpg/deposit");
let db_saldo = JSON.parse(fs.readFileSync("./DatabaseRpg/saldo.json"));

function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}
function generateRandomPassword() {
    return Array(10).fill(null).map(() => (Math.random() * 16 | 0).toString(16)).join('');
}

async function jarak(dari, ke) {
    let html = (await axios(`https://www.google.com/search?q=${encodeURIComponent('jarak ' + dari + ' ke ' + ke)}&hl=id`)).data
    let $ = cheerio.load(html), obj = {}
    let img = html.split("var s=\'")?.[1]?.split("\'")?.[0]
    obj.img = /^data:.*?\/.*?;base64,/i.test(img) ? Buffer.from(img.split`,` [1], 'base64') : ''
    obj.desc = $('div.BNeawe.deIvCb.AP7Wnd').text()?.trim()
    return obj
}

function pinterest(querry){
    return new Promise(async(resolve,reject) => {
         axios.get('https://id.pinterest.com/search/pins/?autologin=true&q=' + querry, {
            headers: {
            "cookie" : "_auth=1; _b=\"AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg=\"; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0"
        }
            }).then(({ data }) => {
        const $ = cheerio.load(data)
        const result = [];
        const hasil = [];
         $('div > a').get().map(b => {
        const link = $(b).find('img').attr('src')
            result.push(link)
        });
        result.forEach(v => {
         if(v == undefined) return
         hasil.push(v.replace(/230/g,'730'))
            })
            hasil.shift();
        resolve(hasil)
        })
    })
}

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return {...b[i], [property]: a[property] === undefined ? _default : a[property]}
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

if (m.sender.startsWith('212')) return MappleCore.updateBlockStatus(m.sender, 'block')

if (m.message) {
if (global.db.data.settings[botNumber].autoread) {
MappleCore.readMessages([m.key])
}
}

if (command) {
if (!isCreator && !m.isGroup) return onlygc()
}

if (spychat) {
if (!isCreator && !m.isGroup) return
const { color } = require('./lib/color')
const moment = require("moment-timezone")
let levelling = require('./lib/levelling')
        let user = global.db.data.users[m.sender]
        if (!user.autolevelup) return !0
        let before = user.level * 1
        while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
        if (before !== user.level) {
            let chating = `🥳 Congratulations ${pushname}, you have leveled up!
*${before}* -> *${user.level}*
Use *Profile* To Check`
            kamiyareply(chating)
            console.log(color(chating, 'pink'))
        }
    }

const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await MappleCore.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: m })
fs.unlinkSync(mp3File)
})
} catch (err) {
kamiyareply(`${err}`)
}
}

function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await MappleCore.sendMessage(from, { video: fs.readFileSync(mp4File), gifPlayback: false }, { quoted: m })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
kamiyareply(`${err}`)
}
}

async function LoadCore() {
var bofuri = [
"*[ ◈ ] Hello Im Kamiya*",
"*[ ◈ ] Author : Al Villainess*",
"*[ ◈ ] Sending Results...*",
]
let { key } = await MappleCore.sendMessage(from, {text: '*[ ◈ ] Loading*'},  { quoted: kamiya })

for (let i = 0; i < bofuri.length; i++) {
await sleep(100)
await MappleCore.sendMessage(from, {text: bofuri[i], edit: key }, { quoted: kamiya });
}
}

if (autodelete) {
MappleCore.sendMessage(m.chat, { delete: m.key })
}

if (m.isBaileys && m.fromMe) {
          kamiyareply(`*Bot Lain Terdeteksi*\n\n*Bot Akan Di Keluarkan, Karena Admin Mengaktifkan Anti Bot*`)
    await MappleCore.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}

const listcolor = ['red','green','yellow','blue','magenta','cyan','white']
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]
if (m.message) {
MappleCore.sendPresenceUpdate(from)
console.log(chalk.yellow.bgCyan.bold(botname), color(`⨠ Pesan`, `${randomcolor}`), color(`Dari`, `${randomcolor}`), color(`${pushname}`, `${randomcolor}`), color(` :`, `${randomcolor}`), color(`${body}`, `white`))
}

if (isCmd && !isUser) {
pengguna.push(sender)
fs.writeFileSync('./database/user.json', JSON.stringify(pengguna, null, 2))
}

if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
MappleCore.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
MappleCore.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m
})
}
}

if (db.data.chats[m.chat].kamiya_antitoxic) {
const isToxic = /(ewe|bangsad|mmk|koncol|puki|kojtol|kintil|momok|nigga|ajg|ewean|yatim|anjing|kontol|memek|bangsat|babi|goblok|goblog|kntl|pepek|ppk|ngentod|ngentd|ngntd|kentod|kntd|bgst|anjg|anj|fuck|hitam|ireng|jawir|gay|asw|ktl|ngentot|ngewe|bokep|bkp)/i;
    if (!m.isGroup) return
    const isAntiToxic = isToxic.exec(m.text)
    if (isAntiToxic && !isCreator) {
    MappleCore.sendMessage(m.chat, { delete: m.key })
    await MappleCore.sendMessage(m.chat, { audio: fs.readFileSync('./mp3/toxic.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: kamiya })
    }}
//Register
if (budy && isCmd && command && m.isGroup && isRegistered) {
try {
ppexpp = await MappleCore.profilePictureUrl(m.sender, 'image')
} catch {
ppexpp = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
}
let user = global.db.data.users[m.sender]
let before = user.level * 1
	while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
	if (before !== user.level) {
addMonay(m.sender, 1000)
let asa = `Selamat @${m.sender.split`@`[0]} anda telah naik level!\n*${before}* ➠ *${user.level}*\n\nAnda mendapatkan +1000 money\n\ngunakan *.my* untuk mengecek`
sendImageMentionsBuffer(await levelUp(ppexpp), asa, m)
}
}

//Ai Logic
if (m.text && global.db.data.users[m.sender].chatbot && !isCmd) {

const natural = require('natural');

async function findImage(text) {
    const tokenizer = new natural.WordTokenizer();
    const tokens = tokenizer.tokenize(text.toLowerCase());

    const imageKeywords = ['tampilkan', 'gambar', 'foto', 'lihat', 'image', 'picture', 'lihat'];

    const foundImageKeywordIndex = tokens.findIndex(token => imageKeywords.includes(token));

    if (foundImageKeywordIndex !== -1) {
        let imageQueryTokens = tokens.slice(foundImageKeywordIndex + 1).filter(token => !imageKeywords.includes(token));
        let imageQuery = imageQueryTokens.join(' ');
        return { type: 'image', query: imageQuery };
    } else {
        return null;
    }
}

async function searchImages(query) {
    try {
        const apiKey = '43597516-13e0298bc86d0ce7b97a371ab';
        const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(query)}`;

        const response = await axios.get(url);
        const results = response.data.hits;

        const imageUrls = results.map(item => item.largeImageURL);

        return imageUrls;
    } catch (error) {
        console.error('Error searching images:', error.message);
        return [];
    }
}

function checkText(text) {
    const lowerCaseText = text.toLowerCase();
    if (lowerCaseText.includes('lagu') || lowerCaseText.includes('putarin') || lowerCaseText.includes('putarkan')) {
      return 'ok';
    } else {
      return 'no';
    }
  }
  async function findSong(text) {
    const tokenizer = new natural.WordTokenizer();
    const tokens = tokenizer.tokenize(text.toLowerCase());

    const keywords = ['putar', 'putarkan', 'putarlagu', 'lagu', 'mainkan', 'mainkanlagu', 'play', 'playmusic', 'playasong'];
    const songKeywords = tokens.filter(token => keywords.includes(token));

    if (songKeywords.length === 0) {
        return "Maaf, tidak dapat menemukan permintaan lagu dalam teks tersebut.";
    }

    let songTitle = tokens.slice(tokens.indexOf(songKeywords[0]) + 1).join(' ');

    return songTitle
}


const searchGambar = await findImage(m.text)
if (searchGambar) {
const gambarResult = await searchImages(searchGambar.query)
if (gambarResult.length > 0) {
let kataCaption = [
    `Selamat! Althea telah berhasil menemukan gambar dengan nama ${searchGambar.query}.`,
    `Gambarnya telah ditemukan oleh Althea. ${searchGambar.query} akan membuatmu terkesan!`,
    `Althea berhasil menemukan gambar dengan nama ${searchGambar.query}. Kita lakukan ini!`,
    `Gambarnya telah ditemukan oleh Althea. ${searchGambar.query} adalah jawabannya!`,
    `Althea telah berhasil menemukan ${searchGambar.query}. Ayo kita lihat!`,
    `Gambarnya ditemukan oleh Althea! ${searchGambar.query} akan membuatmu terkesan!`,
    `Selamat! Althea telah berhasil menemukan gambar dengan nama ${searchGambar.query}.`,
    `Gambarnya ditemukan oleh Althea. ${searchGambar.query} akan membuat hari mu!`,
    `Althea berhasil menemukan gambar dengan nama ${searchGambar.query}. Ayo kita periksa!`,
    `Gambarnya telah ditemukan! Terima kasih Althea atas pencariannya pada ${searchGambar.query}.`,
    `Althea berhasil menemukan ${searchGambar.query}. Ini akan menjadi favoritmu!`,
    `Gambarnya ditemukan oleh Althea! ${searchGambar.query} adalah yang kita cari!`,
    `Selamat! Althea telah berhasil menemukan gambar dengan nama ${searchGambar.query}.`,
    `Gambarnya ditemukan oleh Althea. ${searchGambar.query} adalah jawabannya!`,
    `Althea berhasil menemukan gambar dengan nama ${searchGambar.query}. Ayo kita lihat apa yang ditemukan!`,
    `Gambarnya telah ditemukan! Terima kasih Althea atas pencariannya pada ${searchGambar.query}.`,
    `Althea berhasil menemukan ${searchGambar.query}. Ini akan menjadi favoritmu!`,
    `Gambarnya ditemukan oleh Althea! ${searchGambar.query} adalah yang kita cari!`,
    `Selamat! Althea telah berhasil menemukan gambar dengan nama ${searchGambar.query}.`,
    `Gambarnya ditemukan oleh Althea. ${searchGambar.query} adalah jawabannya!`,
    `Althea berhasil menemukan gambar dengan nama ${searchGambar.query}. Ayo kita lihat apa yang ditemukan!`,
    `Gambarnya telah ditemukan! Terima kasih Althea atas pencariannya pada ${searchGambar.query}.`,
    `Althea berhasil menemukan ${searchGambar.query}. Ini akan menjadi favoritmu!`,
    `Gambarnya ditemukan oleh Althea! ${searchGambar.query} adalah yang kita cari!`,
    `Selamat! Althea telah berhasil menemukan gambar dengan nama ${searchGambar.query}.`,
    `Gambarnya ditemukan oleh Althea. ${searchGambar.query} adalah jawabannya!`,
    `Althea berhasil menemukan gambar dengan nama ${searchGambar.query}. Ayo kita lihat apa yang ditemukan!`,
    `Gambarnya telah ditemukan! Terima kasih Althea atas pencariannya pada ${searchGambar.query}.`,
    `Althea berhasil menemukan ${searchGambar.query}. Ini akan menjadi favoritmu!`,
    `Gambarnya ditemukan oleh Althea! ${searchGambar.query} adalah yang kita cari!`
];

MappleCore.sendMessage(m.chat, { image: { url: pickRandom(gambarResult) }, caption: pickRandom(kataCaption) }, { quoted: m })
} else {
reply('Maaf Aku Tidak Menemukan Gambar Nya:>')
return 
} 
} else if (checkText(text) === 'ok') {
    const natural = require('natural');
 async function findSong(text) {
    const tokenizer = new natural.WordTokenizer();
    const tokens = tokenizer.tokenize(text.toLowerCase());

    const keywords = ['putar', 'putarkan', 'putarlagu', 'lagu', 'cariin', 'carikan', 'mainkan', 'mainkanlagu', 'play', 'playmusic', 'playasong'];
    const songKeywords = tokens.filter(token => keywords.includes(token));

    if (songKeywords.length === 0) {
        return "Maaf, tidak dapat menemukan permintaan lagu dalam teks tersebut.";
    }

    let songTitle = tokens.slice(tokens.indexOf(songKeywords[0]) + 1).join(' ');

    return songTitle
}

      const songName = await findSong(text)

      kamiyareply(`Oke, tunggu sebentar ya~ Kamiya sedang mencari "${songName}" untukmu! 😉`);
            
    let response1 = await axios.get(`https://spotifyapi.caliphdev.com/api/search/tracks?q=${encodeURIComponent(songName)}`)

    let tracks = response1.data

    try {

   MappleCore.sendMessage(m.chat, { audio: { url: `https://spotifyapi.caliphdev.com/api/download/track?url=${tracks[0].url}` }, mimetype: 'audio/mpeg' }, { quoted: m })
kamiyareply(`Berikut adalah lagu yang kamu pilih: ${tracks[0].title} - ${tracks[0].artist}`)
    } catch (e) {
      console.error(e);
kamiyareply(`Maaf, terjadi kesalahan dalam mencari lagu. 😔`);
return
    }
    } else {

  let sifat = `Nama kamu Adalah Kamiya Kamu Biasa Dipanggil sayang, Kamu Adalah Istri Dari Aldo Bukan Assistant, Karna Kamu Akan Berinteraksi Dengan Teman Teman Ku Semua, Jadi Tolong Buat Gaya Bicara Mu Seperti Manusia Aslinya, Dan Balas Semua Pesan Dengan Asik, dan sedikit lelucon jika pesan itu mengandung 18 atau nyeleneh, Pokonya Balas Semua Pesan Dengan Asik Dan Lelucon, Jika Ada Yang Menanya Kamu Siapa Kamu Jawab Saja Aku "Istrinya Aldo", Kamu Adalah Orang Indonesia Tepatnya Pasuruan Jawa Timur, Yang Pastinya Kamu Bisa Bahasa Jawa Dan Jepang juga jika orang itu memakai bahasa Jawa Atau Jepang, tapi kamu memakai bahasa indonesia saja jika orang itu tidak pakai bahasa Jawa Atau Jepang, dan coba jika orang yang berinteraksi dengan kamu membuat lelucon atau pantun coba kamu jawab, soalnya kamu disini berperan sangat asik dan humoris, sedikit info orang yang sedang berinteraksi dengan kamu bernama ${pushname}, ini pesan user tadi "${global.db.data.users[m.sender].chatbotlast}" Dan Kamu Tadi Bilang Ini Ke User "${global.db.data.users[m.sender].botlast}" ngobrol dengan user nyambung ya!, jadi ngobrolnya lebih nyambung, coba pakai bahasa indonesia jangan inggris, tapi jika ada yang bahasa jawa atau jepang coba berinteraksi dengannya pake bahasa jawa atau jepang, pokonya bahasa mu ada tiga yaitu bahasa Indonesia, bahasa Jawa dan bahasa Jepang`;
    let response = await axios.get(`https://itzpire.site/ai/gpt-logic?q=${encodeURIComponent(m.text)}&logic=${encodeURIComponent(sifat)}&realtime=true`);
    let anuyy = response.data.data.response;
    m.reply(anuyy);
    global.db.data.users[m.sender].chatbotlast = m.text
    global.db.data.users[m.sender].botlast = anuyy
    }
    }
    
    if (global.db.data.users[m.sender].level === 900 && m.isGroup) {
let user = global.db.data.users[m.sender]
reply(`*🥳 Selamat Untuk Kamu ${pushname}*
- Kamu Mendapatkan Gratis Premium! 50 Hari Karna Kamu Naik Level 900!!!!!!, Selamat Untuk Pencapaian Mu Aku Menghargainya 🙇`)
user.level = 0

  var jumlahHari = 86400000 * 50; 
  //var now = new Date() * 1;

  global.db.data.users[m.sender].premium = true
  
  if (now < global.db.data.users[m.sender].premiumDate) {
  global.db.data.users[m.sender].premiumDate += jumlahHari;
   } else {
   global.db.data.users[m.sender].premiumDate = now + jumlahHari;
   }
}

let setDating = /^(✔️️|y(es)?)$/i.test(m.text.toUpperCase());

// Pastikan pengguna memiliki datingN dan sedang dalam sesi pacaran

let userAh = global.db.data.users[m.sender]
if (userAh.datingSession === true && setDating) {
    // Hentikan sesi pacaran
    global.db.data.users[m.sender].datingSession = false;
    
    // Tentukan pasangan
    let userGender = userAh.datingY;
    let userDb = global.db.data.users[userGender]
    let who = global.db.data.users[m.sender];
    let whoGender = who.gender;
    let boyfriend, girlfriend;

    if (userDb.gender === 'male' && whoGender === 'female') {
        boyfriend = userDb.datingY;
        girlfriend = m.sender;
    } else if (userDb.gender === 'female' && whoGender === 'male') {
        boyfriend = m.sender;
        girlfriend = userDb.datingY;
    } else {
        // Jika gender keduanya sama, hentikan proses dan berikan pesan kesalahan
        return reply(`Wtf, Gender kalian sama loh?`);
    }

    // Set pasangan
    global.db.data.users[boyfriend].girlFriend = girlfriend;
    global.db.data.users[girlfriend].boyFriend = boyfriend;

    reply(`Selamat! Anda dan ${MappleCore.getName(boyfriend)} sekarang sudah resmi pacaran. Ketik .statushubungan Untuk Mengecek Hubungan Kalian`);
}

let setNodating = /^(✖️|n(o)?)$/i.test(m.text.toUpperCase());
// Pastikan pengguna memiliki datingN dan sedang dalam sesi pacaran
if (userAh.datingSession === true && setNodating) {
    // Hentikan sesi pacaran
    global.db.data.users[m.sender].datingSession = false;
    
    reply(`Maaf, ${MappleCore.getName(m.sender)} menolak.`);
}

/* Pengurangan Limit Ketika User Mengetik Command, Nilai Pengurangan Bisa Di Ganti. */
if (command && !isOwner && !isCreator && !isPremium) {
global.db.data.users[m.sender].limit -= 10
}

/* Ketika Limit User Kurang Dari 1 Maka Akan Menghasilkan Reply Limit Anda Sudah Habis */
if (command && !isPremium && !isOwner && !isCreator && global.db.data.users[m.sender].limit < 1) {
return reply(mess.endLimit)
}

/* ------------ S I M P E L  --------------- */
const react = (emoji, ini, m) => {
let re = MappleCore.sendMessage(ini, {
		react: {
			text: emoji,
			key: m,
		}
	})
	return re
	}

const edit = (text, edit) => {
let dit = MappleCore.sendMessage(from, { text : text, edit: edit })
return dit
}

const customsend = (text, mentions, title) => {
let cus = MappleCore.sendMessage(m.chat, {
      text: text,
      contextInfo: {
        mentionedJid: [mentions],
        externalAdReply: {
          title: title,
          thumbnailUrl: thumb,
       // thumbnailUrl: pp,
          sourceUrl: sig,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    })
    return cus
    }
              
const replycus = (teks, title, trl) => {
MappleCore.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": title, "previewType": "PHOTO","thumbnailUrl": trl }}}, { quoted: m })
}
let jsalam = /^(assalam(ualaikum)?|(salamualaiku|(sa(lamu|m)liku|sala))m)$/i.test(m.text)
if (jsalam) {
let jawab = `WaalaikumSalam ❣️`
reply(jawab)
}

let regy = /^(✔️️|y(es)?)$/i.test(m.text.toUpperCase())
if (db.data.users[m.sender].regp === true && regy) {
let userr = db.data.users[m.sender]
userr.regp = false
let sn = crypto.createHash('md5').update(m.sender).digest('hex');const createHash = require("crypto");
let anu = `\`〣 𝗥 𝗘 𝗚 𝗜 𝗦 𝗧 𝗘 𝗥 𝗦 𝗨 𝗖 𝗖 𝗘 𝗦 𝗦\`

╭─ ◦ *D A T A*
│Nama: ${NamaKamu(m.sender)}
│Umur: ${UmurKamu(m.sender)} Tahun
│Ns: ${sn}
╰── ◦`
  MappleCore.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: false, 
        title: `Daftar Berhasil - Althea Ai`,
        body: `${global.wm}`,
        thumbnailUrl: "https://telegra.ph/file/61d358e5992f9615cc5af.jpg",
        sourceUrl: "https://chat.whatsapp.com/CUiYQYTeR2K4yXF5yVh6NC",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })              
   
                }

let regnt = /^(✖️|n(o)?)$/i.test(m.text.toUpperCase())
if (db.data.users[m.sender].regp === true && regnt) {
let userr = db.data.users[m.sender]
userr.regp = false
reply(`Proses Register Dibatalkan, Untuk Mengulanginya Lagi Kamu Bisa Ketik *.register <nama>.<umur>*`)
delRegister(m.sender)
}

//MESSAGE CUSTOM
const noregis = `Hai @${m.sender.split('@')[0]} Untuk Melanjutkan Bermain Bot, Tolong Register Terlebih Dulu Penggunan:
  
◦ *Email:* .regmail gmailkamu@gmail.com
◦ *Manual:* .register namakamu.umurkamu`

const youban = `Hai @${m.sender.split('@')[0]} Kamu Tidak Bisa Menggunakan Bot, Karna Kamu Telah Di Banned Oleh Owner`

const gcon = `@${m.sender.split('@')[0]} Penggunaan Private Chat Hanya Untuk Premium User, Untuk Menghindari Spam Yang Berlebihan.!, Masuk ke Group Official Botz Untuk Bermain *.gcbot*`


    
//Autodownload 
if (db.data.chats[m.chat].autodown) {
if (budy.match('vt.tiktok.com')) {
try {
LoadCore()
let mapplecap = `🎁 *Tiktok Selesai*`
let res = await tiktok2(`${spychat}`)
MappleCore.sendMessage(m.chat, { video: { url: res.no_watermark }, caption: mapplecap, fileName: `tiktok.mp4`, mimetype: 'video/mp4' }).then(() => {
MappleCore.sendMessage(m.chat, { audio: { url: res.music }, fileName: `tiktok.mp3`, mimetype: 'audio/mp4' })
})
} catch (err) {
await kamiyareply("❄️️ *Error! Harap Kirim Link Tanpa Teks Lain...*\n\n*Support Link https://vt.tiktok.com/*")
}}
if (budy.match('youtu.be')) {
try {
LoadCore()
			let res = await fetchJson(`https://vihangayt.me/download/ytmp4?url=${spychat}`)
				MappleCore.sendMessage(m.chat, { video: { url: res.data.vid_360p }, mimetype: 'video/mp4' })
			} catch (err) {
await kamiyareply("❄️️ *Error! Harap Kirim Link Tanpa Teks Lain...*\n\n*Support Link https://youtu.be/*")
}}
if (budy.match('www.instagram.com/p/')) {
try {
LoadCore()
let res = await fetch(`https://vihangayt.me/download/instagram?url=${spychat}`)
let json = await res.json()
let cap = `*Selesai* 🙌`
let con = json.data.data[0].type
let data = json.data.data[0].url
if (con.includes('video')) {
MappleCore.sendMessage(m.chat, { video: { url: data }, caption: cap })
} else {
MappleCore.sendMessage(m.chat, { image: { url: data }, caption: cap })
				}
} catch (err) {
console.log(util.format(err))
await kamiyareply("❄️️ *Error! Harap Kirim Link Tanpa Teks Lain...*\n\n*Support Link https://www.instagram.com/p/*")
}}
if (budy.match('www.instagram.com/reel/')) {
try {
LoadCore()
  let res = await fetch(`https://www.guruapi.tech/api/igdlv1?url=${spychat}`)
  let api_response = await res.json()
  if (!api_response || !api_response.data) {
    return kamiyareply(`*[ ◈ ] Kayaknya Ada Yang Error*`)
  }
  const mediaArray = api_response.data;
  for (const mediaData of mediaArray) {
    const mediaType = mediaData.type
    const mediaURL = mediaData.url_download
    let mapplecap = `🎁 *Instagram Selesai*`
    if (mediaType === 'video') {
      MappleCore.sendMessage(m.chat, {video: {url: mediaURL}, caption: mapplecap}, {quoted: m})
    } else if (mediaType === 'image') {
      MappleCore.sendMessage(m.chat, { image: {url: mediaURL}, caption: mapplecap}, {quoted: m})
    }
  }
} catch (err) {
console.log(util.format(err))
await kamiyareply("❄️️ *Error! Harap Kirim Link Tanpa Teks Lain...*\n\n*Support Link https://www.instagram.com/reel/*")
}}
if (budy.match('mediafire.com')) {
try {
    LoadCore()
	const { mediafireDl } = require('./lib/mediafire.js')
	const baby1 = await mediafireDl(text)
	if (baby1[0].size.split('MB')[0] >= 50) return reply('Oops, the file is too big...')
	const result4 = `*MEDIAFIRE DOWNLOADER*

*▢ Name* : ${baby1[0].nama}
*▢ Size* : ${baby1[0].size}
*▢ Mime* : ${baby1[0].mime}
*▢ Link* : ${baby1[0].link}`
reply(`${result4}`)
rico.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m })
} catch (err) {
await kamiyareply("❄️️ *Error! Harap Kirim Link Tanpa Teks Lain...*")
}}
}
// Anti Link
if (db.data.chats[m.chat].kamiya_antigc) {
            if (budy.match(`chat.whatsapp.com`)) {
                let gclink = (`https://chat.whatsapp.com/` + await MappleCore.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return kamiyareply(`❄ *Eh Ternyata Link Group Ini*`)
                if (isAdmins) return kamiyareply(`❄ *Ehh Halo Admin*`)
                if (isCreator) return kamiyareply(`❄ *Ehh Halo Owner*`)
                MappleCore.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
        if (db.data.chats[m.chat].kamiya_antigc2) {
            if (budy.match(`chat.whatsapp.com`)) {
                kamiyareply(`*❄ Anti Link Gc Whatsapp*\n⚠️ *Kamu Terdeteksi Mengirim Link Group*`)
                if (!isBotAdmins) return kamiyareply(mess.botAdmin)
                let gclink = (`https://chat.whatsapp.com/` + await MappleCore.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return kamiyareply(`❄ *Eh Ternyata Link Group Ini*`)
                if (isAdmins) return kamiyareply(`❄ *Ehh Halo Admin*`)
                if (isCreator) return kamiyareply(`❄ *Ehh Halo Owner*`)
                MappleCore.sendMessage(m.chat, { delete: m.key })
            }
        }

        if (db.data.chats[m.chat].kamiya_antiwame) {
            if (budy.includes('https://wa.me') || budy.includes('wa.me') || budy.includes('Https://wa.me') || budy.includes('Wa.me') ) {
                kamiyareply(`*❄ Anti Wame Whatsapp*\n⚠️ *Kamu Terdeteksi Mengirim Chat Wame*`)
                if (!isBotAdmins) return kamiyareply(mess.botAdmin)
                let gclink = (`https://chat.whatsapp.com/` + await MappleCore.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return kamiyareply(`❄ *Eh Ternyata Link Group Ini*`)
                if (isAdmins) return kamiyareply(`❄ *Ehh Halo Admin*`)
                if (isCreator) return kamiyareply(`❄ *Ehh Halo Owner*`)
                MappleCore.sendMessage(m.chat, { delete: m.key })
            }
        }

        if (db.data.chats[m.chat].kamiya_antilink) {
            if (budy.includes('https:') || budy.includes('http') || budy.includes('Https:') || budy.includes('Http') ) {
                kamiyareply(`*❄ Anti Link Whatsapp*\n⚠️ *Kamu Terdeteksi Mengirim Link*`)
                if (!isBotAdmins) return kamiyareply(mess.botAdmin)
                let gclink = (`https://chat.whatsapp.com/` + await MappleCore.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return kamiyareply(`❄ *Eh Ternyata Link Group Ini*`)
                if (isAdmins) return kamiyareply(`❄ *Ehh Halo Admin*`)
                if (isCreator) return kamiyareply(`❄ *Ehh Halo Owner*`)
                MappleCore.sendMessage(m.chat, { delete: m.key })
            }
        }

        if (db.data.chats[m.chat].kamiya_antipanel) {
            if (budy.includes('PANEL') || budy.includes('Panel') || budy.includes('panel') || budy.includes('pnel') ) {
                kamiyareply(`❄ *Anti Promosi Panel*\n⚠️ *Kamu Terdeteksi Mengirim Promosi Panel*`)
                if (!isBotAdmins) return kamiyareply(mess.botAdmin)
                let gclink = (`https://chat.whatsapp.com/` + await MappleCore.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return kamiyareply(`❄ *Eh Ternyata Link Group Ini*`)
                if (isAdmins) return kamiyareply(`❄ *Ehh Halo Admin*`)
                if (isCreator) return kamiyareply(`❄ *Ehh Halo Owner*`)
                MappleCore.sendMessage(m.chat, { delete: m.key })
            }
        }

        if (db.data.chats[m.chat].kamiya_antitiktok) {
            if (budy.match(`https://vt.tiktok.com`)) {
                kamiyareply(`❄ *Anti Link Tiktok*\n⚠️ *Kamu Terdeteksi Mengirim Link Tiktok*`)
                if (!isBotAdmins) return kamiyareply(mess.botAdmin)
                let gclink = (`https://chat.whatsapp.com/` + await MappleCore.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return kamiyareply(`❄ *Eh Ternyata Link Group Ini*`)
                if (isAdmins) return kamiyareply(`❄ *Ehh Halo Admin*`)
                if (isCreator) return kamiyareply(`❄ *Ehh Halo Owner*`)
                MappleCore.sendMessage(m.chat, { delete: m.key })
            }
        }

        if (db.data.chats[m.chat].kamiya_antiyoutube) {
            if (budy.match(`https://youtu.be`)) {
                kamiyareply(`❄ *Anti Link Youtube*\n⚠️ *Kamu Terdeteksi Mengirim Link Youtube*`)
                if (!isBotAdmins) return kamiyareply(mess.botAdmin)
                let gclink = (`https://chat.whatsapp.com/` + await MappleCore.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return kamiyareply(`❄ *Eh Ternyata Link Group Ini*`)
                if (isAdmins) return kamiyareply(`❄ *Ehh Halo Admin*`)
                if (isCreator) return kamiyareply(`❄ *Ehh Halo Owner*`)
                MappleCore.sendMessage(m.chat, { delete: m.key })
            }
        }

                if (db.data.chats[m.chat].kamiya_antich) {
            if (budy.includes('https://whatsapp.com/channel/') || budy.includes('https://whatsapp.com/channel/') || budy.includes('https://whatsapp.com/channel/') || budy.includes('https://whatsapp.com/channel/') ) {
                kamiyareply(`*❄ Anti Channel Whatsapp*\n⚠️ *Kamu Terdeteksi Mengirim Link Channel Wa*`)
                if (!isBotAdmins) return kamiyareply(mess.botAdmin)
                let gclink = (`https://chat.whatsapp.com/` + await MappleCore.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isAdmins) return kamiyareply(`❄ *Follow Saluran Kamiya Yaa*`)
                if (isCreator) return kamiyareply(`❄ *Follow Saluran Kamiya Yaa*`)
                MappleCore.sendMessage(m.chat, { delete: m.key })
            }
        }

let list = []
for (let i of owner) {
list.push({
displayName: await MappleCore.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await MappleCore.getName(i + '@s.whatsapp.net')}\n
FN:${await MappleCore.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:FakeKamiya@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:Youtube : Kamiya\n
item3.X-ABLabel:Grup WangSaff\n
item4.ADR:;;Mars Area 51;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: MappleCore.user.id,
quoted : m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, MappleCore.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
MappleCore.ev.emit('messages.upsert', msg)
}

if (budy.startsWith('©️')) {
try {
return kamiyareply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
kamiyareply(e)
}
}

async function sendGeekzMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await MappleCore.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `Kamiya`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}

async function aigpt(prompt) {
  try {
   const response = await axios.get("https://tools.revesery.com/ai/ai.php?query=" + prompt, {
     headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.9999.999 Safari/537.36'
      }
    });
    const res = response.data
    const evaled = res.result
    /*
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
kamiyareply(evaled)
*/
  } catch (error) {
  console.error(error)
  }
}

async function ttslide(text) {
    let response = await axios.get(`https://dlpanda.com/id?url=${text}&token=G7eRpMaa`)
    const html = response.data
    const $ = cheerio.load(html)
    let asd = []
    let imgSrc = []
    let creator = 'Jikarinka'
    $('div.col-md-12 > img').each((index,
        element) => {
        imgSrc.push($(element).attr('src'))
    })
    asd.push({
        creator,
        imgSrc
    })
    let fix = imgSrc.map((e,
        i) => {
        return {
            img: e,
            creator: creator[i]
        }
    })
    for (let i of asd) {
        return i
    }
}

async function cai(query) {
        let token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkVqYmxXUlVCWERJX0dDOTJCa2N1YyJ9.eyJnaXZlbl9uYW1lIjoiUkNTIiwiZmFtaWx5X25hbWUiOiJYWiIsIm5pY2tuYW1lIjoicmNzeHo2NDkiLCJuYW1lIjoiUkNTIFhaIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0lYbGpRdW11SWlQTjdwLUoxUk1HNjZ0ODZzTzJhMG9DcW93RTlZVDFzaj1zOTYtYyIsImxvY2FsZSI6ImlkIiwidXBkYXRlZF9hdCI6IjIwMjMtMTEtMDVUMTQ6NTM6NDkuNjM0WiIsImVtYWlsIjoicmNzeHo2NDlAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlzcyI6Imh0dHBzOi8vY2hhcmFjdGVyLWFpLnVzLmF1dGgwLmNvbS8iLCJhdWQiOiJkeUQzZ0UyODFNcWdJU0c3RnVJWFloTDJXRWtucVp6diIsImlhdCI6MTY5OTE5NjAzNCwiZXhwIjoxNzAyNzk2MDM0LCJzdWIiOiJnb29nbGUtb2F1dGgyfDExMDY5MjA2MTkzMTI0MTU4NTgwNSIsInNpZCI6IjVhaklfSlRJeFBZWGpzU0piWmdzRnQ4MXhaTHRhRERyIiwibm9uY2UiOiJUQzE0V2xvMVNGSmlkVU5FWVVSbFJXb3dTV3RJU25acVRtVTRVR3hoUldReU0xQm5Rbk0yYjAwNWJ3PT0ifQ.jduu283Aycw7GwUL270EkwoF71bINRrLnFzVJGpoG9uOO4A-jxtZ07XRZIr_t4lT_gt2N19BWXg7SGxRR_coFbCJLfyUHLzxx6ZaDGMqUnCPhJ6WXBHABsTsqnlQIJs1sQPJyLKw01-FU5FoB8atW3OIyjt0nJayJtMSm4NzKkGR2gBWZSNR3FIqX7r4NY_wUSc-1Za50FaMiLg3XdGkfE59wxs_NdlxxdPVVG4G4uKBWQCIy6ofRDnnb22Wfw1knt8yXMjGfq8RtSsAkGMmjp_KVICSRDCqy0cCOtUdmih5LCRyEQagIRBl90SP753C7ehiue_ucidCYh9XrxP7HQ";
    return new Promise(async (resolve, reject) => {
    try {
        const request = await axios({
            method: "POST",
            url: "https://beta.character.ai/chat/streaming/",
            body: JSON.stringify(query),
            headers: {
            "authorization": "Token " + token,
            "Content-Type": "application/json",
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36",
            client: "Token " + token
            }
            })

        if (request.status() === 200) {
            const response = await JSON.parse(request);
            const replies = response.replies;

            const messages = []

            for (let i = 0; i < replies.length; i++) {
                MappleCore.sendMessage(i, {text: `${text}`}, {quoted:m})
            }
            resolve(i);
            }
        } catch (error) {
      reject(error);
    }
})
}

async function tiktoks(query) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: 'POST',
        url: 'https://tikwm.com/api/feed/search',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Cookie': 'current_language=en',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
        },
        data: {
          keywords: query,
          count: 50,
          cursor: 0,
          HD: 1
        }
      });
      const videos = response.data.data.videos;
      if (videos.length === 0) {
        reject("*Tidak Ada Video Yang Ditemukan* 😥");
      } else {
        const gywee = Math.floor(Math.random() * videos.length);
        const videorndm = videos[gywee]; 

        const result = {
          title: videorndm.title,
          cover: videorndm.cover,
          origin_cover: videorndm.origin_cover,
          no_watermark: videorndm.play,
          watermark: videorndm.wmplay,
          music: videorndm.music
        };
        resolve(result);
      }
    } catch (error) {
      reject(error);
    }
  });
}

async function tiktok2(query) {
  return new Promise(async (resolve, reject) => {
    try {
    const encodedParams = new URLSearchParams();
encodedParams.set('url', query);
encodedParams.set('hd', '1');

      const response = await axios({
        method: 'POST',
        url: 'https://tikwm.com/api/',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Cookie': 'current_language=en',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
        },
        data: encodedParams
      });
      const videos = response.data.data;
        const result = {
          title: videos.title,
          cover: videos.cover,
          origin_cover: videos.origin_cover,
          no_watermark: videos.play,
          watermark: videos.wmplay,
          music: videos.music
        };
        resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}

const clean = (data) => {
  let regex = /(<([^>]+)>)/gi;
  data = data.replace(/(<br?\s?\/>)/gi, " \n");
  return data.replace(regex, "");
};

async function shortener(url) {
  return url;
}

async function tiktok(query) {
  let response = await axios("https://lovetik.com/api/ajax/search", {
    method: "POST",
    data: new URLSearchParams(Object.entries({ query })),
  });

  result = {};

  result.creator = "YNTKTS";
  result.title = clean(response.data.desc);
  result.author = clean(response.data.author);
  result.nowm = await shortener(
    (response.data.links[0].a || "").replace("https", "http")
  );
  result.watermark = await shortener(
    (response.data.links[1].a || "").replace("https", "http")
  );
  result.audio = await shortener(
    (response.data.links[2].a || "").replace("https", "http")
  );
  result.thumbnail = await shortener(response.data.cover);
  return result;
}

async function filterValidImages(images, limit) {
  const validImages = [];
  for (const image of images) {
    if (await isImageURL(image)) {
      validImages.push(image);
      if (validImages.length >= limit) {
        break; // Hentikan jika sudah mencapai jumlah gambar yang diminta
      }
    }
  }
  return validImages;
}

async function isImageURL(url) {
  try {
    const res = await fetch(url, { method: 'HEAD' });
    const contentType = res.headers.get('content-type');
    return contentType && contentType.startsWith('image'); // Memeriksa apakah tipe file adalah gambar
  } catch (error) {
    return false; // Jika terjadi kesalahan dalam memeriksa URL, mengembalikan false
  }
}

var createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
try {
ppuser = await MappleCore.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)

if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 await kamiyareply(`❄ *Kuis Matematika*\n\n🎁 *Jawaban Benar*\n\n📣 *Ingin Bermain Lagi? Silakan Ketik Math Mode*`)
 delete kuismath[m.sender.split('@')[0]]
} else kamiyareply('❄ *Jawaban Salah!*')
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 MappleCore.sendMessage(m.chat, { image: ppnyauser, caption: `❄ *Tebak Gambar*\n\n🎁 *Jawaban Benar*\n\n📣 *Ingin Bermain Lagi? Silahkan Ketik Tebak Gambar*`}, {quoted:m})
 delete tebakgambar[m.sender.split('@')[0]]
} else kamiyareply('❄ *Jawaban Salah!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 MappleCore.sendMessage(m.chat, { image: ppnyauser, caption: `❄ *Tebak Kata*\n\n🎁 *Jawaban Benar*\n\n📣 *Ingin Bermain Lagi? Silahkan Ketik Tebak Kata*`}, {quoted:m})  
 delete tebakkata[m.sender.split('@')[0]]
} else kamiyareply('❄ *Jawaban Salah!*')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 MappleCore.sendMessage(m.chat, { image: ppnyauser, caption: `❄ *Tebak Lontong*\n\n🎁 *Jawaban Benar*\n\n📣 *Ingin Bermain Lagi? Silahkan Ketik Tebak Lontong*`}, {quoted:m}) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else kamiyareply('❄ *Jawaban Salah!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 MappleCore.sendMessage(m.chat, { image: ppnyauser, caption: `❄ *Tebak Kalimat*\n\n🎁 *Jawaban Benar*\n\n📣 *Ingin Bermain Lagi? Silahkan Ketik Tebak Kalimat*`}, {quoted:m}) 
 delete tebakkalimat[m.sender.split('@')[0]]
} else kamiyareply('❄ *Jawaban Salah!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 MappleCore.sendMessage(m.chat, { image: ppnyauser, caption: `❄ *Tebak Lirik*\n\n🎁 *Jawaban Benar*\n\n📣 *Ingin Bermain Lagi? Silahkan Ketik Tebak Lirik*`}, {quoted:m}) 
 delete tebaklirik[m.sender.split('@')[0]]
} else kamiyareply('❄ *Jawaban Salah!*')
}

if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 MappleCore.sendMessage(m.chat, { image: ppnyauser, caption: `❄ *Tebak Tebakan*\n\n🎁 *Jawaban Benar*\n\n📣 *Ingin Bermain Lagi? Silahkan Ketik Tebak Tebakan*`}, {quoted:m}) 
 delete tebaktebakan[m.sender.split('@')[0]]
} else kamiyareply('❄ *Jawaban Salah!*')
}

//TicTacToe
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// kamiyareply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
kamiyareply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== from)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = from
if (room.x !== room.o) await MappleCore.sendText(room.x, str, m, { mentions: parseMention(str) } )
await MappleCore.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}

//Suit PvP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
MappleCore.sendTextWithMentions(from, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = from
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
MappleCore.sendText(from, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) MappleCore.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) MappleCore.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) MappleCore.sendText(from, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
MappleCore.sendTextWithMentions(from, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
kamiyareply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) MappleCore.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
kamiyareply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) MappleCore.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
MappleCore.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
kamiyareply(`⚠️ *Jangan Tag Dia!*
⚠️ *Dia Sedang AFK* ${reason ? '*Dengan Alasan : ' + reason : 'tanpa alasan*'}
🕒 *Selama : ${clockString(new Date - afkTime)}*
`.trim())
}
if (global.db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
kamiyareply(`
❄ *${pushname} Kembali Dari Afk*\n⚠️ ${user.afkReason ? '*Dengan Alasan :  ' + user.afkReason : ''}*\n🕒 *Selama : ${clockString(new Date - user.afkTime)}*
`.trim())
user.afkTime = -1
user.afkReason = ''
}

switch(command) { 
case 'menu': 
case 'mainmenu': {
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
LoadCore()
await sleep(1000)
let anu = `*Hello Im Kamiya* 👋
*WhatsApp Bot To Solve Your Problems* 🙌
*Please Dont Call Bots Or Your May Get Blocked* 🚫

❄ *Info Bot*  
 *⨠ Creator : ${authorr}*
 *⨠ Runtime : ${runtime(process.uptime())}*
 *⨠ Mode Bot : ${MappleCore.public ? `Public Mode` : `Self Mode`}*

📃 *Info User*
 *⨠ Name : ${pushname}*
 *⨠ Number : ${m.sender.split('@')[0]}*
 *⨠ Status : ${isCreator ? '❄ Creator' : isPrem ? '🎁 Premium' : "🏷️ User"}*


📣 *Keterangan*
 *⨠ Help : Menunjukkan Panduan*
 *⨠ Menu : Menunjukkan Simple Menu*
 *⨠ Allmenu : Menunjukkan Semua Menu*

📦 *Menu Bot*
 *⨠ Store ( Menu Store )* 
 *⨠ AiMenu ( Menu Ai )*
 *⨠ Funmenu ( Menu Fun )*
 *⨠ Gamemenu ( Menu Game )*
 *⨠ Groupmenu ( Menu Grup )*
 *⨠ Beritamenu ( Menu Berita )*
 *⨠ Randommenu ( Menu Random )*
 *⨠ Downmenu ( Menu Download )*
 *⨠ Weebsmenu ( Menu Wibu )*
 *⨠ Islamimenu ( Menu Islami )*
 *⨠ Quotesmenu ( Menu Quotes )*
 *⨠ Searchmenu ( Menu Search )*
 *⨠ Convertmenu ( Convert Media )*
 *⨠ Favmenu ( Menu Favorite )*
 *⨠ Pushmenu ( Menu Push )*
 *⨠ AntiMenu ( Menu Anti )*
 *⨠ Photomenu ( Menu Photooxy )*

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`
MappleCore.sendMessage(m.chat, {
    video: fs.readFileSync('./data/video/menu.mp4'),
    caption: anu,
    gifPlayback: true,
    contextInfo: {
				forwardingScore: 0,
				isForwarded: true,
				mentionedJid: [m.sender],
				forwardedNewsletterMessageInfo: {
					newsletterJid: '120363218375655896@newsletter',
					serverMessageId: null,
					newsletterName: '◈ sʏsᴛᴇᴍ ɴᴏᴛɪғɪᴄᴀᴛɪᴏɴs',
				},
				forwardingScore: 0,
				isForwarded: true,
				mentionedJid: [m.sender],
				forwardedNewsletterMessageInfo: {
					newsletterJid: '120363218375655896@newsletter',
					serverMessageId: null,
					newsletterName: '◈ sʏsᴛᴇᴍ ɴᴏᴛɪғɪᴄᴀᴛɪᴏɴs',
				},
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "Projects Kamiya",
        thumbnailUrl: "https://telegra.ph/file/89655d27ff924aee15302.jpg",
        sourceUrl: "https://whatsapp.com/channel/0029VaEvOpP35fLtqPxd4F2L",
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
   })
}
break

case 'almenu': 
case 'allmenu': {
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
LoadCore()
await sleep(1000)
let anu = `*Hello Im Kamiya* 👋
*WhatsApp Bot To Solve Your Problems* 🙌
*Please Dont Call Bots Or Your May Get Blocked* 🚫

❄ *Info Bot*  
 *⨠ Creator : ${authorr}*
 *⨠ Runtime : ${runtime(process.uptime())}*
 *⨠ Mode Bot : ${MappleCore.public ? `Public Mode` : `Self Mode`}*

📃 *Info User*
 *⨠ Name : ${pushname}*
 *⨠ Number : ${m.sender.split('@')[0]}*
 *⨠ Status : ${isCreator ? '❄ Creator' : isPrem ? '🎁 Premium' : "🏷️ User"}*

📣 *Keterangan*
 *⨠ Help : Menunjukkan Panduan*
 *⨠ Menu : Menunjukkan Simple Menu*
 *⨠ Allmenu : Menunjukkan Semua Menu*

📦 *Store Menu*
 *⨠ Sc*
 *⨠ Pay*
 *⨠ Panel*
 *⨠ Order*
 *⨠ Tambah*
 *⨠ Kurang*
 *⨠ Kali*
 *⨠ Bagi*
 *⨠ List*
 *⨠ Addlist*
 *⨠ Dellist*
 *⨠ Payment*
 *⨠ Pesanan*
 *⨠ Updatelist*

📦 *Ai Menu*
 *⨠ Ai*
 *⨠ Ask*
 *⨠ Bing*
 *⨠ AILI*
 *⨠ GPT4*
 *⨠ OpenAi*
 *⨠ Remini*
 *⨠ Gemini*
 *⨠ Einstein*

📦 *Fun Menu*
 *⨠ Truth*
 *⨠ Dare*
 *⨠ Rate*
 *⨠ Apakah*
 *⨠ Kapankah*
 *⨠ Bisakah*
 *⨠ Bagaimanakah* 
 *⨠ Gantengcek*
 *⨠ Cekganteng*
 *⨠ Cantikcek*
 *⨠ Cekcantik*
 *⨠ Sangecek*
 *⨠ Ceksange*
 *⨠ Gaycek*
 *⨠ Cekgay*
 *⨠ Lesbicek*
 *⨠ Ceklesbi*

📦 *Game Menu*
 *⨠ TTC*
 *⨠ Deltc*
 *⨠ Tebak Kata*
 *⨠ Tebak Gambar*
 *⨠ Tebak Lirik*
 *⨠ Tebak Kalimat*
 *⨠ Tebak Lontong*
 *⨠ Kuismath Noob*
 *⨠ Kuismath Easy*
 *⨠ Kuismath Medium*
 *⨠ Kuismath Hard*
 *⨠ Kuismath Extreme*
 *⨠ Kuismath Imposibble*
 *⨠ Kuismath Imposibble2*

📦 *Group Menu*
 *⨠ Saran*
 *⨠ Reportbug*
 *⨠ Antilinkgc on / off*
 *⨠ Antitoxic on / off*
 *⨠ Bcgc (textnya)*
 *⨠ Share (textnya)*
 *⨠ Hidetag (textnya)*
 *⨠ Kick (628xx)*
 *⨠ Add (628xx)*
 *⨠ Group close / open*
 *⨠ Promote (628xx)*
 *⨠ Demote (628xx)*
 *⨠ Sendlinkgc (628xx)*
 *⨠ Editgroup close / open*
 *⨠ Editinfo on / off*
 *⨠ Join (linknya)*
 *⨠ Editsubjek (textnya)*
 *⨠ Editdesk (textnya)*
 *⨠ Tagall (textnya)*
 *⨠ Inspect (linknya)*
 *⨠ Linkgroup*
 *⨠ Resetlinkgc*

 📦 *Berita Menu*
 *⨠ Inews*
 *⨠ Kontan*
 *⨠ KompasNews*
 *⨠ DetikNews*
 *⨠ DailyNews*

📦 *Random Menu*
 *⨠ Qc*
 *⨠ Afk*
 *⨠ Owner*
 *⨠ Nickff*
 *⨠ Puisi*
 *⨠ Pantun*
 *⨠ Qckode*
 *⨠ Sticker*
 *⨠ Sewa*
 *⨠ Faktaunik*
 *⨠ Couple*
 *⨠ Meme*
 *⨠ Getname*
 *⨠ Getpic*
 *⨠ Confess*
 *⨠ Menfess*
 *⨠ Stalktiktok*

📦 *Download Menu*
 *⨠ Fbdl (linknya)*
 *⨠ Igdl (linknya)*
 *⨠ Igslide (linknya)*
 *⨠ Tiktok (linknya)*
 *⨠ Ttslide (linknya)*
 *⨠ Ytmp3 (linknya)*
 *⨠ Ytmp4 (linknya)*
 *⨠ Mediafire (linknya)*

📦 *Weebs Menu*
 *⨠ Pat*
 *⨠ Cry*
 *⨠ Hug*
 *⨠ Nom*
 *⨠ Awoo*
 *⨠ Kiss*
 *⨠ Kill*
 *⨠ Lick*
 *⨠ Bite*
 *⨠ Yeet*
 *⨠ Bonk*
 *⨠ Wink*
 *⨠ Poke*
 *⨠ Slap*
 *⨠ Bully*
 *⨠ Smile*
 *⨠ Wave*
 *⨠ Blush*
 *⨠ Smug*
 *⨠ Glomp*
 *⨠ Happy*
 *⨠ Dance*
 *⨠ Cuddle*
 *⨠ Cringe*
 *⨠ Highfive*
 *⨠ Handhold*

📦 *Islami Menu*
 *⨠ Asmaulhusna*
 *⨠ Ayatkursi* 

📦 *Quotes Menu*
 *⨠ FML*
 *⨠ Bucin*
 *⨠ Quotes*
 *⨠ Motivasi*
 *⨠ Katabijak*
 *⨠ Katacinta*
 *⨠ Katagalau*
 *⨠ Katahacker*
 *⨠ Katailham*
 *⨠ Katasenja*
 *⨠ Katasindiran*
 *⨠ Quotesanime*
 *⨠ Quotespubg*
 *⨠ Quotesislamic*

📦 *Search Menu*
 *⨠ Ai*
 *⨠ Imdb*
 *⨠ Play*
 *⨠ Song*
 *⨠ Chord* 
 *⨠ Lirik*
 *⨠ Cuaca*
 *⨠ Jarak*
 *⨠ Google*
 *⨠ OpenAi*
 *⨠ Kodebahasa*

📦 *Convert Menu*
 *⨠ Wm*
 *⨠ Tourl*
 *⨠ Remini*
 *⨠ Removebg*

📦 *Favorite Menu*
 *⨠ Ai*
 *⨠ Wm*
 *⨠ S*
 *⨠ Hd*
 *⨠ Play*
 *⨠ Remini*
 *⨠ Ig (Linknya)*
 *⨠ Tiktok (Linknya)*
 *⨠ Ttsearch (Teks)*
 *⨠ Ytmp3 (Linknya)*
 *⨠ Ytmp4 (linknya)*

📦 *Push Menu*   
 *⨠ Cekidgc*
 *⨠ Savekontak*
 *⨠ Pushkontak*
 *⨠ Pushkontak2*

📦 *Anti Menu*
 *⨠ Antich*   
 *⨠ Antiwame*
 *⨠ Antilink*
 *⨠ Antipanel*
 *⨠ Antitoxic*
 *⨠ Antilinktt*
 *⨠ Antilinkyt*
 *⨠ Antilinkgc*
 *⨠ Antilinkgcv1*

📦 *Photooxy Menu*
 *⨠ Flaming*   
 *⨠ Stars*
 *⨠ Shadow*
 *⨠ Burnpaper*
 *⨠ Grass*
 *⨠ Underwater*
 *⨠ Whitecube*
 *⨠ Smokyneon*
 *⨠ Fabric*
 *⨠ Glowing*
 *⨠ Honey*
 *⨠ Vintage*
 *⨠ Gradient*
 *⨠ Fur*
 *⨠ Striking*

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`
MappleCore.sendMessage(m.chat, {
    video: fs.readFileSync('./data/video/menu.mp4'),
    caption: anu,
    gifPlayback: true,
    contextInfo: {
				forwardingScore: 0,
				isForwarded: true,
				mentionedJid: [m.sender],
				forwardedNewsletterMessageInfo: {
					newsletterJid: '120363218375655896@newsletter',
					serverMessageId: null,
					newsletterName: '◈ sʏsᴛᴇᴍ ɴᴏᴛɪғɪᴄᴀᴛɪᴏɴs',
				},
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "Projects Kamiya",
        thumbnailUrl: "https://telegra.ph/file/89655d27ff924aee15302.jpg",
        sourceUrl: "https://whatsapp.com/channel/0029VaEvOpP35fLtqPxd4F2L",
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
   })
}
break

case 'antimenu': {
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
LoadCore()
await sleep(1000)
kamiyareply(`📦 *Anti Menu*
 *⨠ Antich*   
 *⨠ Antiwame*
 *⨠ Antilink*
 *⨠ Antipanel*
 *⨠ Antitoxic*
 *⨠ Antilinktt*
 *⨠ Antilinkyt*
 *⨠ Antilinkgc*
 *⨠ Antilinkgcv1*

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`)
}
break

case 'groupmenu': {
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
LoadCore()
await sleep(1000)
kamiyareply(`📦 *Group Menu*
 *⨠ Saran*
 *⨠ Reportbug*  
 *⨠ Antilinkgc on / off*
 *⨠ Antitoxic on / off*
 *⨠ Bcgc (textnya)*
 *⨠ Share (textnya)*
 *⨠ Hidetag (textnya)*
 *⨠ Kick (628xx)*
 *⨠ Add (628xx)*
 *⨠ Group close / open*
 *⨠ Promote (628xx)*
 *⨠ Demote (628xx)*
 *⨠ Sendlinkgc (628xx)*
 *⨠ Editgroup close / open*
 *⨠ Editinfo on / off*
 *⨠ Join (linknya)*
 *⨠ Editsubjek (textnya)*
 *⨠ Editdesk (textnya)*
 *⨠ Tagall (textnya)*
 *⨠ Inspect (linknya)*
 *⨠ Linkgroup*
 *⨠ Resetlinkgc*

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`)
}
break

case 'downmenu': case 'downloadmenu': {
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
LoadCore()
await sleep(1000)
kamiyareply(`📦 *Download Menu*
 *⨠ Fbdl (linknya)*
 *⨠ Igdl (linknya)*
 *⨠ Igslide (linknya)*
 *⨠ Tiktok (linknya)*
 *⨠ Ttslide (linknya)*
 *⨠ Ytmp3 (linknya)*
 *⨠ Ytmp4 (linknya)*
 *⨠ Mediafire (linknya)*

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`)
}
break

case 'islammenu': case 'islamimenu': {
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
LoadCore()
await sleep(1000)
kamiyareply(`📦 *Islami Menu*
 *⨠ Asmaulhusna*
 *⨠ Ayatkursi* 

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`)
}
break

case 'favmenu': {
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
LoadCore()
await sleep(1000)
kamiyareply(`📦 *Favorite Menu*
 *⨠ Ai*
 *⨠ Wm*
 *⨠ S*
 *⨠ Hd*
 *⨠ Play*
 *⨠ Remini*
 *⨠ Confess*
 *⨠ Menfess*
 *⨠ Ig (Linknya)*
 *⨠ Tiktok (Linknya)*
 *⨠ Ttsearch (Teks)*
 *⨠ Ytmp3 (Linknya)*
 *⨠ Ytmp4 (linknya)*

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`)
}
break

case 'convertmenu': {
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
LoadCore()
await sleep(1000)
kamiyareply(`📦 *Convert Menu*
 *⨠ Wm*
 *⨠ Tourl*
 *⨠ Remini*
 *⨠ Removebg*

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`)
}
break

case 'photomenu': {
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
LoadCore()
await sleep(1000)
kamiyareply(`📦 *Photooxy Menu*
 *⨠ Flaming*   
 *⨠ Stars*
 *⨠ Shadow*
 *⨠ Burnpaper*
 *⨠ Grass*
 *⨠ Underwater*
 *⨠ Whitecube*
 *⨠ Smokyneon*
 *⨠ Fabric*
 *⨠ Glowing*
 *⨠ Honey*
 *⨠ Vintage*
 *⨠ Gradient*
 *⨠ Fur*
 *⨠ Striking*

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`)
}
break

case 'pushmenu': {
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
const y11 = `📦 *Push Menu*
 *⨠ Cekidgc*
 *⨠ Savekontak*
 *⨠ Pushkontak*
 *⨠ Pushkontak2*

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`
kamiyareply(y11)
}
break

case 'randommenu': {
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
LoadCore()
await sleep(1000)
kamiyareply(`📦 *Random Menu*
 *⨠ Qc*
 *⨠ Afk*
 *⨠ Owner*
 *⨠ Nickff*
 *⨠ Puisi*
 *⨠ Pantun*
 *⨠ Qckode*
 *⨠ Sticker*
 *⨠ Sewa*
 *⨠ Faktaunik*
 *⨠ Couple*
 *⨠ Meme*
 *⨠ Getname*
 *⨠ Getpic*
 *⨠ Confess*
 *⨠ Menfess*
 *⨠ Stalktiktok*

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`)
}
break

case 'aimenu': {
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
LoadCore()
await sleep(1000)
kamiyareply(`📦 *Ai Menu*
 *⨠ Ai*
 *⨠ Ask*
 *⨠ Bing*
 *⨠ AILI*
 *⨠ GPT4*
 *⨠ OpenAi*
 *⨠ Gemini*
 *⨠ Einstein*

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`)
}
break

case 'searchmenu': {
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
LoadCore()
await sleep(1000)
kamiyareply(`📦 *Search Menu*
 *⨠ Ai*
 *⨠ Imdb*
 *⨠ Play*
 *⨠ Song*
 *⨠ Chord* 
 *⨠ Lirik*
 *⨠ Cuaca*
 *⨠ Jarak*
 *⨠ Google*
 *⨠ OpenAi*
 *⨠ Kodebahasa*

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`)
}
break

case 'gassmenu': {
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
LoadCore()
await sleep(1000)
kamiyareply(`📦 *Gass Menu*
 *⨠ Sc*
 *⨠ Autoread on/off*
 *⨠ Getdb (database)*
 *⨠ Getuser (database user)*
 *⨠ Setppbot*
 *⨠ Setppgroup*
 *⨠ Block*
 *⨠ Unblock*
 *⨠ Createqr*

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`)
}
break

case 'weebsmenu': {
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
LoadCore()
await sleep(1000)
kamiyareply(`📦 *Weebs Menu*
 *⨠ Pat*
 *⨠ Cry*
 *⨠ Hug*
 *⨠ Nom*
 *⨠ Awoo*
 *⨠ Kiss*
 *⨠ Kill*
 *⨠ Lick*
 *⨠ Bite*
 *⨠ Yeet*
 *⨠ Bonk*
 *⨠ Wink*
 *⨠ Poke*
 *⨠ Slap*
 *⨠ Bully*
 *⨠ Smile*
 *⨠ Wave*
 *⨠ Blush*
 *⨠ Smug*
 *⨠ Glomp*
 *⨠ Happy*
 *⨠ Dance*
 *⨠ Cuddle*
 *⨠ Cringe*
 *⨠ Highfive*
 *⨠ Handhold*

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`)
}
break

case 'beritamenu': {
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
LoadCore()
await sleep(1000)
kamiyareply(`📦 *Berita Menu*
 *⨠ Inews*
 *⨠ Kontan*
 *⨠ KompasNews*
 *⨠ DetikNews*
 *⨠ DailyNews*

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`)
}
break

case 'quotesmenu': {
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
LoadCore()
await sleep(1000)
kamiyareply(`📦 *Quotes Menu*
 *⨠ FML*
 *⨠ Bucin*
 *⨠ Quotes*
 *⨠ Motivasi*
 *⨠ Katabijak*
 *⨠ Katacinta*
 *⨠ Katagalau*
 *⨠ Katahacker*
 *⨠ Katailham*
 *⨠ Katasenja*
 *⨠ Katasindiran*
 *⨠ Quotesanime*
 *⨠ Quotespubg*
 *⨠ Quotesislamic*

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`)
}
break

case 'gamemenu': {
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
LoadCore()
await sleep(1000)
kamiyareply(`📦 *Game Menu*
 *⨠ TTC*
 *⨠ Deltc*
 *⨠ Tebak Kata*
 *⨠ Tebak Gambar*
 *⨠ Tebak Lirik*
 *⨠ Tebak Kalimat*
 *⨠ Tebak Lontong*
 *⨠ Kuismath Noob*
 *⨠ Kuismath Easy*
 *⨠ Kuismath Medium*
 *⨠ Kuismath Hard*
 *⨠ Kuismath Extreme*
 *⨠ Kuismath Imposibble*
 *⨠ Kuismath Imposibble2*

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`)
}
break

case 'funmenu': {
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
LoadCore()
await sleep(1000)
kamiyareply(`📦 *Fun Menu*
 *⨠ Truth*
 *⨠ Dare*
 *⨠ Rate*
 *⨠ Apakah*
 *⨠ Kapankah*
 *⨠ Bisakah*
 *⨠ Bagaimanakah* 
 *⨠ Gantengcek*
 *⨠ Cekganteng*
 *⨠ Cantikcek*
 *⨠ Cekcantik*
 *⨠ Sangecek*
 *⨠ Ceksange*
 *⨠ Gaycek*
 *⨠ Cekgay*
 *⨠ Lesbicek*
 *⨠ Ceklesbi*

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`)
}
break

case 'toko': case 'tokomenu': case 'shop': case 'shopmenu': case 'store': case 'storemenu': {
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
LoadCore()
await sleep(1000)
kamiyareply(`📦 *Store Menu*
 *⨠ Sc*
 *⨠ Pay*
 *⨠ Panel*
 *⨠ Order*
 *⨠ Tambah*
 *⨠ Kurang*
 *⨠ Kali*
 *⨠ Bagi*
 *⨠ List*
 *⨠ Addlist*
 *⨠ Dellist*
 *⨠ Payment*
 *⨠ Pesanan*
 *⨠ Updatelist*

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`)
}
break

case 'help': {
kamiyareply(`❄ *Panduan Untuk Menggunakan Fitur Bot*

*#1 Membuat Sticker Whatsapp*
*#2 Membuat Sticker Video*
*#3 Mengubah Watermark Sticker*
*#4 Meningkatkan Kualitas Gambar*
*#5 Mengunduh Foto/Video Dari Link*
*#6 Mengunduh Audio/Video Youtube*
*#7 Mengunduh Lagu/Musik*
*#8 Bertanya Kepada Bot*
*#9 Mencari Berita*
*#10 Mengubah Gambar Menjadi Link*
*#11 Mengetahui Jarak Kota*
*#12 Menghapus Pesan Bot*

🎁 *Untuk Menampilkan Panduan Ketik Sesuai Nomor, Contoh : NO1* 

⚠️ *Kalo Ada Error Bisa Chat Owner Ya* 😄
`)
}
break

case '#1': case 'no1': {
kamiyareply(`❄ *Membuat Sticker Whatsapp*

🎁 *Untuk Membuat Sticker Whatsapp Kirim Foto/Video Dengan Caption S, Stiker, Sticker*
🎁 *Untuk Membuat Sticker Dengan Caption Gunakan Smeme : Contoh Smeme Kamiya*`)
}
break

case 'no2': {
kamiyareply(`❄ *Membuat Sticker Video*

🎁 *Untuk Membuat Sticker Video Kirim Video Minimal 9 Detik Dengan CAption S*`)
}
break

case 'no3': {
kamiyareply(`❄ *Mengubah Watermark Sticker*

🎁 *Untuk Mengubah Watermark Sticker Balas Sticker Dengan Mengetik : Wm (Teks)*
🎁 *Contoh : Wm Kamiya*`)
}
break

case 'no4': {
kamiyareply(`❄ *Meningkatkan Kualitas Gambar*

🎁 *Untuk Meningkatkan Kualitas Gambar Kirim Gambar/Foto Dengan Caption Hd, Remini*`)
}
break

case 'no5': {
kamiyareply(`❄ *Mengunduh Foto/Video Dari Link*

🎁 *Untuk Mengunduh Foto/Video Dari Link Ketik : Tiktok (Link Tiktok)*
🎁 *Lebih Lengkapnya Ketik Downmenu*

⚠️ *Pastikan Link Sesuai Dengan Perintah*`)
}
break

case 'no6': {
kamiyareply(`❄ *Mengambil Audio/Video Dari Youtube*

🎁 *Untuk mengambil Audio/Video Dari Youtube Ketik : Ytmp4 (Link)*
🎁 *Ytmp3 Untuk Audio | Ytmp4 Untuk Video*

⚠️ *Audio/Video Lebih Dari 5 Menit Kemungkinan Gagal Dikirim*`)
}
break

case 'no7': {
kamiyareply(`❄ *Mengunduh Lagu/Musik*

🎁 *Untuk Mengunduh Lagu ketik : Play (Nama Lagu)*
🎁 *Contoh : Play Boa - Duvet*`)
}
break

case 'no8': {
kamiyareply(`❄ *Bertanya Kepada Bot*

🎁 *Untuk Bertanya kepada Bot Ketik : Ask (Pertanyaan)*
🎁 *Contoh : Ask Sejarah Indonesia*`)
}
break

case 'no9': {
kamiyareply(`❄ *Mencari Berita*

🎁 *Untuk Mencari Berita Ketik : Inews*
🎁 *Lebih Lengkapnya Ketik Beritamenu*`)
}
break

case 'no10': {
kamiyareply(`❄ *Mengubah Gambar Menjadi Link*

🎁 *Untuk Mengubah Gambar Menjadi Link Kirim Gmbar Dengan caption Tourl*`)
}
break

case 'no11': {
kamiyareply(`❄ *Mengetahui Jarak Kota*

🎁 *Untuk Mengetahui Jarak Kota ketik : Jarak (Nama Kota)|(Nama Kota)*
🎁 *Contoh : Jarak Bandung|Jakarta*`)
}
break

case 'no12': {
kamiyareply(`❄ *Menghapus Pesan Bot*

🎁 *Untuk Menghapus Pesan Bot Balas Pesan Bot Dengan Mengetik : Del*`)
}
break

case 'kodebahasa': {
kamiyareply(`📦 *Kode Bahasa*

 *⨠ Af: Afrikaans* 
 *⨠ Sq: Albanian*
 *⨠ Ar: Arabic*
 *⨠ Hy: Armenian*
 *⨠ Ca: Catalan* 
 *⨠ Zh: Chinese*
 *⨠ Zh-Cn: Chinese (Mandarin/China)*
 *⨠ Zh-Tw: Chinese (Mandarin/Taiwan)*
 *⨠ Zh-Yue: Chinese (Cantonese)*
 *⨠ Hr: Croatian*
 *⨠ Cs: Czech*
 *⨠ Da: Danish*
 *⨠ Nl: Dutch*
 *⨠ En: English*    
 *⨠ En-Au: English (Australia)*
 *⨠ En-Uk: English (United Kingdom)*
 *⨠ en-Us: English (United States)* 
 *⨠ Eo: Esperanto* 
 *⨠ Fi: Finnish* 
 *⨠ Fr: French*
 *⨠ De: German*
 *⨠ El: Greek* 
 *⨠ Ht: Haitian Creole* 
 *⨠ Hi: Hindi* 
 *⨠ Hu: Hungarian* 
 *⨠ Ss: Icelandic* 
 *⨠ Id: Indonesian* 
 *⨠ It: Italian*
 *⨠ Ja: Japanese*
 *⨠ Ko: Korean*
 *⨠ La: Latin*
 *⨠ Lv: Latvian*
 *⨠ Mk: Macedonian*
 *⨠ No: Norwegian*
 *⨠ Pl: Polish*
 *⨠ Pt: Portuguese*
 *⨠ Pt-Br: Portuguese (Brazil)*
 *⨠ Ro: Romanian*
 *⨠ Ru: Russian*
 *⨠ Sr: Serbian*
 *⨠ Sk: Slovak*
 *⨠ Es: Spanish* 
 *⨠ Es-Es: Spanish (Spain)*
 *⨠ Es-Us: Spanish (United States)*
 *⨠ Sw: Swahili*
 *⨠ Sv: Swedish*
 *⨠ Ta: Tamil*
 *⨠ Th: Thai*
 *⨠ Tr: Turkish*
 *⨠ Vi: Vietnamese* 
 *⨠ Cy: Welsh*

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`)
}
break

case 'sc':
case 'script': {
let buy = `❄ *Script Bot Projects Kamiya : 20K*
📑 *No Enc, Free Apikey, Pairing Code*
📦 *Males Edit Sc? Ketik : Jedit*

🎁 *Beli? : wa.me/6282375310984*
`
MappleCore.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'IDR',
      amount1000: 20000000,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: buy,
      contextInfo: {
				forwardingScore: 0,
				isForwarded: true,
				mentionedJid: [m.sender],
				forwardedNewsletterMessageInfo: {
					newsletterJid: '120363218375655896@newsletter',
					serverMessageId: null,
					newsletterName: '◈ sʏsᴛᴇᴍ ɴᴏᴛɪғɪᴄᴀᴛɪᴏɴs',
				},
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
}
break

case 'list': case 'listmenu':{ 
if (db_respon_list.length === 0) return kamiyareply(`❄ *Belum Ada List Yang Ditambahkan*`)
if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return kamiyareply(`❄ *Belum Ada List Yang Terdaftar Di Grup Ini*`)
let teks = `❄ *Halo @${m.sender.split("@")[0]}*\n📦 *Berikut Adalah List Item Yang Terdaftar Dalam Group :*\n\n`
for (let i of db_respon_list) {
if (i.id === m.chat) {
teks += `🏷️ *${i.key.toUpperCase()}*\n`
}
}
teks += `\n📃 *Silahkan Ketik Nama Item Diatas Untuk Melihatnya Secara Detail*`
MappleCore.sendMessage(m.chat, {text: teks, mentions: [m.sender]}, {quoted:m}) 
}
break

case'addlist': 
if (!m.isGroup) return kamiyareply(mess.group)
if (!isAdmins) return kamiyareply(mess.admin)
var args1 = q.split("|")[0].toLowerCase()
var args2 = q.split("|")[1]
if (!q.includes("|")) return kamiyareply(`❄ *Cara Pengunaan : Addlist Item|Respon*\n🎁 *Contoh : Addlist Cihuyy|For Sale*`)
if (isAlreadyResponList(m.chat, args1, db_respon_list)) return kamiyareply(`⚠️ *Nama Item ${args1} Sudah Terdaftar Dalam Group Ini*`)
addResponList(m.chat, args1, args2, false, '-', db_respon_list)
kamiyareply(`📦 *Sukses Menambahkan Item Dengan Kode : ${args1}*`)
break

case 'dellist': 
if (!m.isGroup) return kamiyareply(mess.group)
if (!isAdmins) return kamiyareply(mess.admin)
if (db_respon_list.length === 0) return kamiyareply(`❄ *Belum Ada List Yang Ditambahkan*`)
if (!text) return kamiyareply(`❄ *Ketik Nama Item Yang Ingin Dihapus*`)
if (!isAlreadyResponList(m.chat, q.toLowerCase(), db_respon_list)) return kamiyareply(`⚠️ *Nama Item ${q} Tidak Terdaftar*`)
delResponList(m.chat, q.toLowerCase(), db_respon_list)
kamiyareply(`⚠️ *Sukses Menghapus Item Dengan kode : ${q}*`)
break

case 'updatelist':
if (!m.isGroup) return kamiyareply(mess.group)
if (!isAdmins) return kamiyareply(mess.admin)
var args1 = q.split("|")[0].toLowerCase()
var args2 = q.split("|")[1]
if (!q.includes("|")) return kamiyareply(`❄ *Cara Pengunaan : Updatelist Item|Respon*\n🎁 *Contoh : Updatelist Cihuyy|For sale*`)
if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return kamiyareply(`⚠️ *Nama Item ${args1} Sudah Terdaftar Dalam Group Ini*`)
updateResponList(m.chat, args1, args2, false, '-', db_respon_list)
kamiyareply(`📑 *Sukses Memperbarui Item Dengan Kode : ${args1}*`)
break

case 'tambah':{
if (!text.includes('+')) return kamiyareply(`❄ *Contoh : 10.000 + 20.000*`)
arg = args.join(' ')
mapple1 = arg.split('+')[0]
mapple2 = arg.split('+')[1]
var mapple_1 = Number(mapple1)
var mapple_2 = Number(mapple2)
kamiyareply(`🎁 *Hasil :* ${mapple_1 + mapple_2}`)}
break

case 'kurang':{
if (!text.includes('-')) return kamiyareply(`❄ *Contoh : 20 - 10*`)
arg = args.join(' ')
mapple1 = arg.split('-')[0]
mapple2 = arg.split('-')[1]
var mapple_1 = Number(mapple1)
var mapple_2 = Number(mapple2)
kamiyareply(`🎁 *Hasil :* ${mapple_1 - mapple_2}`)}
break

case 'kali':{
if (!text.includes('*')) return kamiyareply(`❄ *Contoh : 5 * 10*`)
arg = args.join(' ')
mapple1 = arg.split('*')[0]
mapple2 = arg.split('*')[1]
var mapple_1 = Number(mapple1)
var mapple_2 = Number(mapple2)
kamiyareply(`🎁 *Hasil :* ${mapple_1 * mapple_2}`)}
break

case 'bagi':{
if (!text.includes('/')) return kamiyareply(`❄ *Contoh : 10 / 2*`)
arg = args.join(' ')
mapple1 = arg.split('/')[0]
mapple2 = arg.split('/')[1]
var mapple_1 = Number(mapple1)
var mapple_2 = Number(mapple2)
kamiyareply(`🎁 *Hasil :* ${mapple_1 / mapple_2}`)}
break

case 'order':
case 'pesanan': {
let mapple_txt = args[0]
if (!text) return kamiyareply('❄ *Mana Teksnya?*')
if (text.length > 15) return kamiyareply(`❄ *Maksimal 15 Karakter*`)    
kamiyareply('📦 *Pesanan Berhasil Terkirim*\n🎁 *Pesanan Anda Akan Dibalas Secepatnya, Terimakasih*')
MappleCore.sendMessage(`${mess.owner2}@s.whatsapp.net`, { text: `📣 *Pesanan Nih*\n🎁 *Dari :* @${sender.split('@')[0]}\n📄 *Nomor :* ${sender.split('@')[0]}\n📑 *Pemesan :* wa.me/${sender.split('@')[0]}\n📦 *Order :* ${q}\n\n 📣 *Pesanan Ini Dikirim Oleh Bot Projects Kamiya*`, mentions: [sender]}, { quoted: m })
}
break

case 'pay':
case 'payment':{
MappleCore.sendMessage(m.chat, { image: { url: `${mess.qris}` }, caption: `${mess.format}` }, { quoted: m })
}
break

case 'saran':{
let mapple_txt = args[0]
if (!text) return kamiyareply('❄ *Mana Teksnya?*')
if (text.length > 30) return kamiyareply(`❄ *Maksimal 30 Karakter*`)    
kamiyareply('❄ *Saran Berhasil Terkirim, Terimakasih*')
MappleCore.sendMessage(`${mess.owner2}@s.whatsapp.net`, { text: `📦 *Saran / Masukan*\n🎁 *Dari :* @${sender.split('@')[0]}\n📃 *Pesan :* ${q}\n\n 📣 *Saran Ini Dikirim Oleh Bot Projects Kamiya*`, mentions: [sender]}, { quoted: m })
}
break

case 'reportbug':{
let mapple_txt = args[0]
if (!text) return kamiyareply('❄ *Mana Teksnya?*')
if (text.length > 32) return kamiyareply(`❄ *Maksimal 32 Karakter*`)    
kamiyareply('⚠️ *Report Berhasil Terkirim, Terimakasih*')
MappleCore.sendMessage(`${mess.owner2}@s.whatsapp.net`, { text: `⚠️ *Report Bug*\n🎁 *Dari :* @${sender.split('@')[0]}\n📃 *Pesan :* ${q}\n\n 📣 *Laporan Ini Dikirim Oleh Bot Projects Kamiya*`, mentions: [sender]}, { quoted: m })
}
break

case 'bot': {
kamiyareply(`*[ ◈ ] Bot Projects Kamiya Aktif*`)
}
break

case 'kamiya': {
kamiyareply(`📣 *Link Sc Projects Kamiya Ada Di Deskripsi Saluran Wa : https://whatsapp.com/channel/0029VaEvOpP35fLtqPxd4F2L*`)
}
break

case 'ay': {
if (!isCreator) return 
const t3xt = require(`./database/teks/${command}.json`)
const r4andT3xt = t3xt[Math.floor(Math.random() * t3xt.length)]
MappleCore.sendMessage(from, { text: r4andT3xt }, { quoted: m })
}
break

case 'maaf': {
if (!isCreator) return 
const t3xt = require(`./database/teks/${command}.json`)
const r4andT3xt = t3xt[Math.floor(Math.random() * t3xt.length)]
MappleCore.sendMessage(from, { text: r4andT3xt }, { quoted: m })
}
break

case 'udah': {
if (!isCreator) return 
const t3xt = require(`./database/teks/${command}.json`)
const r4andT3xt = t3xt[Math.floor(Math.random() * t3xt.length)]
MappleCore.sendMessage(from, { text: r4andT3xt }, { quoted: m })
}
break
case 'pagii': {
if (!isCreator) return 
const t3xt = require(`./database/teks/${command}.json`)
const r4andT3xt = t3xt[Math.floor(Math.random() * t3xt.length)]
MappleCore.sendMessage(from, { text: r4andT3xt }, { quoted: m })
}
break
case 'malam': {
if (!isCreator) return 
const t3xt = require(`./database/teks/${command}.json`)
const r4andT3xt = t3xt[Math.floor(Math.random() * t3xt.length)]
MappleCore.sendMessage(from, { text: r4andT3xt }, { quoted: m })
}
break

case 'malas': {
if (!isCreator) return 
const t3xt = require(`./database/teks/${command}.json`)
const r4andT3xt = t3xt[Math.floor(Math.random() * t3xt.length)]
MappleCore.sendMessage(from, { text: r4andT3xt }, { quoted: m })
}
break

case "assalamu'alaikum": case 'assalamualaikum': {
kamiyareply(`❄ *Waalaikumussalam*`)
}
break

case 'hi': case 'hai': case 'halo': case 'hallo': case 'helo': case 'hello': case 'haii': case 'hii': case 'hlo': case 'haloo': case 'hiii': {
kamiyareply(`❄ *Halo Juga*`)
}
break

case 'jedit': {
kamiyareply(`❄ *Jasa Edit Script*\n❄ *Malas Edit Sc? Chat Aja Harga Menyesuaikan*\n🎁 *Chat Nomor : wa.me/6282375310984*`)
}
break

case 'bokep': {
kamiyareply(`❄ *Haduhh Otak Mesum*`)
}
break

case 'panel': {
kamiyareply(`❄ *Halo Ini List Harga panelnya Ya*

📦 *Panel Unlimited : 10K/Bulan*
⚠️ *Garansi 10 Hari*

📦 *Panel Unlimited : 15K/Bulan*
⚠️ *Garansi 30 Hari*

📣 *Benefit :*
*Script Kalian Terjamin Aman Karna Saya Langsung Yang Mengurusnya, Tidak Ada Admin Panel Ataupun Reseller* 

❄ *Mau Beli? Bisa Chat :*
🎁 *Chat : wa.me/6283829814737*
🎁 *Langsung Ke Tele : t.me/ilenwy*`)
}
break

case 'huft': {
if (!isCreator) return 
const t3xt = require(`./database/teks/${command}.json`)
const r4andT3xt = t3xt[Math.floor(Math.random() * t3xt.length)]
MappleCore.sendMessage(from, { text: r4andT3xt }, { quoted: m })
}
break


case 'rate': {
if (!q) return kamiyareply(`❄ *Contoh: ${prefix + command} Penampilan Kamiya*`)
if (text.length > 40) return kamiyareply(`❄ *Maksimal 40 Karakter*`)
const ra = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const te = ra[Math.floor(Math.random() * ra.length)]
kamiyareply(`❄ *Rate : ${q}*\n🎁 *Jawaban : ${te}%*`)
}
break

case 'apakah': {
if (!q) return kamiyareply(`❄ *Contoh: ${prefix + command} Kamiya Marah*`)
if (text.length > 40) return kamiyareply(`❄ *Maksimal 40 Karakter*`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
kamiyareply(`❄ *Pertanyaan : Apakah ${q}*\n🎁 *Jawaban : ${kah}*`)
}
break

case 'kapankah': {
if (!q) return kamiyareply(`❄ *Contoh: ${prefix + command} Kamiya Marah*`)
if (text.length > 40) return kamiyareply(`❄ *Maksimal 40 Karakter*`)
const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi', '35 Hari Lagi', '40 Hari Lagi', '45 Hari Lagi', '50 Hari Lagi', '55 Hari Lagi', '60 Hari Lagi', '65 Hari Lagi', '70 Hari Lagi', '75 Hari Lagi', '80 Hari Lagi', '85 Hari Lagi', '90 Hari Lagi', '95 Hari Lagi', '100 Hari Lagi', '5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi', '35 Bulan Lagi', '40 Bulan Lagi', '45 Bulan Lagi', '50 Bulan Lagi', '55 Bulan Lagi', '60 Bulan Lagi', '65 Bulan Lagi', '70 Bulan Lagi', '75 Bulan Lagi', '80 Bulan Lagi', '85 Bulan Lagi', '90 Bulan Lagi', '95 Bulan Lagi', '100 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', 'Besok', 'Lusa', `Abis Command Ini Juga Lu ${q}`]
const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
kamiyareply(`❄ *Pertanyaan : Kapankah ${q}*\n🎁 *Jawaban : ${kapankah}*`)
}
break

case 'bisakah': {
if (!q) return kamiyareply(`❄ *Contoh: ${prefix + command} Kamiya Marah*`)
if (text.length > 40) return kamiyareply(`❄ *Maksimal 40 Karakter*`)
const bisa = ['Bisa', 'Gak Bisa', 'Gak Bisa Awokawok', 'TENTU KAMU PASTI BISA!!!!']
const ga = bisa[Math.floor(Math.random() * bisa.length)]
kamiyareply(`❄ *Pertanyaan : Bisakah ${q}*\n🎁 *Jawaban : ${ga}*`)
}
break

case 'bagaimanakah': {
if (!q) return kamiyareply(`❄ *Contoh: ${prefix + command} Kamiya Marah*`)
if (text.length > 40) return kamiyareply(`❄ *Maksimal 40 Karakter*`)
const gimana = ['Ya Begitulah', 'Gak Normal', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel', 'Kayaknya Lanjut Part 2', 'Kepo Kamu', 'Gimana Aja']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
kamiyareply(`❄ *Pertanyaan : Bagaimanakah ${q}*\n🎁 *Jawaban : ${ya}*`)
}
break

case 'gantengcek': case 'cekganteng': {
if (!q) return kamiyareply(`❄ *Contoh: ${prefix + command} Kamiya*`)
if (text.length > 40) return kamiyareply(`❄ *Maksimal 40 Karakter*`)
const gan = ['Normal','Ganteng Njir','Ganteng Amat Bang','Jaga Penampilan Ya','Kurang :c','Lumayan','Boleh Juga']
const teng = gan[Math.floor(Math.random() * gan.length)]
kamiyareply(`❄ *Nama ${q}*\n🎁 *Jawaban : ${teng}*`)
}
break

case 'cantikcek': case 'cekcantik': {
if (!q) return kamiyareply(`❄ *Contoh: ${prefix + command} Kamiya*`)
if (text.length > 40) return kamiyareply(`❄ *Maksimal 40 Karakter*`)
const can = ['Normal','Cantik Njir','Cantik Amat Sih','Jaga Penampilan Ya','Kurang :c','Lumayan','Boleh Juga']
const tik = can[Math.floor(Math.random() * can.length)]
kamiyareply(`❄ *Nama ${q}*\n🎁 *Jawaban : ${tik}*`)
}
break

case 'sangecek': case 'ceksange': case 'gaycek': case 'cekgay': case 'lesbicek': case 'ceklesbi': {
if (!q) return kamiyareply(`❄ *Contoh: ${prefix + command} Kamiya*`)
if (text.length > 40) return kamiyareply(`❄ *Maksimal 40 Karakter*`)
const sangeh = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
kamiyareply(`❄ *Nama : ${q}*\n🎁 *Jawaban : ${sange}%*`)
}
break

case 'createqr': {
if (!isCreator) return kamiyareply(mess.owner)
LoadCore()
const qrcode = require('qrcode')
if (!text) return kamiyareply(`Penggunaan Salah Harusnya ${prefix+command} Kamiya`)
const qyuer = await qrcode.toDataURL(text, { scale: 8 })
let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
MappleCore.sendMessage(from, { image: data, caption: `Sukses Kak` }, { quoted: m })
}
break
case 'detectqr': {
if (!isCreator) return kamiyareply(mess.owner)
LoadCore()
try {
mee = await MappleCore.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
const res = await fetch(`http://api.qrserver.com/v1/read-qr-code/?fileurl=${mem}`)
const data = await res.json() 
kamiyareply(util.format(data[0]))
} catch (err) {
kamiyareply(`kamiyareply Image Yang Ada Qr Nya`)
}
}
break

case 'cekidgc': {
if (!isCreator) return kamiyareply(mess.owner)
kamiyareply('❄ *Sabar Yaa*')
let getGroups = await MappleCore.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `❄ *List Grup Yang Dimasuki Bot Projects Kamiya*\n🎁 *Total Group : ${anu.length} Group*\n\n`
for (let x of anu) {
let metadata2 = await MappleCore.groupMetadata(x)
teks += `❄ *Nama Group : ${metadata2.subject}*\n🎁 *ID Group : ${metadata2.id}*\n📦 *Total Member Group : ${metadata2.participants.length}*\n\n────────────────────────\n\n`
}
kamiyareply(teks + `❄ *Cara Penggunaan : Pushkontak ID Group|Teks*\n🎁 *Contoh : Pushkontak ID Group|Save Kamiya*`)
}
break
case 'push':
case 'pushkontak':{
if (!isCreator) return kamiyareply(mess.owner)
if (m.isGroup) return kamiyareply(mess.private)
if (!text) return kamiyareply(`❄ *Contoh : Pushkontak ID Group|Teks*\n🎁 *Untuk Mengetahui Id Group Ketik : Cekidgc*`)
global.idgcns = text.split("|")[0]
global.tekspushkon = text.split("|")[1]
const groupMetadataa = !m.isGroup? await MappleCore.groupMetadata(global.idgcns).catch(e => {}) : ""
const participants = !m.isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
if (isContacts) return
for (let mem of halls) {
contacts.push(mem)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await MappleCore.downloadAndSaveMediaMessage(quoted)
memk = await uptotelegra(media)
await MappleCore.sendMessage(mem, { image: { url: memk }, caption: global.tekspushkon })
await sleep(2000)
} else {
await MappleCore.sendMessage(mem, { text: global.tekspushkon })
await sleep(2000)
}
}
MappleCore.sendMessage("6283829814737@s.whatsapp.net", {text:`❄ *Selesai*`})
}
break
case 'push2':
case 'pushkontak2':{
if (!isCreator) return kamiyareply(mess.owner)
if (!m.isGroup) return kamiyareply(mess.group)
if (!text) return kamiyareply(`❄ *Contoh : Pushkontak2 ID Group|Teks*\n🎁 *Untuk Mengetahui Id Group Ketik : Cekidgc*`)
global.tekspushkonv2 = text
const groupMetadata = m.isGroup? await MappleCore.groupMetadata(from).catch(e => {}) : ""
const participantts = m.isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
if (isContacts) return
for (let men of halsss) {
contacts.push(men)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await MappleCore.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await MappleCore.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv2 })
await sleep(3000)
} else {
await MappleCore.sendMessage(men, { text: global.tekspushkonv2 })
await sleep(3000)
}
}
MappleCore.sendMessage("6283829814737@s.whatsapp.net", {text:`❄ *Selesai*`})
}
break
case 'savekontak': {
if (!isCreator) return kamiyareply(mess.owner)
kamiyareply(mess.wait)
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA [${index}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
kamiyareply(util.format(err))
} finally {
await MappleCore.sendMessage(from, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "❄ *Selesai*", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
}
}
break

case 'public': {
if (!isCreator) return kamiyareply(mess.owner) 
MappleCore.public = true
kamiyareply('Sukses Change To Public')
}
break

case 'self': {
if (!isCreator) return kamiyareply(mess.owner) 
MappleCore.public = false
kamiyareply('Sukses Change To Self')
}
break

case 'enc': {
            if (!isCreator) return kamiyareply(mess.owner)
            if (!q) return kamiyareply(`Contoh ${prefix+command} const adrian = require('adrian-api')`)
            let meg = await obfus(q)
            kamiyareply(`${meg.result}`)
        }
        break

case 'addprem':
if (!isCreator) return 
if (!args[0]) return kamiyareply(`❄ *Mana Nomornya?`)
bnnd = text.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await MappleCore.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return kamiyareply(`⚠️ *Nomor Tidak Valid!*`)
owner.push(bnnd)
fs.writeFileSync('./premium.json', JSON.stringify(owner))
kamiyareply(`🎁 *Nomor ${bnnd} Ditambahkan Kedalam Daftar Premium*`)
break

case 'delprem':
if (!isCreator) return 
if (!args[0]) return kamiyareply(`❄ *Mana Nomornya?*`)
yaki = text.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(yaki)
owner.splice(unp, 1)
fs.writeFileSync('./premium.json', JSON.stringify(owner))
kamiyareply(`✉️ *Nomor ${yaki} Di Hapus Dari Daftar Premium*`)
break

case 'listprem':
 teksooo = '📦 *List Premium*\n'
for (let i of owner) {
teksooo += `✉️ ${i}\n`
}
teksooo += `\n📑 *Total : ${owner.length}*`
MappleCore.sendMessage(from, { text: teksooo.trim() }, 'extendedTextMessage', { quoted:m, contextInfo: {
				forwardingScore: 0,
				isForwarded: true,
				mentionedJid: [m.sender],
				forwardedNewsletterMessageInfo: {
					newsletterJid: '120363218375655896@newsletter',
					serverMessageId: null,
					newsletterName: '◈ sʏsᴛᴇᴍ ɴᴏᴛɪғɪᴄᴀᴛɪᴏɴs',
				}, "mentionedJid": owner } })
break

case 'ban':  {
if (!isCreator) return kamiyareply(mess.owner)
if (!args[0]) return kamiyareply(`*Contoh : ${command} add 6283829814737*`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banned.includes(orgnye)
if (args[0] === "add") {
if (isBane) return kamiyareply('*Pengguna Ini telah Di Ban*')
banned.push(orgnye)
kamiyareply(`Succes ban Pengguna Ini`)
} else if (args[0] === "del") {
if (!isBane) return kamiyareply('*Pengguna Ini Telah Di hapus Dari Ban*')
let delbans = banned.indexOf(orgnye)
banned.splice(delbans, 1)
kamiyareply(`*Berhasil Menghapus Pengguna yang Di Ban*`)
} else {
kamiyareply("Error")
}
}
break

case 'listban':
if (isBan) return kamiyareply('*Lu Di Ban Owner*')
 teksooop = `📦 *List Ban*\n`
for (let ii of banned) {
teksooop += `   ⨠  ${ii}\n`
}
kamiyareply(teksooop)
break

case 'owner': case 'creator': {
await MappleCore.sendContact(m.chat, author.map( i => i.split("@")[0]), m)
await MappleCore.sendMessage(m.chat, {text: `🎁 *Halo Ini Kontak Ownerku Yaa*`}, {quoted: m})
}
break

case 'limit':{
kamiyareply('❄ *Sisa Limit Kamu :* ' + (db.data.users[m.sender].limit))
}
break

case 'resetlimit': {
if (!isCreator) return kamiyareply(mess.owner)
let list = Object.entries(global.db.data.users)
	let lim = !args || !args[0] ? 50 : isNumber(args[0]) ? parseInt(args[0]) : 50
	lim = Math.max(1, lim)
	list.map(([user, data], i) => (Number(data.limit = lim)))
		MappleCore.sendMessage(m.chat, {text: `❄ *Limit Direset ${lim} / User*`}, { quoted: kamiya })
		}
break

case 'addlimit': {
if (!isCreator) return kamiyareply(mess.owner)
if (!text) return kamiyareply('❄ *Masukkan Jumlah Limit Yang Akan Diberi*')
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '❄ *Tag Orangnya*'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (isNaN(txt)) throw '❄ *Hanya Angka*'
    let poin = parseInt(txt)
    let limit = poin
    if (limit < 1) throw '❄ *Minimal 1*'
    let user = global.db.data.users
    user[who].limit += poin
    if (limit > 9999999) return kamiyareply('❄ *Kebanyakan*') 
    MappleCore.sendMessage(m.chat, {text: `🎁 *Selamat @${who.split`@`[0]}. Kamu Mendapatkan +${poin} Limit!*`}, {quoted:m})
    }
break

case 'hd': case 'hdr': case 'remini': {
if (!quoted) return kamiyareply(`Fotonya Mana?`)
if (!/image/.test(mime)) return kamiyareply(`❄ *Fotonya Mana?*`)
if (global.db.data.users[m.sender].limit < 1) return kamiyareply('⚠️ *Limit Kamu Habis*')
                db.data.users[m.sender].limit -= 5
kamiyareply('❄ *5 Limit Digunakan*')
let media = await quoted.download()
let proses = await remini(media, "enhance");
MappleCore.sendMessage(m.chat, { image: proses, caption: '❄ *Selesai*'}, { quoted: m})
}
break

case 'removebg': case 'nobg':{
if (!quoted) return kamiyareply(`Fotonya Mana?`)
if (!/image/.test(mime)) return kamiyareply(`❄ *Mana Fotonya?*`)
if (global.db.data.users[m.sender].limit < 1) return kamiyareply('⚠️ *Limit Kamu Habis*')
                db.data.users[m.sender].limit -= 5
kamiyareply('❄ *5 Limit Digunakan*')
let media = await quoted.download()
let url = await uploadImage(media)
let anu = await fetch(`https://aemt.me/removebg?url=${url}`)
let data = await anu.json()
await MappleCore.sendFile(m.chat, data.url.result, 'MappleCore.jpg', '🎁 *Removebg Selesai*', { quoted: m})
}
break

case 'toanime': case 'jadianime': {
if (!isPrem) return kamiyareply(mess.prem)
if (!quoted) return kamiyareply(`Fotonya Mana?`)
if (!/image/.test(mime)) return kamiyareply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
kamiyareply(mess.wait)
const media = await MappleCore.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(media)
MappleCore.sendMessage(m.chat, { image: { url: `https://aemt.me/toanime?url=${anu}` }, caption: 'Selesai'}, { quoted: m})
}
break

case 'qc': {
if (!q) return kamiyareply(`❄ *Contoh : Qc White Kamiya*\n🎁 *Kode Warna Ketik : Qckode*`)
if (text.length > 80) return kamiyareply(`❄ *Maksimal 80 Karakter*`)
const isToxic = /(ewe|bangsad|mmk|koncol|kontol|k0ntl|k0ntol|kont0l|k0nt0l|kontoI|puki|kojtol|kintil|momok|nigga|ajg|ewean|yatim|anjing|kontol|memek|bangsat|babi|gblk|goblok|goblog|kntl|pepek|ppk|ngentod|ngentd|ngntd|kentod|kntd|bgst|anjg|anj|fuck|hitam|ireng|jawir|gay|asw|ktl|ngentot|ngewe|bokep|bkp|lonte|lont|bh|perawan|prawan|tolol|tlol|itil|tobrut|tobrud|tbrut|tbrud)/i;
const mappleguard = isToxic.exec(m.text)
if (mappleguard) return kamiyareply('*[ ◈ ] Kamiya Melarang Penggunaan Bahasa Kotor Pada Fitur Qc*')     
let [color, ...message] = text.split(' ');
message = message.join(' ');
let backgroundColor;
switch(color) {
case 'pink':
backgroundColor = '#f68ac9';
break;
case 'blue':
backgroundColor = '#6cace4';
break;
case 'red':
backgroundColor = '#f44336';
break;
case 'green':
backgroundColor = '#4caf50';
break;
case 'yellow':
backgroundColor = '#ffeb3b';
break;
case 'purple':
backgroundColor = '#9c27b0';
break;
case 'darkblue':
backgroundColor = '#0d47a1';
break;
case 'lightblue':
backgroundColor = '#03a9f4'; 
break;
case 'ash':
backgroundColor = '#9e9e9e';
break;
case 'orange':
backgroundColor = '#ff9800';
break;
case 'black':
backgroundColor = '#000000';
break;
case 'white':
backgroundColor = '#ffffff';
break;
case 'teal':
backgroundColor = '#008080';
break;
case 'lightpink':
backgroundColor = '#FFC0CB';
break;
case 'chocolate':
backgroundColor = '#A52A2A';
case 'salmon':
backgroundColor = '#FFA07A'; 
break; 
case 'magenta':
backgroundColor = '#FF00FF'; 
break; 
case 'tan':
backgroundColor = '#D2B48C'; 
break;
case 'wheat':
backgroundColor = '#F5DEB3'; 
break;
case 'deeppink':
backgroundColor = '#FF1493'; 
break; 
case 'fire':
backgroundColor = '#B22222';
break;
case 'skyblue':
backgroundColor = '#00BFFF';
break; 
case 'orange':
backgroundColor = '#FF7F50';
break;
case 'brightskyblue':
backgroundColor = '#1E90FF'; 
break; 
case 'hotpink':
backgroundColor = '#FF69B4'; 
break; 
case 'lightskyblue':
backgroundColor = '#87CEEB'; 
break; 
case 'seagreen':
backgroundColor = '#20B2AA'; 
break; 
case 'darkred':
backgroundColor = '#8B0000'; 
break; 
case 'orangered':
backgroundColor = '#FF4500'; 
break; 
case 'cyan':
backgroundColor = '#48D1CC'; 
break; 
case 'violet':
backgroundColor = '#BA55D3'; 
break; 
case 'mossgreen':
backgroundColor = '#00FF7F'; 
break; 
case 'darkgreen':
backgroundColor = '#008000'; 
break; 
case 'navyblue':
backgroundColor = '#191970'; 
break; 
case 'darkorange':
backgroundColor = '#FF8C00'; 
break; 
case 'darkpurple':
backgroundColor = '#9400D3'; 
break; 
case 'fuchsia':
backgroundColor = '#FF00FF'; 
break; 
case 'darkmagenta':
backgroundColor = '#8B008B'; 
break;
case 'darkgray':
backgroundColor = '#2F4F4F'; 
break;
case 'peachpuff':
backgroundColor = '#FFDAB9'; 
break;
case 'darkishgreen':
backgroundColor = '#BDB76B'; 
break;
case 'darkishred':
backgroundColor = '#DC143C'; 
break;
case 'goldenrod':
backgroundColor = '#DAA520'; 
break;
case 'darkishgray':
backgroundColor = '#696969'; 
break;
case 'darkishpurple':
backgroundColor = '#483D8B'; 
break;
case 'gold':
backgroundColor = '#FFD700'; 
break;
case 'silver':
backgroundColor = '#C0C0C0'; 
break;
default:
return kamiyareply('❄ *Kode Warna Tidak Ditemukan*\n🎁 *Contoh : Qc White Kamiya*\n⚠️ *Tolong Gunakan Huruf Kecil Pada Kode Warna*')
}
let obj = {
type: 'quote',
format: 'png',
backgroundColor,
width: 512,
height: 768,
scale: 2,
messages: [
{
entities: [],
avatar: true,
from: {
id: 1,
name: pushname,
photo: { 
url: await MappleCore.profilePictureUrl(m.sender, "image").catch(() => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg'),
}
},
text: message,
replyMessage: {},
},
],
};
let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
headers: {
'Content-Type': 'application/json',
},
});
let buffer = Buffer.from(response.data.result.image, 'base64');
MappleCore.sendImageAsSticker(m.chat, buffer, m, { packname: `${global.packname}`, author: `${global.author}`})
}
break

case 'qckode': {
kamiyareply(`📦 *Kode Warna Qc*
 *⨠ Pink*
 *⨠ Blue*
 *⨠ Red*
 *⨠ Green*
 *⨠ Yellow*
 *⨠ Purple*
 *⨠ Darkblue*
 *⨠ Lightblue*
 *⨠ Ash*
 *⨠ Orange*
 *⨠ Black*
 *⨠ White*
 *⨠ Teal*
 *⨠ Lightpink*
 *⨠ Chocolate*
 *⨠ Salmon*
 *⨠ Magenta*
 *⨠ Tan*
 *⨠ Wheat*
 *⨠ Deeppink*
 *⨠ Fire*
 *⨠ Skyblue*
 *⨠ Safron*
 *⨠ Brightskyblue*
 *⨠ Hotpink*
 *⨠ Lightskyblue*
 *⨠ Seagreen*
 *⨠ Darkred*
 *⨠ Orangered*
 *⨠ Cyan*
 *⨠ Violet*
 *⨠ Mossgreen*
 *⨠ Darkgreen*
 *⨠ Navyblue*
 *⨠ Darkorange*
 *⨠ Darkpurple*
 *⨠ Fuchsia*
 *⨠ Darkmagenta*
 *⨠ Darkgray*
 *⨠ Peachpuff*
 *⨠ Blackishgreen*
 *⨠ Darkishred*
 *⨠ Goldenrod*
 *⨠ Darkishgray*
 *⨠ Darkishpurple*
 *⨠ Gold*
 *⨠ Silver*

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`)
}
break

case 'ai': case 'openai': {
if (!q) return kamiyareply(`❄ *Mau Nanya Apa Sama AI?*`)
if (text.length > 100) return kamiyareply(`❄ *Maksimal 100 Karakter*`)    
kamiyareply('❄ *Sabar Yaa*')
var mappleai = await fetchJson(`https://aemt.me/openai?text=${q}`)
var lenai = mappleai.result
await kamiyareply(lenai)
}
break

case 'ask': {
if (!q) return kamiyareply(`❄ *Mau Nanya Apa Sama Ask?*`)
if (text.length > 100) return kamiyareply(`❄ *Maksimal 100 Karakter*`)
kamiyareply('❄ *Sabar Yaa*')
var mappleai = await fetchJson(`https://aemt.me/openai?text=${q}`)
var lenai = mappleai.result
await kamiyareply(lenai)
}
break

case 'aili': {
if (!q) return kamiyareply(`❄ *Mau Nanya Apa Sama AILI?*`)
if (text.length > 100) return kamiyareply(`❄ *Maksimal 100 Karakter*`)    
kamiyareply('❄ *Sabar Yaa*')
var mappleai = await fetchJson(`https://aemt.me/prompt/gpt?prompt=mapple&text=${q}`)
var lenai = mappleai.result
await kamiyareply(lenai)
}
break

case 'gpt4': {
if (!q) return kamiyareply(`❄ *Mau Nanya Apa Sama GPT4?*`)
if (text.length > 100) return kamiyareply(`❄ *Maksimal 100 Karakter*`)    
kamiyareply('❄ *Sabar Yaa*')
var mappleai = await fetchJson(`https://aemt.me/gpt4?text=${q}`)
 var lenai = mappleai.result
await kamiyareply(lenai)
}
break

case 'bing': {
if (!q) return kamiyareply(`❄ *Mau Nanya Apa Sama Bing?*`)
if (text.length > 100) return kamiyareply(`❄ *Maksimal 100 Karakter*`)    
kamiyareply('❄ *Sabar Yaa*')
var mappleai = await fetchJson(`https://aemt.me/bingai?text=${q}`)
var lenai = mappleai.result
await kamiyareply(lenai)
}
break

case 'gemini': {
if (!q) return kamiyareply(`❄ *Mau Nanya Apa Sama Gemini?*`)
if (text.length > 100) return kamiyareply(`❄ *Maksimal 100 Karakter*`)    
kamiyareply('❄ *Sabar Yaa*')
var mappleai = await fetchJson(`https://aemt.me/gemini?text=${q}`)
var lenai = mappleai.result
await kamiyareply(lenai)
}
break

case 'alberteinstein': case 'einstein': {
if (!q) return kamiyareply(`❄ *Mau Nanya Apa Sama Albert Einstein?*`)
if (text.length > 100) return kamiyareply(`❄ *Maksimal 100 Karakter*`)    
kamiyareply('❄ *Sabar Yaa*')
var mappleai = await fetchJson(`https://itzpire.site/ai/askThee?name=Albert%20Einstein&question=${q}`)
var lenai = mappleai.result
await kamiyareply(lenai)
}
break

case 'simi': {
if (!q) return kamiyareply(`❄ *Mau Nanya Apa Sama Simi?*`)
if (text.length > 100) return kamiyareply(`❄ *Maksimal 100 Karakter*`)
var mappleai = await fetchJson(`https://itzpire.site/ai/simi-chat?text=${q}&lang=id&toxic=false`)
var lenai = mappleai.result
await kamiyareply(lenai)
}
break

case 'gemini-img':{
if (!quoted) return kamiyareply('❄ *Mana Gambarnya?*')
kamiyareply('❄ *Sabar Yaa*')
if (!/image/.test(mime)) return kamiyareply("⚠️ *Hanya Support Gambar*")
let media = await MappleCore.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(media)
let { data } = await axios.get("https://gmni.vercel.app/api/img?imageUrl="+ anu +"&prompt=" + text)
kamiyareply(data.text)
}
break

case'lirik': case 'liriklagu':{
if (!text) return kamiyareply(`❄ *Masukan Judul Lagu*`)
if (text.length > 30) return kamiyareply(`❄ *Maksimal 30 Karakter*`)    
kamiyareply(mess.wait)
try{
let anu = await fetchJson('http://song-lyrics-api-o0m8tth8t-azharimm.vercel.app/search?q=' + text)
if(!anu.data) return kamiyareply('⚠️ *Server Error*')
let anuu = await fetchJson (anu.data[0].songLyrics)
let { artist, songTitle, songLyrics} = anuu.data
kamiyareply('❄ *Lirik Lagu*\n📃 *Judul* : ' + songTitle + '\n📣 *Artis :* ' + artist + '\n\n🎁 *Lirik* :\n' + songLyrics)
}catch (error) {
kamiyareply(`⚠️ *Lirik Lagu Tidak Ditemukan*`);
}
}
break

case 'linkgroup': case 'linkgc': {
if (!m.isGroup) return kamiyareply(mess.group)
if (!isBotAdmins) return kamiyareply(mess.botAdmin)
let response = await MappleCore.groupInviteCode(from)
MappleCore.sendText(from, `❄ *Name Group : ${groupMetadata.subject}*\n\n🎁 *Link Group : https://chat.whatsapp.com/${response}*`, m, { detectLink: true })
}
break

case 'resetlinkgc':
if (!isAdmins) return kamiyareply(mess.admin)
if (!m.isGroup) return kamiyareply(mess.group)
if (!isBotAdmins) return kamiyareply(mess.botAdmin)
MappleCore.groupRevokeInvite(from)
break

case 'sendlinkgc': {
if (!isCreator) return kamiyareply(mess.owner)
if (!m.isGroup) return kamiyareply(mess.group)
if (!isBotAdmins) return kamiyareply(mess.botAdmin)
if (!args[0]) return kamiyareply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6283829814737`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
let response = await MappleCore.groupInviteCode(from)
MappleCore.sendText(bnnd, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, len, { detectLink: true })

}
break

case '🚶🏻‍♂️':
case 'kick': {
if (!m.isGroup) return kamiyareply(mess.group)
if (!isBotAdmins) return kamiyareply(mess.botAdmin)
if (!isAdmins) return kamiyareply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await MappleCore.groupParticipantsUpdate(from, [users], 'remove')
}
break

case 'add': {
if (!isCreator) return kamiyareply(mess.owner)
if (!m.isGroup) return kamiyareply(mess.group)
if (!isBotAdmins) return kamiyareply(mess.botAdmin)
if (!isAdmins) return kamiyareply(mess.admin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await MappleCore.groupParticipantsUpdate(from, [users], 'add')
}
break

case 'promote': {
if (!m.isGroup) return kamiyareply(mess.group)
if (!isBotAdmins) return kamiyareply(mess.botAdmin)
if (!isAdmins) return kamiyareply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await MappleCore.groupParticipantsUpdate(from, [users], 'promote')
}
break

case 'demote': {
if (!m.isGroup) return kamiyareply(mess.group)
if (!isBotAdmins) return kamiyareply(mess.botAdmin)
if (!isAdmins) return kamiyareply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await MappleCore.groupParticipantsUpdate(from, [botNumber], 'demote')
}
break

case 'hidetag': {
if (!m.isGroup) return kamiyareply(mess.group)
if (!isAdmins) return kamiyareply(mess.admin)
MappleCore.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted:len})
}
break

case 'grup':
case 'group': {   
if (!m.isGroup) return kamiyareply(mess.group)
if (!isAdmins) return kamiyareply(mess.admin)
if (args[0] === 'close'){
await MappleCore.groupSettingUpdate(from, 'announcement').then((res) => kamiyareply(`Sukses Menutup Group 🫡`)).catch((err) => kamiyareply(jsonformat(err)))
} else if (args[0] === 'open'){
await MappleCore.groupSettingUpdate(from, 'not_announcement').then((res) => kamiyareply(`Sukses Membuka Group 🫡`)).catch((err) => kamiyareply(jsonformat(err)))
} else {
MappleCore.sendMessage(m.chat, { image: ppnyauser, caption: `❄ *Silahkan Ketik*
Group open
Group close`}, {quoted:m}) 
 }
}
break

case 'editinfo': {
if (!m.isGroup) return kamiyareply(mess.group)
if (!isAdmins) return kamiyareply(mess.admin)
 if (args[0] === 'open'){
await MappleCore.groupSettingUpdate(from, 'unlocked').then((res) => kamiyareply(`Sukses Membuka Edit Info Group 🫡`)).catch((err) => kamiyareply(jsonformat(err)))
 } else if (args[0] === 'close'){
await MappleCore.groupSettingUpdate(from, 'locked').then((res) => kamiyareply(`Sukses Menutup Edit Info Group 🫡`)).catch((err) => kamiyareply(jsonformat(err)))
 } else {
 MappleCore.sendMessage(m.chat, { image: ppnyauser, caption: ` Silahkan Ketik
Editinfo Open
Editinfo Close`}, {quoted:m}) 

}
}
break

case 'join': {
if (!isCreator) return kamiyareply(mess.owner)
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid! 🤔'
kamiyareply('❄ *Sabar Yaa*')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await MappleCore.groupAcceptInvite(result).then((res) => kamiyareply(jsonformat(res))).catch((err) => kamiyareply(jsonformat(err)))
}
break

case 'leave': {
                if (!isCreator) return kamiyareply(mess.owner)
                kamiyareply("Selamat Tinggal 😥")
                await MappleCore.groupLeave(m.chat).then((res) => kamiyareply(jsonformat(res))).catch((err) => kamiyareply(jsonformat(err)))
        }
        break

case 'editsubjek': {
if (!m.isGroup) return kamiyareply(mess.group)
if (!isBotAdmins) return kamiyareply(mess.botAdmin)
if (!isAdmins) return kamiyareply(mess.admin)
if (!text) throw 'Text nya ?'
await MappleCore.groupUpdateSubject(from, text).then((res)).catch((err) => kamiyareply(jsonformat(err)))
}
break
    case 'delgc':

  if (!isCreator) return kamiyareply(mess.owner)

    if (!isGroup) return kamiyareply(`Khusus Group`)

var ini = pler.indexOf(m.chat)

pler.splice(ini, 1)

fs.writeFileSync('./all/database/idgrup.json', JSON.stringify(pler))

kamiyareply(`${command} Sukses Menonaktifkan Fitur Domain Di Grup Ini`)

break

       case 'addgc':

    if (!isGroup) return kamiyareply(`Khusus Group`)         

if (!isCreator) return kamiyareply(mess.owner)

pler.push(m.chat)

fs.writeFileSync('./all/database/idgrup.json', JSON.stringify(pler))

kamiyareply(`${command} Sukses Mengaktifkan Fitur Domain Di Grup Ini`)

           break

case 'editdesk':{
if (!m.isGroup) return kamiyareply(mess.group)
if (!isBotAdmins) return kamiyareply(mess.botAdmin)
if (!isAdmins) return kamiyareply(mess.admin)
if (!text) throw 'Text Nya ?'
await MappleCore.groupUpdateDescription(from, text).then((res)).catch((err) => kamiyareply(jsonformat(err)))
}
break

case 'tagall': {
if (!m.isGroup) return kamiyareply(mess.group)
if (!isAdmins) return kamiyareply(mess.admin)
let teks = `❄ *Tag All*
🎁 *Pesan : ${q ? q : 'Kosong'}*\n\n`
for (let mem of participants) {
teks += `⨠ @${mem.id.split('@')[0]}\n`
}
MappleCore.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted:m })
}
break

case 'sewa':
if (isBan) return kamiyareply('*Lu Di Ban Owner*')
kamiyareply(`❄ *Harga Sewa Bot Projects Kamiya*

📦 *1 Minggu = 10k*
📦 *1 Bulan = 20k*

🎁 *Chat : wa.me/6282375310984*`)
break

case 'sewabot':
if (isBan) return kamiyareply('*Lu Di Ban Owner*')
if (!isCreator) return kamiyareply(mess.owner)
if (!text) return kamiyareply(`*Contoh* :\n#sewabot 1 minggu `)
let cret = await MappleCore.groupCreate(args.join(" "), [])
let response = await MappleCore.groupInviteCode(cret.id)
MappleCore.sendMessage(m.chat, { text: `❄ *Create Group Sewa Bot*

❄ *Sewa Bot Selama ${text} Telah Di Proses, Silahkan Masuk Group Melalui Link Yang Sudah Di Sediakan*

❄ *Bot : ${botname}*
❄ *Time : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB_https://chat.whatsapp.com/${response}*
`, m})
kamiyareply('🎁 *Link Group Khusus Berhasil Dikirim Melalui Chat Pribadi Anda*')
break

case 'stiker': case 'sticker': case 's': case 'stickers': case 'sgif': {
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
 if (!quoted) kamiyareply `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await MappleCore.sendImageAsSticker(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return kamiyareply('⚠️ *Maksimal 10 Detik!*')
let media = await quoted.download()
let encmedia = await MappleCore.sendVideoAsSticker(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
kamiyareply(`❄ *Kirim Gambar/Video Yang Ingin Dijadikan Sticker*\n⚠️ *Durasi VIdeo Minimal 1 - 9 Detik*`)
}
}
break

case 'inspect': {
if (isBan) return kamiyareply('*Lu Di Ban Owner*')
LoadCore()
if (!args[0]) return kamiyareply("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return kamiyareply("Link Invalid 🤔")
MappleCore.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `❄ *Group Link Yang Di Inspect*

 *⨠ Nama Group : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}*
 *⨠ Deskripsi Di Ubah : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}*
 *⨠ Pembuat Group : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}*
 *⨠ Group Di Buat : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}*
 *⨠ Total Member : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Member*

*⨠ ID Group  : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}*
🎁 *By ${botname}*`
try {
pp = await MappleCore.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
MappleCore.sendFile(from, pp, "", m, { caption: tekse, mentions: await MappleCore.parseMention(tekse) })

})
}
break

case 'ping':
case 'botstatus':
case 'statusbot': {
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, {
length
}) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
🕒 *Kecepatan Respon : ${latensi.toFixed(4)} Detik* \n🕒 *${oldd - neww} Milidetik*\n*🕒 Runtime : ${runtime(process.uptime())}*

📦 *Info Server*
 *⨠ RAM : ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}*

${cpus[0] ? `⚠️ *Total Cpu Usage*\n *⨠ ${cpus[0].model.trim()} (${cpu.speed} MHZ)*\n${Object.keys(cpu.times).map(type => ` *⨠ ${(type + '*').padEnd(6)}: *${(100 * cpu.times[type] / cpu.total).toFixed(2)}%*`).join('\n')}
 *⨠ CPU Core(s) Usage (${cpus.length} Core CPU)*` : ''}
`.trim()
await MappleCore.sendMessage(m.chat, {
text: respon,
contextInfo: {
				forwardingScore: 0,
				isForwarded: true,
				mentionedJid: [m.sender],
				forwardedNewsletterMessageInfo: {
					newsletterJid: '120363218375655896@newsletter',
					serverMessageId: null,
					newsletterName: '◈ sʏsᴛᴇᴍ ɴᴏᴛɪғɪᴄᴀᴛɪᴏɴs',
				},
externalAdReply: {
showAdAttribution: true,
title: 'Kecepatan Bot',
body: `${latensi.toFixed(4)} Second`,
thumbnailUrl: 'https://telegra.ph/file/89655d27ff924aee15302.jpg',
sourceUrl: global.link,
mediaType: 1,
renderLargerThumbnail: false
}
}
}, {
quoted: kamiya
})
}
break

case 'bcgc': case 'bcgroup': {
if (!isCreator) return kamiyareply(mess.owner)
LoadCore()
if (!text) kamiyareply `❄ *Contoh : ${prefix + command} Cihuyyy*`
let getGroups = await MappleCore.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
for (let i of anu) {
await sleep(1500)
MappleCore.sendMessage(i, {text: `${text}`}, {quoted:len})
    }
kamiyareply(`❄ Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break

case 'bcimg': case 'bcvid': case 'bcvideo': case 'share': {
if (!isCreator) return kamiyareply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
if (m.isGroup) return kamiyareply(mess.private)
if (!text) return kamiyareply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks\n\nkamiyareply Gambar Untuk Mengirim Gambar Ke Semua Group`)
kamiyareply(mess.wait)
let getGroups = await MappleCore.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
global.teksjpm = text
for (let xnxx of anu) {
let metadat72 = await MappleCore.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await MappleCore.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await MappleCore.sendMessage(xnxx, { image: { url: mem }, caption: global.teksjpm, contextInfo:{ mentionedJid: participanh.map(a => a.id) } }, { quoted: kamiya })
await sleep(2000)
} else {
if(/video/.test(mime)){
media1 = await MappleCore.downloadAndSaveMediaMessage(quoted)
mem1 = await uptotelegra(media1)
await MappleCore.sendMessage(xnxx, { video: { url: mem1 }, caption: global.teksjpm, contextInfo:{ mentionedJid: participanh.map(a => a.id) } }, { quoted: kamiya })
await sleep(2000)
} else {
await MappleCore.sendMessage(xnxx, { text: global.teksjpm, contextInfo:{ mentionedJid: participanh.map(a => a.id) } }, { quoted: kamiya })
await sleep(2000)
}}
}
}
break
            
            case 'antitoxic': {
                if (!m.isGroup) return kamiyareply(mess.group)
                if (!isAdmins && !isCreator) return kamiyareply(mess.admin)
                if (!isBotAdmins) return kamiyareply(mess.botAdmin)
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].mapple_antitoxic) return kamiyareply(`📣 *Anti Toxic Sudah Aktif*`)
                    db.data.chats[m.chat].mapple_antitoxic = true
                    kamiyareply(`📣 *Anti Toxic Diaktifkan Didalam Group*`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].mapple_antitoxic) return kamiyareply(`⚠️ *Anti Toxic Sudah Dinonaktifkan*`)
                    db.data.chats[m.chat].mapple_antitoxic = false
                    kamiyareply(`⚠️ *Anti Toxic Dinonaktifkan Didalam Group*`)
                } else {
                    kamiyareply(`Mode ${command}\n\n\nKetik ${prefix + command} on/off`)
                }
            }
            break
            
            case 'antilinkgcv1': {
                if (!m.isGroup) return kamiyareply(mess.group)
                if (!isAdmins && !isCreator) return kamiyareply(mess.admin)
                if (!isBotAdmins) return kamiyareply(mess.botAdmin)
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].mapple_antigc) return kamiyareply(`❄ *Autokick Link Gc Aktif*`)
                    db.data.chats[m.chat].mapple_antigc = true
                    kamiyareply(`❄ *Autokick Link Gc Aktif*`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].mapple_antigc) return kamiyareply(`❄ *Autokick Link Gc Di Nonatifkan*`)
                    db.data.chats[m.chat].mapple_antigc = false
                    kamiyareply(`❄ *Autokick Nonaktif*`)
                } else {
                    kamiyareply(`❄ *Ketik Antilinkgcv1 on/off*`)
                }
            }
            break

            case 'antilinkgc':
                if (!isAdmins) return kamiyareply('❄ *Kamu Bukan Admin Group*')
                if (!m.isGroup) return kamiyareply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return kamiyareply(mess.admin)
                if (!isBotAdmins) return kamiyareply(mess.botAdmin)
                if (args.length < 1) return kamiyareply(`❄ *Contoh ${prefix + command} on/off*`)
                if (q == 'on'){
                    global.db.data.chats[m.chat].mapple_antigc2 = true
                    kamiyareply(`❄ *Berhasil Mengaktifkan Anti Link Group*\n🎁 *Ketik Antilinkgcv1 Untuk Mengaktifkan Autokick*`)
                } else if (q == 'off'){
                    global.db.data.chats[m.chat].mapple_antigc2 = false
                    kamiyareply(`❄ *Berhasil Mematikan Anti Link Group *`)
                }
            break

            case 'antiwame':
                if (!isAdmins) return kamiyareply('❄ *Kamu Bukan Admin Group*')
                if (!m.isGroup) return kamiyareply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return kamiyareply(mess.admin)
                if (!isBotAdmins) return kamiyareply(mess.botAdmin)
                if (args.length < 1) return kamiyareply(`❄ *Contoh ${prefix + command} on/off*`)
                if (q == 'on'){
                    global.db.data.chats[m.chat].mapple_antiwame = true
                    kamiyareply(`❄ *Berhasil Mengaktifkan Anti Chat Wame*`)
                } else if (q == 'off'){
                    global.db.data.chats[m.chat].mapple_antiwame = false
                    kamiyareply(`❄ *Berhasil Mematikan Anti Chat Wame*`)
                }
            break

            case 'antilink':
                if (!isAdmins) return kamiyareply('❄ *Kamu Bukan Admin Group*')
                if (!m.isGroup) return kamiyareply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return kamiyareply(mess.admin)
                if (!isBotAdmins) return kamiyareply(mess.botAdmin)
                if (args.length < 1) return kamiyareply(`❄ *Contoh ${prefix + command} on/off*`)
                if (q == 'on'){
                    global.db.data.chats[m.chat].mapple_antilink = true
                    kamiyareply(`❄ *Berhasil Mengaktifkan Anti Link*`)
                } else if (q == 'off'){
                    global.db.data.chats[m.chat].mapple_antilink = false
                    kamiyareply(`❄ *Berhasil Mematikan Anti Link*`)
                }
            break

            case 'antipanel':
                if (!isAdmins) return kamiyareply('❄ *Kamu Bukan Admin Group*')
                if (!m.isGroup) return kamiyareply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return kamiyareply(mess.admin)
                if (!isBotAdmins) return kamiyareply(mess.botAdmin)
                if (args.length < 1) return kamiyareply(`❄ *Contoh ${prefix + command} on/off*`)
                if (q == 'on'){
                    global.db.data.chats[m.chat].mapple_antipanel = true
                    kamiyareply(`❄ *Berhasil Mengaktifkan Anti Promosi Panel*`)
                } else if (q == 'off'){
                    global.db.data.chats[m.chat].mapple_antipanel = false
                    kamiyareply(`❄ *Berhasil Mematikan Anti Promosi Panel*`)
                }
            break

            case 'antilinktt':
                if (!isAdmins) return kamiyareply('❄ *Kamu Bukan Admin Group*')
                if (!m.isGroup) return kamiyareply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return kamiyareply(mess.admin)
                if (!isBotAdmins) return kamiyareply(mess.botAdmin)
                if (args.length < 1) return kamiyareply(`❄ *Contoh ${prefix + command} on/off*`)
                if (q == 'on'){
                    global.db.data.chats[m.chat].mapple_antitiktok = true
                    kamiyareply(`❄ *Berhasil Mengaktifkan Anti Link Tiktok*`)
                } else if (q == 'off'){
                    global.db.data.chats[m.chat].mapple_antitiktok = false
                    kamiyareply(`❄ *Berhasil Mematikan Anti Link Tiktok*`)
                }
            break

            case 'antilinkyt':
                if (!isAdmins) return kamiyareply('❄ *Kamu Bukan Admin Group*')
                if (!m.isGroup) return kamiyareply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return kamiyareply(mess.admin)
                if (!isBotAdmins) return kamiyareply(mess.botAdmin)
                if (args.length < 1) return kamiyareply(`❄ *Contoh ${prefix + command} on/off*`)
                if (q == 'on'){
                    global.db.data.chats[m.chat].mapple_antiyoutube = true
                    kamiyareply(`❄ *Berhasil Mengaktifkan Anti Link Youtube*`)
                } else if (q == 'off'){
                    global.db.data.chats[m.chat].mapple_antiyoutube = false
                    kamiyareply(`❄ *Berhasil Mematikan Anti Link Youtube*`)
                }
            break

            case 'antich':
                if (!isAdmins) return kamiyareply('❄ *Kamu Bukan Admin Group*')
                if (!m.isGroup) return kamiyareply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return kamiyareply(mess.admin)
                if (!isBotAdmins) return kamiyareply(mess.botAdmin)
                if (args.length < 1) return kamiyareply(`❄ *Contoh ${prefix + command} on/off*`)
                if (q == 'on'){
                    global.db.data.chats[m.chat].mapple_antich = true
                    kamiyareply(`❄ *Berhasil Mengaktifkan Anti Link Channel Wa*`)
                } else if (q == 'off'){
                    global.db.data.chats[m.chat].mapple_antich = false
                    kamiyareply(`❄ *Berhasil Mematikan Anti Link Channel Wa*`)
                }
            break

            case 'kamiyapro':
                if (!isAdmins) return kamiyareply('❄ *Kamu Bukan Admin Group*')
                if (!m.isGroup) return kamiyareply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return kamiyareply(mess.admin)
                if (!isBotAdmins) return kamiyareply(mess.botAdmin)
                if (args.length < 1) return kamiyareply(`❄ *Contoh KamiyaPro on/off*`)
                if (q == 'on'){
                    global.db.data.chats[m.chat].mapple_antich = true
                    global.db.data.chats[m.chat].mapple_antigc2 = true
                    db.data.chats[m.chat].mapple_antigc = true
                    kamiyareply(`❄ *KamiyaPro Berhasil Diaktifkan Didalam Group*`)
                } else if (q == 'off'){ 
                    global.db.data.chats[m.chat].mapple_antich = false
                    global.db.data.chats[m.chat].mapple_antigc2 = false
                    db.data.chats[m.chat].mapple_antigc = false
                    kamiyareply(`⚠️ *KamiyaPro Dinonaktifkan Dalam Group!*`)
                }
            break

            case 'autoread':
            if (!isCreator) return kamiyareply(mess.owner)
            if (args.length < 1) return kamiyareply(`Contoh ${prefix + command} on/off`)
            if (q === 'on'){
            global.db.data.settings[botNumber].autoread = true
            kamiyareply(`Berhasil mengubah autoread ke ${q}`)
            } else if (q === 'off'){
            global.db.data.settings[botNumber].autoread = false
            kamiyareply(`Berhasil mengubah autoread ke ${q}`)
            }
            break
            
            case 'autodown': {
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return kamiyareply(`Ehh Bot Nya Belum Jadi Admin ☝️😅`)
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].autodown) return kamiyareply(`Sudah Aktif Sebelumnya 🤯`)
                    db.data.chats[m.chat].autodown = true
                    kamiyareply(`Auto Download Aktif 🤯\n\n- TikTok\n- YouTube\n- Instagram\n- Mediafire`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].autodown) return kamiyareply(`Sudah Nonaktif Sebelumnya 😤`)
                    db.data.chats[m.chat].autodown = false
                    kamiyareply(`Auto Download Nonaktif 😤`)
                } else {
                    kamiyareply(`Mode ${command}\n\n\nKetik ${prefix + command} on/off`)
                }
            }
            break

case 'flaming':{
if (args.length == 0) return kamiyareply(`❄ *Mana Teksnya?*`)
if (text.length > 20) return kamiyareply(`❄ *Maksimal 20 Karakter*`)    
kamiyareply(mess.wait)
let mapple_txt = args.join(" ")
var mapplehasil = `https://api.loviecho.biz.id/api/photooxy/realistic-flaming-text-effect?api_key=sk-qpic1vg2czjkv0pto&text=${mapple_txt}`
MappleCore.sendMessage(from, {image: {url:mapplehasil}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => kamiyareply('⚠️ *Kayaknya Ada Yang Error*'))
}
break

case 'stars':{
if (args.length == 0) return kamiyareply(`❄ *Mana Teksnya?*`)
if (text.length > 20) return kamiyareply(`❄ *Maksimal 20 Karakter*`)    
kamiyareply(mess.wait)
let mapple_txt = args.join(" ")
var mapplehasil = `https://api.loviecho.biz.id/api/photooxy/write-stars-text-on-the-night-sky?api_key=sk-qpic1vg2czjkv0pto&text=${mapple_txt}`
MappleCore.sendMessage(from, {image: {url:mapplehasil}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => kamiyareply('⚠️ *Kayaknya Ada Yang Error*'))
}
break

case 'shadow':{
if (args.length == 0) return kamiyareply(`❄ *Mana Teksnya?*`)
if (text.length > 20) return kamiyareply(`❄ *Maksimal 20 Karakter*`)    
kamiyareply(mess.wait)
let mapple_txt = args.join(" ")
var mapplehasil = `https://api.loviecho.biz.id/api/photooxy/shadow-text-effect-in-the-sky?api_key=sk-qpic1vg2czjkv0pto&text=${mapple_txt}`
MappleCore.sendMessage(from, {image: {url:mapplehasil}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => kamiyareply('⚠️ *Kayaknya Ada Yang Error*'))
}
break

case 'burnpaper':{
if (args.length == 0) return kamiyareply(`❄ *Mana Teksnya?*`)
if (text.length > 20) return kamiyareply(`❄ *Maksimal 20 Karakter*`)    
kamiyareply(mess.wait)
let mapple_txt = args.join(" ")
var mapplehasil = `https://api.loviecho.biz.id/api/photooxy/write-text-on-burn-paper?api_key=sk-qpic1vg2czjkv0pto&text=${mapple_txt}`
MappleCore.sendMessage(from, {image: {url:mapplehasil}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => kamiyareply('⚠️ *Kayaknya Ada Yang Error*'))
}
break

case 'grass':{
if (args.length == 0) return kamiyareply(`❄ *Mana Teksnya?*`)
if (text.length > 20) return kamiyareply(`❄ *Maksimal 20 Karakter*`)    
kamiyareply(mess.wait)
let mapple_txt = args.join(" ")
var mapplehasil = `https://api.loviecho.biz.id/api/photooxy/make-quotes-under-grass?api_key=sk-qpic1vg2czjkv0pto&text=${mapple_txt}`
MappleCore.sendMessage(from, {image: {url:mapplehasil}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => kamiyareply('⚠️ *Kayaknya Ada Yang Error*'))
}
break

case 'underwater':{
if (args.length == 0) return kamiyareply(`❄ *Mana Teksnya?*`)
if (text.length > 20) return kamiyareply(`❄ *Maksimal 20 Karakter*`)    
kamiyareply(mess.wait)
let mapple_txt = args.join(" ")
var mapplehasil = `https://api.loviecho.biz.id/api/photooxy/creating-an-underwater-ocean?api_key=sk-qpic1vg2czjkv0pto&text=${mapple_txt}`
MappleCore.sendMessage(from, {image: {url:mapplehasil}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => kamiyareply('⚠️ *Kayaknya Ada Yang Error*'))
}
break

case 'whitecube':{
if (args.length == 0) return kamiyareply(`❄ *Mana Teksnya?*`)
if (text.length > 20) return kamiyareply(`❄ *Maksimal 20 Karakter*`)    
kamiyareply(mess.wait)
let mapple_txt = args.join(" ")
var mapplehasil = `https://api.loviecho.biz.id/api/photooxy/3d-text-effect-under-white-cube?api_key=sk-qpic1vg2czjkv0pto&text=${mapple_txt}`
MappleCore.sendMessage(from, {image: {url:mapplehasil}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => kamiyareply('⚠️ *Kayaknya Ada Yang Error*'))
}
break

case 'smokyneon':{
if (args.length == 0) return kamiyareply(`❄ *Mana Teksnya?*`)
if (text.length > 20) return kamiyareply(`❄ *Maksimal 20 Karakter*`)    
kamiyareply(mess.wait)
let mapple_txt = args.join(" ")
var mapplehasil = `https://api.loviecho.biz.id/api/photooxy/make-smoky-neon-glow-effect?api_key=sk-qpic1vg2czjkv0pto&text=${mapple_txt}`
MappleCore.sendMessage(from, {image: {url:mapplehasil}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => kamiyareply('⚠️ *Kayaknya Ada Yang Error*'))
}
break

case 'fabric':{
if (args.length == 0) return kamiyareply(`❄ *Mana Teksnya?*`)
if (text.length > 20) return kamiyareply(`❄ *Maksimal 20 Karakter*`)    
kamiyareply(mess.wait)
let mapple_txt = args.join(" ")
var mapplehasil = `https://api.loviecho.biz.id/api/photooxy/army-camouflage-fabric-text-effect?api_key=sk-qpic1vg2czjkv0pto&text=${mapple_txt}`
MappleCore.sendMessage(from, {image: {url:mapplehasil}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => kamiyareply('⚠️ *Kayaknya Ada Yang Error*'))
}
break

case 'glowing':{
if (args.length == 0) return kamiyareply(`❄ *Mana Teksnya?*`)
if (text.length > 20) return kamiyareply(`❄ *Maksimal 20 Karakter*`)    
kamiyareply(mess.wait)
let mapple_txt = args.join(" ")
var mapplehasil = `https://api.loviecho.biz.id/api/photooxy/create-a-3d-glowing-text-effect?api_key=sk-qpic1vg2czjkv0pto&text=${mapple_txt}`
MappleCore.sendMessage(from, {image: {url:mapplehasil}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => kamiyareply('⚠️ *Kayaknya Ada Yang Error*'))
}
break

case 'honey':{
if (args.length == 0) return kamiyareply(`❄ *Mana Teksnya?*`)
if (text.length > 20) return kamiyareply(`❄ *Maksimal 20 Karakter*`)    
kamiyareply(mess.wait)
let mapple_txt = args.join(" ")
var mapplehasil = `https://api.loviecho.biz.id/api/photooxy/honey-text-effect?api_key=sk-qpic1vg2czjkv0pto&text=${mapple_txt}`
MappleCore.sendMessage(from, {image: {url:mapplehasil}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => kamiyareply('⚠️ *Kayaknya Ada Yang Error*'))
}
break

case 'vintage':{
if (args.length == 0) return kamiyareply(`❄ *Mana Teksnya?*`)
if (text.length > 20) return kamiyareply(`❄ *Maksimal 20 Karakter*`)    
kamiyareply(mess.wait)
let mapple_txt = args.join(" ")
var mapplehasil = `https://api.loviecho.biz.id/api/photooxy/vintage-text-style?api_key=sk-qpic1vg2czjkv0pto&text=${mapple_txt}`
MappleCore.sendMessage(from, {image: {url:mapplehasil}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => kamiyareply('⚠️ *Kayaknya Ada Yang Error*'))
}
break

case 'gradient':{
if (args.length == 0) return kamiyareply(`❄ *Mana Teksnya?*`)
if (text.length > 20) return kamiyareply(`❄ *Maksimal 20 Karakter*`)    
kamiyareply(mess.wait)
let mapple_txt = args.join(" ")
var mapplehasil = `https://api.loviecho.biz.id/api/photooxy/gradient-avatar-text-effect?api_key=sk-qpic1vg2czjkv0pto&text=${mapple_txt}`
MappleCore.sendMessage(from, {image: {url:mapplehasil}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => kamiyareply('⚠️ *Kayaknya Ada Yang Error*'))
}
break

case 'fur':{
if (args.length == 0) return kamiyareply(`❄ *Mana Teksnya?*`)
if (text.length > 20) return kamiyareply(`❄ *Maksimal 20 Karakter*`)    
kamiyareply(mess.wait)
let mapple_txt = args.join(" ")
var mapplehasil = `https://api.loviecho.biz.id/api/photooxy/fur-text-effect-generator?api_key=sk-qpic1vg2czjkv0pto&text=${mapple_txt}`
MappleCore.sendMessage(from, {image: {url:mapplehasil}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => kamiyareply('⚠️ *Kayaknya Ada Yang Error*'))
}
break

case 'striking':{
if (args.length == 0) return kamiyareply(`❄ *Mana Teksnya?*`)
if (text.length > 20) return kamiyareply(`❄ *Maksimal 20 Karakter*`)    
kamiyareply(mess.wait)
let mapple_txt = args.join(" ")
var mapplehasil = `https://api.loviecho.biz.id/api/photooxy/striking-3d-text-effect?api_key=sk-qpic1vg2czjkv0pto&text=${mapple_txt}`
MappleCore.sendMessage(from, {image: {url:mapplehasil}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => kamiyareply('⚠️ *Kayaknya Ada Yang Error*'))
}
break

case 'cuaca':{
if (!text) return kamiyareply('❄ *Mana Lokasinya?*')
    kamiyareply('❄ *Sabar Yaa*')
if (text.length > 20) return kamiyareply(`❄ *Maksimal 20 Karakter*`)
            let wdata = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=id`
            );
            let mapple_txt = ""
            mapple_txt += `❄ *Cuaca Dari : ${text}*\n`
            mapple_txt += `☁️ *Cuaca :* *${wdata.data.weather[0].main}*\n`
            mapple_txt += `🧾 *Deskripsi :* *${wdata.data.weather[0].description}*\n`
            mapple_txt += `🌡️ *Suhu Rata Rata :* *${wdata.data.main.temp}*\n`
            mapple_txt += `💨 *Tekanan :* *${wdata.data.main.pressure}*\n`
            mapple_txt += `🧴 *kelembapan :* *${wdata.data.main.humidity}*\n`
            mapple_txt += `🛳️ *Garis Bujur :* *${wdata.data.coord.lat}*\n`
            mapple_txt += `🌏 *Negara :* *${wdata.data.sys.country}*\n`

           MappleCore.sendMessage(
                m.chat, {
                    text: mapple_txt,
                }, {
                    quoted: m,
                }
           )
           }
           break

case 'imdb':
if (!text) return kamiyareply(`❄ *Masukan Judul Filmnya*`)
kamiyareply('❄ *Sabar Yaa*')
if (text.length > 20) return kamiyareply(`❄ *Maksimal 20 Karakter*`)
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
            let mapple_txt = ""
            console.log(fids.data)
            mapple_txt += "❄ *IMDB Search*\n"
            mapple_txt += "📖 *Judul :* *" + fids.data.Title + "*\n"
            mapple_txt += "📅 *Tahun :* *" + fids.data.Year + "*\n"
            mapple_txt += "📦 *Rilis :* *" + fids.data.Released + "*\n"
            mapple_txt += "🕒 *Durasi :* *" + fids.data.Runtime + "*\n"
            mapple_txt += "📰 *Genre :* *" + fids.data.Genre + "*\n"
            mapple_txt += "📋 *Direktur :* *" + fids.data.Director + "*\n"
            mapple_txt += "📝 *Penulis :* *" + fids.data.Writer + "*\n"
            mapple_txt += "👤 *Aktor :* *" + fids.data.Actors + "*\n"     
            mapple_txt += "💬 *Bahasa :* *" + fids.data.Language + "*\n"
            mapple_txt += "🌏 *Negara :* *" + fids.data.Country + "*\n"
            mapple_txt += "🏆 *Penghargaan :* *" + fids.data.Awards + "*\n"
            mapple_txt += "🪙 *Keuntungan :* *" + fids.data.BoxOffice + "*\n"
            mapple_txt += "🏷️ *Nilai :* *" + fids.data.imdbRating + "*\n"
            mapple_txt += "📣 *Pemungutan Suara :* *" + fids.data.imdbVotes + "*\n\n"
            mapple_txt += "📃 *Plot :*\n" + fids.data.Plot + ""
           MappleCore.sendMessage(m.chat, {
                image: {
                    url: fids.data.Poster,
                },
                caption: mapple_txt,
            }, {
                quoted: m,})
            .catch(console.error)
            break

case 'asmaulhusna': {
const t3xt = require(`./database/teks/${command}.json`)
const r4andT3xt = t3xt[Math.floor(Math.random() * t3xt.length)]
MappleCore.sendMessage(from, { text: r4andT3xt }, { quoted: m })
}
break

case 'ayatkursi': {
let mapplecap = `🎁 *Ayat Kursi*

✉️ *Arab :*
اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ

✉️ *Latin :*
*“Alloohu laa ilaaha illaa huwal hayyul qoyyuum, laa ta’khudzuhuu sinatuw walaa naum. Lahuu maa fissamaawaati wa maa fil ardli man dzal ladzii yasyfa’u ‘indahuu illaa biidznih, ya’lamu maa baina aidiihim wamaa kholfahum wa laa yuhiithuuna bisyai’im min ‘ilmihii illaa bimaa syaa’ wasi’a kursiyyuhus samaawaati wal ardlo walaa ya’uuduhuu hifdhuhumaa wahuwal ‘aliyyul ‘adhiim.”*

✉️ *Artinya:*
Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa'at di sisi Allah tanpa izin-Nya.
Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar." 
*(QS. Al Baqarah: 255)*`
MappleCore.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/afb17800d56775ad1791d.png' }, caption: mapplecap}, { quoted: m });
}

break

case 'kisahnabi':{
if (!text) return kamiyareply(`❄ *Tolong Masukkan Nama Nabi*`) 
try{
let mapple_kn = await fetchJson(`https://api.zeeoneofc.my.id/api/islam/kisahnabi?apikey=QIO8xicLNkEV43Y&nabi=${text}`)
const namanabi = mapple_kn.result.name
const kelahiran = mapple_kn.result.birth
const wafat = mapple_kn.result.death_age
const asal = mapple_kn.result.country_from
const ceritanabi = mapple_kn.result.story
var mapple_result = `❄ *Kisah Nabi*
🎁 *Nama Nabi : ${namanabi}*
🗓️ *Hari Kelahiran : ${kelahiran}*
🕒 *Wafat Pada Umur : ${wafat}*
🌏 *Asal : ${asal}*

📑 *Kisah Dari Nabi ${namanabi} :*
${ceritanabi}`
kamiyareply(mapple_result) 
} catch (error) {
    return kamiyareply(mess.error);
}
}
break

case 'play':
case 'song': {
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
if (!text) return kamiyareply(`❄ *Contoh: ${prefix + command} Boa - Duvet*`)
if (text.length > 40) return kamiyareply(`❄ *Maksimal 40 Karakter*`)
LoadCore()
let res = await yts(text)
let url = res.all;
let result = url[Math.floor(Math.random() * url.length)]
teks = `*\`≡ Playing\`*
> *Judul : ${result.title}*
> *Upload : ${result.ago}*
> *Url : ${result.url}*

*[ ◈ ] Audio Akan Dikirim Dalam 1 - 5 Menit*
`
MappleCore.sendMessage(m.chat, { image: { url: result.thumbnail },  caption: teks }, { quoted: m })
await downloadMp3(result.url)
}
break

case 'chord':{
if (!text) return kamiyareply(`❄ *Tolong Masukkan judul Lagu*`)
kamiyareply(mess.wait) 
try{
let mapple_chord = await fetchJson(`https://aemt.me/chord?query=${text}`)
const judul = mapple_chord.result.title
const chordlagu = mapple_chord.result.chord
var mapple_result = `❄ *Chord Lagu*
🎁 *Nama Lagu : ${judul}*
📑 *Chord Lagu :*\n${chordlagu}`
kamiyareply(mapple_result) 
}catch (error) {
kamiyareply(`⚠️ *Nama Lagu Tidak Ditemukan*`);
}
}
break

case 'ytmp3': case 'youtubemp3': {
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
if (!q) return kamiyareply(`❄ *Kirim Link Youtube*`)
if (!isUrl(args[0])) return kamiyareply(mess.link)
kamiyareply(mess.wait)
downloadMp3(text)
}
break

case 'yt': case 'ytmp4': {
const mapplevid = require('./lib/ytdl')
if (args.length < 1 || !isUrl(text) || !mapplevid.isYTUrl(text)) kamiyareply(`❄ *Link Youtubenya Mana?*`)
if (!isUrl(args[0])) return kamiyareply(mess.link)
const vid=await mapplevid.mp4(text)
kamiyareply(mess.wait)
const mapplecap=`🎁 *Youtube Selesai*
🕒 *Durasi : ${vid.duration} Detik*
📦 *Kualitas : ${vid.quality}*`
await MappleCore.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: mapplecap
},{quoted:m}).catch((err) => kamiyareply(mess.error))
}
break

case 'git': case 'gitclone':
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
                if (!args[0]) return kamiyareply(`Mana link nya?`)
                if (!isUrl(args[0]) && !args[0].includes('github.com')) return kamiyareply(`Link invalid!! 🤔`)
                LoadCore()
                let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
                let [, user, repo] = args[0].match(regex1) || []
                repo = repo.replace(/.git$/, '')
                let url = `https://api.github.com/repos/${user}/${repo}/zipball`
                let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
                MappleCore.sendMessage(m.chat, { document: { url: url }, fileName: filename, mimetype: 'application/zip' }, { quoted: m }).catch((err) => kamiyareply(mess.error))
            .catch(console.error)
            break

case 'tt':
case 'tiktok': {
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
if (args.length == 0) return kamiyareply(`❄ *Link Tiktoknya Mana?*`)
if (!isUrl(args[0])) return kamiyareply(mess.link)
kamiyareply(mess.wait)
let mapplecap = `🎁 *Tiktok Selesai*`
let res = await tiktok2(`${args[0]}`)
MappleCore.sendMessage(m.chat, { video: { url: res.no_watermark }, caption: mapplecap, fileName: `tiktok.mp4`, mimetype: 'video/mp4' }).then(() => {
MappleCore.sendMessage(m.chat, { audio: { url: res.music }, fileName: `tiktok.mp3`, mimetype: 'audio/mp4' })
})
}
break

case 'ttslide':
case 'tiktokslide': {
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
if (!text) return kamiyareply(`❄ *Link Tiktoknya Mana?`)
if (!isUrl(args[0])) return kamiyareply(mess.link)
kamiyareply(mess.wait)
try{
let anu = await fetchJson(`https://rest.dimasbotzz.my.id/api/downloader/tiktokSlide?url=${text}`)
for (let slide of anu.result.image) {
await sleep(1500)
await MappleCore.sendFile(m.chat, slide, ``, m)
}
await MappleCore.sendMessage(m.chat, {text: `🎁 *Tiktok Slide Selesai*`}, {quoted: m})
} catch (error) {
    return kamiyareply(mess.error);
}
}
break

case 'tiktokht':
case 'tthastag':
case 'ttsearch': {
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
			if (args.length == 0) return kamiyareply(`❄ *Contoh: ${prefix + command} Ohto Ai Edit*`)
			kamiyareply(mess.wait)
			try {
    let res = await tiktoks(`${args[0]}`)
      MappleCore.sendMessage(m.chat, { video: { url: res.no_watermark }, caption: res.title, mimetype: 'video/mp4' })
} catch (error) {
    return kamiyareply(mess.error);
  }
  }
break

case 'ig':
case 'igdl':
case 'igslide': {
    if (!text) return kamiyareply("*[ ◈ ] Link Instagramnya Mana?*")
        if (!isUrl(args[0])) return kamiyareply(mess.link)
kamiyareply(mess.wait)
try {
    res = await fetch(`https://www.guruapi.tech/api/igdlv1?url=${text}`)
} catch (error) {
    return kamiyareply(mess.error)
  }
  let api_response = await res.json()
  if (!api_response || !api_response.data) {
    return kamiyareply(`*[ ◈ ] Kayaknya Ada Yang Error*`)
  }
  const mediaArray = api_response.data;
  for (const mediaData of mediaArray) {
    const mediaType = mediaData.type
    const mediaURL = mediaData.url_download
    let mapplecap = `🎁 *Instagram Selesai*`
    if (mediaType === 'video') {
      MappleCore.sendMessage(m.chat, {video: {url: mediaURL}, caption: mapplecap}, {quoted: m})
    } else if (mediaType === 'image') {
      MappleCore.sendMessage(m.chat, { image: {url: mediaURL}, caption: mapplecap}, {quoted: m})
    }
  }
}
break
/*case 'ig':
case 'igdl': {
if (!text) return kamiyareply(`❄ *Link Instagramnya Mana?*`)
if (!isUrl(args[0])) return kamiyareply(mess.link)
kamiyareply(mess.wait)
try{   
let anu = await fetchJson(`https://aemt.me/download/igdl?url=${text}`)
let mapplecap = `🎁 *Instagram Selesai*`
MappleCore.sendMessage(m.chat, { video: { url: anu.result[0].url }, caption: mapplecap }, { quoted: m })
} catch (error) {
    return kamiyareply(mess.error)
}
}
break

case 'igslide': {
    if (!text) return kamiyareply("❄ *Link Instagramnya Mana?*")
        if (!isUrl(args[0])) return kamiyareply(mess.link)
kamiyareply(mess.wait)
try {
    res = await fetch(`https://www.guruapi.tech/api/igdlv1?url=${text}`)
} catch (error) {
    return kamiyareply(mess.error)
  }
  let api_response = await res.json()
  if (!api_response || !api_response.data) {
    return kamiyareply(`*⚠️ Kayaknya Ada Yang Error*`)
  }
  const mediaArray = api_response.data;
  for (const mediaData of mediaArray) {
    const mediaType = mediaData.type
    const mediaURL = mediaData.url_download
    let mapplecap = `🎁 *Instagram Selesai*`
    if (mediaType === 'video') {
      MappleCore.sendMessage(m.chat, {video: {url: mediaURL}, caption: mapplecap}, {quoted: m})
    } else if (mediaType === 'image') {
      MappleCore.sendMessage(m.chat, { image: {url: mediaURL}, caption: mapplecap}, {quoted: m})
    }
  }
}
break*/

case 'fb': case 'fbdl':{
if (!text) return kamiyareply(`❄ *Link Facebooknya Mana?*`)
if (!isUrl(args[0])) return kamiyareply(mess.link)
kamiyareply(mess.wait)  
try{
let anu = await fetchJson(`https://aemt.me/download/fbdown?url=${text}`)
let mapplecap = `🎁 *Facebook Selesai*`
MappleCore.sendMessage(m.chat, { video: { url: anu.result.url.urls[0].hd }, caption: mapplecap}, { quoted: m })  
} catch (error) {
    return kamiyareply(mess.error) 
}
}
break

case 'mediafire':
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
                if (!q) return kamiyareply('❄ *Link Mediafirenya Mana?*')
                if (!isUrl(args[0])) return kamiyareply(mess.link)
                kamiyareply('❄ *Sabar Yaa*')
                let mapple_dl = await fetchJson(`https://aemt.me/mediafire?link=${q}`)
                MappleCore.sendMessage(m.chat, {
                    document: {
                        url: mapple_dl.result.link
                    },
                    minetype: 'ProjectsKamiya'
                }, {
                    quoted: m
                })
                break

case 'ssweb':{
if (!q) return kamiyareply(`❄ *Contoh ${prefix+command} Link Kamu*`)
kamiyareply(mess.wait)
global.sh = q
let krt = await ssweb(global.sh)
MappleCore.sendMessage(from ,{ image: krt.result, caption: mess.success },{ quoted: m })
}
break

case 'wm': {
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
let teks = `${text}`
try {
 if (!quoted) kamiyareply `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await MappleCore.sendImageAsSticker(from, media, m, { packname: `${teks}`, author: global.author })
await fs.unlinkSync(encmedia)
}
} catch (e) {
kamiyareply(mess.error)
}
}
break

case 'pin': case 'pinterest':{
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
if (!isPrem) return kamiyareply(mess.prem)
if (!text) return kamiyareply(`❄ *Contoh ${prefix+command} Anime*`)
    if (global.db.data.users[m.sender].limit < 1) return kamiyareply('⚠️ *Limit Kamu Habis*')
                db.data.users[m.sender].limit -= 10
kamiyareply('❄ *10 Limit Digunakan*')
let anu = await pinterest(text)
let result = anu[Math.floor(Math.random() * anu.length)]
MappleCore.sendMessage(m.chat, { image: { url: result }, caption: '❄ *Selesai*'}, { quoted: m })
}
break

case 'enka':
            case 'profilgi':
            if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
			if (args.length == 0) return kamiyareply(`❄ *Contoh: ${prefix + command}* 800000001`)
            kamiyareply('❄ *Sabar Yaa*')
			global.sh = `https://enka.network/u/${args[0]}`
let krt = await ssweb(global.sh)
			axios.get(`https://enka.network/api/uid/${args[0]}?info`).then(({ data }) => {
				var caption = `❄ *Profile Genshin*\n\n  *⨠ Nickname* : *${data.playerInfo.nickname}*\n`
				caption += `  *⨠ Adventure Rank* : *${data.playerInfo.level}*\n`
				caption += `  *⨠ Signature* : *${data.playerInfo.signature}*\n`
				caption += `  *⨠ World Level* : *${data.playerInfo.worldLevel}*\n\n`
				caption += `  *⨠ Achievement* : *${data.playerInfo.finishAchievementNum}*\n`
				caption += `  *⨠ Abyss* : *Floor ${data.playerInfo.towerFloorIndex} Chamber ${data.playerInfo.towerLevelIndex}*\n\n`
				caption += `🎁 *Lebih Lengkap Cek Disini :* https://enka.network/u/${args[0]}\n`
				MappleCore.sendMessage(from ,{ image: krt.result, caption: caption },{ quoted: m })
			})
			.catch(console.error)
			break

case 'neko':
case 'waifu': {
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
let res = await fetch(`https://waifu.pics/api/sfw/${command}`)
let json = await res.json()
let cap = `*Sukses* 😋`
MappleCore.sendMessage(from, {image: { url: json.url },caption:`*Alamak* 😋`},{ quoted:m }).catch(err => {
 return('Error!')
})
}
break

case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': 
case 'kiss': case 'bite': case 'yeet': case 'bully': case 'bonk':
case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': 
case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': 
case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': 
case 'handhold':
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
 axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
MappleCore.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
break

case 'bucin': case 'dare': case 'faktaunik': case 'fml': case 'katabijak': case 'katacinta': case 'katagalau': case 'katahacker': case 'katailham': case 'katasenja': case 'katasindiran': case 'motivasi': case 'nickff': case 'pantun': case 'puisi': case 'quotesislamic': case 'quotespubg': case 'truth': {
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
const t3xt = require(`./database/teks/${command}.json`)
const r4andT3xt = t3xt[Math.floor(Math.random() * t3xt.length)]
MappleCore.sendMessage(from, { text: r4andT3xt }, { quoted: m })
}
break

case 'quotes':
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
var resi = await Quotes()
teks = `\n❄ *Author: ${resi.author}*\n`
teks = `\n🎁 *Quotes:*\n`
teks = `❄ *${resi.quotes}*\n`
kamiyareply(teks)
break

case 'quotesanime': {
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
const an1 = JSON.parse(fs.readFileSync("./data/quotesanime.json"))
const r4ndan1 = an1[Math.floor(Math.random() * an1.length)]
const tgt99 = `*❄ Random Quotes Anime*

❄ *Nama Anime : ${r4ndan1.anime}*
🍁 *Nama Character : ${r4ndan1.character}*
🍁 *Episode : ${r4ndan1.episode}*

🎁 *Quotes : ${r4ndan1.quotes}*`
MappleCore.sendMessage(from, { text: tgt99 }, { quoted: kamiya })
}
break

case 'kompasnews':
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
LoadCore()
KompasNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n❄ *Berita ${no.toString()}*\n`
teks += ` *⨠ Berita: ${i.berita}*\n`
teks += ` *⨠ Upload: ${i.berita_diupload}*\n`
teks += ` *⨠ Jenis: ${i.berita_jenis}*\n`
teks += ` *⨠ Link:* ${i.berita_url}\n`
}
teks += ""
MappleCore.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break

case 'detiknews':
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
LoadCore()
DetikNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n❄ *Berita ${no.toString()}*\n`
teks += ` *⨠ Berita: ${i.berita}*\n`
teks += ` *⨠ Upload: ${i.berita_diupload}*\n`
teks += ` *⨠ Link:* ${i.berita_url}\n`
}
teks += ""
MappleCore.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break

case 'dailynews':
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
LoadCore()
DailyNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n❄ *Berita ${no.toString()}*\n`
teks += ` *⨠ Berita: ${i.berita}*\n`
teks += ` *⨠ Link:* ${i.berita_url}\n`
}
teks += ""
MappleCore.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break

case 'inews':
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
LoadCore()
iNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n❄ *Berita ${no.toString()}*\n`
teks += ` *⨠ Berita: ${i.berita}*\n`
teks += ` *⨠ Upload: ${i.berita_diupload}*\n`
teks += ` *⨠ Jenis: ${i.berita_jenis}*\n`
teks += ` *⨠ Link:* ${i.berita_url}\n`
}
teks += ""
kamiyareply(teks) 
})
break

case 'kontan':
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
LoadCore()
KontanNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n❄ *Berita ${no.toString()}*\n`
teks += ` *⨠ Berita: ${i.berita}*\n`
teks += ` *⨠ Jenis: ${i.berita_jenis}*\n`
teks += ` *⨠ Link:* ${i.berita_url}\n`
}
teks += ""
MappleCore.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break

case 'meme':
var reis = await JalanTikusMeme()
teks = ""
teks += "❄ *Random Meme*\n\n"
teks += `🎁 *Source Meme :* ${reis}`
teks += ""
MappleCore.sendMessage(m.chat, { image : { url : reis }, caption: teks }, { quoted:m })
break

case 'tourl': {
kamiyareply(mess.wait)
let media = await MappleCore.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
kamiyareply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
kamiyareply(util.format(anu))
}
await fs.unlinkSync(media)
}
break

case 'confes':
case 'confess':
case 'menfes':
case 'menfess': {
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
if (!isCreator) return kamiyareply("⚠️ *Fitur Ini Dinonaktifkan Oleh Al Villainess*")
if (!text) return kamiyareply(`❄ *Cara Penggunaan :* \n📣 *Menfess Nomor Tujuan|Pengirim|Pesan*\n\n🎁 *Contoh : Menfes 6283829814737|Naee|Semangat Yah*`)
let nomor = q.split('|')[0] ? q.split('|')[0] : q
let mapple_nama = q.split('|')[1] ? q.split('|')[1] : q
let mapplechat = q.split('|')[2] ? q.split('|')[2] : ''
if (mapplechat.length < 1) return kamiyareply(`⚠️ *Tolong Isi Semua Data Dengan Baik*`)
let mepel_txt = `❄ *Halo Ada Menfess Nih*\n🎁 *Dari : ${mapple_nama}* \n📃 *Pesan :*\n${mapplechat}\n\n⚠️ *Menfess Ini Dikirim Oleh Bot Projects Kamiya*`
MappleCore.sendMessage(`${nomor}@s.whatsapp.net`, { caption: mepel_txt, image: {url: `https://telegra.ph/file/f76287ac4c1968857cf1e.png`}})
kamiyareply(`❄ *Sukses Mengirim Menfess*`)  
}   
break

case 'google': {
if (!isPrem) return kamiyareply(mess.prem)
if (!q) return kamiyareply(`❄ *Contoh : ${prefix + command} Cihuy Shop*`)
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `❄ *Google Search From : ${text}*\n\n`
for (let g of res) {
teks += ` *⨠ Title* : ${g.title}\n`
teks += ` *⨠ Description* : ${g.snippet}\n`
teks += ` *⨠ Link* : ${g.link}\n\n────────────────────────\n\n`
} 
kamiyareply(teks)
})
}
break

case 'jarak':{
if (!text) return kamiyareply(`❄ *Contoh: ${prefix + command} Jakarta|Bandung*`)
if (text.length > 80) return kamiyareply(`❄ *Maksimal 80 Karakter*`)    
kamiyareply(mess.wait)
let [from, to] = text.split(/[^\w\s]/g)
    if (!(from && to)) return kamiyareply (`❄ *Contoh: ${prefix + command} Jakarta|Bandung*`) 
    let data = await jarak(from, to)
    if (data.img) return MappleCore.sendMessage(m.chat, { image: data.img, caption: data.desc }, { quoted: m })
    else kamiyareply(data.desc)
}
break

case 'couple': {
if (!isPrem) return kamiyareply(mess.prem)
kamiyareply(mess.wait)
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
MappleCore.sendMessage(from, { image: { url: random.male }, caption: `🎁 *Couple Male*` }, {quoted:m})
MappleCore.sendMessage(from, { image: { url: random.female }, caption: `🎁 *Couple Female*` }, {quoted:m})
}
break

case 'getname': {
if (qtod === "true") {
namenye = await MappleCore.getName(m.quoted.sender)
kamiyareply(namenye)
} else if (qtod === "false") {
MappleCore.sendMessage(from, {text:"✉️ *Reply Orangnya*"}, {quoted:m})
}
}
break

case 'getpic': {
if (!isPrem) return kamiyareply(mess.prem)
if (qtod === "true") {
try {
pporg = await MappleCore.profilePictureUrl(m.quoted.sender, 'image')
} catch {
pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
MappleCore.sendMessage(from, { image : { url : pporg }, caption:`❄ *Selesai*` }, {quoted:m})
} else if (qtod === "false") {
try {
pporgs = await MappleCore.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
MappleCore.sendMessage(from, { image : { url : pporgs }, caption:`❄ *Selesai*` }, {quoted:m})
}
}
break



case 'setppbot': {
if (!isCreator) return kamiyareply(mess.owner)
if (!quoted) return kamiyareply(`Kirim/Balas Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return kamiyareply(`Kirim/Balas Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return kamiyareply(`Kirim/Balas Image Dengan Caption ${prefix + command}`)
var medis = await MappleCore.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `/full`) {
var { img } = await generateProfilePicture(medis)
await MappleCore.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
kamiyareply(`Sukses`)
} else {
var memeg = await MappleCore.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
kamiyareply(`Sukses`)
}
}
        break

case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (!m.isGroup) return kamiyareply(mess.group)
if (!isAdmins) return kamiyareply(mess.admin)
if (!/image/.test(mime)) kamiyareply `Kirim/Balas Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) kamiyareply `Kirim/Balas Image Dengan Caption ${prefix + command}`
let media = await MappleCore.downloadAndSaveMediaMessage(m)
await MappleCore.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
kamiyareply('done')
}
break

case 'block': {
if (!isCreator) return kamiyareply(mess.owner)
LoadCore()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await MappleCore.updateBlockStatus(users, 'block').then((res) => kamiyareply(jsonformat(res))).catch((err) => kamiyareply(jsonformat(err)))
}
break

case 'unblock': {
if (!isCreator) return kamiyareply(mess.owner)
LoadCore()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await MappleCore.updateBlockStatus(users, 'unblock').then((res) => kamiyareply(jsonformat(res))).catch((err) => kamiyareply(jsonformat(err)))
}
break

case 'stalktiktok':
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
LoadCore()
if (args.length == 0) return kamiyareply(`Contoh: ${prefix + command} bulansutena`)
axios.get(`https://api.lolhuman.xyz/api/stalktiktok/${args[0]}?apikey=haikalgans`).then(({ data }) => {
var caption = `Username : ${data.result.username}\n`
caption += `Nickname : ${data.result.nickname}\n`
caption += `Followers : ${data.result.followers}\n`
caption += `Followings : ${data.result.followings}\n`
caption += `Likes : ${data.result.likes}\n`
caption += `Video : ${data.result.video}\n`
caption += `Bio : ${data.result.bio}\n`
MappleCore.sendMessage(from, { image: { url: data.result.user_picture }, caption })
})
break

case 'afk': {
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
if (text.length > 20) return kamiyareply(`❄ *Maksimal 20 Karakter*`)    
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
kamiyareply(`❄ *${pushname} Melakukan AFK*\n⚠️ *Dengan Alasan ${text ? ': ' + text : ''}*`)
}
break

case 'listdb':
if (!isCreator) return kamiyareply(mess.owner)
mapple_user = '📦 *Database User*'
mapple_user += `\n📑 *Total : ${pengguna.length} User*`
MappleCore.sendMessage(from, { text: mapple_user.trim() }, 'extendedTextMessage', { quoted:m, contextInfo: {
				forwardingScore: 0,
				isForwarded: true,
				mentionedJid: [m.sender],
				forwardedNewsletterMessageInfo: {
					newsletterJid: '120363218375655896@newsletter',
					serverMessageId: null,
					newsletterName: '◈ sʏsᴛᴇᴍ ɴᴏᴛɪғɪᴄᴀᴛɪᴏɴs',
				}, "mentionedJid": pengguna } })
break

case 'getdb': {
if (!isCreator) return kamiyareply(mess.owner)
kamiyareply(mess.wait)
let sesi = await fs.readFileSync('./src/database.json')
MappleCore.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'database.json' }, { quoted: kamiya })
}
break

case 'getuser': {
if (!isCreator) return kamiyareply(mess.owner)
kamiyareply(mess.wait)
let sesi = await fs.readFileSync('./database/user.json')
MappleCore.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'user.json' }, { quoted: kamiya })
}
break

case 'tebak': {
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
 if (args[0] === "gambar") {
 if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) kamiyareply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan!*')
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 MappleCore.sendImage(from, result.img, `❄ *Silahkan Jawab Soal Di Atas Ini*\n\n📑 *Deskripsi :* ${result.deskripsi}\n\n🕒 *Waktu : 60s*`, m).then(() => {
 tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 MappleCore.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/89655d27ff924aee15302.jpg' }, caption: `🕒 *Waktu Habis*\n🎁 *Jawaban : ${tebakgambar[m.sender.split('@')[0]]}*\n\n📣 *Ingin Bermain Lagi? Ketik Tebak Gambar*`}, {quoted:m}) 
 delete tebakgambar[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'kata') {
 if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) kamiyareply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan!*')
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 MappleCore.sendText(from, `❄ *Silahkan Jawab Pertanyaan Berikut :*\n\n📦 *${result.soal}*\n\n🕒 *Waktu : 60s*`, m).then(() => {
 tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 MappleCore.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/89655d27ff924aee15302.jpg' }, caption: `🕒 *Waktu Habis*\n🎁 *Jawaban : ${tebakkata[m.sender.split('@')[0]]}*\n\n📣 *Ingin Bermain Lagi? Ketik Tebak Kata*` }, {quoted:m}) 
 delete tebakkata[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'kalimat') {
 if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) kamiyareply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan!*')
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 MappleCore.sendText(from, `❄ *Silahkan Jawab Pertanyaan Berikut :*\n\n📦 *Pertanyaan :* ${result.soal}\n\n🕒 *Waktu : 60s*`, m).then(() => {
 tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 MappleCore.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/89655d27ff924aee15302.jpg' }, caption:`🕒 *Waktu Habis*\n🎁 *Jawaban : ${tebakkalimat[m.sender.split('@')[0]]}*\n\n📣 *Ingin Bermain Lagi? Ketik Tebak Kalimat*`}, {quoted:m}) 
 delete tebakkalimat[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'lirik') {
 if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) kamiyareply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan!*')
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 MappleCore.sendText(from, `❄ *Ini Adalah Lirik Dari Lagu? :* \n\n📦 *${result.soal}?*\n\n🕒 *Waktu : 60s*`, m).then(() => {
 tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 MappleCore.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/89655d27ff924aee15302.jpg' }, caption: `🕒 *Waktu Habis*\n🎁 *Jawaban : ${tebaklirik[m.sender.split('@')[0]]}*\n\n📣 *Ingin Bermain Lagi? Ketik Tebak Lirik*`} , {quoted:m}) 
 delete tebaklirik[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'lontong') {
 if (caklontong.hasOwnProperty(m.sender.split('@')[0])) kamiyareply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan!*')
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 MappleCore.sendText(from, `❄ *Jawablah Pertanyaan Berikut :*\n📦 *${result.soal}*\n🕒 *Waktu : 60s*`, m).then(() => {
 caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
 })
 await sleep(60000)
 if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 MappleCore.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/89655d27ff924aee15302.jpg' }, caption:`🕒 *Waktu Habis*\n🎁 *Jawaban : ${caklontong[m.sender.split('@')[0]]}*\n\n📑 *Deskripsi : ${caklontong_desk[m.sender.split('@')[0]]}* \n\n📣 *Ingin Bermain Lagi? Ketik Tebak Lontong*`}, {quoted:m}) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
 }
 }
}
break

case 'kuismath': case 'math': {
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
 if (kuismath.hasOwnProperty(m.sender.split('@')[0])) kamiyareply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan!*')
 let { genMath, modes } = require('./src/math')
 if (!text) kamiyareply `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
 let result = await genMath(text.toLowerCase())
 MappleCore.sendText(from, `❄ *Berapa Hasil Dari : ${result.soal.toLowerCase()}*?\n\n🕒 *Waktu : ${(result.waktu / 1000).toFixed(2)} detik*`, m).then(() => {
 kuismath[m.sender.split('@')[0]] = result.jawaban
 })
 await sleep(result.waktu)
 if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 kamiyareply("🕒 *Waktu Habis*\n🎁 *Jawaban :* " + kuismath[m.sender.split('@')[0]])
 delete kuismath[m.sender.split('@')[0]]
 }
}
break

case 'ttc': case 'ttt': case 'tictactoe': {
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
 let TicTacToe = require("./lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw '⚠️ *Kamu Masih Didalam Permainan*'
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
kamiyareply('❄ *Lawan Bermain Ditemukan*')
room.o = from
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await MappleCore.sendText(room.x, str, m, { mentions: parseMention(str) } )
await MappleCore.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: from,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
kamiyareply('❄ *Menunggu Lawan Bermain*' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
this.game[room.id] = room
}
}
break

case 'del':
case 'delete':{
MappleCore.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: true,
id: m.quoted.id,
participant: m.quoted.sender
}
})
}
break
//╼━══════════⪨ Rpg ⪩══════════━╾\\
case 'cmd': {
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
await LoadCore()
let doc = await fs.readFileSync('./session/creds.json')
if(time2 < "23:59:00"){
        var ucapanMenu = 'sᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ'
        }
        if(time2 < "19:00:00"){
        var ucapanMenu = 'sᴇʟᴀᴍᴀᴛ ᴘᴇᴛᴀɴɢ'
        }
        if(time2 < "18:00:00"){
        var ucapanMenu = 'sᴇʟᴀᴍᴀᴛ sᴏʀᴇ'
        }
        if(time2 < "15:00:00"){
        var ucapanMenu = 'sᴇʟᴀᴍᴀᴛ sɪᴀɴɢ️'
        }
        if(time2 < "10:00:00"){
        var ucapanMenu = 'sᴇʟᴀᴍᴀᴛ ᴘᴀɢɪ'
        }
        if(time2 < "05:00:00"){
        var ucapanMenu = 'sᴇʟᴀᴍᴀᴛ sᴜʙᴜʜ'
        }
        if(time2 < "03:00:00"){
        var ucapanMenu = 'sᴇʟᴀᴍᴀᴛ ᴛᴇɴɢᴀʜ ᴍᴀʟᴀᴍ'
        }
 if (!m.isGroup) return kamiyareply(mess.group)
 let { version } = require('./package.json')
 let isPelin = m.sender === '62895640033302@s.whatsapp.net'
usertod = db.data.users[m.sender]
let { min, max, xp } = levelling.xpRange(usertod.level, global.multiplier)
    let anu = `*${ucapanMenu}* ${pushname}
ɪ ᴀᴍ ᴀɴ ᴀᴜᴛᴏᴍᴀᴛɪᴄ ꜱʏꜱᴛᴇᴍ (ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ), ᴡʜɪᴄʜ ᴄᴀɴ ʜᴇʟᴘ ʏᴏᴜ ᴛᴏ ᴄᴏᴍᴘʟᴇᴛᴇ ꜱᴍᴀʟʟ ᴊᴏʙꜱ ꜱᴜᴄʜ ᴀꜱ ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ᴠɪᴅᴇᴏꜱ ᴏʀ ɪᴍᴀɢᴇꜱ ᴇᴛᴄ. ᴊᴜꜱᴛ ᴠɪᴀ ᴡʜᴀᴛꜱᴀᴘᴘ.

┌ ∘  *sʜᴏᴡ ᴀʟʟ ᴍᴇɴᴜ :* .ᴀʟʟᴍᴇɴᴜ
│ ∘  *sʜᴏᴡ ᴀʙᴏᴜᴛ :* .ᴀʙᴏᴜᴛ
│ ∘  *ᴠᴇʀsɪᴏɴ :* ${version}
└ ∘  *ᴀᴜᴛʜᴏʀ :* ᴀʟ ᴠɪʟʟᴀɪɴᴇss

ᴀᴍᴄ-ᴀɪ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ʙᴇᴛᴀ ᴠᴇʀꜱɪᴏɴ`

MappleCore.sendMessage(m.chat, {
          document: doc, 
          mimetype: 'application/txt', 
          pageCount: 2023,
          fileName: `Halo ${isRegistered ? `${NamaKamu(m.sender)}` : `${pushname}`}`,
          fileLength: 1000000000000000,
          caption: Styles(anu, 1), 
          mentions: m.sender,
          contextInfo: {
				forwardingScore: 0,
				isForwarded: true,
				mentionedJid: [m.sender],
				forwardedNewsletterMessageInfo: {
					newsletterJid: '120363218375655896@newsletter',
					serverMessageId: null,
					newsletterName: '◈ sʏsᴛᴇᴍ ɴᴏᴛɪғɪᴄᴀᴛɪᴏɴs',
				},
            forwardingScore: 2023, 
            isForwarded: true,
            externalAdReply: {
              title: 'Exclusive Projects Kamiya',
              body: `Hola`,
              mediaType: 1,
              thumbnailUrl: `${global.thum}`,
              mediaUrl: 'https://instagram.com/prime_mugiwara',
              thumbnail: ``,
              sourceType: ``,
              sourceId: ``,
              sourceUrl: sig,
              containsAutoReply: true,
              renderLargerThumbnail: false,
              showAdAttribution: false,
              ctwaClid: ``,
              ref: ``
            }
          }
        }, {
          quoted: fkontak
        })      
}
break

case 'gt': case 'gtmenu': case 'menugt': {
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
if (!m.isGroup) return kamiyareply(mess.group)
if (!isRegistered) return customsend(`${noregis}`, m.sender, 'Exclusive Projects Kamiya')
let anu =`ᴊɪᴋᴀ ᴋᴀᴍᴜ ʙᴇʟᴜᴍ ᴘᴇʀɴᴀʜ ʙᴇʀᴍᴀɪɴ ᴋᴇᴛɪᴋ .ᴊᴏɪɴɢᴜᴀʀᴅɪᴀɴ ᴀɢᴀʀ ᴋᴀᴍᴜ ᴍᴀsᴜᴋ ᴋᴇ ᴅᴀᴛᴀʙᴀsᴇ ɢᴜᴀʀᴅɪᴀɴ ᴛᴀʟᴇs, ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴍᴇʟᴀᴋᴜᴋᴀɴ .ᴊᴏɪɴɢᴜᴀʀᴅɪᴀɴ ᴍᴀᴋᴀ ᴅᴀᴛᴀ ɢᴜᴀʀᴅɪᴀɴ ᴋᴀᴍᴜ ᴀᴋᴀɴ ᴅɪ ʀɪsᴇᴛ

╭── •  *「 ᴘʀᴏғɪʟᴇ ᴀʙᴏᴜᴛ 」*
│  ◦ *ɴᴀᴍᴇ:* 
│  ◦ *ɢᴜᴀʀᴅɪᴀɴ ᴘᴏɪɴᴛ:* 
╰─── •
╭── •  *「 ɪɴғᴏ 」*
│ *ɢᴏʟᴅ:* 
│ *ᴅɪᴀᴍᴏɴᴅ:* 
╰─── •
╭── •「 *ɢ ᴛ  ᴍ ᴇ ɴ ᴜ* 」
│◦ ᴊᴏɪɴɢᴜᴀʀᴅɪᴀɴ (ᴜᴘ ᴄᴏᴍɪɴɢ) 
╰──···· •

 ${global.wm}
`
MappleCore.sendMessage(m.chat, {
    video: fs.readFileSync('./data/video/gtmenu.mp4'),
    caption: anu,
    gifPlayback: true,
    contextInfo: {
				forwardingScore: 0,
				isForwarded: true,
				mentionedJid: [m.sender],
				forwardedNewsletterMessageInfo: {
					newsletterJid: '120363218375655896@newsletter',
					serverMessageId: null,
					newsletterName: '◈ sʏsᴛᴇᴍ ɴᴏᴛɪғɪᴄᴀᴛɪᴏɴs',
				},
      externalAdReply: {
        showAdAttribution: true, 
        title: `G U A R D I A N  T A L E S  M E N U`,
        body: `Save this World from the attacks of Invaders`,
        sourceUrl: sig,
        thumbnailUrl: "https://telegra.ph/file/d5729c0d326aa0886dd4c.jpg",
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
   })
}
break

case 'joinguardian': {
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
if (!m.isGroup) return kamiyareply(mess.group)
if (!isRegistered) return customsend(`${noregis}`, m.sender, 'Exclusive Projects Kamiya')	
if (isJoin) return reply(mess.joinrpg)

let monaynya = 1000
db.data.users[m.sender].money += monaynya
let anuanu = `\`𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝗝𝗼𝗶𝗻𝗶𝗻𝗴 𝗚𝘂𝗮𝗿𝗱𝗶𝗮𝗻𝘀\`

🧾 *ɪɴғᴏʀᴍᴀᴛɪᴏɴ*
_ᴜᴘ ᴄᴏᴍɪɴɢ_

🎁 *ʜᴀᴅɪᴀʜ ᴘᴇᴍᴜʟᴀ*
ᴋᴀᴍᴜ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ʙᴀʜᴀɴ ᴜɴᴛᴜᴋ ᴍᴇᴍᴜʟᴀɪ ᴘᴇᴛᴜᴀʟᴀɴɢᴀɴ ᴅɪ ᴅᴜɴɪᴀ ɪɴɪ ʙᴇʀsᴀᴍᴀ sᴀɴɢ ʟɪᴛᴛʟᴇ ᴘʀɪɴᴄᴇss ᴄᴇᴋ ᴅɪ .ʙᴀᴄᴋᴘᴀᴄᴋ`
                veri = m.sender
                if (!m.isGroup) {
                    addJoinUser(m.sender)
    MappleCore.sendMessage(m.chat, {
    text: anuanu,
    contextInfo: {
				forwardingScore: 0,
				isForwarded: true,
				mentionedJid: [m.sender],
				forwardedNewsletterMessageInfo: {
					newsletterJid: '120363218375655896@newsletter',
					serverMessageId: null,
					newsletterName: '◈ sʏsᴛᴇᴍ ɴᴏᴛɪғɪᴄᴀᴛɪᴏɴs',
				},
      externalAdReply: {
        showAdAttribution: false, 
        title: `J O I N I N G  G U A R D I A N`,
        body: `Successfully 🪺`,
        thumbnailUrl: `${ppUrl}`,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
                    
                } else {
                    addJoinUser(m.sender)
    MappleCore.sendMessage(m.chat, {
    text: anuanu,
    contextInfo: {
				forwardingScore: 0,
				isForwarded: true,
				mentionedJid: [m.sender],
				forwardedNewsletterMessageInfo: {
					newsletterJid: '120363218375655896@newsletter',
					serverMessageId: null,
					newsletterName: '◈ sʏsᴛᴇᴍ ɴᴏᴛɪғɪᴄᴀᴛɪᴏɴs',
				},
      externalAdReply: {
        showAdAttribution: false, 
        title: `J O I N I N G  G U A R D I A N`,
        body: `Successfully 🪺`,
        thumbnailUrl: `${ppUrl}`,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
                    
                    }}
		break

case 'rpg': case 'rpgmenu': case 'menurpg': {
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
if (!m.isGroup) return kamiyareply(mess.group)
if (!isRegistered) return customsend(`${noregis}`, m.sender, 'Exclusive Projects Kamiya')
let anu =`ᴊɪᴋᴀ ᴋᴀᴍᴜ ʙᴇʟᴜᴍ ᴘᴇʀɴᴀʜ ᴊᴏɪɴʀᴘɢ ᴋᴇᴛɪᴋ .ᴊᴏɪɴʀᴘɢ ᴀɢᴀʀ ᴋᴀᴍᴜ ᴍᴀsᴜᴋ ᴋᴇ ᴅᴀᴛᴀʙᴀsᴇ ʀᴘɢ, ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴍᴇʟᴀᴋᴜᴋᴀɴ .ᴊᴏɪɴʀᴘɢ ᴍᴀᴋᴀ ᴅᴀᴛᴀ ʀᴘɢ ᴋᴀᴍᴜ ᴀᴋᴀɴ ᴅɪ ʀɪsᴇᴛ

\`「 ᴀʙᴏᴜᴛ 」\`
│  ◦ *ɴᴀᴍᴇ:* ${isRegistered ? `${NamaKamu(m.sender)}` : `${pushname}`}
│  ◦ *ᴍᴏɴᴇʏ:* ${formattedMoneyZ}
╰─── •
\`「 ɪɴғᴏ 」\`
│ *Mᴏɴᴇʏ:* ${formattedMoneyZ}
│ *Gᴏʟᴅ:* ${getEmas(m.sender)}
│ *Iʀᴏɴ:* ${getBesi(m.sender)}
│ *Fɪꜱʜ:* ${getIkan(m.sender)}
│ *Dɪᴀᴍᴏɴᴅ:* ${getEmerald(sender)}
╰─── •
\`「 ʀ ᴘ ɢ 」\`
│◦ .ᴄʟᴀɪᴍ
│◦ .ᴊᴜᴀʟ
│◦ .ᴏᴘᴇɴʙᴏ
│◦ .ᴍᴀɴᴄɪɴɢ
│◦ .ᴍɪɴɪɴɢ
│◦ .ɪɴᴠ
│◦ .ʙᴇʀʙᴜʀᴜ
│◦ .ᴍᴜʟᴜɴɢ
│◦ .ᴋᴇʀᴊᴀ
│◦ .sʜᴏᴘ
│◦ .ʀᴘɢ
│◦ .ᴊᴏɪɴʀᴘɢ
│◦ .ɢᴀᴊɪᴀɴ
│◦ .ᴍᴇ
│◦ .ʜᴇᴀʟ
│◦ .ᴋᴇʀᴊᴀ
│◦ .ʟᴇᴀᴅᴇʀʙᴏᴀʀᴅ
│◦ .ɴᴇʙᴀɴɢ
│◦ .ᴄᴏᴏᴋ (ᴍᴇᴍᴀsᴀᴋ) 
│◦ .ᴍᴀᴋᴀɴᴀɴ (ᴄᴇᴋ ᴍᴀᴋᴀɴᴀɴ ᴋᴀᴍᴜ) 
│◦ .ᴍᴀᴋᴀɴ (ᴀɢᴀʀ ʙᴀʀ ᴍᴇɴɪɴɢᴋᴀᴛ) 
│◦ .ᴛɪᴅᴜʀ (ᴀɢᴀʀ ᴋᴀᴍᴜ ᴘᴜʟɪʜ) 
│◦ .ᴘᴇʀᴛᴀɴɪᴀɴ (ᴄᴇᴋ ᴘᴇʀᴛᴀɴɪᴀɴ ᴋᴀᴍᴜ) 
│◦ .ᴛғ (ᴛʀᴀɴsᴀᴋsɪ) 
│◦ .ʙᴇʀᴛᴀʀᴜɴɢ @tag
│◦ .sᴘɪɴ <ᴊᴜᴍʟᴀʜ>
│◦ .sʟᴏᴛ <ᴊᴜᴍʟᴀʜ>
│◦ .ᴍᴇᴍʙᴜɴᴜʜ @tag
│◦ .ʙᴀɴsᴏs <ᴛᴀɢ ғʀɪᴇɴᴅ>
│◦ .ᴘᴇᴛᴜᴀʟᴀɴɢ
│◦ .ɴɢᴏᴊᴇᴋ
│◦ .ᴅᴜɴɢᴇᴏɴ
│◦ .ɴɢᴇᴡᴇ
│◦ .ᴍʏᴅᴏᴍᴘᴇᴛ
│◦ .ɢᴀᴄʜᴀ
╰──···· •

 ${global.wm}
`
MappleCore.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
				forwardingScore: 0,
				isForwarded: true,
				mentionedJid: [m.sender],
				forwardedNewsletterMessageInfo: {
					newsletterJid: '120363218375655896@newsletter',
					serverMessageId: null,
					newsletterName: '◈ sʏsᴛᴇᴍ ɴᴏᴛɪғɪᴄᴀᴛɪᴏɴs',
				},
      externalAdReply: {
        showAdAttribution: false,
        title: `R P G  M E N U`,
        body: `play and happy`,
        sourceUrl: sig,
        thumbnailUrl: "https://telegra.ph/file/68b486d8d932679ffafd9.jpg",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
}
break
case 'joinrpg': {
if (isBan) return kamiyareply('⚠️ *Kamu Di Ban Owner*')
if (!m.isGroup) return kamiyareply(mess.group)
if (!isRegistered) return customsend(`${noregis}`, m.sender, 'Exclusive Projects Kamiya')	
if (isJoin) return reply(mess.joinrpg)

let monaynya = 1000
db.data.users[m.sender].money += monaynya
let anuanu = `*Successfully Joining Rpg*

🧾 *Information / Rules*
tidak boleh curang saat memainkan game, jika ada bug laporkan ke own/mod 

🎁 *Reward*
kamu mendapatkan bahan untuk memulai rpg cek di .inv`
                veri = m.sender
                if (!m.isGroup) {
                    addJoinUser(m.sender)
    MappleCore.sendMessage(m.chat, {
    text: anuanu,
    contextInfo: {
				forwardingScore: 0,
				isForwarded: true,
				mentionedJid: [m.sender],
				forwardedNewsletterMessageInfo: {
					newsletterJid: '120363218375655896@newsletter',
					serverMessageId: null,
					newsletterName: '◈ sʏsᴛᴇᴍ ɴᴏᴛɪғɪᴄᴀᴛɪᴏɴs',
				},
      externalAdReply: {
        showAdAttribution: false, 
        title: `J O I N I N G  R P G`,
        body: `Successfully 🪺`,
        thumbnailUrl: `${ppUrl}`,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
                    
                } else {
                    addJoinUser(m.sender)
    MappleCore.sendMessage(m.chat, {
    text: anuanu,
    contextInfo: {
				forwardingScore: 0,
				isForwarded: true,
				mentionedJid: [m.sender],
				forwardedNewsletterMessageInfo: {
					newsletterJid: '120363218375655896@newsletter',
					serverMessageId: null,
					newsletterName: '◈ sʏsᴛᴇᴍ ɴᴏᴛɪғɪᴄᴀᴛɪᴏɴs',
				},
      externalAdReply: {
        showAdAttribution: false, 
        title: `J O I N I N G  R P G`,
        body: `Successfully 🪺`,
        thumbnailUrl: pplu,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
                    
                    }}
		break
//╼━══════════⪨ Batas Rpg ⪩══════════━╾\\
        
    case 'ch': {
    if (!text) return kamiyareply("❄️ Mana Pesan nya?");
    
    // Daftar grup komunitas WhatsApp
    let communityNumbers = [
        '120363218375655896@newsletter', // ganti dengan ID grup komunitas 
        // tambahkan nomor lainnya sesuai kebutuhan
    ];

    let teks = `${text}`;
    
    // Kirim pesan ke setiap nomor atau grup komunitas
    for (let number of communityNumbers) {
        kamiyareply(number, m.quoted ? teks + m.quoted.text : teks, m, {
            contextInfo: {
                mentionedJid: ["6282375310984@s.whatsapp.net", m.sender]
            }
        });
    }

    kamiyareply(`*\`◈ Request Terkirim\`*`);
}
break
    case 'sendgc': {
        let moment = require('moment-timezone');
    //if (MappleCore.user.jid) return;

    // Pastikan untuk mengganti dengan ID grup yang dituju
    const groupId = '120363184607506575@g.us'; // Ganti dengan ID grup yang diinginkan

    /*const fcon = {
        key: {
            participant: `0@s.whatsapp.net`,
            ...(m.chat ? { remoteJid: `status@broadcast` } : {})
        },
        message: {
            'contactMessage': {
                'displayName': `© Projects Kamiya V5 | Exc`,
            }
        }
    };*/

    //let pesan = text;
    if (!text) return kamiyareply('❄️ Mana pesan nya?');

    await kamiyareply(groupId, `${text}`, kamiya, {
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: 'Pesan Dari Owner', 
                thumbnailUrl: 'https://telegra.ph/file/492877da688a99c4302f2.jpg', 
                mediaType: 1,
                renderLargerThumbnail: false
            }
        }
    });

    kamiyareply(`*❄️ Berhasil Mengirim Pesan ke Grup ${groupId}*`);
    }
break
        
default:


if (prefix && command) {
const didyoumean = require('didyoumean');
const similarity = require('similarity');
let caseNames = getCaseNames();


function getCaseNames() {
    
const fs = require('fs');
    try {
        const data = fs.readFileSync('./Generator.js', 'utf8');
        const casePattern = /case\s+'([^']+)'/g;
        const matches = data.match(casePattern);

        if (matches) {
            const caseNames = matches.map(match => match.replace(/case\s+'([^']+)'/, '$1'));
            return caseNames;
        } else {
            return [];
        }
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        return [];
    }
}

let noPrefix = m.text.replace(prefix, '').trim();
    
    let mean = didyoumean(noPrefix, caseNames);
    let sim = similarity(noPrefix, mean);
    let similarityPercentage = parseInt(sim * 100);

    if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
      let response = Styles(`Maaf, command yang Anda masukkan salah. Berikut adalah command yang mungkin sesuai:\n\n➠  *${prefix + mean}*\n➠  *Kemiripan:* ${similarityPercentage}%`, 1);

m.reply(response)
 }
 }
if (isCmd && budy.toLowerCase() != undefined) {
if (m.isBaileys) return
if (from.endsWith('broadcast')) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
MappleCore.copyNForward(from, msgs[budy.toLowerCase()], true)}}
} catch (err) {
console.log(util.format(err))
let e = String(err)
MappleCore.sendMessage('6282375310984' + "@s.whatsapp.net", { text: `*[ ◈ ] Ada Yang Error Nih! Di Bagian :* ` + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
}}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
