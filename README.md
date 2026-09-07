# Banana — A Tree-Walking Interpreter Written in Go

A fully functional interpreter built **from scratch** in Go — no third-party dependencies. Banana features a complete pipeline from raw source code to evaluated output: **lexical analysis → parsing → AST construction → tree-walking evaluation**, all powered by a hand-written recursive descent parser with Pratt parsing for operator precedence.

> Built while following [*Writing An Interpreter In Go*](https://interpreterbook.com/) by Thorsten Ball — a hands-on deep-dive into programming language internals covering compiler design, parsing theory, and evaluation strategies.

---

## Language Features

| Category | Details |
|---|---|
| **Data Types** | Integers, Booleans, Strings, Arrays, Hash Maps |
| **Variables** | `let` bindings with lexical scoping |
| **Arithmetic** | `+`, `-`, `*`, `/` with correct precedence |
| **Comparison** | `==`, `!=`, `<`, `>` |
| **Prefix Operators** | `-` (negation), `!` (logical NOT) |
| **Control Flow** | `if` / `else` expressions (expressions, not statements!) |
| **Functions** | First-class functions with closures |
| **Strings** | String literals with concatenation (`+`) |
| **Arrays** | Array literals, index expressions, built-in operations |
| **Hash Maps** | Hash literal syntax with string, integer, and boolean keys |
| **Built-in Functions** | `len`, `head`, `tail`, `rest`, `push`, `pop`, `print` |
| **Error Handling** | Descriptive runtime error propagation |

---

## Quick Start

### Prerequisites

- [Go](https://go.dev/dl/) 1.21+ installed

### Run the REPL

```bash
git clone https://github.com/aditya-sutar-45/interpreter.git
cd interpreter
go run main.go
```

You'll see a banana ASCII art and an interactive prompt:

```
>>>> 
```

### Run the Tests

```bash
go test ./...
```

All **40 test functions** across 5 packages pass.

---

## Code Examples

### Variables & Arithmetic

```
>>>> let a = 10;
>>>> let b = a * 2 + 5;
>>>> b
25
```

### First-Class Functions & Closures

```
>>>> let newAdder = fn(x) { fn(y) { x + y }; };
>>>> let addFive = newAdder(5);
>>>> addFive(10)
15
```

### Recursive Functions

```
>>>> let fibonacci = fn(n) { if (n < 2) { n } else { fibonacci(n - 1) + fibonacci(n - 2) }; };
>>>> fibonacci(10)
55
```

### Arrays & Built-in Functions

```
>>>> let arr = [1, 2, 3, 4, 5];
>>>> len(arr)
5
>>>> head(arr)
1
>>>> tail(arr)
5
>>>> rest(arr)
[2, 3, 4, 5]
>>>> push(arr, 6)
[1, 2, 3, 4, 5, 6]
```

### Hash Maps

```
>>>> let me = {"name": "Aditya", "age": 21};
>>>> me["name"]
Aditya
```

### Strings

```
>>>> let greeting = "Hello" + " " + "World!";
>>>> greeting
Hello World!
>>>> len(greeting)
12
```

### Higher-Order Functions

```
>>>> let map = fn(arr, f) { if (len(arr) == 0) { [] } else { push(map(rest(arr), f), f(head(arr))) }; };
>>>> let double = fn(x) { x * 2 };
>>>> map([1, 2, 3], double)
[2, 4, 6]
```

---

## Architecture

The interpreter follows a classic **four-stage pipeline**, each implemented as a separate Go package:

```
Source Code -> [Lexer] -> Tokens -> [Parser] -> AST -> [Evaluator] -> Result
                                                  ^
                                             [Object System]
```

### Pipeline Overview

```
+----------------------------------------------------------+
|                    Source Code (string)                   |
+------------------------+---------------------------------+
                         |
                         v
+----------------------------------------------------------+
|  LEXER (lexer/)                                          |
|  Transforms raw source into a stream of tokens           |
|  Handles: identifiers, keywords, operators, literals,    |
|           strings, delimiters                            |
+------------------------+---------------------------------+
                         |
                         v
+----------------------------------------------------------+
|  PARSER (parser/)                                        |
|  Recursive descent parser with Pratt precedence parsing  |
|  Produces a typed Abstract Syntax Tree (AST)             |
|  Supports: prefix/infix/index/call expressions           |
+------------------------+---------------------------------+
                         |
                         v
+----------------------------------------------------------+
|  AST (ast/)                                              |
|  Typed node tree: Program -> Statements -> Expressions   |
|  16 node types: LetStatement, IfExpression,              |
|  FunctionLiteral, CallExpression, HashLiteral, etc.      |
+------------------------+---------------------------------+
                         |
                         v
+----------------------------------------------------------+
|  EVALUATOR (eval/)                                       |
|  Tree-walking evaluator with environment-based scoping   |
|  Object system: Integer, Boolean, String, Array, Hash,   |
|                 Function, Builtin, Null, Error, Return   |
+------------------------+---------------------------------+
                         |
                         v
+----------------------------------------------------------+
|  REPL (repl/)                                            |
|  Interactive Read-Eval-Print Loop                        |
|  Persistent environment across inputs                    |
+----------------------------------------------------------+
```

---

## Project Structure

```
interpreter/
├── main.go              # Entry point — launches the REPL
├── token/
│   └── token.go         # Token type definitions & keyword lookup
├── lexer/
│   ├── lexer.go         # Lexical analyzer (tokenizer)
│   └── lexer_test.go    # Lexer unit tests
├── ast/
│   ├── ast.go           # AST node interfaces & 16 node types
│   └── ast_test.go      # AST string representation tests
├── parser/
│   ├── parser.go        # Recursive descent + Pratt parser
│   └── parser_test.go   # Extensive parser test suite (960+ lines)
├── eval/
│   ├── eval.go          # Tree-walking evaluator
│   ├── builtins.go      # Built-in functions (len, head, tail, etc.)
│   └── eval_test.go     # Evaluator test suite
├── object/
│   ├── object.go        # Object system (10 object types + Hashable interface)
│   ├── environment.go   # Lexical scoping with enclosed environments
│   └── object_test.go   # Hash key consistency tests
├── repl/
│   └── repl.go          # Interactive REPL loop
└── go.mod               # Go module (zero external dependencies)
```

---

## Technical Highlights

### Pratt Parsing (Top-Down Operator Precedence)

The parser uses Vaughan Pratt's technique for expression parsing — registering **prefix** and **infix** parse functions per token type with a precedence table. This elegantly handles operator precedence and associativity without a grammar specification:

```
Precedence Levels:
  LOWEST -> EQUALS -> LESSGREATER -> SUM -> PRODUCT -> PREFIX -> CALL -> INDEX
```

### Lexical Scoping with Closures

The environment model supports **enclosed environments** — each function call creates a new scope that chains to its defining scope, enabling proper closures:

```go
// Inner environments chain to outer ones for variable resolution
func (e *Environment) Get(name string) (Object, bool) {
    obj, ok := e.store[name]
    if !ok && e.outer != nil {
        obj, ok = e.outer.Get(name)
    }
    return obj, ok
}
```

### Immutable Data Structures

Array and hash operations (`push`, `pop`, `rest`) return **new objects** rather than mutating originals — a functional programming approach that avoids shared mutable state.

### Hash Key Implementation

The hash map implementation uses FNV-64a hashing for strings and supports integers and booleans as keys through a `Hashable` interface — enabling heterogeneous key types with O(1) lookups.

### Zero Dependencies

The entire project is built with **only the Go standard library** — no parser generators, no external packages.

---

## Project Metrics

| Metric | Value |
|---|---|
| **Language** | Go |
| **Source Lines** | ~2,050 |
| **Test Lines** | ~1,750 |
| **Total Lines** | ~3,800 |
| **Test Functions** | 40 |
| **Packages** | 7 |
| **Dependencies** | 0 (stdlib only) |
| **AST Node Types** | 16 |
| **Object Types** | 10 |
| **Built-in Functions** | 7 |

---

## Concepts Demonstrated

- **Compiler Design** — Lexical analysis, tokenization, parsing, AST construction, evaluation
- **Pratt Parsing** — Top-down operator precedence parsing without a grammar specification
- **Recursive Descent Parsing** — Hand-written parser with lookahead
- **Tree-Walking Interpretation** — Direct AST evaluation without bytecode compilation
- **Lexical Scoping** — Environment chains with enclosed scopes for closures
- **Type Systems** — Object interface hierarchy with runtime type checking
- **First-Class Functions** — Functions as values, higher-order functions, closures
- **Immutable Data Patterns** — Non-destructive array/hash operations
- **Hash Table Implementation** — FNV hashing with heterogeneous key support
- **Test-Driven Development** — Comprehensive test coverage across all packages

---

## Roadmap

- [ ] Unicode/UTF-8 support in the lexer
- [ ] Multi-line REPL input
- [ ] While loops / for loops
- [ ] Float/decimal number support
- [ ] File I/O and script execution mode
- [ ] Bytecode compiler + VM (stack-based)

---

## Built While Following

This project was built while following [*Writing An Interpreter In Go*](https://interpreterbook.com/) by Thorsten Ball. The book walks through building an interpreter for the Monkey programming language from scratch — covering lexing, parsing, AST design, and evaluation. This implementation follows the book's structure while extending it with additional built-in functions and personal touches.

Also influenced by Vaughan Pratt's *"Top Down Operator Precedence"* (1973).

---

## License

This project is open source and available under the [MIT License](LICENSE).
