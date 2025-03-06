import style from "../style";
import { View } from "lvgljs-ui";
import React from "react";

const ZCard = ({ children }) => {
  return (
    <View
      style={{
        ...style.noBorder,
        ...style.card,
        ...style.autoWidth,
        ...style.autoHeight,
      }}
    >
      {children}
    </View>
  );
};

export default ZCard;
