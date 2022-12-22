import * as React from "react"

const HappyButton = (props) => (
  <svg width={100} height={100} xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>{"Layer 1"}</title>
    <g fillRule="evenodd" fill="none">
      <path
        d="M17 33c8.822 0 16-7.177 16-16 0-8.822-7.178-16-16-16S1 8.177 1 17c0 8.822 7.178 16 16 16z"
        strokeWidth={1.5}
        stroke="#9B9B9B"
      />
      <path
        d="M17.238 25.724a7.548 7.548 0 0 1-6.257-3.329 1.178 1.178 0 1 1 1.952-1.32 5.194 5.194 0 0 0 4.305 2.294 5.195 5.195 0 0 0 4.305-2.293 1.178 1.178 0 0 1 1.952 1.32 7.548 7.548 0 0 1-6.257 3.328z"
        fillRule="nonzero"
        fill="#9B9B9B"
      />
      <circle fill="#9B9B9B" r={1.778} cy={15.222} cx={8.111} />
      <circle fill="#9B9B9B" r={1.778} cy={15.222} cx={25.889} />
    </g>
  </svg>
)

export default HappyButton
