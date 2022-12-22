import * as React from "react"

const CloseButton = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={100} height={28} {...props}>
    <path
      d="M26.249 1.5 2.207 25.542M1.5 1.5l24.042 24.042"
      fill="none"
      fillRule="evenodd"
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={2.5}
    />
  </svg>
)

export default CloseButton;
