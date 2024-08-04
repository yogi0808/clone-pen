import React from "react"
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router"

const ProtectRoutesFromLoggedIn = () => {
  const { user } = useSelector((state) => state.user)

  return user ? (
    <Navigate
      to={"/"}
      replace
    />
  ) : (
    <Outlet />
  )
}

export default ProtectRoutesFromLoggedIn
