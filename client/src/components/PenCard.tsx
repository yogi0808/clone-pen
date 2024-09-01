import React from "react"

interface PenProp {
  pen: any
}

const PenCard: React.FC<PenProp> = ({ pen }: PenProp) => {
  return (
    <div className="max-w-96 h-full bg-p-4 rounded-lg overflow-hidden flex flex-col gap-2">
      <div className="w-96 h-full aspect-video relative">
        <iframe
          className="w-[calc(200%+5px)] h-[calc(200%+5px)] absolute border-0 -top-[2px] -left-[2px] scale-50 origin-top-left"
          src={`/api/v1/pen/preview/${pen._id}`}
        />
      </div>
      <div className="w-full flex gap-3">
        <div className="m-2 size-12 bg-blue-400 rounded-md font-semibold uppercase flex items-center justify-center text-2xl">
          {pen.user.username.charAt(0)}
        </div>
        <div className="flex flex-col justify-center">
          <h6 className="font-medium text-w text-lg line-clamp-1">
            {pen?.title}
          </h6>
          <p className="font-medium text-p-3 text-sm">{pen.user.username}</p>
        </div>
      </div>
    </div>
  )
}

export default PenCard
