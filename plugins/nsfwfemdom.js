let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://server-api-rey.herokuapp.com/api/nsfw/femdom?apikey=apirey`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '*Disfrutalo!!*', '©NeKotine - Bot', 'SIGUIENTE', `${usedPrefix + command}`, m, false)
}
handler.command = /^(femdom|nsfwfemdom)$/i
handler.admin = true
module.exports = handler
