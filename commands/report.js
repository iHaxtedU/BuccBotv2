const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let user = message.mentions.members.first();
if (!user) return message.channel.send("Please Report A User");
let content = args.slice(1).join(" ");
if (!content) return message.channel.send("You Need A Reason :face_palm:");
                                          
let reportEmbed = new Discord.RichEmbed()
.setAuthor(
 }

module.exports.help = {
  name: ""
}
