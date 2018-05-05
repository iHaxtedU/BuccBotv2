const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let choices = ["Im Hoping", "That This", "Is Working"];
  let random = Math.floor(Math.random()*choices.length);
  
  message.author.send(random)
}
module.exports.help = {
  name: "nonfe"
}
