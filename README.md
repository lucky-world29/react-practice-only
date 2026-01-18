react-practice-only/
│
├── README.md
│
├── 01-react-basics/
│   ├── 01-what-is-react.md
│   ├── 02-dom-vs-virtual-dom.md
│   ├── 03-jsx.md
│   ├── 04-components.md
│   ├── 05-props.md
│   ├── 06-state.md
│   ├── 07-events.md
│   ├── 08-conditional-rendering.md
│   └── 09-lists-and-keys.md
│
├── 02-react-hooks/
│   ├── 01-hooks-introduction.md
│   ├── 02-useState.md
│   ├── 03-useEffect.md
│   ├── 04-useContext.md
│   ├── 05-useRef.md
│   ├── 06-useMemo.md
│   ├── 07-useCallback.md
│   └── 08-custom-hooks.md
│
└── .gitignore

# What is React?

React is a **JavaScript library** used to build **user interfaces**, mainly for **Single Page Applications (SPA)**.

It was created by **Facebook (Meta)**.

---

## Why React?
- Component-based architecture
- Fast rendering using Virtual DOM
- Reusable UI components
- Large community support

---

## React is NOT
- Not a framework
- Not a complete solution (needs routing, state tools)

---

## Key Features
- JSX
- Virtual DOM
- One-way data flow
- Hooks

---

## Summary
React focuses only on **UI**, making applications modular and efficient.

# DOM vs Virtual DOM

## DOM (Document Object Model)
The DOM represents the HTML page as a tree structure.

### Problems
- Slow updates
- Entire page may re-render
- Performance issues in large apps

---

## Virtual DOM
A **lightweight copy** of the real DOM maintained by React.

---

## How Virtual DOM Works
1. UI changes
2. Virtual DOM updates
3. React compares old and new Virtual DOM (diffing)
4. Only changed nodes update real DOM

---

## Benefits
- Faster UI updates
- Better performance
- Efficient rendering

---

## Comparison

| DOM | Virtual DOM |
|----|------------|
| Slow | Fast |
| Direct updates | Optimized updates |

## 01-react-basics/03-jsx.md

    # JSX (JavaScript XML)

JSX allows writing HTML inside JavaScript.

```jsx
const element = <h1>Hello React</h1>;

```
Why JSX?

Readable

Easy to write UI

Converted to JS by Babel

JSX Rules

One parent element

Use className instead of class

Expressions inside {}
```
# Example
const name = "React";
<h2>Hello {name}</h2>


---

# 📘 01-react-basics/04-components.md

```md
# React Components

Components are **reusable UI blocks**.

---

## Types

### Functional Component (Recommended)
```jsx
function Welcome() {
  return <h1>Welcome</h1>;
}

Class Component (Old)

class Welcome extends React.Component {
  render() {
    return <h1>Welcome</h1>;
  }
}

```

## Benefits

Reusability

Easy maintenance

Clean code


---

# 📘 01-react-basics/05-props.md

```md
# Props (Properties)

Props are used to **pass data from parent to child**.

```jsx
function User(props) {
  return <h2>{props.name}</h2>;
}
Rules

Props are read-only

Cannot be modified by child

Use Case

Passing data

Configuring components


---

# 📘 01-react-basics/06-state.md

```md
# State in React

State stores **component-specific data**.

```jsx
const [count, setCount] = useState(0);

State Characteristics

Mutable

Causes re-render

Local to component

Difference: Props vs State
Props	          State
Read-only	     Mutable
Parent-owned	Component-owned


---

# 📘 02-react-hooks/01-hooks-introduction.md

```md
# React Hooks

Hooks allow using React features in **functional components**.

---

## Why Hooks?
- Avoid class components
- Cleaner logic
- Reusable logic

---

## Rules of Hooks
- Call hooks at top level
- Only call hooks in React functions
```
### 02-react-hooks/02-useState.md (DEEP)

# useState Hook

Used to add state to functional components.

```jsx
const [value, setValue] = useState(initialValue);

How it Works

value → current state

setValue → update function

const [count, setCount] = useState(0);
<button onClick={() => setCount(count + 1)}>+</button>



---

# 📘 02-react-hooks/03-useEffect.md (DEEP)

```md
# useEffect Hook

Used to handle **side effects**.

---

## Side Effects
- API calls
- Timers
- DOM updates
- Subscriptions

---

## Syntax
```jsx
useEffect(() => {
  // effect
  return () => {
    // cleanup
  };
}, [dependencies]);



---

# 📘 02-react-hooks/04-useContext.md (DEEP)

```md
# useContext Hook

Used for **global state management**.

---

## Problem: Prop Drilling
Passing props through many levels.

---

## Solution: Context API

Steps:
1. Create Context
2. Provide Context
3. Consume Context

---

## Example
```jsx
const ThemeContext = createContext();

const value = useContext(ThemeContext);



---

# 📘 02-react-hooks/05-useRef.md

```md
# useRef Hook

Used to access DOM elements or persist values.

---

## Example
```jsx
const inputRef = useRef();

inputRef.current.focus();


---

# 📘 02-react-hooks/06-useMemo.md

```md
# useMemo Hook

Used for **performance optimization**.

---

## Purpose
- Memoize expensive calculations

---

## Syntax
```jsx
useMemo(() => compute(), [dependencies]);

---

# 📘 02-react-hooks/07-useCallback.md

```md
# useCallback Hook

Used to memoize functions.

---

## Why?
- Prevent unnecessary re-renders

---

## Syntax
```jsx
useCallback(() => {}, [dependencies]);

---

# 📘 02-react-hooks/08-custom-hooks.md

```md
# Custom Hooks

Custom hooks allow reusing logic.

---

## Rules
- Must start with `use`
- Can use other hooks

---

## Example
```jsx
function useCounter() {
  const [count, setCount] = useState(0);
  return { count, setCount };
}
