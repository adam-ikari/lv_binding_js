import common_style from "../common_style";
import { View } from "lvgljs-ui";
import React from "react";

interface ZCardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const ZCard = ({ children, style = {} }: ZCardProps) => {
  return (
    <View
      style={[
        common_style.noBorder,
        common_style.card,
        common_style.autoWidth,
        common_style.autoHeight,
        { "border-radius": 4 },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default ZCard;
