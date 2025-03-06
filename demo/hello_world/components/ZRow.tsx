import style from "../style";
import { View } from "lvgljs-ui";
import React from "react";

const ZRow = ({ children }) => {
  return (
    <View
      style={{
        ...style.flexRow,
        ...style.noBorder,
        ...style.autoWidth,
        ...style.autoHeight,
        ...style.padding0
      }}
    >
      {children}
    </View>
  );
};

export default ZRow;
