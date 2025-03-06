import style from "../style";
import { View } from "lvgljs-ui";
import React from "react";

const ZColumn = ({ children }) => {
  return (
    <View
      style={{
        ...style.flexColumn,
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
export default ZColumn;
