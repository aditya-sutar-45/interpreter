import { createFileRoute } from "@tanstack/react-router"
import { Separator } from "@/components/ui/separator"

export const Route = createFileRoute("/docs/variables")({
  component: VariablesDoc,
})

function VariablesDoc() {
  return (
    <div className="flex flex-col gap-8">
      {/* Title & Intro */}
      <div className="flex flex-col gap-2">
        <h1 className="font-heading text-3xl font-bold tracking-tight">
          Variables
        </h1>
        <p className="text-sm text-muted-foreground">
          Variables in Banana are declared using the let keyword to bind values
          to identifiers with lexical scoping.
        </p>
      </div>

      <Separator />

      {/* Variable Declaration */}
      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-xl font-bold">
          Declaration & Binding
        </h2>
        <p className="text-xs leading-relaxed text-muted-foreground">
          Variables are declared with the{" "}
          <code className="bg-secondary px-1 py-0.5 font-mono text-foreground">
            let
          </code>{" "}
          keyword. A variable binding connects an identifier name to an
          evaluated expression. All statements in Banana must end with a
          semicolon (
          <code className="bg-secondary px-1 py-0.5 font-mono text-foreground">
            ;
          </code>
          ).
        </p>

        <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
          <code>{`let x = 10;
let name = "Banana";
let isReady = true;
let arr = [1, 2, 3];
let person = {"name": "Aditya"};
let double = fn(x) { x * 2 };`}</code>
        </pre>

        <p className="text-xs leading-relaxed text-muted-foreground">
          Banana supports binding any valid data type to a variable — including
          integers, strings, booleans, arrays, hash maps, and first-class
          functions.
        </p>
      </section>

      <Separator />

      {/* Rules */}
      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-xl font-bold">Rules & Constraints</h2>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="font-heading text-lg font-medium">
              1. Identifier Naming
            </h3>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Variable names must start with an ASCII letter (
              <code className="bg-secondary px-1 py-0.5 font-mono text-foreground">
                a-z
              </code>
              ,{" "}
              <code className="bg-secondary px-1 py-0.5 font-mono text-foreground">
                A-Z
              </code>
              ) or an underscore (
              <code className="bg-secondary px-1 py-0.5 font-mono text-foreground">
                _
              </code>
              ), followed by any combination of letters, digits (
              <code className="bg-secondary px-1 py-0.5 font-mono text-foreground">
                0-9
              </code>
              ), or underscores.
            </p>
            <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
              <code>{`let validName = 1;
let _counter = 2;
let item_42 = 3;

// Invalid:
// let 1stValue = 10;   // Cannot begin with a number
// let total-sum = 20;  // Hyphens are parsed as minus operators`}</code>
            </pre>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-heading text-lg font-medium">
              2. Semicolons Are Mandatory
            </h3>
            <p className="text-xs leading-relaxed text-muted-foreground">
              All{" "}
              <code className="bg-secondary px-1 py-0.5 font-mono text-foreground">
                let
              </code>{" "}
              statements require a terminating semicolon. Omitting the semicolon
              produces a syntax error during parsing.
            </p>
            <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
              <code>{`let greeting = "Hello";  // Valid

// Error: parser expects ';' after expression
// let greeting = "Hello"`}</code>
            </pre>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-heading text-lg font-medium">
              3. Immutability (No Reassignment)
            </h3>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Variables in Banana cannot be reassigned or mutated after
              declaration. There is no standalone assignment operator (
              <code className="bg-secondary px-1 py-0.5 font-mono text-foreground">
                =
              </code>
              ) outside of a{" "}
              <code className="bg-secondary px-1 py-0.5 font-mono text-foreground">
                let
              </code>{" "}
              statement.
            </p>
            <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
              <code>{`let count = 1;
// count = 2;  // Parser error: reassignment is not supported`}</code>
            </pre>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-heading text-lg font-medium">
              4. Lexical Scoping
            </h3>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Variables are lexically scoped. When a function is evaluated, an
              enclosed environment is created that retains access to variables
              declared in its outer parent scopes.
            </p>
            <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
              <code>{`let multiplier = 3;

let multiply = fn(x) {
    let offset = 2;
    (x * multiplier) + offset;
};

multiply(4); // 14 (accesses both 'offset' and outer 'multiplier')`}</code>
            </pre>
          </div>
        </div>
      </section>

      <Separator />

      {/* Expressions & Usage */}
      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-xl font-bold">
          Using Variables in Expressions
        </h2>
        <p className="text-xs leading-relaxed text-muted-foreground">
          Once declared, variables evaluate to their bound values when
          referenced inside other expressions or variable bindings.
        </p>

        <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
          <code>{`let a = 5;
let b = a;
let c = a + b + 5;    // c is 15`}</code>
        </pre>

        <p className="text-xs leading-relaxed text-muted-foreground">
          Referencing an identifier that has not been declared in the current or
          any enclosing scope will result in an evaluator error:{" "}
          <code className="bg-secondary px-1 py-0.5 font-mono text-destructive">
            identifier not found: &lt;name&gt;
          </code>
          .
        </p>
      </section>
    </div>
  )
}
