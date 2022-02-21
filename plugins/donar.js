// NO QUITES NI CAMBIES NADA DE AQUI POR FAVOR
// AGREGA TUS DATOS SI QIERES, PERO NO QUITES LOS MIOS
let handler = async m => m.reply(`
*┏ ┅ ━━━━━━━━━━━━━ ┅ ━*
*┇       「 DONAR 」*
*┣ ┅ ━━━━━━━━━━━━━ ┅ ━*
*┃ ❖ Hola persona hermosa ❤️*
*┃ 👉 Aquí tienes algunos datos*
*┃ para que puedas apoyar <3*
*┃  - Mis redes: 👇
*┃  - https://vm.tiktok.com/ZMLNSV3YV/
*┃  - Se agradecen tus donaciónes*
*┃  - CONCEPTO: Donar*
*┃  - BENEFICIARIO: ¥Alpha_ØFC¥ Creador de NeKotine-BOT*
*┃  - Aquí les dejo mi PayPal 7w7*
*┃➤ PayPal: https://www.paypal.me/NeKotine7w7*
*┃❖ Contáctame si necesitas otros*
*┃datos y para darte las gracias <3*
*┃❖ wa.me/+34623442554*
*┗ ┅ ━━━━━━━━━━━━━ ┅ ━*
`.trim()) 
//PUEDES AGREGAR TUS DATOS, PERO NO QUITES LOS QUE YA ESTÁN PUESTOS
handler.help = ['donar']
handler.tags = ['info']
handler.command = /^(dona|donar|apoyar|dardinero|apoyo)$/i

module.exports = handler
