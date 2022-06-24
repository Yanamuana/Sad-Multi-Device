let handler = async (m, { conn, args, usedPrefix, command }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*💌 Nama* : Findi-Bot
*✉️ Nama RL* : Gaara
*♂️ Gender* : Laki - laki
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : 6 september
*🎨 Umur* : 22
*🧮 Kelas* : 1sd
*🧩 Hobby* : Ngocok:v,Coli:v, Remcode script bot:v
*💬 Sifat* : Idiot, Tidak Ramah, Kanjut, Prik, Pedofil
*🗺️ Tinggal* : Indo, Wonosobo,Jateng,Kepil
*❤️ Suka* : warnah pink & biru, Hanime, waifu, loli, trap, furry, kucing
*💔 Benci* : autis, anak epep, seleb

*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : @gaaraxploite
*🇫  Facebook* : Mark abdul
*🏮 Chanel Youtube* : GaaraOfc
*🐈 Github:* VarX

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler