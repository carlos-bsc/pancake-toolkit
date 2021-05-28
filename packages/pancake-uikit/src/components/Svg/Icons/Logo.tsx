import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <rect
        vectorEffect="non-scaling-stroke"
        x={-160}
        y={-26}
        rx={0}
        ry={0}
        width={320}
        height={52}
        fill="#fff"
        transform="translate(160 26)"
      />
      <g>
        <text
          fontFamily="Raleway"
          fontSize={105}
          fontWeight={900}
          style={{
            whiteSpace: "pre",
          }}
          transform="matrix(.05 0 0 .05 160 26)"
        >
          <tspan x={-278.51} y={32.98}>
            {"RugDoctor"}
          </tspan>
        </text>
      </g>
    </Svg>
  );
};

export default Icon;
