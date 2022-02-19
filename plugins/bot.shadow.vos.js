let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/bot.mp3'
conn.sendFile(m.chat, vn, 'bot.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /NeKotine - bot|NeKotine - Bot|tsbb|TSBB|NeKotine - Bot|NeKotine - bot|NeKotine bot|NeKotine bot|NeKotineBot|NeKotine Bot|Hola Bot|hola bot|Hola bot|hola bot|NeKotine|NeKotineBot/
handler.command = new RegExp
module.exports = handler
