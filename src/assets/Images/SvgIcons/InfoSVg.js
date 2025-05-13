import * as React from "react"
import Svg, { Path } from "react-native-svg"

function InfoSVg(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 8A8 8 0 11-.001 8 8 8 0 0116 8zM9 4a1 1 0 11-2 0 1 1 0 012 0zM7 7a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 000-2V8a1 1 0 00-1-1H7z"
        fill="#6E0063"
      />
    </Svg>
  )
}

export default InfoSVg
