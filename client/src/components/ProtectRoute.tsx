import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../store/store"
import { Navigate, Outlet } from "react-router"

const ProtectRoute: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.user)

  return user !== null ? (
    <Navigate
      to="/"
      replace
    />
  ) : (
    <Outlet />
  )
}

export default ProtectRoute
