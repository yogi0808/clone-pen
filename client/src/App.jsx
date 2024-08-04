import React from "react"
import { Toaster } from "react-hot-toast"
import { Outlet } from "react-router"

// Files

const App = () => {
  return (
    <main className="w-full min-h-screen bg-b-4">
      <Toaster />
      <Outlet />
    </main>
  )
}

export default App
