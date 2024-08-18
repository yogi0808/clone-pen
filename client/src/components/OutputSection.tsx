import React, { useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../store/store"

const OutputSection: React.FC = () => {
  const outputRef = useRef<HTMLIFrameElement | null>(null)
  const code = useSelector((state: RootState) => state.code)

  useEffect(() => {
    if (outputRef.current && outputRef.current.contentWindow) {
      try {
        // prettier-ignore
        outputRef.current.contentDocument!.body.innerHTML = `<style> ${code.css} </style>  ${code.html}`;
        // prettier-ignore
        (outputRef.current.contentWindow as any).eval(code.js)
      } catch (e) {
        console.error("Error: ", (e as Error).message)
      }
    }
  }, [code])

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
