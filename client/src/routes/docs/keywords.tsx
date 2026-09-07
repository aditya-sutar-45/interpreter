import { createFileRoute } from "@tanstack/react-router"
import { Separator } from "@/components/ui/separator"

export const Route = createFileRoute("/docs/keywords")({
  component: KeywordsDoc,
})

const keywordList = [
  {
    keyword: "let",
    purpose: "Variable binding",
    example: "let x = 10;",
    description:
      "Binds an identifier to the evaluated value of an expression in the current environment.",
  },
  {
    keyword: "fn",
    purpose: "Function definition",
    example: "let add = fn(a, b) { a + b };",
    description:
      "Constructs an anonymous, first-class function literal with optional parameters and a body block.",
  },
  {
    keyword: "if",
    purpose: "Conditional expression (condition)",
    example: "if (x > 0) { true }",
    description:
      "Initiates a conditional expression that evaluates a condition and runs the consequence block if truthy.",
  },
  {
    keyword: "else",
    purpose: "Conditional expression (alternative)",
    example: "if (x > 0) { 1 } else { 0 }",
    description:
      "Defines the alternative block executed when an if-condition evaluates to false or null.",
  },
  {
    keyword: "return",
    purpose: "Early return from a function",
    example: "return result;",
    description:
      "Wraps an expression in a ReturnValue object to exit early from a function and skip remaining statements.",
  },
  {
    keyword: "true",
    purpose: "Boolean literal",
    example: "let isActive = true;",
    description: "Represents the boolean truth value literal.",
  },
  {
    keyword: "false",
    purpose: "Boolean literal",
    example: "let isComplete = false;",
    description: "Represents the boolean falsity value literal.",
  },
]

function KeywordsDoc() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="font-heading text-3xl font-bold tracking-tight">
          Keywords
        </h1>
        <p className="text-sm text-muted-foreground">
          Banana reserves seven keywords that form the structural syntax of the
          language. Because keywords are recognized as distinct token types by
          the lexer, they cannot be used as variable names or function
          identifiers.
        </p>
      </div>

      <Separator />

      {/* Keywords Table */}
      <section className="space-y-4">
        <h2 className="font-heading text-xl font-bold">Reserved Keywords</h2>
        <p className="text-sm text-muted-foreground">
          The following 7 keywords are reserved across the entire language:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr>
                <th className="border-b border-border p-2 text-left font-heading font-medium">
                  Keyword
                </th>
                <th className="border-b border-border p-2 text-left font-heading font-medium">
                  Purpose
                </th>
                <th className="border-b border-border p-2 text-left font-heading font-medium">
                  Example Syntax
                </th>
              </tr>
            </thead>
            <tbody>
              {keywordList.map((item) => (
                <tr key={item.keyword}>
                  <td className="border-b border-border p-2 font-mono font-medium text-primary">
                    {item.keyword}
                  </td>
                  <td className="border-b border-border p-2 text-foreground">
                    {item.purpose}
                  </td>
                  <td className="border-b border-border p-2 font-mono text-muted-foreground">
                    {item.example}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Separator />

      {/* Keyword Deep Dive */}
      <section className="space-y-6">
        <h2 className="font-heading text-xl font-bold">Detailed Usage</h2>

        {/* let */}
        <div className="space-y-3">
          <h3 className="font-heading text-lg font-medium">let</h3>
          <p className="text-sm text-muted-foreground">
            Used in let-statements to bind an identifier to an expression. A
            let-statement requires an identifier, an equals sign, an expression,
            and a closing semicolon.
          </p>
          <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
            <code>{`let age = 21;
let greeting = "Hello, " + "World!";
let numbers = [1, 2, 3];`}</code>
          </pre>
        </div>

        {/* fn */}
        <div className="space-y-3">
          <h3 className="font-heading text-lg font-medium">fn</h3>
          <p className="text-sm text-muted-foreground">
            Defines an anonymous function literal. Functions in Banana are
            first-class citizens and can be bound to variables, passed into
            other functions, or returned from enclosing scopes.
          </p>
          <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
            <code>{`let add = fn(a, b) {
    a + b;
};

let multiplyBy = fn(factor) {
    fn(x) { x * factor };
};`}</code>
          </pre>
        </div>

        {/* if & else */}
        <div className="space-y-3">
          <h3 className="font-heading text-lg font-medium">if &amp; else</h3>
          <p className="text-sm text-muted-foreground">
            Form conditional expressions. In Banana, conditionals are
            expressions that evaluate to a value rather than statements that
            merely alter control flow.
          </p>
          <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
            <code>{`let max = if (a > b) {
    a;
} else {
    b;
};`}</code>
          </pre>
        </div>

        {/* return */}
        <div className="space-y-3">
          <h3 className="font-heading text-lg font-medium">return</h3>
          <p className="text-sm text-muted-foreground">
            Explicitly returns a value from a function. In Banana, the last
            evaluated expression in a function body is automatically returned,
            but{" "}
            <code className="bg-secondary px-1.5 py-0.5 text-xs text-foreground">
              return
            </code>{" "}
            enables early exits.
          </p>
          <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
            <code>{`let abs = fn(x) {
    if (x < 0) {
        return -x;
    }
    x;
};`}</code>
          </pre>
        </div>

        {/* true & false */}
        <div className="space-y-3">
          <h3 className="font-heading text-lg font-medium">true &amp; false</h3>
          <p className="text-sm text-muted-foreground">
            The two canonical boolean literals. In addition to these literals,
            comparison operators (
            <code className="bg-secondary px-1.5 py-0.5 text-xs text-foreground">
              ==
            </code>
            ,{" "}
            <code className="bg-secondary px-1.5 py-0.5 text-xs text-foreground">
              !=
            </code>
            ,{" "}
            <code className="bg-secondary px-1.5 py-0.5 text-xs text-foreground">
              &lt;
            </code>
            ,{" "}
            <code className="bg-secondary px-1.5 py-0.5 text-xs text-foreground">
              &gt;
            </code>
            ) evaluate to boolean objects.
          </p>
          <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
            <code>{`let isReady = true;
let isDone = false;
let check = 10 > 5;    // evaluates to true`}</code>
          </pre>
        </div>
      </section>

      <Separator />

      {/* Restrictions */}
      <section className="space-y-4">
        <h2 className="font-heading text-xl font-bold">
          Identifier Restrictions
        </h2>
        <p className="text-sm text-muted-foreground">
          Because the lexer maps keyword strings directly to specific token
          types, attempting to use any keyword as a variable or parameter
          identifier will result in a syntax parsing error.
        </p>

        <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
          <code>{`// VALID identifiers:
let myVar = 10;
let fnCount = 5;
let if_condition = true;

// INVALID identifier usage (will not parse):
let fn = 10;          // ERROR: expected next token to be IDENT, got FUNCTION instead
let if = 5;           // ERROR: expected next token to be IDENT, got IF instead
let return = 42;      // ERROR: expected next token to be IDENT, got RETURN instead`}</code>
        </pre>
      </section>
    </div>
  )
}
