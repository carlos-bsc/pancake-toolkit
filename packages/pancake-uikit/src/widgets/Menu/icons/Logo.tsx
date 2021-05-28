import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 160 26" {...props}>
      <rect width="100%" height="100%" fill="transparent" />
      <rect
        vectorEffect="non-scaling-stroke"
        x={-80}
        y={-13}
        rx={0}
        ry={0}
        width={160}
        height={26}
        fill="#fff"
        transform="translate(80 13)"
      />
      <g>
        <text
          fontFamily="Raleway"
          fontSize={28}
          fontWeight={900}
          style={{
            whiteSpace: "pre",
          }}
          transform="matrix(.5 0 0 .85 36 13)"
        >
          <tspan x={-68.71} y={8.8}>
            {"R"}
          </tspan>
          <tspan x={-44.18} y={8.8}>
            {"u"}
          </tspan>
          <tspan x={-20.44} y={8.8}>
            {"g"}
          </tspan>
          <tspan x={3.56} y={8.8}>
            {"D"}
          </tspan>
          <tspan x={29.48} y={8.8}>
            {"o"}
          </tspan>
          <tspan x={52.56} y={8.8}>
            {"c"}
          </tspan>
        </text>
      </g>
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
