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
 ⎈𝐒𝐞𝐫𝐯𝐞𝐫 𝐝𝐞 𝐌𝐢𝐧𝐞𝐜𝐫𝐚𝐟𝐭⎈
 ꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷
║➤𝐍𝐨𝐦𝐛𝐫𝐞: 𝐿𝑒𝑔𝑖𝑜𝑛 𝑂𝑡𝑎𝑘𝑢
║➤𝐈𝐏:Legiónotaku12.𝐩𝐚𝐫𝐚 𝐬𝐞𝐠𝐮𝐢𝐫 𝐜𝐨𝐧𝐭𝐚𝐜𝐭𝐚 𝐜𝐨𝐧 𝐞𝐥 𝐝𝐮𝐞𝐧̃𝐨 𝐝𝐞𝐥 𝐬𝐞𝐫𝐯𝐞𝐫
║➤𝐏𝐮𝐞𝐫𝐭𝐨: 49804
║➤𝐕𝐞𝐫𝐬𝐢𝐨𝐧: 1.18.12
║➤𝐅𝐮𝐧𝐜𝐢𝐨𝐧𝐚 𝐮𝐬𝐚𝐧𝐝𝐨 𝐚𝐩𝐤.
║➤𝐍𝐮𝐦𝐞𝐫𝐨 𝐚 𝐜𝐨𝐧𝐭𝐚𝐜𝐭𝐚𝐫 𝐩𝐚𝐫𝐚 𝐮𝐧𝐢𝐫𝐭𝐞 𝐚𝐥 𝐬𝐞𝐫𝐯𝐞𝐫 wa.me//+1(561)618-0386
*_「  *_「   ͚͜͝͠ ͚͜͝͠𝐍 ͚͜͝͠ ͚͜͝͠𝐞 ͚͜͝͠ ͚͜͝͠𝐊 ͚͜͝͠ ͚͜͝͠𝐨 ͚͜͝͠ ͚͜͝͠𝐭 ͚͜͝͠ ͚͜͝͠𝐢  ͚͜͝͠𝐧 ͚͜͝͠𝐞 ͚͜͝͠- ͚͜͝͠𝐁  ͚͜͝͠𝐎𝐓͚͜͝͠ ͚͜͝͠  」_*`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['Minecraft']
handler.tags = ['General']
handler.command = /^(minecraft|Minecraft|addminecraft|addMinecraft)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
