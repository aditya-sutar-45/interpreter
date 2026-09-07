import { createFileRoute } from "@tanstack/react-router"
import { Separator } from "@/components/ui/separator"

export const Route = createFileRoute("/docs/grammar-reference")({
  component: GrammarReferenceDoc,
})

const grammarEBNF = `program        = { statement }

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
DIGIT          = "0"..."9"`

const precedenceLevels = [
  {
    level: "LOWEST",
    operators: "—",
    description: "Lowest binding power; default baseline for expression parsing",
  },
  {
    level: "EQUALS",
    operators: "== , !=",
    description: "Equality and inequality comparison operators",
  },
  {
    level: "LESSGREATER",
    operators: "< , >",
    description: "Relational ordering comparison operators",
  },
  {
    level: "SUM",
    operators: "+ , -",
    description: "Additive arithmetic and string concatenation operators",
  },
  {
    level: "PRODUCT",
    operators: "* , /",
    description: "Multiplicative arithmetic operators",
  },
  {
    level: "PREFIX",
    operators: "-X , !X",
    description: "Unary prefix operators (negation and logical NOT)",
  },
  {
    level: "CALL",
    operators: "myFunction(X)",
    description: "Function call expressions with argument lists",
  },
  {
    level: "INDEX",
    operators: "array[index]",
    description: "Bracketed indexing into arrays and hash maps",
  },
]

function GrammarReferenceDoc() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="font-heading text-3xl font-bold tracking-tight">
          Grammar Reference
        </h1>
        <p className="text-sm text-muted-foreground">
          A formal and informal grammar specification for the Banana programming
          language. This reference defines the lexical structure, statements,
          and expressions recognized by the recursive descent Pratt parser.
        </p>
      </div>

      <Separator />

      {/* Notation */}
      <section className="space-y-4">
        <h2 className="font-heading text-xl font-bold">Notation Conventions</h2>
        <p className="text-sm text-muted-foreground">
          The grammar below uses an informal Extended Backus-Naur Form (EBNF) syntax:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr>
                <th className="text-left p-2 font-heading font-medium border-b border-border">
                  Symbol
                </th>
                <th className="text-left p-2 font-heading font-medium border-b border-border">
                  Meaning
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border-b border-border font-mono text-primary">
                  =
                </td>
                <td className="p-2 border-b border-border text-muted-foreground">
                  Defines the production rule
                </td>
              </tr>
              <tr>
                <td className="p-2 border-b border-border font-mono text-primary">
                  |
                </td>
                <td className="p-2 border-b border-border text-muted-foreground">
                  Alternation (choice between alternatives)
                </td>
              </tr>
              <tr>
                <td className="p-2 border-b border-border font-mono text-primary">
                  &#123; x &#125;
                </td>
                <td className="p-2 border-b border-border text-muted-foreground">
                  Repetition of x (zero or more times)
                </td>
              </tr>
              <tr>
                <td className="p-2 border-b border-border font-mono text-primary">
                  [ x ]
                </td>
                <td className="p-2 border-b border-border text-muted-foreground">
                  Optional occurrence of x (zero or one time)
                </td>
              </tr>
              <tr>
                <td className="p-2 border-b border-border font-mono text-primary">
                  ( x )
                </td>
                <td className="p-2 border-b border-border text-muted-foreground">
                  Grouping
                </td>
              </tr>
              <tr>
                <td className="p-2 border-b border-border font-mono text-primary">
                  &quot;text&quot;
                </td>
                <td className="p-2 border-b border-border text-muted-foreground">
                  Literal terminal character sequence
                </td>
              </tr>
              <tr>
                <td className="p-2 border-b border-border font-mono text-primary">
                  UPPERCASE
                </td>
                <td className="p-2 border-b border-border text-muted-foreground">
                  Lexer token terminal
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <Separator />

      {/* Grammar Block */}
      <section className="space-y-4">
        <h2 className="font-heading text-xl font-bold">Complete Grammar</h2>
        <p className="text-sm text-muted-foreground">
          The complete informal grammar definition for all Banana statements and
          expressions:
        </p>

        <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
          <code>{grammarEBNF}</code>
        </pre>
      </section>

      <Separator />

      {/* Operator Precedence */}
      <section className="space-y-4">
        <h2 className="font-heading text-xl font-bold">Operator Precedence</h2>
        <p className="text-sm text-muted-foreground">
          Banana employs Pratt parsing (top-down operator precedence) to resolve
          ambiguity in infix and prefix expressions without explicit grammar
          nesting. Precedence ascends from LOWEST to INDEX:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr>
                <th className="text-left p-2 font-heading font-medium border-b border-border">
                  Precedence Level
                </th>
                <th className="text-left p-2 font-heading font-medium border-b border-border">
                  Operators / Syntax
                </th>
                <th className="text-left p-2 font-heading font-medium border-b border-border">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {precedenceLevels.map((p) => (
                <tr key={p.level}>
                  <td className="p-2 border-b border-border font-mono font-medium text-primary">
                    {p.level}
                  </td>
                  <td className="p-2 border-b border-border font-mono text-foreground">
                    {p.operators}
                  </td>
                  <td className="p-2 border-b border-border text-muted-foreground">
                    {p.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
