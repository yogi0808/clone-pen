import React, { useEffect } from "react"
import Header from "../components/Header"
import PenCard from "../components/PenCard"
import usePen from "../Hooks/usePen"
import { useSelector } from "react-redux"
import { RootState } from "../store/store"

const Home: React.FC = () => {
  const { loading, getAllPublicPens } = usePen()

  useEffect(() => {
    getAllPublicPens()
  }, [])

  const { pens } = useSelector((state: RootState) => state.pens)

  return (
    <div>
      <Header />
      <div className="w-full h-full flex flex-wrap justify-center gap-4 p-4">
        {loading
          ? "Loading..."
          : pens.length < 0
          ? "There is no Public Pens to show."
          : pens.map((pen: any) => (
              <PenCard
                key={pen._id}
                pen={pen}
              />
            ))}
      </div>
    </div>
  )
}

export default Home
