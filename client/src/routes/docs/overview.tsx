import { createFileRoute } from "@tanstack/react-router"
import { Separator } from "@/components/ui/separator"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

export const Route = createFileRoute("/docs/overview")({
  component: OverviewPage,
})

function OverviewPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="font-heading text-3xl font-bold tracking-tight">
          Overview
        </h1>
        <p className="text-sm text-muted-foreground">
          An introduction to the Banana programming language, its core design
          principles, architecture, and quick start guide.
        </p>
      </div>

      <Separator />

      {/* About Banana */}
      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-xl font-bold">About Banana</h2>
        <p className="text-sm leading-relaxed text-foreground">
          Banana is an{" "}
          <strong className="font-semibold text-foreground">
            expression-oriented
          </strong>{" "}
          language — almost everything produces a value. This includes{" "}
          <code className="bg-secondary px-1.5 py-0.5 font-mono text-xs text-primary">
            if
          </code>
          /
          <code className="bg-secondary px-1.5 py-0.5 font-mono text-xs text-primary">
            else
          </code>{" "}
          blocks, which are expressions rather than statements.
        </p>

        <div className="flex flex-col gap-2">
          <h3 className="font-heading text-lg font-medium">
            Core Capabilities
          </h3>
          <ul className="list-disc space-y-1.5 pl-5 text-xs leading-relaxed text-muted-foreground">
            <li>
              <strong className="text-foreground">Dynamic typing:</strong> 7
              runtime object types without mandatory type declarations.
            </li>
            <li>
              <strong className="text-foreground">
                First-class and higher-order functions:
              </strong>{" "}
              Functions can be bound to variables, passed as arguments, and
              returned from other functions.
            </li>
            <li>
              <strong className="text-foreground">
                Lexical scoping with closures:
              </strong>{" "}
              Functions carry references to their enclosing environment.
            </li>
            <li>
              <strong className="text-foreground">
                Immutable data operations:
              </strong>{" "}
              Array and hash operations produce new values rather than mutating
              existing data structures.
            </li>
            <li>
              <strong className="text-foreground">Interactive REPL:</strong> A
              Read-Eval-Print Loop for testing expressions and rapid evaluation.
            </li>
          </ul>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">
          Banana is a modified version of the{" "}
          <strong className="font-semibold text-foreground">
            Monkey programming language
          </strong>
          . It retains Monkey's core syntax and semantics while extending the
          built-in function library with additional array operations.
        </p>
      </section>

      <Separator />

      {/* Interpreter Pipeline */}
      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-xl font-bold">Interpreter Pipeline</h2>
        <p className="text-sm leading-relaxed text-foreground">
          The interpreter follows a four-stage pipeline:{" "}
          <span className="font-medium text-primary">Source Code</span> →{" "}
          <span className="font-medium text-primary">Lexer (tokens)</span> →{" "}
          <span className="font-medium text-primary">Parser (AST)</span> →{" "}
          <span className="font-medium text-primary">Evaluator (result)</span>.
          The entire thing is built from scratch in Go with zero external
          dependencies.
        </p>

        <div className="grid grid-cols-1 gap-3 pt-2 md:grid-cols-2">
          <Card size="sm">
            <CardHeader>
              <CardTitle>1. Lexer</CardTitle>
              <CardDescription>Source Code → Tokens</CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Reads raw source characters and categorizes them into tokens
              (identifiers, keywords, literals, and operators).
            </CardContent>
          </Card>

          <Card size="sm">
            <CardHeader>
              <CardTitle>2. Parser</CardTitle>
              <CardDescription>Tokens → Abstract Syntax Tree</CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Uses a Pratt parser (Top-Down Operator Precedence) to validate
              grammar and construct an AST with proper precedence.
            </CardContent>
          </Card>

          <Card size="sm">
            <CardHeader>
              <CardTitle>3. AST</CardTitle>
              <CardDescription>Structured Representation</CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              A typed hierarchy of statements and expressions that fully
              represents the syntactic structure of the program.
            </CardContent>
          </Card>

          <Card size="sm">
            <CardHeader>
              <CardTitle>4. Evaluator</CardTitle>
              <CardDescription>AST → Runtime Object</CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Recursively traverses AST nodes, evaluating expressions in their
              respective environment scopes and producing runtime values.
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Quick Start */}
      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-xl font-bold">Quick Start</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Here is a quick example showing variable declarations, strings,
          first-class functions, and expression evaluation:
        </p>

        <div className="flex flex-col gap-2">
          <h3 className="font-heading text-lg font-medium">Code Example</h3>
          <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
            <code>{`let x = 10;
let greeting = "Hello, Banana!";
let add = fn(a, b) { a + b };
add(x, 20)`}</code>
          </pre>
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
            Evaluation Result
          </span>
          <pre className="overflow-x-auto border-l-2 border-primary bg-secondary p-3 text-xs leading-relaxed">
            <code>{`30`}</code>
          </pre>
        </div>
      </section>
    </div>
  )
}
