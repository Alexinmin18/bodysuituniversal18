const { toPTT } = require('../lib/converter')
const { MessageType } = require('@adiwajshing/baileys-md')

let handler = async (m, { conn, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
  if (!/video|audio/.test(mime)) throw `Responda al video o nota de voz que desea convertir a mp3 con subtítulos *${usedPrefix + command}*`
  let media = await q.download()
  let audio = await toPTT(media, 'mp4')
 
//conn.sendFile(m.chat, audio,  0,0,m,true, {ptt:true })
 conn.sendMessage(m.chat, {audio:audio}, {
    quoted: m,
    ptt: true
  })
}
handler.help = ['tomp3 (reply)']
handler.tags = ['tools']

handler.command = /^to(mp3|a(udio)?)$/i

module.exports = handler
