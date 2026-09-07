import { createFileRoute } from "@tanstack/react-router"
import { Separator } from "@/components/ui/separator"

export const Route = createFileRoute("/docs/differences-from-monkey")({
  component: DifferencesFromMonkeyDoc,
})

const comparisonData = [
  {
    feature: "tail built-in",
    monkey: "Not included",
    banana: "Returns the last element",
  },
  {
    feature: "pop built-in",
    monkey: "Not included",
    banana: "Returns new array with last element removed",
  },
  {
    feature: "print built-in",
    monkey: "Not included",
    banana: "Prints values to console",
  },
  {
    feature: "head built-in",
    monkey: "Named first",
    banana: "Renamed to head",
  },
  {
    feature: "rest built-in",
    monkey: "Same",
    banana: "Same behavior retained",
  },
  {
    feature: "REPL prompt",
    monkey: ">>",
    banana: ">>>>",
  },
  {
    feature: "ASCII art",
    monkey: "Monkey face",
    banana: "Banana",
  },
]

function DifferencesFromMonkeyDoc() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="font-heading text-3xl font-bold tracking-tight">
          Differences from Monkey
        </h1>
        <p className="text-sm text-muted-foreground">
          Banana is based on the Monkey programming language from Thorsten Ball's
          book &ldquo;Writing An Interpreter In Go&rdquo;, extended with additional
          built-in functions, improved naming consistency, and an updated REPL
          experience while remaining fully faithful to the original language semantics.
        </p>
      </div>

      <Separator />

      {/* Comparison Table */}
      <section className="space-y-4">
        <h2 className="font-heading text-xl font-bold">Feature Comparison</h2>
        <p className="text-sm text-muted-foreground">
          The table below highlights the key differences and additions between
          original Monkey and Banana:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr>
                <th className="text-left p-2 font-heading font-medium border-b border-border">
                  Feature
                </th>
                <th className="text-left p-2 font-heading font-medium border-b border-border">
                  Monkey
                </th>
                <th className="text-left p-2 font-heading font-medium border-b border-border">
                  Banana
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row) => (
                <tr key={row.feature}>
                  <td className="p-2 border-b border-border font-mono font-medium text-foreground">
                    {row.feature}
                  </td>
                  <td className="p-2 border-b border-border text-muted-foreground">
                    {row.monkey}
                  </td>
                  <td className="p-2 border-b border-border text-primary font-medium">
                    {row.banana}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Separator />

      {/* Detailed Enhancements */}
      <section className="space-y-6">
        <h2 className="font-heading text-xl font-bold">Key Enhancements</h2>

        {/* Built-ins: head & tail */}
        <div className="space-y-3">
          <h3 className="font-heading text-lg font-medium">
            head &amp; tail Operations
          </h3>
          <p className="text-sm text-muted-foreground">
            In Monkey, the first element of an array was accessed via the built-in{" "}
            <code className="bg-secondary px-1.5 py-0.5 text-xs text-foreground">first</code>, and there was no built-in method to obtain the last element. Banana renames{" "}
            <code className="bg-secondary px-1.5 py-0.5 text-xs text-foreground">first</code> to{" "}
            <code className="bg-secondary px-1.5 py-0.5 text-xs text-foreground">head</code> and introduces a matching{" "}
            <code className="bg-secondary px-1.5 py-0.5 text-xs text-foreground">tail</code> built-in for functional symmetry.
          </p>
          <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
            <code>{`let numbers = [10, 20, 30, 40];

head(numbers);    // 10
tail(numbers);    // 40`}</code>
          </pre>
        </div>

        {/* Built-in: pop */}
        <div className="space-y-3">
          <h3 className="font-heading text-lg font-medium">
            Immutable pop Built-in
          </h3>
          <p className="text-sm text-muted-foreground">
            Monkey supported <code className="bg-secondary px-1.5 py-0.5 text-xs text-foreground">rest</code> (which drops the first element) and{" "}
            <code className="bg-secondary px-1.5 py-0.5 text-xs text-foreground">push</code> (which appends an element), but lacked a counterpart to drop the last element. Banana adds{" "}
            <code className="bg-secondary px-1.5 py-0.5 text-xs text-foreground">pop</code>, returning a brand-new array without modifying the original input.
          </p>
          <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
            <code>{`let arr = [1, 2, 3, 4];
let popped = pop(arr);

popped;    // [1, 2, 3]
arr;       // [1, 2, 3, 4] (remains unchanged)`}</code>
          </pre>
        </div>

        {/* Built-in: print */}
        <div className="space-y-3">
          <h3 className="font-heading text-lg font-medium">
            Console Output with print
          </h3>
          <p className="text-sm text-muted-foreground">
            Monkey did not feature any built-in I/O or printing facilities; all program output was strictly limited to the return value of evaluated expressions. Banana introduces{" "}
            <code className="bg-secondary px-1.5 py-0.5 text-xs text-foreground">print</code>, allowing side-effect console logging for debugging and script output.
          </p>
          <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
            <code>{`print("Hello, Banana!");    // prints: Hello, Banana!
print(10 + 20);             // prints: 30
// print returns null`}</code>
          </pre>
        </div>

        {/* REPL prompt */}
        <div className="space-y-3">
          <h3 className="font-heading text-lg font-medium">
            REPL Prompt &amp; Mascot
          </h3>
          <p className="text-sm text-muted-foreground">
            The interactive shell replaces Monkey&apos;s two-arrow prompt{" "}
            <code className="bg-secondary px-1.5 py-0.5 text-xs text-foreground">&gt;&gt;</code> with a distinctive four-arrow prompt{" "}
            <code className="bg-secondary px-1.5 py-0.5 text-xs text-foreground">&gt;&gt;&gt;&gt;</code>, and swaps the Monkey face ASCII art banner for a custom Banana mascot graphic.
          </p>
        </div>
      </section>

      <Separator />

      {/* Faithful Semantics */}
      <section className="space-y-4">
        <h2 className="font-heading text-xl font-bold">Faithful Core Semantics</h2>
        <p className="text-sm text-muted-foreground">
          Beyond the additions noted above, Banana preserves 100% compatibility with
          the core syntax, grammar, and runtime evaluation mechanics of Monkey:
        </p>

        <ul className="list-inside list-disc text-xs text-muted-foreground flex flex-col gap-1.5">
          <li>
            <strong className="font-semibold text-foreground">Pratt Parser:</strong> Same operator precedence levels (LOWEST through INDEX).
          </li>
          <li>
            <strong className="font-semibold text-foreground">Scoping &amp; Closures:</strong> Lexical environments with enclosed chains for first-class function values.
          </li>
          <li>
            <strong className="font-semibold text-foreground">Expressions over Statements:</strong> Conditionals (<code className="bg-secondary px-1 py-0.5 font-mono text-foreground">if/else</code>) evaluate directly to values.
          </li>
          <li>
            <strong className="font-semibold text-foreground">Immutability:</strong> All data structures (strings, arrays, hashes) are non-destructive and produce new objects upon modification.
          </li>
          <li>
            <strong className="font-semibold text-foreground">Zero External Dependencies:</strong> Built entirely with the Go standard library.
          </li>
        </ul>
      </section>
    </div>
  )
}
