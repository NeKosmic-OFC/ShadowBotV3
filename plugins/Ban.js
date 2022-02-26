let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {

  let pp = './Menu2.jpg'
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
⎈🅐︎🅛︎🅔︎🅡︎🅣︎🅐︎ 🅓︎🅔︎ 🅑︎🅐︎🅝︎⎈
 ꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷
╭══〘 ✯✯✯✯✯✯✯✯ 〙═╮
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ *✨𝗛ola, ${username}!!*
║➤ 𝒄𝒐𝒏𝒕𝒆𝒏𝒊𝒅𝒐 𝒆𝒙𝒑𝒍𝒊𝒄𝒊𝒕𝒐, 𝒗𝒊𝒐𝒍𝒆𝒏𝒕𝒐, 𝒔𝒆𝒙𝒖𝒂𝒍 𝒐 ║➤𝒔𝒊𝒎𝒑𝒍𝒆𝒎𝒆𝒏𝒕𝒆 𝒑𝒐𝒓 𝒑𝒆𝒅𝒊𝒓 𝒂𝒅𝒎𝒊𝒏.
║➤ 𝑬𝒔𝒕𝒂 𝒂𝒅𝒗𝒆𝒓𝒕𝒆𝒏𝒄𝒊𝒂 𝒔𝒆 𝒓𝒆𝒔𝒆𝒕𝒆𝒂𝒓𝒂 𝒅𝒆 𝒎𝒊 𝒃𝒂𝒔𝒆 𝒅𝒆 𝒅𝒂𝒕𝒐𝒔 𝒆𝒏 42 𝒉𝒐𝒓𝒂𝒔, 𝒅𝒖𝒓𝒂𝒏𝒕𝒆 𝒆𝒔𝒆 𝒑𝒆𝒓𝒊𝒐𝒅𝒐 𝒅𝒆 𝒕𝒊𝒆𝒎𝒑𝒐 𝒏𝒐 𝒐𝒃𝒕𝒆𝒏𝒈𝒂 𝒎𝒂𝒔 𝒂𝒅𝒗𝒆𝒓𝒕𝒆𝒏𝒄𝒊𝒂𝒔 𝒚 𝒄𝒐𝒎𝒑𝒐𝒓𝒕𝒆𝒄𝒆, 𝒔𝒊 𝒄𝒓𝒆𝒆𝒔 𝒒𝒖𝒆 𝒆𝒔𝒕𝒂 𝒂𝒅𝒗𝒆𝒓𝒕𝒆𝒏𝒄𝒊𝒂 𝒇𝒖𝒆 𝒖𝒏 𝒆𝒓𝒓𝒐𝒓, 𝒉𝒂𝒈𝒂𝒎𝒆𝒍𝒐 𝒔𝒂𝒃𝒆𝒓 𝒆𝒔𝒄𝒓𝒊𝒃𝒊𝒆𝒏𝒅𝒐 @𝒎𝒚 𝒏𝒊𝒄𝒌 𝒚 𝒑𝒐𝒏𝒊𝒆𝒏𝒅𝒐 (#𝒆𝒓𝒓𝒐𝒓01)
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
╰══╡✯✯✯✯✯✯✯✯╞══╯
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['ban']
handler.tags = ['General']
handler.command = /^(Vete a la mierda|gilipollas|bot de mierda|bot hdp|nadie te quiere, vete|malparido|Dame admin|dame admin|Denme admin|denme admin|quiero admin|Quiero admin)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
