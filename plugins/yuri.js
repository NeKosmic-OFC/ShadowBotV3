const axios = require('axios')
 let handler = async(m, { conn }) => {
let les = await axios.get('https://meme-api.herokuapp.com/gimme/yuri')
            conn.sendFile(m.chat, `${les.data.url}`, '', `${les.data.title}`, m)
  }
handler.help = ['yuri']
handler.tags = ['General']
handler.command = /^(yuri)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = false

handler.admin = true
handler.botAdmin = true

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
