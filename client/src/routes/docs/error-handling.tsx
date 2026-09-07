import { createFileRoute } from "@tanstack/react-router"
import { Separator } from "@/components/ui/separator"

export const Route = createFileRoute("/docs/error-handling")({
  component: ErrorHandlingDoc,
})

function ErrorHandlingDoc() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="font-heading text-3xl font-bold tracking-tight">
          Error Handling
        </h1>
        <p className="text-sm text-muted-foreground">
          Banana produces descriptive runtime errors that halt evaluation
          immediately. The language does not have a try/catch mechanism, so
          unhandled errors bubble up to the top level.
        </p>
      </div>

      <Separator />

      {/* Error Model */}
      <section className="space-y-4">
        <h2 className="font-heading text-xl font-bold">The Error Model</h2>
        <p className="text-sm text-muted-foreground">
          When the evaluator encounters an illegal operation — such as adding an
          integer to a boolean or calling an undefined variable — it wraps the
          failure in an internal error object. Evaluation of enclosing
          expressions stops immediately, and the error propagates up the AST
          call stack.
        </p>
        <p className="text-sm text-muted-foreground">
          Because Banana does not feature a{" "}
          <code className="bg-secondary px-1.5 py-0.5 text-xs text-foreground">
            try/catch
          </code>{" "}
          construct, runtime errors cannot be caught or recovered from within
          Banana code. In the interactive REPL and Web playground, errors are
          caught at the boundary and displayed inline without terminating the
          session.
        </p>
      </section>

      <Separator />

      {/* Common Errors */}
      <section className="space-y-6">
        <h2 className="font-heading text-xl font-bold">
          Common Runtime Errors
        </h2>
        <p className="text-sm text-muted-foreground">
          Below are the primary runtime errors produced by the Banana evaluator
          along with code snippets illustrating how they occur.
        </p>

        {/* Type Mismatch */}
        <div className="space-y-3">
          <h3 className="font-heading text-lg font-medium">Type Mismatch</h3>
          <p className="text-sm text-muted-foreground">
            Occurs when an infix operator is applied to operands of different,
            incompatible types (such as adding an integer to a boolean).
          </p>
          <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
            <code>
              {"5 + true\n"}
              <span className="text-destructive">
                // ERROR: type mismatch: INTEGER + BOOLEAN
              </span>
            </code>
          </pre>
        </div>

        {/* Unknown Operator */}
        <div className="space-y-3">
          <h3 className="font-heading text-lg font-medium">Unknown Operator</h3>
          <p className="text-sm text-muted-foreground">
            Occurs when an operator is used with types that do not support it,
            even if both operands are of the same type.
          </p>
          <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
            <code>
              {"true + false\n"}
              <span className="text-destructive">
                // ERROR: unknown operator: BOOLEAN + BOOLEAN
              </span>
              {"\n\n-true\n"}
              <span className="text-destructive">
                // ERROR: unknown operator: -BOOLEAN
              </span>
              {'\n\n"hello" - "world"\n'}
              <span className="text-destructive">
                // ERROR: unknown operator: STRING - STRING
              </span>
            </code>
          </pre>
        </div>

        {/* Identifier Not Found */}
        <div className="space-y-3">
          <h3 className="font-heading text-lg font-medium">
            Identifier Not Found
          </h3>
          <p className="text-sm text-muted-foreground">
            Occurs when evaluating an identifier that has not been bound in the
            current environment or any parent enclosing scope.
          </p>
          <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
            <code>
              {"foobar\n"}
              <span className="text-destructive">
                // ERROR: identifier not found: foobar
              </span>
            </code>
          </pre>
        </div>

        {/* Wrong Argument Count */}
        <div className="space-y-3">
          <h3 className="font-heading text-lg font-medium">
            Wrong Argument Count
          </h3>
          <p className="text-sm text-muted-foreground">
            Occurs when calling a built-in function or user-defined function
            with fewer or more arguments than expected.
          </p>
          <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
            <code>
              {'len("a", "b")\n'}
              <span className="text-destructive">
                // ERROR: wrong number of arguments. got=2, want=1
              </span>
            </code>
          </pre>
        </div>

        {/* Not a Function */}
        <div className="space-y-3">
          <h3 className="font-heading text-lg font-medium">Not a Function</h3>
          <p className="text-sm text-muted-foreground">
            Occurs when attempting to invoke a value as a function when its
            runtime type is not a function or built-in function.
          </p>
          <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
            <code>
              {"let x = 5;\nx(10)\n"}
              <span className="text-destructive">
                // ERROR: not a function: INTEGER
              </span>
            </code>
          </pre>
        </div>

        {/* Unusable Hash Key */}
        <div className="space-y-3">
          <h3 className="font-heading text-lg font-medium">
            Unusable Hash Key
          </h3>
          <p className="text-sm text-muted-foreground">
            Occurs when using a non-hashable type (such as a function, array, or
            hash map) as an index into a hash map or as a key in a hash literal.
            Only integers, booleans, and strings implement the hashable
            interface.
          </p>
          <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
            <code>
              {'{"name": "test"}[fn(x) { x }]\n'}
              <span className="text-destructive">
                // ERROR: unusable as hash key: FUNCTION
              </span>
            </code>
          </pre>
        </div>

        {/* Index Operator Not Supported */}
        <div className="space-y-3">
          <h3 className="font-heading text-lg font-medium">
            Index Operator Not Supported
          </h3>
          <p className="text-sm text-muted-foreground">
            Occurs when applying the bracket index operator{" "}
            <code className="bg-secondary px-1.5 py-0.5 text-xs text-foreground">
              [index]
            </code>{" "}
            to a value that is neither an Array nor a Hash map.
          </p>
          <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
            <code>
              {"42[0]\n"}
              <span className="text-destructive">
                // ERROR: index operator not supported: INTEGER
              </span>
            </code>
          </pre>
        </div>
      </section>

      <Separator />

      {/* Error Reference Table */}
      <section className="space-y-4">
        <h2 className="font-heading text-xl font-bold">Error Summary Table</h2>
        <p className="text-sm text-muted-foreground">
          A quick reference of common errors, their triggering conditions, and
          expected formats.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr>
                <th className="border-b border-border p-2 text-left font-heading font-medium">
                  Error Category
                </th>
                <th className="border-b border-border p-2 text-left font-heading font-medium">
                  Cause
                </th>
                <th className="border-b border-border p-2 text-left font-heading font-medium">
                  Format
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-border p-2 font-mono font-medium text-foreground">
                  Type Mismatch
                </td>
                <td className="border-b border-border p-2 text-muted-foreground">
                  Incompatible operand types for binary operators
                </td>
                <td className="border-b border-border p-2 font-mono text-destructive">
                  type mismatch: TYPE + TYPE
                </td>
              </tr>
              <tr>
                <td className="border-b border-border p-2 font-mono font-medium text-foreground">
                  Unknown Operator
                </td>
                <td className="border-b border-border p-2 text-muted-foreground">
                  Operator unsupported for given type(s)
                </td>
                <td className="border-b border-border p-2 font-mono text-destructive">
                  unknown operator: TYPE OP TYPE
                </td>
              </tr>
              <tr>
                <td className="border-b border-border p-2 font-mono font-medium text-foreground">
                  Identifier Not Found
                </td>
                <td className="border-b border-border p-2 text-muted-foreground">
                  Referencing an undefined identifier
                </td>
                <td className="border-b border-border p-2 font-mono text-destructive">
                  identifier not found: NAME
                </td>
              </tr>
              <tr>
                <td className="border-b border-border p-2 font-mono font-medium text-foreground">
                  Wrong Argument Count
                </td>
                <td className="border-b border-border p-2 text-muted-foreground">
                  Passing incorrect number of arguments to a function
                </td>
                <td className="border-b border-border p-2 font-mono text-destructive">
                  wrong number of arguments. got=X, want=Y
                </td>
              </tr>
              <tr>
                <td className="border-b border-border p-2 font-mono font-medium text-foreground">
                  Not a Function
                </td>
                <td className="border-b border-border p-2 text-muted-foreground">
                  Calling a non-function value with parentheses
                </td>
                <td className="border-b border-border p-2 font-mono text-destructive">
                  not a function: TYPE
                </td>
              </tr>
              <tr>
                <td className="border-b border-border p-2 font-mono font-medium text-foreground">
                  Unusable Hash Key
                </td>
                <td className="border-b border-border p-2 text-muted-foreground">
                  Using a mutable or non-hashable type as a hash key
                </td>
                <td className="border-b border-border p-2 font-mono text-destructive">
                  unusable as hash key: TYPE
                </td>
              </tr>
              <tr>
                <td className="border-b border-border p-2 font-mono font-medium text-foreground">
                  Index Operator Not Supported
                </td>
                <td className="border-b border-border p-2 text-muted-foreground">
                  Attempting to index an unindexable type
                </td>
                <td className="border-b border-border p-2 font-mono text-destructive">
                  index operator not supported: TYPE
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
