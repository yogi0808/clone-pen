import React from "react"
import { css } from "@codemirror/lang-css"
import { html } from "@codemirror/lang-html"
import CodeMirror from "@uiw/react-codemirror"
import { useDispatch, useSelector } from "react-redux"
import { dracula } from "@uiw/codemirror-theme-dracula"
import { javascript } from "@codemirror/lang-javascript"

// Files
import { debounce } from "../../utils/helper"
import { setCss, setHtml, setJs } from "../../store/features/projectSlice"

const Editor = ({ type }) => {
  const { project } = useSelector((state) => state.project)

  const dispatch = useDispatch()

  const onChange = debounce((text) => {
    switch (type) {
      case "css":
        dispatch(setCss(text))
        break
      case "html":
        dispatch(setHtml(text))
        break
      case "js":
        dispatch(setJs(text))
        break
      default:
        alert("There is some Problem with Editor")
        break
    }
  })

  return (
    <div className="h-full">
      {type === "html" && (
        <CodeMirror
          height="100%"
          className="w-full bg-[#070e25] text-[#ece8ff] h-full"
          extensions={[html()]}
          theme={dracula}
          value={project.html}
          onChange={onChange}
        />
      )}
      {type === "css" && (
        <CodeMirror
          height="100%"
          className="w-full bg-[#070e25] text-[#ece8ff] h-full"
          extensions={[css()]}
          theme={dracula}
          value={project.css}
          onChange={onChange}
        />
      )}

      {type === "js" && (
        <CodeMirror
          height="100%"
          className="w-full bg-[#070e25] text-[#ece8ff] h-full"
          extensions={[javascript({ jsx: true })]}
          theme={dracula}
          value={project.js}
          onChange={onChange}
        />
      )}
    </div>
  )
}

export default Editor
