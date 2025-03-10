import { COMMON_STYLE } from "../common_style";
import { StyleProps } from "lvgljs-ui/core/style";
import { View } from "lvgljs-ui";
import React from "react";

interface ZColumnProps {
  children?: React.ReactNode;
  style?: StyleProps;
}

const baseStyle: StyleProps = {
  ...COMMON_STYLE.flexColumn,
  ...COMMON_STYLE.noBorder,
  ...COMMON_STYLE.autoWidth,
  ...COMMON_STYLE.autoHeight,
  ...COMMON_STYLE.padding0,
};

const ZColumn = (props: ZColumnProps) => {
  const { children, style: propStyle = {} } = props;

  return <View style={{...baseStyle, ...propStyle}}>{children}</View>;
};

export type { ZColumnProps };
export default ZColumn;
