import common_style from "../common_style";
import { View } from "lvgljs-ui";
import React from "react";

interface ZRowProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const ZRow = ({ children, style }:ZRowProps) => {
  return (
    <View
      style={{
        ...common_style.flexRow,
        ...common_style.noBorder,
        ...common_style.autoWidth,
        ...common_style.autoHeight,
        ...common_style.padding0,
        ...style
      }}
    >
      {children}
    </View>
  );
};

export default ZRow;
