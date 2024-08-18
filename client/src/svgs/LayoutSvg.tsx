import React from "react"
import { useSelector } from "react-redux"
import type { RootState } from "../store/store"

const LayoutSvg: React.FC = () => {
  const { layout } = useSelector((state: RootState) => state.layout)
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 21 23"
      fill="none"
      className={`${layout === "top" ? "rotate-180" : ""} ${
        layout === "left" ? "rotate-90" : ""
      } ${
        layout === "right" ? "-rotate-90" : ""
      } transition-all duration-300 ease-out`}
    >
      <path
        d="M2 0.7H7.47369C8.19166 0.7 8.77368 1.28203 8.77368 2V4.08696C8.77368 4.80493 8.19166 5.38696 7.47368 5.38696H2C1.28203 5.38696 0.7 4.80493 0.7 4.08696V2C0.7 1.28203 1.28203 0.7 2 0.7Z"
        stroke="#f8fafc"
        strokeWidth="1.4"
      />
      <rect
        x="0.7"
        y="8.78694"
        width="8.07368"
        height="4.68696"
        rx="1.3"
        stroke="#f8fafc"
        strokeWidth="1.4"
      />
      <rect
        x="0.7"
        y="16.8739"
        width="8.07368"
        height="4.68696"
        rx="1.3"
        stroke="#f8fafc"
        strokeWidth="1.4"
      />
      <rect
        x="11.7"
        y="0.7"
        width="8.6"
        height="20.6"
        rx="1.3"
        stroke="#f8fafc"
        strokeWidth="1.4"
      />
    </svg>
  )
}

export default LayoutSvg
