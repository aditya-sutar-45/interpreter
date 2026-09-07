# Banana Language Reference

Banana is a **modified version of the Monkey programming language**, originally designed by Thorsten Ball in [*Writing An Interpreter In Go*](https://interpreterbook.com/). It is a dynamically typed, expression-oriented language with first-class functions, closures, and built-in data structures — interpreted via a tree-walking evaluator written entirely in Go with zero external dependencies.

This document serves as the complete language reference for Banana.

---

## Table of Contents

- [Overview](#overview)
- [Data Types](#data-types)
  - [Integers](#integers)
  - [Booleans](#booleans)
  - [Strings](#strings)
  - [Arrays](#arrays)
  - [Hash Maps](#hash-maps)
  - [Functions](#functions)
  - [Null](#null)
- [Variables](#variables)
- [Operators](#operators)
  - [Arithmetic Operators](#arithmetic-operators)
  - [Comparison Operators](#comparison-operators)
  - [Prefix Operators](#prefix-operators)
  - [String Operators](#string-operators)
  - [Operator Precedence](#operator-precedence)
- [Control Flow](#control-flow)
  - [If Expressions](#if-expressions)
  - [If-Else Expressions](#if-else-expressions)
- [Functions](#functions-1)
  - [Function Definitions](#function-definitions)
  - [Calling Functions](#calling-functions)
  - [Closures](#closures)
  - [Higher-Order Functions](#higher-order-functions)
  - [Immediately Invoked Functions](#immediately-invoked-functions)
- [Built-in Functions](#built-in-functions)
  - [len](#len)
  - [head](#head)
  - [tail](#tail)
  - [rest](#rest)
  - [push](#push)
  - [pop](#pop)
  - [print](#print)
- [Error Handling](#error-handling)
- [Keywords](#keywords)
- [REPL Usage](#repl-usage)
- [Differences from Monkey](#differences-from-monkey)
- [Grammar Reference](#grammar-reference)

---

## Overview

Banana is an **expression-oriented** language — almost everything produces a value. This includes `if`/`else` blocks, which are expressions rather than statements. The language supports:

- Dynamic typing with 7 runtime object types
- First-class and higher-order functions
- Lexical scoping with closure support
- Immutable data operations on arrays and hashes
- A REPL (Read-Eval-Print Loop) for interactive use

Banana is a modified version of the **Monkey programming language**. It retains Monkey's core syntax and semantics while extending the built-in function library with additional array operations.

---

## Data Types

Banana has 7 runtime data types.

### Integers

64-bit signed integers. Banana does not currently support floating-point numbers.

```
let x = 42;
let negative = -10;
let result = 5 + 10 * 2;    // 25
```

Integer arithmetic follows standard precedence rules (multiplication and division before addition and subtraction).

### Booleans

Two boolean values: `true` and `false`.

```
let yes = true;
let no = false;
let comparison = 10 > 5;    // true
```

Booleans are produced by comparison operators and can be used in `if` conditions. Any non-null, non-false value is considered truthy.

**Truthiness rules:**
| Value | Truthy? |
|---|---|
| `true` | Yes |
| `false` | No |
| `null` | No |
| Any integer | Yes |
| Any string | Yes |
| Any array | Yes |
| Any hash | Yes |
| Any function | Yes |

### Strings

String literals are enclosed in double quotes. They support any characters except unescaped double quotes.

```
let name = "Banana";
let greeting = "Hello, " + "World!";
let length = len("Banana");             // 6
```

Strings are immutable. The only supported operator on strings is `+` for concatenation.

### Arrays

Ordered, zero-indexed collections that can hold elements of any type, including mixed types.

```
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, fn(x) { x }];
let empty = [];
```

**Accessing elements** — use bracket notation with a zero-based index:

```
let arr = [10, 20, 30];
arr[0]        // 10
arr[1]        // 20
arr[2]        // 30
arr[3]        // null (out of bounds)
arr[-1]       // null (negative index)
```

Indexes can be any expression that evaluates to an integer:

```
let i = 1;
arr[i]        // 20
arr[1 + 1]    // 30
```

Arrays are **immutable** — all built-in operations return new arrays rather than modifying the original.

### Hash Maps

Key-value data structures. Keys can be strings, integers, or booleans. Values can be any type.

```
let person = {"name": "Aditya", "age": 21, "active": true};
```

**Accessing values** — use bracket notation with a key:

```
person["name"]       // "Aditya"
person["age"]        // 21
person["missing"]    // null
```

Keys can be variables:

```
let key = "name";
person[key]          // "Aditya"
```

**Supported key types** and their hashing:

| Key Type | Example | Hash Method |
|---|---|---|
| String | `"name"` | FNV-64a |
| Integer | `42` | Direct uint64 cast |
| Boolean | `true` | 1 for true, 0 for false |

Using an unsupported key type (e.g., a function or array) produces a runtime error.

### Functions

Functions are **first-class values** — they can be assigned to variables, passed as arguments, and returned from other functions.

```
let add = fn(a, b) { a + b };
add(2, 3)    // 5
```

See the [Functions](#functions-1) section for full details.

### Null

The absence of a value. Produced by:
- Accessing an out-of-bounds array index
- Accessing a missing hash key
- An `if` expression with no `else` when the condition is false
- Built-in functions operating on empty collections (e.g., `head([])`)

```
if (false) { 10 }    // null
[1, 2, 3][99]        // null
```

`null` is falsy and cannot be operated on arithmetically.

---

## Variables

Variables are declared with the `let` keyword. All statements must end with a semicolon.

```
let x = 10;
let name = "Banana";
let isReady = true;
let arr = [1, 2, 3];
let person = {"name": "Aditya"};
let double = fn(x) { x * 2 };
```

**Rules:**
- Variable names must start with a letter or underscore, followed by letters, digits, or underscores
- Variables are **lexically scoped** — a variable is accessible within the block where it was defined and any nested blocks
- Variables cannot be reassigned (no mutation — you bind a new variable instead)
- All `let` statements require a semicolon at the end

```
let a = 5;
let b = a;           // b is now 5
let c = a + b + 5;   // c is now 15
```

---

## Operators

### Arithmetic Operators

Operate on integers only.

| Operator | Description | Example | Result |
|---|---|---|---|
| `+` | Addition | `5 + 3` | `8` |
| `-` | Subtraction | `10 - 4` | `6` |
| `*` | Multiplication | `3 * 7` | `21` |
| `/` | Integer division | `10 / 3` | `3` |

Division is **integer division** — the result is truncated, not rounded.

### Comparison Operators

| Operator | Description | Example | Result |
|---|---|---|---|
| `==` | Equal | `5 == 5` | `true` |
| `!=` | Not equal | `5 != 3` | `true` |
| `<` | Less than | `3 < 5` | `true` |
| `>` | Greater than | `5 > 3` | `true` |

- `<` and `>` work on **integers only**
- `==` and `!=` work on integers, booleans, and strings
- Comparing mismatched types (e.g., `5 + true`) produces a **type mismatch error**

### Prefix Operators

| Operator | Description | Example | Result |
|---|---|---|---|
| `-` | Negation | `-5` | `-5` |
| `!` | Logical NOT | `!true` | `false` |

The `!` operator follows these rules:

| Input | `!input` |
|---|---|
| `true` | `false` |
| `false` | `true` |
| `null` | `true` |
| Everything else | `false` |

Double negation: `!!5` evaluates to `true` (since `5` is truthy).

### String Operators

| Operator | Description | Example | Result |
|---|---|---|---|
| `+` | Concatenation | `"foo" + "bar"` | `"foobar"` |

No other operators are supported on strings. Attempting `"a" - "b"` produces an error.

### Operator Precedence

From lowest to highest:

| Precedence | Operators | Description |
|---|---|---|
| 1 (Lowest) | — | Default |
| 2 | `==`, `!=` | Equality |
| 3 | `<`, `>` | Comparison |
| 4 | `+`, `-` | Addition / Subtraction |
| 5 | `*`, `/` | Multiplication / Division |
| 6 | `-x`, `!x` | Prefix |
| 7 | `fn()` | Function call |
| 8 (Highest) | `arr[i]` | Index |

Parentheses can be used to override precedence:

```
2 * (3 + 4)     // 14, not 10
-(5 + 5)        // -10
!(true == true) // false
```

---

## Control Flow

### If Expressions

`if` is an **expression** in Banana — it returns a value.

```
if (condition) {
    consequence
}
```

If the condition is truthy, the consequence block is evaluated and its value is returned. If the condition is falsy and there is no `else` branch, `null` is returned.

```
let x = if (10 > 5) { 42 };    // x is 42
let y = if (10 < 5) { 42 };    // y is null
```

### If-Else Expressions

```
if (condition) {
    consequence
} else {
    alternative
}
```

```
let max = if (a > b) { a } else { b };
```

Conditions follow the **truthiness rules** listed in the Booleans section. `if` expressions can be nested:

```
if (x > 10) {
    if (x > 20) {
        return "big";
    }
    return "medium";
} else {
    return "small";
}
```

---

## Functions

### Function Definitions

Functions are defined with the `fn` keyword. The last expression in the body is the implicit return value.

```
let add = fn(a, b) {
    a + b
};
```

Functions can also use explicit `return` statements:

```
let abs = fn(x) {
    if (x < 0) {
        return -x;
    }
    return x;
};
```

`return` immediately stops execution of the function and returns the given value.

### Calling Functions

```
let result = add(2, 3);    // 5
```

Functions can call other functions:

```
let add = fn(a, b) { a + b };
let sub = fn(a, b) { a - b };
let apply = fn(f, a, b) { f(a, b) };

apply(add, 5, 3)    // 8
apply(sub, 5, 3)    // 2
```

### Closures

Functions capture their enclosing environment. Inner functions can access variables from their outer scope, even after the outer function has returned.

```
let newAdder = fn(x) {
    fn(y) { x + y };
};

let addTwo = newAdder(2);
addTwo(3)      // 5
addTwo(10)     // 12
```

The inner function `fn(y) { x + y }` "closes over" the variable `x` from its parent scope.

### Higher-Order Functions

Since functions are first-class, you can build higher-order patterns:

**Map:**
```
let map = fn(arr, f) {
    if (len(arr) == 0) {
        []
    } else {
        push(map(rest(arr), f), f(head(arr)))
    }
};

let double = fn(x) { x * 2 };
map([1, 2, 3], double)    // [2, 4, 6]
```

**Reduce:**
```
let reduce = fn(arr, initial, f) {
    if (len(arr) == 0) {
        initial
    } else {
        reduce(rest(arr), f(initial, head(arr)), f)
    }
};

let sum = fn(arr) {
    reduce(arr, 0, fn(acc, x) { acc + x })
};

sum([1, 2, 3, 4, 5])    // 15
```

### Immediately Invoked Functions

Functions can be defined and called in one expression:

```
fn(x) { x * 2 }(5)    // 10
```

---

## Built-in Functions

Banana provides 7 built-in functions. All are immutable — none modify their arguments.

### len

Returns the length of a string or array.

```
len("hello")         // 5
len("")              // 0
len([1, 2, 3])       // 3
len([])              // 0
```

**Signature:** `len(value) -> Integer`

**Errors:**
- Wrong argument count: `len("a", "b")` -> `wrong number of arguments. got=2, want=1`
- Unsupported type: `len(42)` -> `argument to 'len' not supported, got INTEGER`

---

### head

Returns the **first** element of an array.

```
head([1, 2, 3])    // 1
head([42])         // 42
head([])           // null
```

**Signature:** `head(array) -> Object | null`

Does not modify the original array.

---

### tail

Returns the **last** element of an array.

```
tail([1, 2, 3])    // 3
tail([42])         // 42
tail([])           // null
```

**Signature:** `tail(array) -> Object | null`

Does not modify the original array.

---

### rest

Returns a **new array** with the first element removed.

```
rest([1, 2, 3])    // [2, 3]
rest([1, 2])       // [2]
rest([1])          // []
rest([])           // null
```

**Signature:** `rest(array) -> Array | null`

The original array is unchanged. Returns `null` for empty arrays.

---

### push

Returns a **new array** with the given element appended to the end.

```
push([1, 2, 3], 4)       // [1, 2, 3, 4]
push([], 1)              // [1]
push([1], "hello")       // [1, "hello"]
```

**Signature:** `push(array, element) -> Array`

The original array is unchanged.

---

### pop

Returns a **new array** with the last element removed.

```
pop([1, 2, 3])    // [1, 2]
pop([1])          // []
pop([])           // null
```

**Signature:** `pop(array) -> Array | null`

The original array is unchanged. Returns `null` for empty arrays.

---

### print

Prints the string representation of each argument to the console, one per line.

```
print("Hello, World!")    // prints: Hello, World!
print(42)                 // prints: 42
print([1, 2, 3])          // prints: [1, 2, 3]
```

**Signature:** `print(args...) -> null`

Always returns `null`.

---

## Error Handling

Banana produces descriptive runtime errors that halt evaluation. There is no try/catch mechanism — errors propagate up immediately.

### Common Errors

**Type mismatch** — operating on incompatible types:
```
5 + true
// ERROR: type mismatch: INTEGER + BOOLEAN
```

**Unknown operator** — unsupported operation for a type:
```
true + false
// ERROR: unknown operator: BOOLEAN + BOOLEAN

-true
// ERROR: unknown operator: -BOOLEAN

"hello" - "world"
// ERROR: unknown operator: STRING - STRING
```

**Identifier not found** — referencing an undefined variable:
```
foobar
// ERROR: identifier not found: foobar
```

**Wrong argument count** — calling a built-in with the wrong number of arguments:
```
len("a", "b")
// ERROR: wrong number of arguments. got=2, want=1
```

**Not a function** — trying to call a non-function value:
```
let x = 5;
x(10)
// ERROR: not a function: INTEGER
```

**Unusable hash key** — using a non-hashable type as a hash key:
```
{"name": "test"}[fn(x) { x }]
// ERROR: unusable as hash key: FUNCTION
```

**Index operator not supported** — indexing a non-array/hash value:
```
42[0]
// ERROR: index operator not supported: INTEGER
```

---

## Keywords

Banana has 7 reserved keywords:

| Keyword | Purpose |
|---|---|
| `let` | Variable binding |
| `fn` | Function definition |
| `if` | Conditional expression (condition) |
| `else` | Conditional expression (alternative) |
| `return` | Early return from a function |
| `true` | Boolean literal |
| `false` | Boolean literal |

These cannot be used as variable or function names.

---

## REPL Usage

Start the REPL by running:

```bash
go run main.go
```

The REPL provides a `>>>>` prompt where you can type any Banana expression or statement. The environment persists across lines, so you can define variables and reference them later:

```
>>>> let x = 10;
>>>> let y = 20;
>>>> x + y
30
>>>> let add = fn(a, b) { a + b };
>>>> add(x, y)
30
```

**Notes:**
- Each REPL input is a single line — multi-line input is not currently supported
- Parse errors are displayed inline and do not crash the REPL
- The environment is shared across all inputs in a session
- Press `Ctrl+D` (EOF) to exit the REPL

---

## Differences from Monkey

Banana is based on the Monkey programming language but includes the following modifications and extensions:

| Feature | Monkey | Banana |
|---|---|---|
| `tail` built-in | Not included | Returns the last element of an array |
| `pop` built-in | Not included | Returns a new array with the last element removed |
| `print` built-in | Not included | Prints values to the console |
| `head` built-in | Named `first` | Renamed to `head` for clarity |
| `rest` built-in | Returns all but first | Same behavior, retained from Monkey |
| REPL prompt | `>>` | `>>>>` |
| ASCII art | Monkey face | Banana |

The core language syntax (let, fn, if/else, return), data types (integers, booleans, strings, arrays, hashes), and evaluation semantics are faithful to the original Monkey specification.

---

## Grammar Reference

An informal grammar for the Banana language:

```
program        = { statement }

statement      = let_statement
               | return_statement
               | expression_statement

let_statement  = "let" IDENTIFIER "=" expression ";"

return_statement = "return" expression ";"

expression_statement = expression [ ";" ]

expression     = prefix_expression
               | infix_expression
               | if_expression
               | function_literal
               | call_expression
               | index_expression
               | identifier
               | integer_literal
               | string_literal
               | boolean_literal
               | array_literal
               | hash_literal
               | grouped_expression

prefix_expression   = ( "!" | "-" ) expression

infix_expression    = expression operator expression

operator       = "+" | "-" | "*" | "/" | "==" | "!=" | "<" | ">"

if_expression  = "if" "(" expression ")" block [ "else" block ]

block          = "{" { statement } "}"

function_literal = "fn" "(" [ parameter_list ] ")" block

parameter_list = IDENTIFIER { "," IDENTIFIER }

call_expression = expression "(" [ expression_list ] ")"

index_expression = expression "[" expression "]"

array_literal  = "[" [ expression_list ] "]"

hash_literal   = "{" [ hash_pair { "," hash_pair } ] "}"

hash_pair      = expression ":" expression

expression_list = expression { "," expression }

grouped_expression = "(" expression ")"

identifier     = LETTER { LETTER | DIGIT | "_" }

integer_literal = DIGIT { DIGIT }

string_literal = '"' { CHARACTER } '"'

boolean_literal = "true" | "false"

LETTER         = "a"..."z" | "A"..."Z" | "_"
DIGIT          = "0"..."9"
```

---

*Banana is a modified Monkey programming language, originally created by Thorsten Ball.*
