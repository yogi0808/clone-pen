import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"

// Files
import Header from "../components/new project page/Header"
import Layout from "../components/new project page/Layout"

const ProjectPage = () => {
  const { project } = useSelector((state) => state.project)

  const navigate = useNavigate()

  useEffect(() => {
    if (!project.title) {
      navigate("/")
    }
  }, [project.title])

  useEffect(() => {
    const unloadWarning = (e) => {
      if (!confirm()) {
        e.preventDefault()
      }
    }

    window.addEventListener("beforeunload", unloadWarning)

    return () => window.removeEventListener("beforeunload", unloadWarning)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === "s") {
        e.preventDefault() // Prevent the default browser save dialog
        // Your custom logic here
        console.log("Ctrl+S pressed")
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <main className="w-screen h-screen flex-col flex items-start justify-start px-3 md:px-6">
      <Header />
      <Layout />
    </main>
  )
}

export default ProjectPage
