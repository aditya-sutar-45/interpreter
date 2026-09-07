import { createFileRoute } from "@tanstack/react-router"
import { Separator } from "@/components/ui/separator"

export const Route = createFileRoute("/docs/control-flow")({
  component: ControlFlowDoc,
})

function ControlFlowDoc() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="font-heading text-3xl font-bold tracking-tight">
          Control Flow
        </h1>
        <p className="text-sm text-muted-foreground">
          Control flow in Banana is driven by conditional expressions. Unlike
          traditional languages where conditionals are statements, in Banana
          conditionals are expressions that evaluate to a value.
        </p>
      </div>

      <Separator />

      {/* If Expressions */}
      <section className="space-y-4">
        <h2 className="font-heading text-xl font-bold">If Expressions</h2>
        <p className="text-sm text-muted-foreground">
          In Banana,{" "}
          <code className="bg-secondary px-1.5 py-0.5 text-xs text-foreground">
            if
          </code>{" "}
          is an{" "}
          <strong className="font-semibold text-foreground">expression</strong>{" "}
          — it returns a value.
        </p>

        <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
          <code>{`if (condition) {
    consequence
}`}</code>
        </pre>

        <p className="text-sm text-muted-foreground">
          If condition is truthy, consequence is evaluated. If falsy and no
          else, null is returned.
        </p>

        <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
          <code>{`let x = if (10 > 5) { 42 };    // x is 42
let y = if (10 < 5) { 42 };    // y is null`}</code>
        </pre>
      </section>

      <Separator />

      {/* If-Else Expressions */}
      <section className="space-y-4">
        <h2 className="font-heading text-xl font-bold">If-Else Expressions</h2>
        <p className="text-sm text-muted-foreground">
          You can provide an alternative branch using{" "}
          <code className="bg-secondary px-1.5 py-0.5 text-xs text-foreground">
            else
          </code>{" "}
          to evaluate when the condition is falsy:
        </p>

        <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
          <code>{`if (condition) {
    consequence
} else {
    alternative
}`}</code>
        </pre>

        <p className="text-sm text-muted-foreground">
          Because{" "}
          <code className="bg-secondary px-1.5 py-0.5 text-xs text-foreground">
            if-else
          </code>{" "}
          is an expression, it can be assigned directly to a variable:
        </p>

        <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
          <code>{`let max = if (a > b) { a } else { b };`}</code>
        </pre>

        <div className="space-y-2 pt-2">
          <h3 className="font-heading text-lg font-medium">
            Nested Conditions
          </h3>
          <p className="text-sm text-muted-foreground">
            Conditionals can also be nested inside consequence or alternative
            blocks:
          </p>

          <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
            <code>{`if (x > 10) {
    if (x > 20) {
        return "big";
    }
    return "medium";
} else {
    return "small";
}`}</code>
          </pre>
        </div>

        <div className="border border-border bg-card p-4 text-xs text-muted-foreground">
          <p>
            <strong className="font-semibold text-foreground">Note:</strong>{" "}
            Conditions follow truthiness rules from the Booleans section.
          </p>
        </div>
      </section>
    </div>
  )
}
