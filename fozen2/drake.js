const meme = require("themememaker");
const dc = require("discord.js")
exports.run = async (client, message, args) => {
let ust = args[0]
let q = args.slice(1).join(" ");
let alt = q.split(" ").join("%20")
console.log(alt)
console.log(ust)
const db = require(`wio.db`)
db.add(`toplam2_`, 1)
let res = await meme.make("drake", ust, alt)
    console.log(res)
    const e = new dc.MessageEmbed()
    .addField("Yaptığın Meme", res.response)
    .setColor("GREEN")
    .setImage(res.response)
    message.channel.send(e)
  };