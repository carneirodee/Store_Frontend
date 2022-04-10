import * as React from "react"

const SadButton = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={34} height={34} {...props}>
    <g fill="none" fillRule="evenodd" transform="translate(1 1)">
      <path
        stroke="#9B9B9B"
        strokeWidth={1.5}
        d="M16 32c8.822 0 16-7.177 16-16 0-8.822-7.178-16-16-16S0 7.177 0 16c0 8.822 7.178 16 16 16z"
      />
      <path
        fill="#9B9B9B"
        fillRule="nonzero"
        d="M16.237 19.556a7.548 7.548 0 0 1 6.257 3.329 1.178 1.178 0 1 1-1.952 1.32 5.194 5.194 0 0 0-4.305-2.294 5.195 5.195 0 0 0-4.305 2.293 1.178 1.178 0 0 1-1.952-1.32 7.548 7.548 0 0 1 6.257-3.328z"
      />
      <circle cx={7.111} cy={14.222} r={1.778} fill="#9B9B9B" />
      <circle cx={24.889} cy={14.222} r={1.778} fill="#9B9B9B" />
    </g>
  </svg>
)

export default SadButton
