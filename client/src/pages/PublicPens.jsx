import React from "react"
import { useEffect } from "react"
import { useSelector } from "react-redux"

// Files
import Loader from "../components/Loader"
import ProjectCard from "../components/ProjectCard"
import useGetPublicPens from "../Hooks/pen/useGetPublicPens"

const PublicPens = () => {
  const { pens } = useSelector((state) => state.publicPens)
  const { loading, getPublicPens } = useGetPublicPens()

  useEffect(() => {
    getPublicPens()
  }, [])

  return (
    <div className="w-full h-full flex gap-4 flex-wrap px-3 md:px-8 py-5 justify-center">
      {loading ? (
        <Loader />
      ) : pens.length <= 0 ? (
        <p className="text-center text-b-2">Pens Found.</p>
      ) : (
        pens.map((pen) => (
          <ProjectCard
            key={pen._id}
            pen={pen}
          />
        ))
      )}
    </div>
  )
}

export default PublicPens
