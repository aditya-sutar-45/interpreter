import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
      <div className="h-screen w-screen flex flex-col items-center justify-start gap-4">
        <div className='w-full flex items-center justify-between bg-secondary p-2'>
          <h1 className='font-heading font-bold text-2xl'>
            Banana.
          </h1>

          <div>
            <Link to="/">
              <Button>Home</Button>
            </Link>

            <Link to="/code">
              <Button>Code</Button>
            </Link>

            <Link to="/docs">
              <Button>Docs</Button>
            </Link>
          </div>
        </div>
        <div className='w-[90vw]'>

          <Outlet />

        </div>
      </div>
    </React.Fragment>
  )
}
