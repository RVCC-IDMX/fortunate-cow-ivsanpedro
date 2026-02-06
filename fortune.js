// fortune.js - Fortunate Cow
import * as cowsay from "cowsay";

// YOUR FORTUNES: Replace these with your own!
// Pick a theme that interests you: motivational quotes, coding tips,
// jokes, song lyrics, advice to your future self — whatever you want.
const fortunes = [
  "Welcome to JavaScript!",
  "Arrays start at index 0",
  "Keep calm and code on",
];

// Pick a random fortune
const randomIndex = Math.floor(Math.random() * fortunes.length);
const todaysFortune = fortunes[randomIndex];

// Display the cow (or change the creature — it's your project!)
console.log(cowsay.say({ text: todaysFortune }));
