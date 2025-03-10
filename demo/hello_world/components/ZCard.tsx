import { COLORS, COMMON_STYLE } from "../common_style";
import { StyleProps } from "lvgljs-ui/core/style";
import { View } from "lvgljs-ui";
import React from "react";

// 类型定义
interface ZCardProps {
  children: React.ReactNode;
  style?: StyleProps;
}

const baseStyle: StyleProps = {
  ...COMMON_STYLE.noBorder,
  ...COMMON_STYLE.autoWidth,
  ...COMMON_STYLE.autoHeight,
  "shadow-color": COLORS.GREY_DARK,
  "shadow-offset-x": 0,
  "shadow-offset-y": 0,
  "shadow-opacity": 50,
  "shadow-width": 24,
  "border-radius": 4,
};

const ZCard = (props: ZCardProps) => {
  const { children, style: propStyle = {} } = props;

  return <View style={{ ...baseStyle, ...propStyle }}>{children}</View>;
};

export type { ZCardProps };

export default ZCard;
