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
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"
import PublicPens from "./pages/PublicPens.jsx"
import ProjectPage from "./pages/ProjectPage.jsx"
import ProtectRoutes from "./components/ProtectRoutes.jsx"
import ProtectRoutesFromLoggedIn from "./components/ProtectRoutesFromLoggedIn.jsx"

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route
      path="/"
      element={<App />}
    >
      <Route
        path=""
        element={<Home />}
      >
        <Route
          path="/"
          element={<PublicPens />}
        />
        <Route
          path=""
          element={<ProtectRoutesFromLoggedIn />}
        >
          <Route
            path="/signin"
            element={<Register />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
        </Route>
      </Route>
      <Route
        path="/pen"
        element={<ProjectPage />}
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
