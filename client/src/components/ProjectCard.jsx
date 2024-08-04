import React from "react"

const ProjectCard = () => {
  const code = `<style> *{padding:0;margin:0;box-sizing:border-box;}body{min-height:100vh;display:flex;align-items:center;justify-content:center;}h1{color:green;text-align:center;} </style>  <h1>Hello World</h1>`

  return (
    <div className="max-w-72 max-h-72 w-fit h-full bg-b-1 p-3 rounded-md flex flex-col gap-3">
      <div className="w-64 aspect-video bg-w overflow-hidden rounded-md scale-95 hover:scale-100 transition-all duration-300 ease-out">
        <iframe
          srcDoc={code}
          className="w-full h-full"
        />
      </div>
      <div className="flex gap-2">
        <div className="size-12 flex items-center justify-center text-3xl font-semibold bg-orange-400 rounded-lg uppercase">
          y
        </div>
        <div>
          <p>new Project</p>
          <p className="text-b-2 text-sm">Yogi0808</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
