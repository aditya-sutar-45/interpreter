import { createFileRoute } from "@tanstack/react-router"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export const Route = createFileRoute("/docs/built-in-functions")({
  component: BuiltInFunctionsPage,
})

const functions = [
  {
    name: "len",
    signature: "len(value) -> Integer",
    description:
      "Returns the number of characters in a string or the number of elements in an array.",
    code: `len("hello")         // 5
len("")              // 0
len([1, 2, 3])       // 3
len([])              // 0`,
    details: [
      "Accepts exactly one argument: a String or an Array.",
      "Returns an Integer representing the length.",
      "Produces a runtime error if passed an unsupported type (such as an Integer, Boolean, or Hash) or the wrong number of arguments.",
    ],
    errors: "Wrong argument count, unsupported type",
  },
  {
    name: "head",
    signature: "head(array) -> Object | null",
    description:
      "Returns the first element of an array without modifying the original array.",
    code: `head([1, 2, 3])    // 1
head([42])         // 42
head([])           // null`,
    details: [
      "Accepts exactly one argument: an Array.",
      "Returns the first element of the array, or null if the array is empty.",
      "Does not modify the original array.",
      "Produces a runtime error if the argument is not an Array or if argument count is not 1.",
    ],
    errors: "Wrong argument count, non-array argument",
  },
  {
    name: "tail",
    signature: "tail(array) -> Object | null",
    description:
      "Returns the last element of an array without modifying the original array.",
    code: `tail([1, 2, 3])    // 3
tail([42])         // 42
tail([])           // null`,
    details: [
      "Accepts exactly one argument: an Array.",
      "Returns the last element of the array, or null if the array is empty.",
      "Does not modify the original array.",
      "Produces a runtime error if the argument is not an Array or if argument count is not 1.",
    ],
    errors: "Wrong argument count, non-array argument",
  },
  {
    name: "rest",
    signature: "rest(array) -> Array | null",
    description:
      "Returns a new array containing every element from the input array except the first.",
    code: `rest([1, 2, 3])    // [2, 3]
rest([1, 2])       // [2]
rest([1])          // []
rest([])           // null`,
    details: [
      "Accepts exactly one argument: an Array.",
      "Returns a new Array without the first element, or null if the array is empty.",
      "Returns an empty array [] when called on a single-element array.",
      "Does not modify the original array.",
    ],
    errors: "Wrong argument count, non-array argument",
  },
  {
    name: "push",
    signature: "push(array, element) -> Array",
    description:
      "Returns a new array with the specified element appended to the end.",
    code: `push([1, 2, 3], 4)       // [1, 2, 3, 4]
push([], 1)              // [1]
push([1], "hello")       // [1, "hello"]`,
    details: [
      "Accepts exactly two arguments: the target Array and the element to append.",
      "Returns a brand-new Array with the element appended; the input array is left untouched.",
      "Supports elements of any type, including integers, strings, booleans, arrays, or functions.",
    ],
    errors: "Wrong argument count (requires 2), first argument not an array",
  },
  {
    name: "pop",
    signature: "pop(array) -> Array | null",
    description:
      "Returns a new array with the last element removed without altering the input array.",
    code: `pop([1, 2, 3])    // [1, 2]
pop([1])          // []
pop([])           // null`,
    details: [
      "Accepts exactly one argument: an Array.",
      "Returns a new Array omitting the last element.",
      "Returns null if the input array is empty.",
      "Returns an empty array [] if the input array had a single element.",
      "Does not modify the original array.",
    ],
    errors: "Wrong argument count, non-array argument",
  },
  {
    name: "print",
    signature: "print(args...) -> null",
    description:
      "Prints the string representation of each argument to standard output, separated by newlines.",
    code: `print("Hello, World!")    // prints: Hello, World!
print(42)                 // prints: 42
print([1, 2, 3])          // prints: [1, 2, 3]`,
    details: [
      "Accepts any number of arguments (variadic).",
      "Converts each argument to its string representation using internal Inspect() evaluation.",
      "Always returns null.",
    ],
    errors: "None (accepts any number and types of arguments)",
  },
]

function BuiltInFunctionsPage() {
  return (
    <div className="flex flex-col gap-8 pb-16">
      {/* Page Header */}
      <div className="flex flex-col gap-2">
        <h1 className="font-heading text-3xl font-bold tracking-tight">
          Built-in Functions
        </h1>
        <p className="text-sm text-muted-foreground">
          Banana provides 7 built-in functions for string inspection, array
          manipulation, and output. All built-in functions are immutable and
          never mutate their arguments.
        </p>
      </div>

      {/* Immutability Callout */}
      <div className="border border-border bg-secondary/40 p-4">
        <h2 className="font-heading text-sm font-bold text-foreground">
          Immutability Guarantee
        </h2>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
          None of Banana&apos;s built-in functions modify data in place.
          Operations like{" "}
          <code className="bg-secondary px-1 py-0.5 font-mono text-foreground">
            push
          </code>
          ,{" "}
          <code className="bg-secondary px-1 py-0.5 font-mono text-foreground">
            pop
          </code>
          , and{" "}
          <code className="bg-secondary px-1 py-0.5 font-mono text-foreground">
            rest
          </code>{" "}
          allocate and return new arrays, preserving functional purity and
          preventing unintended side effects.
        </p>
      </div>

      <Separator />

      {/* Quick Reference Table */}
      <div className="flex flex-col gap-3">
        <h2 className="font-heading text-xl font-bold">Quick Reference</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr>
                <th className="border-b border-border p-2 text-left font-heading font-medium">
                  Function
                </th>
                <th className="border-b border-border p-2 text-left font-heading font-medium">
                  Signature
                </th>
                <th className="border-b border-border p-2 text-left font-heading font-medium">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {functions.map((fn) => (
                <tr key={fn.name}>
                  <td className="border-b border-border p-2 font-mono font-medium text-primary">
                    {fn.name}
                  </td>
                  <td className="border-b border-border p-2 font-mono text-muted-foreground">
                    {fn.signature}
                  </td>
                  <td className="border-b border-border p-2 text-muted-foreground">
                    {fn.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Separator />

      {/* Individual Function Subsections */}
      <div className="flex flex-col gap-8">
        <h2 className="font-heading text-xl font-bold">Function Reference</h2>

        {functions.map((fn, index) => (
          <div key={fn.name} className="flex flex-col gap-6">
            <section className="flex flex-col gap-3" id={fn.name}>
              <div className="flex flex-wrap items-center gap-2.5">
                <h3 className="font-heading text-lg font-medium">{fn.name}</h3>
                <Badge
                  variant="secondary"
                  className="font-mono text-xs font-normal"
                >
                  {fn.signature}
                </Badge>
              </div>

              <p className="text-xs leading-relaxed text-muted-foreground">
                {fn.description}
              </p>

              <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
                <code>{fn.code}</code>
              </pre>

              <div className="flex flex-col gap-1.5 pt-1">
                <h4 className="font-heading text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  Behavior & Errors
                </h4>
                <ul className="flex list-inside list-disc flex-col gap-1 text-xs text-muted-foreground">
                  {fn.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </section>

            {index < functions.length - 1 && <Separator />}
          </div>
        ))}
      </div>
    </div>
  )
}
