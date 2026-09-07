import { createFileRoute } from "@tanstack/react-router"
import { Separator } from "@/components/ui/separator"

export const Route = createFileRoute("/docs/operators")({
  component: OperatorsDoc,
})

function OperatorsDoc() {
  return (
    <div className="flex flex-col gap-8">
      {/* Title & Intro */}
      <div className="flex flex-col gap-2">
        <h1 className="font-heading text-3xl font-bold tracking-tight">
          Operators
        </h1>
        <p className="text-sm text-muted-foreground">
          Banana supports arithmetic, comparison, prefix, and string operators,
          with standard precedence rules to determine evaluation order.
        </p>
      </div>

      <Separator />

      {/* Arithmetic Operators */}
      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-xl font-bold">Arithmetic Operators</h2>
        <p className="text-xs leading-relaxed text-muted-foreground">
          Arithmetic operators perform numeric operations and operate on
          integers only. Division in Banana is integer division — results are
          truncated toward zero, not rounded.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="text-muted-foreground">
                <th className="border-b border-border p-2 text-left font-heading font-medium">
                  Operator
                </th>
                <th className="border-b border-border p-2 text-left font-heading font-medium">
                  Description
                </th>
                <th className="border-b border-border p-2 text-left font-heading font-medium">
                  Example
                </th>
                <th className="border-b border-border p-2 text-left font-heading font-medium">
                  Result
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-border p-2 font-mono text-primary">
                  +
                </td>
                <td className="border-b border-border p-2">Addition</td>
                <td className="border-b border-border p-2 font-mono">5 + 3</td>
                <td className="border-b border-border p-2 font-mono">8</td>
              </tr>
              <tr>
                <td className="border-b border-border p-2 font-mono text-primary">
                  -
                </td>
                <td className="border-b border-border p-2">Subtraction</td>
                <td className="border-b border-border p-2 font-mono">10 - 4</td>
                <td className="border-b border-border p-2 font-mono">6</td>
              </tr>
              <tr>
                <td className="border-b border-border p-2 font-mono text-primary">
                  *
                </td>
                <td className="border-b border-border p-2">Multiplication</td>
                <td className="border-b border-border p-2 font-mono">3 * 7</td>
                <td className="border-b border-border p-2 font-mono">21</td>
              </tr>
              <tr>
                <td className="border-b border-border p-2 font-mono text-primary">
                  /
                </td>
                <td className="border-b border-border p-2">Integer division</td>
                <td className="border-b border-border p-2 font-mono">10 / 3</td>
                <td className="border-b border-border p-2 font-mono">3</td>
              </tr>
            </tbody>
          </table>
        </div>

        <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
          <code>{`let sum = 20 + 22;       // 42
let diff = 100 - 58;      // 42
let product = 6 * 7;      // 42
let quotient = 85 / 2;    // 42 (truncated from 42.5)`}</code>
        </pre>
      </section>

      <Separator />

      {/* Comparison Operators */}
      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-xl font-bold">Comparison Operators</h2>
        <p className="text-xs leading-relaxed text-muted-foreground">
          Comparison operators evaluate expressions and return a boolean (
          <code className="bg-secondary px-1 py-0.5 font-mono text-foreground">
            true
          </code>{" "}
          or{" "}
          <code className="bg-secondary px-1 py-0.5 font-mono text-foreground">
            false
          </code>
          ).
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="text-muted-foreground">
                <th className="border-b border-border p-2 text-left font-heading font-medium">
                  Operator
                </th>
                <th className="border-b border-border p-2 text-left font-heading font-medium">
                  Description
                </th>
                <th className="border-b border-border p-2 text-left font-heading font-medium">
                  Example
                </th>
                <th className="border-b border-border p-2 text-left font-heading font-medium">
                  Result
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-border p-2 font-mono text-primary">
                  ==
                </td>
                <td className="border-b border-border p-2">Equal</td>
                <td className="border-b border-border p-2 font-mono">5 == 5</td>
                <td className="border-b border-border p-2 font-mono">true</td>
              </tr>
              <tr>
                <td className="border-b border-border p-2 font-mono text-primary">
                  !=
                </td>
                <td className="border-b border-border p-2">Not equal</td>
                <td className="border-b border-border p-2 font-mono">5 != 3</td>
                <td className="border-b border-border p-2 font-mono">true</td>
              </tr>
              <tr>
                <td className="border-b border-border p-2 font-mono text-primary">
                  &lt;
                </td>
                <td className="border-b border-border p-2">Less than</td>
                <td className="border-b border-border p-2 font-mono">
                  3 &lt; 5
                </td>
                <td className="border-b border-border p-2 font-mono">true</td>
              </tr>
              <tr>
                <td className="border-b border-border p-2 font-mono text-primary">
                  &gt;
                </td>
                <td className="border-b border-border p-2">Greater than</td>
                <td className="border-b border-border p-2 font-mono">
                  5 &gt; 3
                </td>
                <td className="border-b border-border p-2 font-mono">true</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-heading text-lg font-medium">Type Constraints</h3>
          <ul className="list-inside list-disc space-y-1 text-xs leading-relaxed text-muted-foreground">
            <li>
              <code className="bg-secondary px-1 py-0.5 font-mono text-foreground">
                &lt;
              </code>{" "}
              and{" "}
              <code className="bg-secondary px-1 py-0.5 font-mono text-foreground">
                &gt;
              </code>{" "}
              operate on integers only.
            </li>
            <li>
              <code className="bg-secondary px-1 py-0.5 font-mono text-foreground">
                ==
              </code>{" "}
              and{" "}
              <code className="bg-secondary px-1 py-0.5 font-mono text-foreground">
                !=
              </code>{" "}
              operate on integers, booleans, and strings.
            </li>
            <li>
              Comparing mismatched types produces a runtime type mismatch error.
            </li>
          </ul>
        </div>

        <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
          <code>{`"hello" == "hello";  // true
true != false;        // true
10 < 20;              // true

// Error: type mismatch: INTEGER == BOOLEAN
// 5 == true;`}</code>
        </pre>
      </section>

      <Separator />

      {/* Prefix Operators */}
      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-xl font-bold">Prefix Operators</h2>
        <p className="text-xs leading-relaxed text-muted-foreground">
          Prefix operators precede an expression and operate on a single
          operand.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="text-muted-foreground">
                <th className="border-b border-border p-2 text-left font-heading font-medium">
                  Operator
                </th>
                <th className="border-b border-border p-2 text-left font-heading font-medium">
                  Description
                </th>
                <th className="border-b border-border p-2 text-left font-heading font-medium">
                  Example
                </th>
                <th className="border-b border-border p-2 text-left font-heading font-medium">
                  Result
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-border p-2 font-mono text-primary">
                  -
                </td>
                <td className="border-b border-border p-2">Negation</td>
                <td className="border-b border-border p-2 font-mono">-5</td>
                <td className="border-b border-border p-2 font-mono">-5</td>
              </tr>
              <tr>
                <td className="border-b border-border p-2 font-mono text-primary">
                  !
                </td>
                <td className="border-b border-border p-2">Logical NOT</td>
                <td className="border-b border-border p-2 font-mono">!true</td>
                <td className="border-b border-border p-2 font-mono">false</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-heading text-lg font-medium">
            Bang (<code className="font-mono text-primary">!</code>) Operator
            Truth Table
          </h3>
          <p className="text-xs leading-relaxed text-muted-foreground">
            The bang operator negates truthiness according to Banana's boolean
            semantics:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="text-muted-foreground">
                  <th className="border-b border-border p-2 text-left font-heading font-medium">
                    Input
                  </th>
                  <th className="border-b border-border p-2 text-left font-heading font-medium">
                    !input
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-border p-2 font-mono">true</td>
                  <td className="border-b border-border p-2 font-mono text-primary">
                    false
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-border p-2 font-mono">
                    false
                  </td>
                  <td className="border-b border-border p-2 font-mono text-primary">
                    true
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-border p-2 font-mono">null</td>
                  <td className="border-b border-border p-2 font-mono text-primary">
                    true
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-border p-2 text-muted-foreground">
                    Everything else (integers, strings, arrays, hashes)
                  </td>
                  <td className="border-b border-border p-2 font-mono text-primary">
                    false
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-heading text-lg font-medium">Double Negation</h3>
          <p className="text-xs leading-relaxed text-muted-foreground">
            Applying two bang operators coerces any truthy value to its boolean
            equivalent:
          </p>
          <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
            <code>{`!true;    // false
!false;   // true
!5;       // false (integers are truthy)
!!5;      // true (coerced to boolean true)`}</code>
          </pre>
        </div>
      </section>

      <Separator />

      {/* String Operators */}
      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-xl font-bold">String Operators</h2>
        <p className="text-xs leading-relaxed text-muted-foreground">
          Strings only support concatenation via the{" "}
          <code className="bg-secondary px-1 py-0.5 font-mono text-foreground">
            +
          </code>{" "}
          operator. Other arithmetic operators like{" "}
          <code className="bg-secondary px-1 py-0.5 font-mono text-foreground">
            -
          </code>
          ,{" "}
          <code className="bg-secondary px-1 py-0.5 font-mono text-foreground">
            *
          </code>
          , or{" "}
          <code className="bg-secondary px-1 py-0.5 font-mono text-foreground">
            /
          </code>{" "}
          will result in an evaluator error.
        </p>

        <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
          <code>{`let hello = "Hello, ";
let world = "World!";
let greeting = hello + world;  // "Hello, World!"

// Error: unknown operator: STRING - STRING
// "a" - "b";`}</code>
        </pre>
      </section>

      <Separator />

      {/* Operator Precedence */}
      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-xl font-bold">Operator Precedence</h2>
        <p className="text-xs leading-relaxed text-muted-foreground">
          Banana uses Pratt parsing to resolve operator precedence. Operators
          with higher precedence are evaluated before operators with lower
          precedence.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="text-muted-foreground">
                <th className="border-b border-border p-2 text-left font-heading font-medium">
                  Precedence
                </th>
                <th className="border-b border-border p-2 text-left font-heading font-medium">
                  Operators
                </th>
                <th className="border-b border-border p-2 text-left font-heading font-medium">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-border p-2">1 (Lowest)</td>
                <td className="border-b border-border p-2 font-mono">—</td>
                <td className="border-b border-border p-2">Default</td>
              </tr>
              <tr>
                <td className="border-b border-border p-2">2</td>
                <td className="border-b border-border p-2 font-mono text-primary">
                  ==, !=
                </td>
                <td className="border-b border-border p-2">Equality</td>
              </tr>
              <tr>
                <td className="border-b border-border p-2">3</td>
                <td className="border-b border-border p-2 font-mono text-primary">
                  &lt;, &gt;
                </td>
                <td className="border-b border-border p-2">Comparison</td>
              </tr>
              <tr>
                <td className="border-b border-border p-2">4</td>
                <td className="border-b border-border p-2 font-mono text-primary">
                  +, -
                </td>
                <td className="border-b border-border p-2">
                  Addition / Subtraction
                </td>
              </tr>
              <tr>
                <td className="border-b border-border p-2">5</td>
                <td className="border-b border-border p-2 font-mono text-primary">
                  *, /
                </td>
                <td className="border-b border-border p-2">
                  Multiplication / Division
                </td>
              </tr>
              <tr>
                <td className="border-b border-border p-2">6</td>
                <td className="border-b border-border p-2 font-mono text-primary">
                  -x, !x
                </td>
                <td className="border-b border-border p-2">Prefix</td>
              </tr>
              <tr>
                <td className="border-b border-border p-2">7</td>
                <td className="border-b border-border p-2 font-mono text-primary">
                  fn()
                </td>
                <td className="border-b border-border p-2">Function call</td>
              </tr>
              <tr>
                <td className="border-b border-border p-2">8 (Highest)</td>
                <td className="border-b border-border p-2 font-mono text-primary">
                  arr[i]
                </td>
                <td className="border-b border-border p-2">Index</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-xs leading-relaxed text-muted-foreground">
          Parentheses{" "}
          <code className="bg-secondary px-1 py-0.5 font-mono text-foreground">
            ( )
          </code>{" "}
          can be used to explicitly group expressions and override default
          precedence:
        </p>

        <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
          <code>{`// Multiplication precedes addition:
2 + 3 * 4;       // 14

// Parentheses override precedence:
2 * (3 + 4);     // 14

// Prefix and comparison precedence:
!-5;             // false (prefix - binds first, then ! evaluates truthiness)
5 > 3 == true;   // true (5 > 3 evaluates to true, then true == true)`}</code>
        </pre>
      </section>
    </div>
  )
}
