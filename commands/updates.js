const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let updates = new Discord.RichEmbed()
.setAuthor("BuccBotv2", bot.user.avatarURL)
.setColor("#2ef22b")
.addField("V2 (Stable Release)", "Allowing Users To Now Use The Commands, Have Fun!!!)

message.channel.send(updates);
 }

module.exports.help = {
  name: "updates"
}
