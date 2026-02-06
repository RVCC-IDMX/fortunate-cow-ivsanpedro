# Adding features with Agent

This guide helps you work with Agent to add features to your fortune script.

## Feature options

Pick at least one — try as many as interest you!

### Different creature (Comfortable)

Change the cow to a different creature.

**What you'll learn:** cowsay options, object properties

**Prompt to try:**

> "Show me how to change the cow to a different creature in my fortune.js script"

**What Agent might suggest:**

```javascript
console.log(cowsay.say({ text: todaysFortune, f: "tux" }));
```

See [reference/cowsay-options.md](../reference/cowsay-options.md) for all available creatures.

---

### Time-based greeting (Stretching)

Show different greetings based on the time of day (morning, afternoon, evening).

**What you'll learn:** if/else with `new Date().getHours()`

**Prompt to try:**

> "I want my script to show a different greeting depending on whether it's morning, afternoon, or evening. Can you help me add that?"

**What you might get:**

```javascript
const hour = new Date().getHours();
let greeting;

if (hour < 12) {
  greeting = "Good morning!";
} else if (hour < 18) {
  greeting = "Good afternoon!";
} else {
  greeting = "Good evening!";
}
```

---

### Mood-based eyes (Stretching)

Change the cow's eyes based on a "mood" — happy, surprised, sleepy, etc.

**What you'll learn:** if/else to pick different eye strings

**Prompt to try:**

> "I want to add a mood variable that changes the cow's eyes. For example, 'happy' gives ^^ eyes, 'surprised' gives OO eyes. Can you show me how?"

**What you might get:**

```javascript
const mood = "happy";
let eyes;

if (mood === "happy") {
  eyes = "^^";
} else if (mood === "surprised") {
  eyes = "OO";
} else if (mood === "sleepy") {
  eyes = "--";
} else {
  eyes = "oo";
}

console.log(cowsay.say({ text: todaysFortune, e: eyes }));
```

---

### Weekend vs weekday fortune (Stretching)

Show different types of fortunes on weekdays versus weekends.

**What you'll learn:** if/else with `new Date().getDay()`

**Prompt to try:**

> "I want to have separate fortunes for weekdays and weekends. How can I check what day it is and pick from different fortune arrays?"

**What you might get:**

```javascript
const day = new Date().getDay();

const weekdayFortunes = ["Time to work!", "You've got this!", "Almost Friday!"];

const weekendFortunes = [
  "Enjoy your weekend!",
  "Time to relax!",
  "No deadlines today!",
];

let fortunes;
if (day === 0 || day === 6) {
  fortunes = weekendFortunes;
} else {
  fortunes = weekdayFortunes;
}
```

---

### Custom feature (Adventurous)

What would YOU like to add? Some ideas students have tried:

- Color output using chalk or colors npm package
- Read fortunes from a separate file
- Keep track of which fortunes have been shown
- Add a countdown to a specific date
- Show different creatures on different days

**How to approach:**

1. Describe your idea to Agent
2. Ask clarifying questions if the code looks complex
3. Try it even if you don't fully understand it
4. Document what you learned in your reflection

**Example prompt:**

> "I have an idea. I want to [describe your feature]. I'm a beginner and I'm still learning conditionals. Can you help me add this to my fortune.js script and explain how it works?"

---

## Tips for working with Agent

### Be specific about what you want

Instead of:

> "Make my script better"

Try:

> "I want to add a time-based greeting that says 'Good morning' before noon"

### Ask for explanations

If Agent gives you code you don't understand:

> "Can you explain what the getHours() function does?"
> "Why do we use === instead of ==?"
> "What does that if/else do step by step?"

### Test as you go

After each change:

1. Save the file
2. Run `node fortune.js`
3. Check if it works
4. If not, tell Agent what went wrong

### It's OK to not understand everything

You might get code that's beyond your current level. That's fine! Note:

- What the code does (the behavior you observe)
- Which parts you understand
- Which parts you're curious about

This is valuable learning material for your reflection.
