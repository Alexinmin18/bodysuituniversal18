let { performance } = require('perf_hooks')

let handler = async (m, { conn }) => {

 let start = `⚡ Aumentar Velocidad`
 let boost = `${pickRandom(['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'])}%`
 let boost2 = `${pickRandom(['21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40'])}%`
 let boost3 = `${pickRandom(['41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60'])}%`
 let boost4 = `${pickRandom(['61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80'])}%`
 let boost5 = `${pickRandom(['81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100'])}%`

   await m.reply(start)
   await m.reply(boost)
   await m.reply(boost2)
   await m.reply(boost3)
   await m.reply(boost4)
   await m.reply(boost5)
   let old = performance.now()
   let neww = performance.now()
   let speed = `${neww - old}`
   let multi = `${ag}*SE AUMENTO LA VELOCIDAD*\n*HASTA* *_${speed}_* *milisegundos!*`
   let pp = 'https://i.pinimg.com/originals/64/3a/81/643a81e32e243cd07bf37a93036769f5.jpg'
   conn.sendButtonImg(m.chat, pp, multi, wm, '𝗠𝗘𝗡𝗨 𝗣𝗥𝗜𝗡𝗖𝗜𝗣𝗔𝗟 ⚡', '.menu', m)
  // conn.reply(m.chat, finish, m)
}
handler.help = ['masrapido | boost']
handler.tags = ['info']
handler.command = /^boost|refresh|masrapido/i
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
