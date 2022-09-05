import { useIsomorphicLayoutEffect } from "@scriptmate/utils"
import { add } from "@scriptmate/helpers"

export default function Docs() {
  useIsomorphicLayoutEffect(() => {
    console.log("scriptmate docs page")
  }, [])
  return (
    <div>
      <h1>Scriptmate Documentation</h1>
      <button
        onClick={() => {
          alert(add(74, 6))
        }}
      >
        Click me
      </button>
    </div>
  )
}
