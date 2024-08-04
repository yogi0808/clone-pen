import React, { useEffect, useRef } from "react"
import { useSelector } from "react-redux"

// Files

const OutputSection = () => {
  const outputRef = useRef()

  const { project } = useSelector((state) => state.project)

  useEffect(() => {
    try {
      outputRef.current.contentDocument.body.innerHTML = `<style> ${project.css} </style>  ${project.html}`

      outputRef.current.contentWindow.eval(project.js)
    } catch (e) {
      console.error("Error: ", e.message)
    }
  }, [project])

  return (
    <div className="w-full h-full bg-white">
      <iframe
        ref={outputRef}
        title="Output"
        className="w-full h-full border-none"
      />
    </div>
  )
}

export default OutputSection
