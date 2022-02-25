let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {

  let pp = './undefined.jpg'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
//    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, banned, lastclaim, registered, regTime, age, level } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let str = `
 ⎈𝐆𝐮𝐞𝐫𝐫𝐚 𝐔𝐜𝐫𝐚𝐧𝐢𝐚 𝐯𝐬 𝐑𝐮𝐬𝐢𝐚⎈
 ꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷
║➤𝐋𝐢𝐧𝐤1: https://www-mundodeportivo-com.cdn.ampproject.org/v/s/www.mundodeportivo.com/actualidad/20220225/1001755756/guerra-rusia-ucrania-directo-ultima-hora-ataque-putin-ext-pau.html?amp_js_v=a6&amp_gsa=1&facet=amp&usqp=mq331AQKKAFQArABIIACAw%3D%3D#aoh=16458184041704&referrer=https%3A%2F%2Fwww.google.com&amp_tf=De%20%251%24s&ampshare=https%3A%2F%2Fwww.mundodeportivo.com%2Factualidad%2F20220225%2F1001755756%2Fguerra-rusia-ucrania-directo-ultima-hora-ataque-putin-ext-pau.html
║➤𝐋𝐢𝐧𝐤2: https://www.lavanguardia.com/internacional/20220225/8084362/ucrania-rusia-guerra-putin-biden-noticias-ultima-hora-directo.html
║➤𝐄𝐬𝐩𝐞𝐫𝐞𝐦𝐨𝐬 𝐪𝐮𝐞 𝐞𝐬𝐭𝐨 𝐚𝐜𝐚𝐛𝐞 𝐩𝐫𝐨𝐧𝐭𝐨 7𝐰7

*_「  *_「   ͚͜͝͠ ͚͜͝͠𝐍 ͚͜͝͠ ͚͜͝͠𝐞 ͚͜͝͠ ͚͜͝͠𝐊 ͚͜͝͠ ͚͜͝͠𝐨 ͚͜͝͠ ͚͜͝͠𝐭 ͚͜͝͠ ͚͜͝͠𝐢  ͚͜͝͠𝐧 ͚͜͝͠𝐞 ͚͜͝͠- ͚͜͝͠𝐁  ͚͜͝͠𝐎𝐓͚͜͝͠  」*`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['Ultimas-Noticias']
handler.tags = ['General']
handler.command = /^(Ucrania contra Rusia|Guerra de Ucrania contra Rusia|Guerra|guerra Ucrania contra Ruasia|Ucrania VS Rusia|Últimas Noticias|Ultimas-Noticias|Guerra de Ucrania vs Rusia| Guerra de Ucrania VS Rusia|últimas noticias|ultimas noticias|Últimas Noticias|Últimas-Noticias)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
