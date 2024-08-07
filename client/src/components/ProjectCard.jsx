import React from "react"
import { Link } from "react-router-dom"

const ProjectCard = ({ pen }) => {
  const colors = [
    "#FFAD60",
    "#A2CA71",
    "#387F39",
    "#F5004F",
    "#021526",
    "#FFB22C",
    "#FF4C4C",
    "#180161",
    "#FB773C",
    "#1A3636",
    "#88D66C",
    "#2E236C",
    "#433D8B",
    "#17153B",
  ]

  const bgColor = colors[Math.floor(Math.random() * colors.length)]

  return (
    <div className="max-h-72 w-fit h-fit bg-b-1 p-3 rounded-md flex flex-col gap-3">
      <div className="flex gap-2 min-w-64">
        <div
          style={{ backgroundColor: bgColor }}
          className="size-12 flex items-center justify-center text-3xl font-semibold rounded-lg uppercase"
        >
          {pen.username.charAt(0)}
        </div>
        <div>
          <Link
            to={`/pen/${pen._id}`}
            className="line-clamp-1 hover:text-b-2 transition-all duration-300 ease-out"
          >
            {pen.title}
          </Link>
          <p className="text-b-2 text-sm">{pen.username}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
