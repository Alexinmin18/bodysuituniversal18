// SI VAS A MODIFICAR AL MENOS NO QUITES LOS CREDITOS, WEB, ENLACES, DE ESA FORMA YA ESTAS APOYANDO 
// PARA QUE SE PUEDA SEGUIR ELABORANDO EN ESTE LINDO MULTIVERSEBOT-MD 
// TAMBIEN PUEDES AGREGAR TÚ INFORMACIÓN SIN ESTAR ELIMINANDO LOS CREDITOS 
// EN CASO DE PODER COMPARTIR ESTE REPOSITORIO SE TE AGREDECE, Y GRACIAS POR INTERESARTE EN MULTIVERSEBOT-MD!! 

let handler = async (m, { conn }) => {
  
let fdoc = {
  key : {
  remoteJid: 'status@broadcast',
  participant : '0@s.whatsapp.net'
  },
  message: {
  documentMessage: {
  title: wm, 
      
                            }
                          }
                        }
m.reply(conn.sendBut(m.chat, `termux-setup-storage

pkg update && pkg upgrade

pkg install git -y

pkg install nodejs -y

pkg install ffmpeg -y

pkg install imagemagick -y

pkg install yarn

git clone https://github.com/GataNina-Li/MultiverseBot-MD

cd MultiverseBot-MD

yarn

npm install

npm update

node .`, `${wm} | ᴜꜱᴀʀ ᴇɴ ᴏʀᴅᴇɴ, ᴜɴᴏ ᴘᴏʀ ᴜɴᴏ.`, `✨ 𝗠𝗘𝗡𝗨`, '.menu', fdoc,  m ))

}
handler.help = ['codigo | code',]
handler.tags = ['info']
handler.command = /^codigo|code|código$/i
//handler.owner = false 

module.exports = handler

// MultiverseBot-MD
