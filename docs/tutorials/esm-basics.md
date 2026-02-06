# Understanding ES modules

The `fortune.js` script starts with this line:

```javascript
import * as cowsay from "cowsay";
```

This is an **ES module import**. Let's break down what that means.

## What are modules?

Modules are reusable pieces of code that someone else wrote. Instead of writing everything yourself, you can use code that's already been created and tested.

Think of it like LEGO bricks — you don't make each brick from scratch, you snap together pieces that already exist.

## The import statement

```javascript
import * as cowsay from "cowsay";
```

This line does three things:

1. **import** — tells JavaScript you want to use code from somewhere else
2. **\* as cowsay** — brings in everything and calls it `cowsay`
3. **from "cowsay"** — the name of the package (installed via npm)

After this line, you can use `cowsay.say()` in your code.

## Why "type": "module" in package.json?

If you look at `package.json`, you'll see:

```json
{
  "type": "module"
}
```

This tells Node.js to use the modern `import` syntax. Without it, Node.js expects the older `require()` syntax instead.

## The two styles

You might see code written two different ways:

### ES modules (what we use)

```javascript
import * as cowsay from "cowsay";
```

### CommonJS (older style)

```javascript
const cowsay = require("cowsay");
```

Both do the same thing. ES modules are the modern standard, which is why we use them.

## What \* as means

The `*` means "everything." Some packages export multiple things:

```javascript
// Get everything as one object
import * as cowsay from "cowsay";
cowsay.say({ text: "Hello" });
cowsay.think({ text: "Hmm..." });
```

Other packages let you pick specific things:

```javascript
// Get just what you need (not all packages support this)
import { say } from "cowsay";
say({ text: "Hello" });
```

For cowsay, we use `* as cowsay` because that's how the package is designed.

## Where does the package come from?

When you run `npm install`, npm downloads the cowsay package and puts it in a folder called `node_modules/`. The import statement finds it there automatically.

```text
your-project/
├── fortune.js          ← your code
├── package.json
└── node_modules/
    └── cowsay/         ← the package lives here
```

You never need to look inside `node_modules/` — npm manages it for you.

## Quick summary

| Part of the statement | What it means                  |
| --------------------- | ------------------------------ |
| `import`              | Bring in external code         |
| `* as cowsay`         | Call it "cowsay" in your code  |
| `from "cowsay"`       | The package name from npm      |
| `"type": "module"`    | Tells Node.js to use ES syntax |

## Try it yourself

In your `fortune.js`, try adding this after your import:

```javascript
console.log(cowsay);
```

Run `node fortune.js` and you'll see all the functions cowsay provides!
