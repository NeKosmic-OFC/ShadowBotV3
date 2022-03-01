let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*Hola 👋, unete a los grupos oficiales para pasar un rato agradable usando el Bot o platicando con la familia de NeKotine - Bot*

*_➤ Grupos oficiales del Bot:_*
*_1.-_* *https://chat.whatsapp.com/FJAu5KYaawU5ty9apbdFmy*

*_2.-_* *https://chat.whatsapp.com/JJNm8HdK9yJJzkq5NlDjfW*

*_3.-_* *https://chat.whatsapp.com/Grupo-No-Creado*

*_4.-_* *https://chat.whatsapp.com/Grupo-No-Creado*

*_5.-_* *https://chat.whatsapp.com/Grupo-No-Creado*
`.trim() 

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥 NEKOTINE - BOT 🔥*', 'status@broadcast')
}
handler.command = /^(grupos|gruposofc|gruposofc)$/i

module.exports = handler
