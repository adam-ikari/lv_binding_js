import style from "../style";
import { View } from "lvgljs-ui";
import React from "react";

const Column = ({ children }) => {
  return (
    <View
      style={{
        ...style.flexColumn,
        // ...style.noBorder,
        // ...style.card,
        ...style.autoWidth,
        ...style.autoHeight,
        ...style.padding0
      }}
    >
      {children}
    </View>
  );
};
export default Column;
