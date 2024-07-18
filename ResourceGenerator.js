const fs = require('fs')
const chalk = require('chalk')
const moment = require('moment-timezone')

global.grup = 'https://whatsapp.com/channel/0029VaEvOpP35fLtqPxd4F2L'
global.ig = '-'
global.thumb = fs.readFileSync("./data/image/thumb.jpg")
global.email = 'Fake01@gmail.com'
global.region = 'Indonesia'
global.sig = 'https://instagram.com/prime_mugiwara' // Bisa Diubah

global.owner = ['6282375310984']
global.ownername = 'Al Villainess'
global.nomerowner = '6282375310984' // Bisa Diubah

global.keyopenai = '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'
global.ibeng = 'Yl4h5x9wiA'

global.domain = 'https://zerrone.mypanell.biz.id' // isi dengan domain panel lu
global.apikey = 'ptla_ttYOuuexA6LmJdZBfLiFvKoC9kmkpRs2v4VBWkHI3GU' // Isi Apikey Plta Lu
global.capikey = 'ptlc_OaOqJtPlQQW5AjvPGqCDqY5SmRp5QUzULNmoeXndff5' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location

global.botname = 'Projects Kamiya'
global.packname = 'Premium Kamiya'
global.author = `YouTube: Mugiwara Editz\nBot: 0838-2910-2407`
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'Kamiya Heart'
global.anticall = true

global.mess = {
    success: '*[ ◈ ] Selesai*',
    admin: '*[ ◈ ] Fitur Khusus Admin Group!*',
    botAdmin: '*[ ◈ ] Fitur Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group!*',
    owner: '*[ ◈ ] Fitur Khusus Owner!*',
    prem: '*[ ◈ ] Fitur Khusus Premium!*',
    group: '*[ ◈ ] Fitur Ini Hanya Bisa Digunakan Di Group Chat!*',
    wait: '*[ ◈ ] 📦 Dalam Proses*',
    error: '*[ ◈ ] Kayaknya Ada Error, Coba Lagi Di Lain Waktu*',
    link: '*[ ◈ ] Itu Bukan Link Yang Benar*',
    
    // Fitur Store & Report
    owner2: '6282375310984',
    qris: 'https://telegra.ph/file/41993d781e2d608315cc1.jpg',
    format: '🎁 *Pembayaran*\n📣 *All Payment Bisa Scan Qr Diatas*\n\n📃 *Metode Lain*\n🏷️ *Ovo : 62-*\n🏷️ *Dana : 62-*\n🏷️ *Gopay : 62-*\n\n⚠️ *Dimohon Untuk Mengirim Bukti Pembayaran*\n\n❤️ *Terimakasih*',
}

global.limitawal = {
    premium: 100000 ,
    free: 100
}

global.rpg = { // Serah Mau Diubah Apa Nggak
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.gt = { // Serah Mau Diubah Apa Nggak
   darahawal: 100,
   goldawal: 5000,
   diamondgawal: 1000,
   diamondbawal: 5,
   poinpenjagaawal: 1
}

global.multiplier = 1000

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})