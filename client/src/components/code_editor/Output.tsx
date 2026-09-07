import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router';
import { SquareArrowOutUpRight } from "lucide-react";

function Output({ runCode }: { runCode: () => Promise<void> }) {
  return (
    <div className='h-full w-full p-2'>
      <div className='flex items-center justify-between h-[8%] w-full'>
        <h1 className='font-heading ml-2'>Output</h1>
        <Button variant="outline" onClick={runCode}>
          Run Code
        </Button>
      </div>
      <Separator />
      <div className='mt-2 ml-2 p-2 bg-secondary h-[85%] overflow-y-auto'>
        <p className='text-sm'>No output.</p>
      </div>
      <div className='h-[5%] m-2 text-sm'>
        <Link to="/docs">
          <Button variant="link">
            Visit docs to learn more
            <SquareArrowOutUpRight className='ml-1' />
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Output;
