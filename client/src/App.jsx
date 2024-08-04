import React from "react"
import { Outlet } from "react-router"

// Files

const App = () => {
  return (
    <main className="w-full min-h-screen bg-b-4">
      <Outlet />
    </main>
  )
}

export default App
