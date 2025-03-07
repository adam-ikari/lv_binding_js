import common_style from "../common_style";
import { View } from "lvgljs-ui";
import React from "react";

interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const ZColumn = ({ children, style = {} }: Props) => {
  return (
    <View
      style={{
        ...common_style.flexColumn,
        ...common_style.noBorder,
        ...common_style.autoWidth,
        ...common_style.autoHeight,
        ...common_style.padding0,
        ...style,
      }}
    >
      {children}
    </View>
  );
};
export default ZColumn;
