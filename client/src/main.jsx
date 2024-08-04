import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { Route, createRoutesFromChildren } from "react-router"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

// Files
import "./index.css"
import App from "./App.jsx"
import Home from "./pages/Home.jsx"
import store from "./store/store.js"
import ProjectPage from "./pages/ProjectPage.jsx"
import AppContextProvider from "./store/appContext.jsx"

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route
      path="/"
      element={<App />}
    >
      <Route
        path="/"
        index={true}
        element={<Home />}
      />
      <Route
        path="/pen"
        element={<ProjectPage />}
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContextProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </AppContextProvider>
  </React.StrictMode>
)
