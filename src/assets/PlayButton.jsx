import * as React from "react"

const PlayButton = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <circle cx={20} cy={20} r={19} stroke="#D8D8D8" strokeWidth={2} />
      <path
        fill="#D8D8D8"
        d="M14.881 13.957v12.924a1 1 0 0 0 1.503.864l10.983-6.388a1 1 0 0 0 .008-1.724l-10.983-6.535a1 1 0 0 0-1.51.86z"
      />
    </g>
  </svg>
)

export default PlayButton
