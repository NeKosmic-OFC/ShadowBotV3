let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://server-api-rey.herokuapp.com/api/nsfw/cum?apikey=apirey`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '*Disfrutalo!!*', '©NeKotine - Bot', 'SIGUIENTE', `${usedPrefix + command}`, m, false)
}
handler.command = /^(cum|nsfwcum)$/i
handler.admin = true
module.exports = handler
