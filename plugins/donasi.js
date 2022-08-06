const qrku = "https://i.ibb.co/4TWHj4Y/donasi.png"

let handler = async (m, { conn, usedPrefix }) => conn.sendButtonImg(m.chat, qrku, `
╭─「 Donasi • DANA 」
│ • AXIS [0859193578139]
│ • DANA  [0859193578139]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/62859193578139
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
