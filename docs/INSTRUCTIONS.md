# Week 3: Fortunate Cow

> **This is a safe place to experiment and feel stretched.**
>
> It's OK to get code from Agent that's beyond your current level. Challenge yourself AND your AI to see what it can teach you. Your experience is valid because it's yours.
>
> This assignment focuses on **metacognition** — thinking about how you learn. The reflection matters as much as the code.
>
> **Make it yours.** Choose fortunes that mean something to you. Try features that interest you. Add instructions that you're curious about. There's no single "right" way to complete this assignment — there's YOUR way.

---

## What you're building

A fortune-telling script that randomly displays one of your fortunes using cowsay. You'll personalize it, add features with Agent's help, and experiment with modifying `copilot-instructions.md`.

## Before you begin

- [ ] Completed Week 2 (cowsay with npm)
- [ ] VS Code with GitHub Copilot extension
- [ ] Node.js installed

## If you get stuck

| What you need    | Command                     |
| ---------------- | --------------------------- |
| Open terminal    | View → Terminal (or Ctrl+`) |
| Install packages | `npm install`               |
| Run your script  | `node fortune.js`           |

**Ask Agent for help.** Describe your problem — this is part of learning to work with AI.

---

## Part 1: Get it running

1. Clone this repository and open it in VS Code
2. Open the terminal and run `npm install`
3. Run `node fortune.js` — you should see a cow with a random fortune
4. Run it a few times to see different fortunes

**Understand the code:** Use `/explain` to understand how `Math.floor(Math.random() * fortunes.length)` works. See [tutorials/math-random.md](tutorials/math-random.md) for details.

---

## Part 2: Make it yours

Replace the starter fortunes with your own. Pick a theme: motivational quotes, coding tips, jokes, song lyrics — whatever you want.

**Minimum:** 3 fortunes. **Maximum:** None — add as many as you like.

---

## Part 3: Add features with Agent

Pick at least one feature — try as many as interest you.

| Feature             | Stretch level | What you'll learn       |
| ------------------- | ------------- | ----------------------- |
| Different creature  | Comfortable   | cowsay options          |
| Time-based greeting | Stretching    | if/else with getHours() |
| Mood-based eyes     | Stretching    | if/else to pick eyes    |
| Weekend vs weekday  | Stretching    | if/else with getDay()   |
| Your own idea       | Adventurous   | Whatever you imagine    |

**How:** Describe what you want to Agent and let it help you. Ask questions if you don't understand.

See [guides/adding-features.md](guides/adding-features.md) for prompting tips and examples.

---

## Part 4: Modify context

Open `.github/copilot-instructions.md` and add your own instruction(s) at the bottom. Examples:

- "Always use arrow functions"
- "Add a comment above each variable"
- "Explain your reasoning before showing code"

Then ask Agent for help and observe: Does it follow your instruction? How does the response change?

See [guides/modifying-context.md](guides/modifying-context.md) for experiment ideas.

---

## Part 5: Document and reflect

1. **Update README.md** with sample output from your script
2. **Complete your reflection** in `ai-collaboration-summary-template.md`

---

## Checklist

Before submitting, verify your work with [CHECKLIST.md](CHECKLIST.md).

## Resources

- [tutorials/arrays-basics.md](tutorials/arrays-basics.md) — Array reference
- [tutorials/math-random.md](tutorials/math-random.md) — Random pattern explained
- [tutorials/esm-basics.md](tutorials/esm-basics.md) — ES modules explained
- [guides/adding-features.md](guides/adding-features.md) — Feature prompting tips
- [guides/modifying-context.md](guides/modifying-context.md) — Context experiments
- [reference/cowsay-options.md](reference/cowsay-options.md) — Cowsay API

---

## Remember

> Your experience is valid because it's yours.

Take risks. Ask questions. Be curious. You've got this!
