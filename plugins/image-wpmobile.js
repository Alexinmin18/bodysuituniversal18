const axios = require('axios')
 let handler = async(m, { conn }) => {
let les = await axios.get('https://api.xjdog.cn/Get-Image')
            conn.sendFile(m.chat, `${les.data.url}`, '', `${les.data.title}          
🐈 𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨 🐈`, m) 
  }
handler.help = ['imagenrandom']
handler.tags = ['images']
handler.command = /^(09)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
