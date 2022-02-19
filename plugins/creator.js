function handler(m) {
  this.sendContact(m.chat, global.owner[0], this.getName(global.owner[0] + '@s.whatsapp.net'), m)
  this.sendContact(m.chat, '34623442554', 'NEKOTINE N1 - CREADOR - OFICIAL', m)
  this.sendContact(m.chat, '34623442554', 'NEKOTINE N2 - CREADOR - OFICIAL', m)
  this.sendContact(m.chat, '34623442554', 'NEKOTINE N3 - CREADOR - OFICIAL', m)
  }
handler.help = ['contacto']
handler.tags = ['info']
 
handler.command = /^(contacto|owner|creator|creador|propietario|dueño)$/i

module.exports = handler
