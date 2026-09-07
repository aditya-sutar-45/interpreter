import { createFileRoute } from "@tanstack/react-router"
import { Separator } from "@/components/ui/separator"

export const Route = createFileRoute("/docs/data-types")({
  component: DataTypesPage,
})

function DataTypesPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="font-heading text-3xl font-bold tracking-tight">
          Data Types
        </h1>
        <p className="text-sm text-muted-foreground">
          Banana provides 7 runtime object types. Everything evaluated by the
          interpreter is represented as one of these core types.
        </p>
      </div>

      <Separator />

      {/* 1. Integers */}
      <section className="flex flex-col gap-3">
        <h2 className="font-heading text-xl font-bold">Integers</h2>
        <p className="text-sm leading-relaxed text-foreground">
          Integers are 64-bit signed integers (
          <code className="bg-secondary px-1.5 py-0.5 font-mono text-xs text-primary">
            int64
          </code>
          ). Banana does not currently support floating-point numbers.
        </p>
        <p className="text-xs leading-relaxed text-muted-foreground">
          Arithmetic operations (
          <code className="bg-secondary px-1 py-0.5 font-mono">+</code>,{" "}
          <code className="bg-secondary px-1 py-0.5 font-mono">-</code>,{" "}
          <code className="bg-secondary px-1 py-0.5 font-mono">*</code>,{" "}
          <code className="bg-secondary px-1 py-0.5 font-mono">/</code>) follow
          standard operator precedence. Division is integer division, meaning
          fractional parts are truncated.
        </p>
        <div className="flex flex-col gap-2">
          <h3 className="font-heading text-lg font-medium">Example</h3>
          <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
            <code>{`let x = 42;
let negative = -10;
let result = 5 + 10 * 2;    // 25`}</code>
          </pre>
        </div>
      </section>

      <Separator />

      {/* 2. Booleans */}
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="font-heading text-xl font-bold">Booleans</h2>
          <p className="text-sm leading-relaxed text-foreground">
            Represented by the literal keywords{" "}
            <code className="bg-secondary px-1.5 py-0.5 font-mono text-xs text-primary">
              true
            </code>{" "}
            and{" "}
            <code className="bg-secondary px-1.5 py-0.5 font-mono text-xs text-primary">
              false
            </code>
            . Booleans are produced by comparison operators and are used to
            evaluate conditional branches in{" "}
            <code className="bg-secondary px-1.5 py-0.5 font-mono text-xs text-primary">
              if
            </code>{" "}
            expressions.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-heading text-lg font-medium">Example</h3>
          <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
            <code>{`let yes = true;
let no = false;
let comparison = 10 > 5;    // true`}</code>
          </pre>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-heading text-lg font-medium">Truthiness Rules</h3>
          <p className="text-xs leading-relaxed text-muted-foreground">
            In conditional expressions, only{" "}
            <code className="bg-secondary px-1 py-0.5 font-mono">false</code>{" "}
            and <code className="bg-secondary px-1 py-0.5 font-mono">null</code>{" "}
            are falsy. All other values are truthy.
          </p>
          <div className="overflow-x-auto border border-border">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-secondary/50">
                  <th className="border-b border-border p-2 text-left font-heading font-medium">
                    Value
                  </th>
                  <th className="border-b border-border p-2 text-left font-heading font-medium">
                    Truthy?
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-border p-2">
                    <code className="bg-secondary px-1 py-0.5 font-mono">
                      true
                    </code>
                  </td>
                  <td className="border-b border-border p-2 font-medium text-primary">
                    Yes
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-border p-2">
                    <code className="bg-secondary px-1 py-0.5 font-mono">
                      false
                    </code>
                  </td>
                  <td className="border-b border-border p-2 font-medium text-destructive">
                    No
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-border p-2">
                    <code className="bg-secondary px-1 py-0.5 font-mono">
                      null
                    </code>
                  </td>
                  <td className="border-b border-border p-2 font-medium text-destructive">
                    No
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-border p-2">
                    Any integer (e.g.{" "}
                    <code className="bg-secondary px-1 py-0.5 font-mono">
                      0
                    </code>
                    ,{" "}
                    <code className="bg-secondary px-1 py-0.5 font-mono">
                      1
                    </code>
                    )
                  </td>
                  <td className="border-b border-border p-2 font-medium text-primary">
                    Yes
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-border p-2">
                    Any string (e.g.{" "}
                    <code className="bg-secondary px-1 py-0.5 font-mono">{`""`}</code>
                    ,{" "}
                    <code className="bg-secondary px-1 py-0.5 font-mono">{`"banana"`}</code>
                    )
                  </td>
                  <td className="border-b border-border p-2 font-medium text-primary">
                    Yes
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-border p-2">
                    Any array (e.g.{" "}
                    <code className="bg-secondary px-1 py-0.5 font-mono">
                      []
                    </code>
                    )
                  </td>
                  <td className="border-b border-border p-2 font-medium text-primary">
                    Yes
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-border p-2">
                    Any hash (e.g.{" "}
                    <code className="bg-secondary px-1 py-0.5 font-mono">
                      {"{}"}
                    </code>
                    )
                  </td>
                  <td className="border-b border-border p-2 font-medium text-primary">
                    Yes
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-border p-2">Any function</td>
                  <td className="border-b border-border p-2 font-medium text-primary">
                    Yes
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Separator />

      {/* 3. Strings */}
      <section className="flex flex-col gap-3">
        <h2 className="font-heading text-xl font-bold">Strings</h2>
        <p className="text-sm leading-relaxed text-foreground">
          String literals are enclosed in double quotes and are immutable. The
          only supported operator on strings is{" "}
          <code className="bg-secondary px-1.5 py-0.5 font-mono text-xs text-primary">
            +
          </code>{" "}
          for string concatenation.
        </p>
        <div className="flex flex-col gap-2">
          <h3 className="font-heading text-lg font-medium">Example</h3>
          <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
            <code>{`let name = "Banana";
let greeting = "Hello, " + "World!";
let length = len("Banana");    // 6`}</code>
          </pre>
        </div>
      </section>

      <Separator />

      {/* 4. Arrays */}
      <section className="flex flex-col gap-3">
        <h2 className="font-heading text-xl font-bold">Arrays</h2>
        <p className="text-sm leading-relaxed text-foreground">
          Ordered, zero-indexed collections that can contain any combination of
          types. All array operations in Banana are immutable — built-in
          functions return brand new arrays rather than modifying the original
          in place.
        </p>
        <div className="flex flex-col gap-2">
          <h3 className="font-heading text-lg font-medium">Example</h3>
          <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
            <code>{`let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, fn(x) { x }];

let arr = [10, 20, 30];
arr[0]    // 10
arr[3]    // null (out of bounds)`}</code>
          </pre>
        </div>
      </section>

      <Separator />

      {/* 5. Hash Maps */}
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="font-heading text-xl font-bold">Hash Maps</h2>
          <p className="text-sm leading-relaxed text-foreground">
            Key-value data structures wrapped in curly braces. Keys can be
            strings, integers, or booleans. Values can be any data type,
            including arrays, nested hashes, or functions.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-heading text-lg font-medium">Example</h3>
          <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
            <code>{`let person = {"name": "Aditya", "age": 21, "active": true};
person["name"]    // "Aditya"`}</code>
          </pre>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-heading text-lg font-medium">
            Supported Key Types
          </h3>
          <div className="overflow-x-auto border border-border">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-secondary/50">
                  <th className="border-b border-border p-2 text-left font-heading font-medium">
                    Key Type
                  </th>
                  <th className="border-b border-border p-2 text-left font-heading font-medium">
                    Example
                  </th>
                  <th className="border-b border-border p-2 text-left font-heading font-medium">
                    Hash Method
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-border p-2 font-medium">
                    String
                  </td>
                  <td className="border-b border-border p-2">
                    <code className="bg-secondary px-1 py-0.5 font-mono">{`"name"`}</code>
                  </td>
                  <td className="border-b border-border p-2 text-muted-foreground">
                    FNV-64a
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-border p-2 font-medium">
                    Integer
                  </td>
                  <td className="border-b border-border p-2">
                    <code className="bg-secondary px-1 py-0.5 font-mono">
                      42
                    </code>
                  </td>
                  <td className="border-b border-border p-2 text-muted-foreground">
                    Direct uint64 cast
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-border p-2 font-medium">
                    Boolean
                  </td>
                  <td className="border-b border-border p-2">
                    <code className="bg-secondary px-1 py-0.5 font-mono">
                      true
                    </code>
                  </td>
                  <td className="border-b border-border p-2 text-muted-foreground">
                    1 for true, 0 for false
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="pt-1 text-xs text-muted-foreground">
            Note: Attempting to use an unsupported key type (such as an array or
            a function) results in a runtime evaluation error.
          </p>
        </div>
      </section>

      <Separator />

      {/* 6. Functions */}
      <section className="flex flex-col gap-3">
        <h2 className="font-heading text-xl font-bold">Functions</h2>
        <p className="text-sm leading-relaxed text-foreground">
          Functions in Banana are first-class values. They can be assigned to
          variables, passed as arguments into other functions, and returned from
          functions as closures carrying their lexical environment.
        </p>
        <div className="flex flex-col gap-2">
          <h3 className="font-heading text-lg font-medium">Example</h3>
          <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
            <code>{`let add = fn(a, b) { a + b };
add(2, 3)    // 5`}</code>
          </pre>
        </div>
      </section>

      <Separator />

      {/* 7. Null */}
      <section className="flex flex-col gap-3">
        <h2 className="font-heading text-xl font-bold">Null</h2>
        <p className="text-sm leading-relaxed text-foreground">
          Represents the absence of a value. It is produced by out-of-bounds
          array access, looking up non-existent keys in a hash map, or
          evaluating an{" "}
          <code className="bg-secondary px-1.5 py-0.5 font-mono text-xs text-primary">
            if
          </code>{" "}
          expression whose condition is false when no{" "}
          <code className="bg-secondary px-1.5 py-0.5 font-mono text-xs text-primary">
            else
          </code>{" "}
          block is provided.
        </p>
        <div className="flex flex-col gap-2">
          <h3 className="font-heading text-lg font-medium">Example</h3>
          <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
            <code>{`if (false) { 10 }    // null
[1, 2, 3][99]        // null`}</code>
          </pre>
        </div>
      </section>
    </div>
  )
}
