const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let commands = new Discord.RichEmbed()
.setColor("#00FF00")
.setAuthor("BuccBotv2", bot.user.avatarURL)
.addField("!ping", "Show's You The Reponse Time For The Bot.")
.addField("!contact", "Contact A User.");

message.channel.send(commands);
 }

module.exports.help = {
  name: "cmds"
}
