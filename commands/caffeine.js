const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
var answers = [
  "Ahhhh Heelll Naaaahhh",
  "Hi",
  "Why TF Did U Use This Command You Fucking Insolent, Uncurcumsized, Gay Ass Cunt. :face_palm:",
  "Ez Potato Is A Fucking Boss BTW Just Remember That!",
  "Did You Know About 38% Of American Men Are Gay"
]

var randomAnswer = answers[Math.floor(Math.random() * answers.length)];

message.channel.send(randomAnswer);
 }

module.exports.help = {
  name: "caffeine"
}
