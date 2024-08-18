import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
import Home from "./pages/Home.tsx"
import { RouterProvider } from "react-router"
import Login from "./pages/Login.tsx"
import SignIn from "./pages/SignIn.tsx"
import Pen from "./pages/Pen.tsx"
import { Provider } from "react-redux"
import { store } from "./store/store.ts"
import ProtectRoute from "./components/ProtectRoute.tsx"

const router = createBrowserRouter(
  createRoutesFromElements(
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
        path=""
        element={<ProtectRoute />}
      >
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/signin"
          element={<SignIn />}
        />
      </Route>
      <Route
        path="/pen"
        element={<Pen />}
      />
    </Route>
  )
)

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
