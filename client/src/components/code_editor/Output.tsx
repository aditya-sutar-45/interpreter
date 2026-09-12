import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Link } from "@tanstack/react-router"
import { SquareArrowOutUpRight } from "lucide-react"
import type { RunCodeResponse } from "@/lib/api"
import { Spinner } from "../ui/spinner"

function Output({
  handleCodeSubmit,
  output,
  loading,
}: {
  handleCodeSubmit: () => Promise<void>
  output: RunCodeResponse
  loading: boolean
}) {
  return (
    <div className="h-full w-full p-2">
      <div className="flex h-[8%] w-full items-center justify-between">
        <h1 className="ml-2 font-heading">Output</h1>
        <Button variant="outline" onClick={handleCodeSubmit} disabled={loading}>
          {loading ? <Spinner /> : "Run Code"}
        </Button>
      </div>
      <Separator />
      <div className="mt-2 ml-2 h-[85%] overflow-y-auto bg-secondary p-2">
        <p className="text-sm font-bold text-primary">{output.output}</p>
        <div>
          {output.errors &&
            output.errors.map((err, i) => (
              <p key={i} className="text-sm text-destructive">
                {err}
              </p>
            ))}
        </div>
      </div>
      <div className="m-2 h-[5%] text-sm">
        <Link to="/docs/overview">
          <Button variant="link">
            Visit docs to learn more
            <SquareArrowOutUpRight className="ml-1" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Output
