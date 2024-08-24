import React, { useEffect } from "react"
import Layout from "../components/Layout"
import HeaderForPen from "../components/HeaderForPen"
import { useParams } from "react-router"
import usePen from "../Hooks/usePen"

const Pen: React.FC = () => {
  const { penId } = useParams()

  const { loading, getSinglePen } = usePen()

  useEffect(() => {
    const unloadWarning = (e: BeforeUnloadEvent) => {
      if (!confirm()) {
        e.preventDefault()
      }
    }

    window.addEventListener("beforeunload", unloadWarning)

    return () => window.removeEventListener("beforeunload", unloadWarning)
  }, [])

  useEffect(() => {
    getSinglePen(penId)
  }, [penId])

  return loading ? (
    <div className="h-screen w-full flex items-center justify-center">
      <p>Loading...</p>
    </div>
  ) : (
    <div className="h-screen w-full flex flex-col">
      <HeaderForPen />
      <Layout />
    </div>
  )
}

export default Pen
