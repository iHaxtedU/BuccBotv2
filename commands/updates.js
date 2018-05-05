const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let updates = new Discord.RichEmbed()
.setAuthor("BuccBotv2", bot.user.avatarURL)
.setColor("#2ef22b")
.addField("V1 (Official Release)", "Added !updates Command =-= Added !credits Command =-= Added Onto !cmds Command")

message.channel.send(updates);
 }

module.exports.help = {
  name: "updates"
}
