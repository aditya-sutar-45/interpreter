import { createFileRoute } from "@tanstack/react-router"
import Editor from "@monaco-editor/react"
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable"
import Output from "@/components/code_editor/Output"
import { useState } from "react"
import { runCode, type RunCodeResponse } from "@/lib/api"

export const Route = createFileRoute("/code")({
  component: RouteComponent,
})

function RouteComponent() {
  const [code, setCode] = useState("// write your code here")
  const [output, setOutput] = useState<RunCodeResponse>({ output: "" })

  const handleCodeSubmit = async () => {
    try {
      const output = await runCode(code)
      setOutput(output)
      console.log(output)
    } catch (err) {
      console.error("Error running code:", err)
    }
  }

  return (
    <div className="h-full w-full border border-secondary p-2">
      <ResizablePanelGroup orientation="horizontal">
        <ResizablePanel defaultSize="60%">
          <Editor
            height="85vh"
            width="100%"
            value={code}
            onChange={(c) => setCode(c || "")}
            theme="vs-dark"
          />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize="40%">
          <Output handleCodeSubmit={handleCodeSubmit} output={output} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
