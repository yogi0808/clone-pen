import React, { useEffect } from "react"
import { useParams } from "react-router"

// Files
import Loader from "../components/Loader"
import Header from "../components/new project page/Header"
import Layout from "../components/new project page/Layout"
import useGetSinglePen from "../Hooks/pen/useGetSinglePen"

const ProjectPage = () => {
  const { penId } = useParams()

  const { loading, getSinglePen } = useGetSinglePen()

  useEffect(() => {
    getSinglePen(penId)
  }, [])

  useEffect(() => {
    const unloadWarning = (e) => {
      if (!confirm()) {
        e.preventDefault()
      }
    }

    window.addEventListener("beforeunload", unloadWarning)

    return () => window.removeEventListener("beforeunload", unloadWarning)
  }, [])

  return (
    <main className="w-screen h-screen flex-col flex items-start justify-start px-3 md:px-6">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Layout />
        </>
      )}
    </main>
  )
}

export default ProjectPage
