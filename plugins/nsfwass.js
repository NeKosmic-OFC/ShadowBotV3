let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://server-api-rey.herokuapp.com/api/nsfw/ass?apikey=apirey`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '*Disfrutalo!!*', '©NeKotine - Bot', 'SIGUIENTE', `${usedPrefix + command}`, m, false)
}
handler.command = /^(nsfwass)$/i
handler.admin = true
module.exports = handler
