var answers = [
  "Hey",
  "Howdy",
  "Hello There",
  "Wotcha",
  "Alright gov'nor"
]

var randomAnswer = answers[Math.floor(Math.random() * answers.length)];

message.author.send(randomAnswer);
