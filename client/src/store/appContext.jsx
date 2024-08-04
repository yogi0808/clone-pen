import { createContext, useContext, useState } from "react"

const appContext = createContext()

export const useAppContext = () => useContext(appContext)

const AppContextProvider = ({ children }) => {
  const [projectName, setProjectName] = useState("Untitled")
  const [htmlCode, setHtmlCode] = useState("") // Global state for HTML code
  const [cssCode, setCssCode] = useState("") // Global State for CSS code
  const [jsCode, setJsCode] = useState("") // Global state for JavaScript Code
  const [layout, setLayout] = useState("left") // Global state for Layout

  const changeProjectName = (name) => {
    if (!name) {
      setProjectName("Untitled")
    } else {
      setProjectName(name)
    }
  }

  return (
    <appContext.Provider
      value={{
        htmlCode,
        setHtmlCode,
        cssCode,
        setCssCode,
        jsCode,
        setJsCode,
        layout,
        setLayout,
        projectName,
        changeProjectName,
      }}
    >
      {children}
    </appContext.Provider>
  )
}

export default AppContextProvider
