import React, { useEffect } from "react"
import Layout from "../components/Layout"
import HeaderForPen from "../components/HeaderForPen"

const Pen: React.FC = () => {
  useEffect(() => {
    const unloadWarning = (e: BeforeUnloadEvent) => {
      if (!confirm()) {
        e.preventDefault()
      }
    }

    window.addEventListener("beforeunload", unloadWarning)

    return () => window.removeEventListener("beforeunload", unloadWarning)
  }, [])

  return (
    <div className="h-screen w-full flex flex-col">
      <HeaderForPen />
      <Layout />
    </div>
  )
}

export default Pen
