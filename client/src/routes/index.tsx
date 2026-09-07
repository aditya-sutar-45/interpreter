import { createFileRoute, Link } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Terminal,
  Code2,
  Braces,
  Layers,
  Zap,
  ArrowRight,
  GitBranch,
  Hash,
  BookOpen,
} from "lucide-react"

export const Route = createFileRoute("/")({
  component: IndexPage,
})

const features = [
  {
    icon: Braces,
    title: "First-Class Functions",
    description:
      "Functions are values. Pass them around, return them from other functions, and create closures with lexical scoping.",
  },
  {
    icon: Layers,
    title: "Rich Data Types",
    description:
      "Integers, booleans, strings, arrays, and hash maps — all with built-in operations like len, head, tail, push, and pop.",
  },
  {
    icon: GitBranch,
    title: "Closures & Scoping",
    description:
      "Enclosed environments chain to their defining scope, enabling proper closures and lexical variable resolution.",
  },
  {
    icon: Zap,
    title: "Tree-Walking Evaluator",
    description:
      "A complete pipeline from source code to result: lexer → parser → AST → evaluator, all built from scratch in Go.",
  },
  {
    icon: Hash,
    title: "Hash Maps",
    description:
      "Hash literal syntax with string, integer, and boolean keys. FNV-64a hashing enables O(1) lookups.",
  },
  {
    icon: Terminal,
    title: "Zero Dependencies",
    description:
      "The entire interpreter is built with only the Go standard library — no parser generators, no external packages.",
  },
]

function IndexPage() {
  return (
    <div className="flex flex-col gap-20 py-12">
      {/* Hero */}
      <section className="flex flex-col items-center gap-6 text-center">
        <Badge variant="outline" className="gap-1.5">
          <Code2 className="size-3" />
          Interpreter
        </Badge>

        <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Banana.
        </h1>

        <p className="max-w-xl text-sm text-muted-foreground">
          A fully functional interpreter built from scratch in Go — lexical
          analysis, Pratt parsing, AST construction, and tree-walking
          evaluation. No dependencies. Just code.
        </p>

        <div className="flex items-center gap-2">
          <Link to="/code">
            <Button size="lg" className="gap-1.5">
              Try it Live
              <ArrowRight className="size-4" />
            </Button>
          </Link>
          <Link to="/docs">
            <Button variant="outline" size="lg" className="gap-1.5">
              <BookOpen className="size-4" />
              Documentation
            </Button>
          </Link>
        </div>
      </section>

      <Separator />

      {/* Features Grid */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h2 className="font-heading text-xl font-bold">Language Features</h2>
          <p className="text-sm text-muted-foreground">
            Everything you need to explore programming language internals.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <feature.icon className="size-4 text-primary" />
                  {feature.title}
                </CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Architecture */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h2 className="font-heading text-xl font-bold">Architecture</h2>
          <p className="text-sm text-muted-foreground">
            A classic four-stage interpreter pipeline, each stage as a separate
            Go package.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {[
            {
              stage: "01",
              title: "Lexer",
              description:
                "Transforms raw source into a stream of tokens — identifiers, keywords, operators, and literals.",
            },
            {
              stage: "02",
              title: "Parser",
              description:
                "Recursive descent parser with Pratt precedence parsing. Produces a typed Abstract Syntax Tree.",
            },
            {
              stage: "03",
              title: "AST",
              description:
                "16 typed node types: LetStatement, IfExpression, FunctionLiteral, CallExpression, HashLiteral, and more.",
            },
            {
              stage: "04",
              title: "Evaluator",
              description:
                "Tree-walking evaluator with environment-based scoping. 10 object types with runtime type checking.",
            },
          ].map((step) => (
            <Card key={step.stage}>
              <CardHeader>
                <Badge variant="secondary" className="w-fit">
                  {step.stage}
                </Badge>
                <CardTitle>{step.title}</CardTitle>
                <CardDescription>{step.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* CTA */}
      <section className="flex flex-col items-center gap-4 text-center">
        <h2 className="font-heading text-2xl font-bold">
          Ready to try Banana?
        </h2>
        <p className="max-w-md text-sm text-muted-foreground">
          Write and run Banana code directly in your browser. No setup required.
        </p>
        <Link to="/code">
          <Button size="lg" className="gap-1.5">
            Open the Playground
            <ArrowRight className="size-4" />
          </Button>
        </Link>
      </section>
    </div>
  )
}
