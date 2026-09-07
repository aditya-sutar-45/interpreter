import * as React from "react"
import { Link, Outlet, createRootRoute } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
      <div className="flex h-screen w-screen flex-col items-center justify-start gap-4">
        <div className="flex w-full items-center justify-between bg-secondary p-2">
          <h1 className="font-heading text-2xl font-bold">Banana.</h1>

          <div>
            <Link to="/">
              <Button>Home</Button>
            </Link>

            <Link to="/code">
              <Button>Code</Button>
            </Link>

            <Link to="/docs/overview">
              <Button>Docs</Button>
            </Link>
          </div>
        </div>
        <div className="w-[90vw]">
          <Outlet />
        </div>
      </div>
    </React.Fragment>
  )
}
