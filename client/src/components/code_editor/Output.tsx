import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router';
import { SquareArrowOutUpRight } from "lucide-react";
import type { RunCodeResponse } from '@/lib/api';

function Output({ handleCodeSubmit, output }: { handleCodeSubmit: () => Promise<void>, output: RunCodeResponse }) {
  return (
    <div className='h-full w-full p-2'>
      <div className='flex items-center justify-between h-[8%] w-full'>
        <h1 className='font-heading ml-2'>Output</h1>
        <Button variant="outline" onClick={handleCodeSubmit}>
          Run Code
        </Button>
      </div>
      <Separator />
      <div className='mt-2 ml-2 p-2 bg-secondary h-[85%] overflow-y-auto'>
        <p className='text-sm font-bold text-primary'>
          {output.output}
        </p>
        <div>
          {output.errors && output.errors.map((err, i) => (
            <p key={i} className='text-destructive text-sm'>{err}</p>
          ))}
        </div>
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
