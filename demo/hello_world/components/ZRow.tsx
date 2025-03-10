import { COMMON_STYLE } from "../common_style";
import { StyleProps } from "lvgljs-ui/core/style";
import { View } from "lvgljs-ui";
import React from "react";

interface ZRowProps {
  children?: React.ReactNode;
  style?: StyleProps;
}

const baseStyle: StyleProps = {
  ...COMMON_STYLE.flexRow,
  ...COMMON_STYLE.noBorder,
  ...COMMON_STYLE.autoWidth,
  ...COMMON_STYLE.autoHeight,
  ...COMMON_STYLE.padding0,
};

const ZRow = (props: ZRowProps) => {
  const { children, style: propStyle = {} } = props;

  return <View style={{ ...baseStyle, ...propStyle }}>{children}</View>;
};

export default ZRow;
