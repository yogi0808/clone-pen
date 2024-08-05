import React from "react"
import { Outlet } from "react-router"

// Files
import Header from "../components/Header"
import SideBar from "../components/SideBar"

const Home = () => {
  return (
    <main className="w-full flex">
      <SideBar />
      <div className="flex-1 flex flex-col min-h-screen">
        <Header />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </main>
  )
}

export default Home
