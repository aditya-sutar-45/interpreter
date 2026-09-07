const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000"

export type RunCodeResponse = {
  output: string
  errors?: string[]
}

export const runCode = async (input: string) => {
  const response = await fetch(`${BASE_URL}/v1/run`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ code: input }),
  })

  if (!response.ok) {
    throw new Error(`Error: ${response.status} ${response.statusText}`)
  }

  const output = (await response.json()) as RunCodeResponse

  return output
}
