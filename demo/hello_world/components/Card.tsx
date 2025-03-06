import style from "../style";
import { View } from "lvgljs-ui";
import React from "react";

const Card = ({ children }) => {
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
export default Card;