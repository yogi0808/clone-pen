import React from "react"
import { Outlet } from "react-router"
import { Toaster } from "react-hot-toast"

// Files
import NewProjectPopup from "./components/NewProjectPopup"

// Files

const App = () => {
  return (
    <main className="w-full min-h-screen bg-b-4">
      <Toaster />
      <Outlet />
      <NewProjectPopup />
    </main>
  )
}

export default App
