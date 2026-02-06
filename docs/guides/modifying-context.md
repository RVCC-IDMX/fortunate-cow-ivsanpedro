# Modifying context: Your AI laboratory

The `.github/copilot-instructions.md` file tells Copilot about you and your project. In this assignment, you'll experiment with adding your own instructions to see how they affect Copilot's responses.

## What is context?

When Copilot helps you, it reads the `copilot-instructions.md` file to understand:

- Your skill level
- What concepts you know
- How you want help delivered

This is called **context** — information that shapes how Copilot responds.

## Your experiment

### Step 1: Read the current file

Open `.github/copilot-instructions.md`. You'll see:

```markdown
# Copilot instructions for Week 3: Fortunate Cow

You are helping a JavaScript beginner (~3 weeks experience)...

## Your instructions

Add your own instructions below this line (as many as you want to experiment with):
```

### Step 2: Add your own instruction(s)

At the bottom of the file, add one or more instructions. Here are some ideas:

**Code style instructions:**

- "Always use arrow functions"
- "Use template literals instead of string concatenation"
- "Declare all variables at the top of the file"

**Comment instructions:**

- "Add a comment above each variable explaining its purpose"
- "Include a brief comment for each if/else branch"
- "Add console.log statements to help me understand what's happening"

**Explanation style instructions:**

- "Explain your reasoning before showing code"
- "Show me alternatives and explain trade-offs"
- "Use analogies to explain new concepts"

**Learning-focused instructions:**

- "After showing code, quiz me with a question about it"
- "Point out which parts use concepts I'm still learning"
- "Suggest what I should try next to deepen my understanding"

### Step 3: Test with a prompt

After saving your instruction(s), ask Agent to help with something:

> "Add a time-based greeting to my script"

Or:

> "Refactor my code to use a different creature"

### Step 4: Observe

Watch how Copilot responds. Ask yourself:

- Did Copilot follow my instruction?
- How is the response different from before?
- What would happen with a different instruction?

## Experiment ideas

### Try conflicting instructions

What happens if you add:

> "Keep explanations very brief"

AND:

> "Explain everything in detail"

### Try instructions about things Copilot controls

> "Always respond in a friendly, encouraging tone"
> "Use emoji in your responses"

### Try very specific instructions

> "When showing arrays, always include 5 example elements"
> "When explaining if/else, always use a weather analogy"

### Remove the beginner context

What happens if you delete the line that says you're a beginner? Does Copilot respond differently?

## What to document in your reflection

For your AI collaboration summary, note:

1. **What instruction(s) did you add?**
   - Copy the exact text you added

2. **What prompt(s) did you test with?**
   - What did you ask Agent to help with?

3. **What did you observe?**
   - Did Copilot follow your instruction?
   - How was the response different?
   - Were there any surprises?

4. **What did you learn about context?**
   - How does context shape AI behavior?
   - What makes an instruction effective?

## Connection to HAP Station 6

This experiment connects to the context engineering concepts from HAP:

- **Explicit context:** The instructions you write
- **Implicit context:** What Copilot infers from your code
- **Calculated context:** How Copilot combines everything

You're practicing being a **context engineer** — someone who shapes AI behavior through intentional context design.

## Remember

This is YOUR laboratory. There are no wrong experiments — only observations. Try things. See what happens. Be curious.
