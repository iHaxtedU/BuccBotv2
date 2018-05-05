const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let choices = ["Im Hoping", "That This", "Is Working"];
  let cho = [];
  let tosend = cho[Math.floor(Math.random() * choices.length)];
  
  message.author.send(tosend);
}
module.exports.help = {
  name: "nonfe"
}
