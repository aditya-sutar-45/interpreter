import { createFileRoute } from "@tanstack/react-router"
import { Separator } from "@/components/ui/separator"

export const Route = createFileRoute("/docs/functions")({
  component: FunctionsDoc,
})

function FunctionsDoc() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="font-heading text-3xl font-bold tracking-tight">
          Functions
        </h1>
        <p className="text-sm text-muted-foreground">
          Functions in Banana are first-class citizens. They can be bound to
          variables, passed as arguments, returned from other functions, and
          form closures that capture their enclosing lexical environment.
        </p>
      </div>

      <Separator />

      {/* Function Definitions */}
      <section className="space-y-4">
        <h2 className="font-heading text-xl font-bold">Function Definitions</h2>
        <p className="text-sm text-muted-foreground">
          Functions are defined using the{" "}
          <code className="bg-secondary px-1.5 py-0.5 text-xs text-foreground">
            fn
          </code>{" "}
          keyword. The last evaluated expression inside the function body is
          implicitly returned.
        </p>

        <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
          <code>{`let add = fn(a, b) {
    a + b
};`}</code>
        </pre>

        <div className="space-y-2 pt-2">
          <h3 className="font-heading text-lg font-medium">Explicit Returns</h3>
          <p className="text-sm text-muted-foreground">
            You can use the{" "}
            <code className="bg-secondary px-1.5 py-0.5 text-xs text-foreground">
              return
            </code>{" "}
            statement to return early or explicitly:
          </p>

          <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
            <code>{`let abs = fn(x) {
    if (x < 0) {
        return -x;
    }
    return x;
};`}</code>
          </pre>
        </div>
      </section>

      <Separator />

      {/* Calling Functions */}
      <section className="space-y-4">
        <h2 className="font-heading text-xl font-bold">Calling Functions</h2>
        <p className="text-sm text-muted-foreground">
          Call a function by appending parentheses with arguments to an
          expression that evaluates to a function:
        </p>

        <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
          <code>{`let result = add(2, 3);    // 5`}</code>
        </pre>

        <p className="text-sm text-muted-foreground">
          Functions can also call other functions and accept functions as
          arguments:
        </p>

        <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
          <code>{`let add = fn(a, b) { a + b };
let sub = fn(a, b) { a - b };
let apply = fn(f, a, b) { f(a, b) };
apply(add, 5, 3)    // 8
apply(sub, 5, 3)    // 2`}</code>
        </pre>
      </section>

      <Separator />

      {/* Closures */}
      <section className="space-y-4">
        <h2 className="font-heading text-xl font-bold">Closures</h2>
        <p className="text-sm text-muted-foreground">
          Functions capture their enclosing environment at definition time,
          maintaining access to bindings in their parent scope.
        </p>

        <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
          <code>{`let newAdder = fn(x) {
    fn(y) { x + y };
};
let addTwo = newAdder(2);
addTwo(3)     // 5
addTwo(10)    // 12`}</code>
        </pre>

        <p className="text-sm text-muted-foreground">
          The inner function closes over{" "}
          <code className="bg-secondary px-1.5 py-0.5 text-xs text-foreground">
            x
          </code>
          .
        </p>
      </section>

      <Separator />

      {/* Higher-Order Functions */}
      <section className="space-y-4">
        <h2 className="font-heading text-xl font-bold">
          Higher-Order Functions
        </h2>
        <p className="text-sm text-muted-foreground">
          Because functions can be passed as arguments and returned from other
          functions, you can implement higher-order functional patterns like map
          and reduce.
        </p>

        <div className="space-y-2 pt-2">
          <h3 className="font-heading text-lg font-medium">Map</h3>
          <p className="text-sm text-muted-foreground">
            Applies a transform function to each item in an array:
          </p>

          <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
            <code>{`let map = fn(arr, f) {
    if (len(arr) == 0) {
        []
    } else {
        push(map(rest(arr), f), f(head(arr)))
    }
};
let double = fn(x) { x * 2 };
map([1, 2, 3], double)    // [2, 4, 6]`}</code>
          </pre>
        </div>

        <div className="space-y-2 pt-2">
          <h3 className="font-heading text-lg font-medium">Reduce</h3>
          <p className="text-sm text-muted-foreground">
            Iteratively accumulates values across an array using a reducer
            function:
          </p>

          <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
            <code>{`let reduce = fn(arr, initial, f) {
    if (len(arr) == 0) {
        initial
    } else {
        reduce(rest(arr), f(initial, head(arr)), f)
    }
};
let sum = fn(arr) {
    reduce(arr, 0, fn(acc, x) { acc + x })
};
sum([1, 2, 3, 4, 5])    // 15`}</code>
          </pre>
        </div>
      </section>

      <Separator />

      {/* Immediately Invoked Functions */}
      <section className="space-y-4">
        <h2 className="font-heading text-xl font-bold">
          Immediately Invoked Functions
        </h2>
        <p className="text-sm text-muted-foreground">
          Function literals can be defined and immediately invoked in a single
          expression:
        </p>

        <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
          <code>{`fn(x) { x * 2 }(5)    // 10`}</code>
        </pre>
      </section>
    </div>
  )
}
