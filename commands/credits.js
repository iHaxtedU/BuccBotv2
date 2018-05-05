const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let credits = new Discord.RichEmbed()
.setAuthor("BuccBotv2", bot.user.avatarURL)
.setColor("#2ef22b")
.addField("Credits", "Ez Potato#2648 Is The Creator Of The Bot");
          
 message.channel.send(credits);
 }

module.exports.help = {
  name: "credits"
}
