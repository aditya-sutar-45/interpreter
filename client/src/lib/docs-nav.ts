export type DocNavItem = {
  title: string
  slug: string
}

export type DocNavGroup = {
  title: string
  items: DocNavItem[]
}

export const docsNav: DocNavGroup[] = [
  {
    title: "Getting Started",
    items: [{ title: "Overview", slug: "overview" }],
  },
  {
    title: "Language",
    items: [
      { title: "Data Types", slug: "data-types" },
      { title: "Variables", slug: "variables" },
      { title: "Operators", slug: "operators" },
      { title: "Control Flow", slug: "control-flow" },
      { title: "Functions", slug: "functions" },
    ],
  },
  {
    title: "Standard Library",
    items: [{ title: "Built-in Functions", slug: "built-in-functions" }],
  },
  {
    title: "Reference",
    items: [
      { title: "Error Handling", slug: "error-handling" },
      { title: "Keywords", slug: "keywords" },
      { title: "REPL Usage", slug: "repl-usage" },
      { title: "Differences from Monkey", slug: "differences-from-monkey" },
      { title: "Grammar Reference", slug: "grammar-reference" },
    ],
  },
]

export const allDocSlugs = docsNav.flatMap((group) =>
  group.items.map((item) => item.slug)
)
