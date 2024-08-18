import React from "react"
import { Editor as MonacoEditor } from "@monaco-editor/react"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../store/store"
import { setCss, setHtml, setJs } from "../store/features/codeSlice"
import { debounce } from "../utils/helper"

interface Props {
  len: "html" | "css" | "javascript"
}

const Editor: React.FC<Props> = ({ len }) => {
  const { html, css, js } = useSelector((state: RootState) => state.code)

  const dispatch = useDispatch()

  const onChange = debounce((value) => {
    switch (len) {
      case "html":
        dispatch(setHtml(value))
        break
      case "css":
        dispatch(setCss(value))
        break
      case "javascript":
        dispatch(setJs(value))
    }
  })

  return (
    <MonacoEditor
      className="flex-1 w-full h-full"
      defaultLanguage={len} // Set the default language
      value={len === "html" ? html : len === "css" ? css : js} // Bind the code to state
      onChange={onChange} // Handle code change
      theme="vs-dark" // Set the theme
    />
  )
}

export default Editor
