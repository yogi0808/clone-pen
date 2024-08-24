import React, { useEffect } from "react"
import Layout from "../components/Layout"
import HeaderForPen from "../components/HeaderForPen"
import { useParams } from "react-router"

const Pen: React.FC = () => {
  const { penId } = useParams()

  useEffect(() => {
    const unloadWarning = (e: BeforeUnloadEvent) => {
      if (!confirm()) {
        e.preventDefault()
      }
    }

    window.addEventListener("beforeunload", unloadWarning)

    return () => window.removeEventListener("beforeunload", unloadWarning)
  }, [])

  console.log(penId)

  return (
    <div className="h-screen w-full flex flex-col">
      <HeaderForPen />
      <Layout />
    </div>
  )
}

export default Pen
