import { createFileRoute } from "@tanstack/react-router"
import { Separator } from "@/components/ui/separator"

export const Route = createFileRoute("/docs/repl-usage")({
  component: ReplUsageDoc,
})

function ReplUsageDoc() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="font-heading text-3xl font-bold tracking-tight">
          REPL Usage
        </h1>
        <p className="text-sm text-muted-foreground">
          Banana includes an interactive Read-Eval-Print Loop (REPL) that allows
          you to test, evaluate, and experiment with Banana expressions and statements
          in real time directly from your terminal.
        </p>
      </div>

      <Separator />

      {/* Starting the REPL */}
      <section className="space-y-4">
        <h2 className="font-heading text-xl font-bold">Starting the REPL</h2>
        <p className="text-sm text-muted-foreground">
          To launch the REPL from the root directory of the interpreter repository,
          run:
        </p>

        <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
          <code>go run main.go</code>
        </pre>

        <p className="text-sm text-muted-foreground">
          On startup, Banana prints an ASCII banana banner followed by a greeting
          and displays the <code className="bg-secondary px-1.5 py-0.5 text-xs text-foreground">&gt;&gt;&gt;&gt;</code> prompt, indicating it is ready to receive input.
        </p>
      </section>

      <Separator />

      {/* Example Session */}
      <section className="space-y-4">
        <h2 className="font-heading text-xl font-bold">Example Session</h2>
        <p className="text-sm text-muted-foreground">
          Here is an example walkthrough demonstrating variable declaration,
          arithmetic evaluation, and function definitions inside the REPL:
        </p>

        <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
          <code>{`>>>> let x = 10;
>>>> let y = 20;
>>>> x + y
30
>>>> let add = fn(a, b) { a + b };
>>>> add(x, y)
30`}</code>
        </pre>
      </section>

      <Separator />

      {/* Behavior & Notes */}
      <section className="space-y-6">
        <h2 className="font-heading text-xl font-bold">Key Characteristics &amp; Notes</h2>

        <div className="space-y-3">
          <h3 className="font-heading text-lg font-medium">Single-Line Input</h3>
          <p className="text-sm text-muted-foreground">
            Each REPL command is read line by line. Multi-line input blocks are not
            currently supported, so functions and conditionals must be entered on a
            single line.
          </p>
          <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
            <code>{`>>>> let max = fn(a, b) { if (a > b) { a } else { b } };
>>>> max(15, 30)
30`}</code>
          </pre>
        </div>

        <div className="space-y-3">
          <h3 className="font-heading text-lg font-medium">Inline Parse Errors</h3>
          <p className="text-sm text-muted-foreground">
            If an input contains syntax or lexical errors, the parser prints diagnostic
            messages directly to the console and resumes the prompt without crashing
            the interpreter.
          </p>
          <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
            <code>{`>>>> let 123 = "bad";
Woops! We ran into some monkey business here!
 parser errors:
	expected next token to be IDENT, got INT instead`}</code>
          </pre>
        </div>

        <div className="space-y-3">
          <h3 className="font-heading text-lg font-medium">Persistent Environment</h3>
          <p className="text-sm text-muted-foreground">
            The interpreter maintains a single global environment across the entire
            interactive session. Variables, functions, and data structures bound with
            <code className="bg-secondary px-1.5 py-0.5 text-xs text-foreground">let</code> remain available to all subsequent expressions.
          </p>
          <pre className="overflow-x-auto bg-secondary p-3 text-xs leading-relaxed">
            <code>{`>>>> let data = [1, 2, 3];
>>>> let doubled = push(data, 4);
>>>> doubled
[1, 2, 3, 4]
>>>> data
[1, 2, 3]`}</code>
          </pre>
        </div>

        <div className="space-y-3">
          <h3 className="font-heading text-lg font-medium">Exiting the REPL</h3>
          <p className="text-sm text-muted-foreground">
            To terminate your interactive session, press{" "}
            <kbd className="bg-secondary px-1.5 py-0.5 text-xs text-foreground font-mono">
              Ctrl+D
            </kbd>{" "}
            to signal an End-Of-File (EOF) to the scanner, or interrupt the process with{" "}
            <kbd className="bg-secondary px-1.5 py-0.5 text-xs text-foreground font-mono">
              Ctrl+C
            </kbd>.
          </p>
        </div>
      </section>

      <Separator />

      {/* Quick Reference Table */}
      <section className="space-y-4">
        <h2 className="font-heading text-xl font-bold">REPL Controls Summary</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr>
                <th className="text-left p-2 font-heading font-medium border-b border-border">
                  Action
                </th>
                <th className="text-left p-2 font-heading font-medium border-b border-border">
                  Command / Key
                </th>
                <th className="text-left p-2 font-heading font-medium border-b border-border">
                  Behavior
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border-b border-border font-mono font-medium text-foreground">
                  Launch REPL
                </td>
                <td className="p-2 border-b border-border font-mono text-primary">
                  go run main.go
                </td>
                <td className="p-2 border-b border-border text-muted-foreground">
                  Initializes session and displays the &gt;&gt;&gt;&gt; prompt
                </td>
              </tr>
              <tr>
                <td className="p-2 border-b border-border font-mono font-medium text-foreground">
                  Exit REPL
                </td>
                <td className="p-2 border-b border-border font-mono text-primary">
                  Ctrl+D
                </td>
                <td className="p-2 border-b border-border text-muted-foreground">
                  Sends EOF signal and cleanly terminates the interpreter
                </td>
              </tr>
              <tr>
                <td className="p-2 border-b border-border font-mono font-medium text-foreground">
                  Interrupt
                </td>
                <td className="p-2 border-b border-border font-mono text-primary">
                  Ctrl+C
                </td>
                <td className="p-2 border-b border-border text-muted-foreground">
                  Sends SIGINT to abort the active process
                </td>
              </tr>
              <tr>
                <td className="p-2 border-b border-border font-mono font-medium text-foreground">
                  Evaluate Line
                </td>
                <td className="p-2 border-b border-border font-mono text-primary">
                  Enter / Return
                </td>
                <td className="p-2 border-b border-border text-muted-foreground">
                  Parses and evaluates the current line, printing the result
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
