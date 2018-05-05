const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let commands = new Discord.RichEmbed()
.setAuthor(bot.user.username, bot.user.avatarURL);

message.channel.send(commands);
 }

module.exports.help = {
  name: "cmds"
}
