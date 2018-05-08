const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let commands = new Discord.RichEmbed()
.setColor("#00FF00")
.setAuthor("BuccBotv2", bot.user.avatarURL)
.addField("!ping", "Show's You The Reponse Time For The Bot.")
.addField("!contact", "Contact A User.")
.addField("!credits", "View Credits For The Bot.")
.addField("!updates", "Added Updates Command For Bot.")
.addField("!caffeine", "Use This To Learn Something Cool.");

message.channel.send(commands);
 }

module.exports.help = {
  name: "cmds"
}
