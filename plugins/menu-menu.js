import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = imagen1
let img = await(await fetch('https://www.paidmembershipspro.com/wp-content/uploads/2017/07/PayPal-Express.png')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
╭═✦͜͡ৡৢ╡♛⧠࿙࿈᚛𝐈𝐬𝐬𝐡𝐢𝐛𝐨𝐭𝟏᚜࿈࿚⧠♛╞ৡৢ͜͡✦═
║┊: * ⃟ ⃟  ━ೋ๑——๑ೋ━ ⃟ ⃟ *      
║◄🔰┢ৡৢ͜͡✦━◇━ீ͜ৡৢ͜͡✦┧🔰►
║┊:      ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈  
║┊:Creador:  🦉  [𝐏.𝐆] 𝖄𝖔𝖘𝖍𝖎𝖉𝖆⃞⃟⃝🇯🇵 •
║┊:Num: wa.me/+519357468512
║┊:Tiempo activo: 
║┊ *${uptime}*
║┊:Fecha: 
║┊ *${week}, ${date}*
║┊:      ┈ ┈ ┈ ┈ ┈  ┈ ┈ ┈ 
║◄🔰┢ৡৢ͜͡✦━◇━ீ͜ৡৢ͜͡✦┧🔰►
║┊: * ⃟ ⃟  ━ೋ๑——๑ೋ━ ⃟ ⃟ *      
╰═✦͜͡ৡৢ╡⧠࿙࿈᚛𝐈𝐬𝐬𝐡𝐢𝐛𝐨𝐭𝟏᚜࿈࿚⧠╞ৡৢ͜͡✦═
 ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ 
*INFO COMANDOS:*
💳: Comandos de Owner/Admins
         -
*🤖 CONVERTIRSE EN BOT: 🤖* 
_${usedPrefix}serbot_
_${usedPrefix}detener_
_${usedPrefix}bots_
         -
╭▬▬▬▬▬▬▬ *˚✯ཻ⸙ ̥•┉┉•
*_⊱✦•INFORMACION DEL BOT ℹ️_*
▋╭┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅   
▋┋ _${usedPrefix}infobot_
▋┋ _${usedPrefix}speedtest_
▋┋ _${usedPrefix}grupos_
▋┋ _${usedPrefix}grouplist_
▋┋ _${usedPrefix}owner_
▋┋ _Bot (Sin prefijo)_
▋┋ _${usedPrefix}roleplay_ 
▋┋ _${usedPrefix}enable/disable_
■█🔰█■▱▰▱▰▱█🔰█■
╭────────────────╮
*_⊱✦•JUEGOS 🎯_*
╰────────────────╯
■█🎯█■▱▰▱▰▱█🎯█■
▋┋ _${usedPrefix}mates_
▋┋ _${usedPrefix}suitpvp *<@tag>*_
▋┋ _${usedPrefix}ttt *<nombre sala>*_
▋┋ _${usedPrefix}delttt_
▋┋ _${usedPrefix}verdad_
▋┋ _${usedPrefix}reto_
▋┋ _${usedPrefix}top *<texto>*_
▋┋ _${usedPrefix}historiaromantica_
▋┋ _${usedPrefix}fraseromantica_
▋┋ _${usedPrefix}consejo_
■█🔰█■▱▰▱▰▱█🔰█■
╭────────────────╮
*_⊱✦•Herramientas ⚙️_*
╰────────────────╯
■█⚙️█■▱▰▱▰▱█⚙️█■
▋┋ _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
▋┋ _${usedPrefix}afk *<motivo>*_
▋┋ _${usedPrefix}whatmusic *<tag a un aud>*_
▋┋ _${usedPrefix}del *<tag a un msje del Bot>*_
▋┋ _${usedPrefix}styletext *<texto>*_
▋┋ _${usedPrefix}inv_
▋┋ _${usedPrefix}traducir *<texto>*_
▋┋ _${usedPrefix}calc *<operacion math>*_
▋┋ _${usedPrefix}dado_
▋┋ _${usedPrefix}morse_
■█🔰█■▱▰▱▰▱█🔰█■
╭────────────────╮
*_⊱✦•MAKER/CREAR 🖍️_*
╰────────────────╯
■█🖍️█■▱▰▱▰▱█🖍️█■
▋┋ --- *STICKER* ---
▋┋ _${usedPrefix}sticker/s *<tag a una img o vid>*_
▋┋ _${usedPrefix}attp (2,3) *<texto>*_ 
▋┋ _${usedPrefix}ttp (2,3,4,5) *<texto>*_ 
▋┋ _${usedPrefix}stickermarker *<efecto> <tag a una img>*_
▋┋ _${usedPrefix}wm *<packname> <autor>*_
▋┋ _${usedPrefix}stickerfilter *<efecto> <tag a una img>*_
▋┋ _${usedPrefix}scircle *<tag a una img>*_
▋┋ _${usedPrefix}pat_
▋┋ _${usedPrefix}slap_
▋┋ _${usedPrefix}kiss_
▋┋ --- *CONVERTIR* ---
▋┋ _${usedPrefix}toimg *<tag a un sticker>*_
▋┋ _${usedPrefix}tomp3 *<tag a un video / aud>*_
▋┋ _${usedPrefix}toptt *<tag a un vid / aud>*_
▋┋ _${usedPrefix}tts es *<texto>*_
▋┋ --- *CREADOR* ---
▋┋ _${usedPrefix}logos *<efecto> <texto>*_
▋┋ _${usedPrefix}simpcard *<@tag>*_
▋┋ _${usedPrefix}gay *<@tag>*_
▋┋ _${usedPrefix}hornycard *<@tag>*_
▋┋ _${usedPrefix}ytcomment *<texto>*_
▋┋ _${usedPrefix}phmaker *<opcion><tag a una img>*_
▋┋ _${usedPrefix}lolice *<@tag>*_
▋┋ _${usedPrefix}pixelar_
■█🔰█■▱▰▱▰▱█🔰█■
╭────────────────╮
*_⊱✦•ADMINS💳_*
╰────────────────╯
■█💳█■▱▰▱▰▱█💳█■
▋┋ _${usedPrefix}infobot_ 💳
▋┋ _${usedPrefix}grupo *<abrir / cerrar>*_ 💳
▋┋ _${usedPrefix}promote *<@tag>*_ 💳
▋┋ _${usedPrefix}demote *<@tag>*_ 💳
▋┋ _${usedPrefix}setname *<texto>*_ 💳
▋┋ _${usedPrefix}setdesc *<texto>*_ 💳
▋┋ _${usedPrefix}tagall *<texto>*_ 💳
▋┋ _${usedPrefix}hidetag *<texto>*_ 💳
▋┋ _${usedPrefix}fantasmas_ 💳
▋┋ _${usedPrefix}votar_ 💳 
■█🔰█■▰▱▰▱▰▱█🔰█■
╭────────────────╮
*_⊱✦•Efecto de Audios 🎤_*
╰────────────────╯
■█🎤█■▱▰▱▰▱█🎤█■
▋┋ _${usedPrefix}menuaudios_
▋┋ _${usedPrefix}bass_
▋┋ _${usedPrefix}blown_
▋┋ _${usedPrefix}deep_
▋┋ _${usedPrefix}earrape_
▋┋ _${usedPrefix}fast_
▋┋ _${usedPrefix}fat_
▋┋ _${usedPrefix}nightcore_
▋┋ _${usedPrefix}reverse_
▋┋ _${usedPrefix}robot_
▋┋ _${usedPrefix}slow_
▋┋ _${usedPrefix}smooth_
▋┋ _${usedPrefix}tupai_
■█🔰█■▱▰▱▰▱█🔰█■
╭────────────────╮
*_⊱✦•BUSCADORES 🔍_*
╰────────────────╯
■█🔍█■▱▰▱▰▱█🔍█■
▋┋ _${usedPrefix}stickersearch *<texto>*_
▋┋ _${usedPrefix}animeinfo *<texto>*_
▋┋ _${usedPrefix}google *<texto>*_
▋┋ _${usedPrefix}letra *<texto>*_
▋┋ _${usedPrefix}wikipedia *<texto>*_
▋┋ _${usedPrefix}ytsearch *<texto>*_
▋┋ _${usedPrefix}apkdone *<texto>*_
▋┋ _${usedPrefix}apkgoogle *<texto>*_
▋┋ _${usedPrefix}apkmody *<texto>*_
▋┋ _${usedPrefix}apkshub *<texto>*_
▋┋ _${usedPrefix}happymod *<texto>*_
▋┋ _${usedPrefix}playstore *<texto>*_
■█🔰█■▱▰▱▰▱█🔰█■
╭────────────────╮
*_⊱✦•CHAT ANONIMO 📳_*
╰────────────────╯
■█📳█■▱▰▱▰▱█📳█■
▋┋ _${usedPrefix}start_
▋┋ _${usedPrefix}next_
▋┋ _${usedPrefix}leave_
■█🔰█■▱▰▱▰▱█🔰█■
╭────────────────╮
*_⊱✦•COMANDOS HORNY🔞_*
╰────────────────╯
■█🔞█■▱▰▱▰▱■█🔞█■
▋┋ ${usedPrefix}hotmenu
■█🔰█■▱▰▱▰▱■█🔰█■
╭────────────────╮
*_⊱✦•DESCARGAS 📥_*
╰────────────────╯
■█📥█■▱▰▱▰▱■█📥█■
▋┋ _${usedPrefix}facebook *<enlace>*_
▋┋ _${usedPrefix}instagram *<enlace>*_
▋┋ _${usedPrefix}mediafire *<enlace>*_
▋┋ _${usedPrefix}stickerpack *<enlace>*_
▋┋ _${usedPrefix}gdrive *<enlace>*_
▋┋ _${usedPrefix}tiktok *<enlace>*_
▋┋ _${usedPrefix}ytmp3 *<enlace>*_
▋┋ _${usedPrefix}ytmp4 *<enlace>*_ 
▋┋ _${usedPrefix}ytmp3doc *<enlace>*_
▋┋ _${usedPrefix}ytmp4doc *<enlace>*_
▋┋ _${usedPrefix}play.1 *<texto / enlace>*_
▋┋ _${usedPrefix}play.2 *<texto / enlace>*_ 
▋┋ _${usedPrefix}play *<texto>*_ 
▋┋ _${usedPrefix}playdoc *<texto>*_
▋┋ _${usedPrefix}playlist *<texto>*_
▋┋ _${usedPrefix}playlist2 *<texto>*_
▋┋ _${usedPrefix}ringtone *<texto>*_
▋┋ _${usedPrefix}imagen *<texto>*_
▋┋ _${usedPrefix}pinteret *<texto>*_
▋┋ _${usedPrefix}wallpaper *<texto>*_
▋┋ _${usedPrefix}wallpaper2 *<texto>*_
▋┋ _${usedPrefix}pptiktok *<usuario>*_
▋┋ _${usedPrefix}igstalk *<usuario>*_
▋┋ _${usedPrefix}igstory *<usuario>*_ 
▋┋ _${usedPrefix}tiktokstalk *<usuario>*_
■█🔰█■▱▰▱▰▱█🔰█■
╭────────────────╮
*_⊱✦•RANDOM 👾_*
╰────────────────╯
■█👾█■▱▰▱▰▱█👾█■
▋┋ _${usedPrefix}menurandom_
■█🔰█■▱▰▱▰▱█🔰█■
╭────────────────╮
_➼✰︙OWNERS MENU 🎭_
╰────────────────╯
■█🎭█■▱▰▱▰▱█🎭█■
▋┋ _${usedPrefix}banchat_ 💳
▋┋ _${usedPrefix}unbanchat_ 💳
▋┋ _${usedPrefix}banuser *<@tag>*_ 💳
▋┋ _${usedPrefix}unbanuser *<@tag>*_ 💳 
▋┋ _${usedPrefix}restart_ 💳
▋┋ _${usedPrefix}msg *<texto>*_ 💳
▋┋ _${usedPrefix}addprem *<@tag>*_ 💳
▋┋ _${usedPrefix}delprem *<@tag>*_ 💳
▋┋ _${usedPrefix}listprem_ 💳 
▋┋_${usedPrefix}cmd add/del_ 💳
▋┋_${usedPrefix}cmd list_ 💳
■█🔰█■▱▰▱▰▱█🔰█■
 ┏ೋ━ೋ✧ೋ━ೋ┓
*REPORTAR FALLOS:*
_${usedPrefix}reporte *<texto>*_
*Grupo Oficial del bot:*


 ┗ೋ━ೋ✧ೋ━ೋ┛
*■█🔰█■▱▰▱▰▱█🔰█■
`.trim()
let buttons = [
{ buttonId: '#infobot', buttonText: { displayText: '🤖 INFO-BOT 🤖' }, type: 1 },
{ buttonId: '#owner', buttonText: { displayText: '🖤 OWNER 🖤' }, type: 1 }]
//{ buttonId: '#infobot', buttonText: { displayText: '🐾 𝙸𝙽𝙵𝙾𝙱𝙾𝚃 🐾' }, type: 1 }]
let buttonMessage = {
image: pp,
caption: str.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: '⧠࿙࿈᚛𝐈𝐬𝐬𝐡𝐢𝐛𝐨𝐭𝟏᚜࿈࿚⧠,
body: null,
thumbnail: img,
sourceUrl: `https://chat.whatsapp.com/L2PCWj8QQQ6HPZvmR7izIT`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
