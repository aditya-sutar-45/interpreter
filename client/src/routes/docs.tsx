import {
  createFileRoute,
  Outlet,
  Link,
  useMatches,
} from "@tanstack/react-router"
import { docsNav } from "@/lib/docs-nav"

export const Route = createFileRoute("/docs")({
  component: DocsLayout,
})

function SidebarContent({ currentPath }: { currentPath: string }) {
  return (
    <>
      {docsNav.map((group) => (
        <div key={group.title} className="flex flex-col gap-1">
          <h4 className="font-heading text-xs font-bold tracking-wider text-muted-foreground uppercase">
            {group.title}
          </h4>
          <div className="flex flex-col">
            {group.items.map((item) => {
              const to = `/docs/${item.slug}`
              const isActive = currentPath === to

              return (
                <Link
                  key={item.slug}
                  to={to}
                  className={`px-2 py-1.5 text-xs transition-colors ${
                    isActive
                      ? "bg-secondary font-medium text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.title}
                </Link>
              )
            })}
          </div>
        </div>
      ))}
    </>
  )
}

function DocsLayout() {
  const matches = useMatches()
  const lastMatch = matches[matches.length - 1]
  const currentPath = lastMatch?.fullPath ?? ""

  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100vh-56px)]">
      {/* Desktop sidebar */}
      <aside className="hidden w-56 shrink-0 border-r border-border md:block">
        <nav className="sticky top-14 flex max-h-[calc(100vh-56px)] flex-col gap-4 overflow-y-auto p-4">
          <SidebarContent currentPath={currentPath} />
        </nav>
      </aside>

      {/* Mobile nav */}
      <div className="border-b border-border p-3 md:hidden">
        <details className="group">
          <summary className="cursor-pointer font-heading text-xs font-bold tracking-wider text-muted-foreground uppercase">
            Documentation Menu
          </summary>
          <nav className="mt-2 flex flex-col gap-3">
            <SidebarContent currentPath={currentPath} />
          </nav>
        </details>
      </div>

      {/* Content */}
      <main className="flex-1 overflow-y-auto p-6 md:p-10">
        <div className="mx-auto max-w-3xl">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
