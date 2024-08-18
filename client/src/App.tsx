import React from "react"
import { Toaster } from "react-hot-toast"
import { Outlet } from "react-router"

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-bg">
      <Toaster />
      <Outlet />
    </main>
  )
}

export default App
