import { createRouter, RouterProvider } from "@tanstack/react-router"
import { routeTree } from "@/routeTree.gen"

const router = createRouter({
  routeTree,
});

export function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
