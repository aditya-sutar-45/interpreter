import { createFileRoute } from '@tanstack/react-router'
import Editor from "@monaco-editor/react"
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable'
import Output from '@/components/code_editor/Output'
import { useState } from 'react'


export const Route = createFileRoute('/code')({
  component: RouteComponent,
})

function RouteComponent() {
  const [code, setCode] = useState("// write your code here")

  const runCode = async () => {
    console.log(code)
  }

  return (
    <div className='w-full h-full border p-2 border-secondary'>
      <ResizablePanelGroup orientation="horizontal">
        <ResizablePanel defaultSize="60%">
          <Editor
            height="85vh"
            width="100%"
            defaultLanguage="javascript"
            value={code}
            onChange={c => setCode(c || '')}
            theme='vs-dark'
          />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize="40%">
          <Output runCode={runCode} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
