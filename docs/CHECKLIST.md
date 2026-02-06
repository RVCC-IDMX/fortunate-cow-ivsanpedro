# Assignment checklist

Use this checklist to verify your work before submitting. Every item should be checked.

---

## Project setup

- [ ] `npm install` runs without errors
- [ ] `node fortune.js` displays a random fortune
- [ ] Script runs multiple times with different fortunes appearing

## Your fortunes

- [ ] `fortune.js` contains at least 3 of your own fortunes
- [ ] Fortunes reflect a theme you chose (quotes, tips, jokes, etc.)

## Features

- [ ] At least one feature added with Agent's help
- [ ] Feature works when you run the script

## Context modification

- [ ] `.github/copilot-instructions.md` contains your custom instruction(s)
- [ ] You observed how your instruction(s) affected Agent's responses

## README

- [ ] `README.md` includes sample output from your script
- [ ] Output is displayed in a code fence

## Reflection

- [ ] `ai-collaboration-summary-template.md` is completed
- [ ] Reflection addresses what stretched you and what you learned
- [ ] Reflection describes your context modification experiment

## Git history

- [ ] Multiple commits (not just one giant commit at the end)
- [ ] Commit messages describe what changed
- [ ] All changes pushed to GitHub

---

## Quick verification

Run these commands to verify your setup:

```bash
# Should display your fortune
node fortune.js

# Run a few times to see different fortunes
node fortune.js
node fortune.js
node fortune.js
```

---

## Files to submit

Your GitHub repository should contain:

```text
your-repo/
├── .github/
│   └── copilot-instructions.md     (modified by you)
├── docs/
│   └── (pre-made tutorials and guides)
├── node_modules/                    (auto-generated)
├── ai-collaboration-summary-template.md (filled out)
├── fortune.js                       (with your fortunes and features)
├── package.json
├── package-lock.json                (auto-generated)
└── README.md                        (with sample output)
```
