import common_style from "../style";
import { Button, Text } from "lvgljs-ui";
import React from "react";

interface ZButtonProps {
  text?: string;
  style?: React.CSSProperties;
  type?: string;
}

const getStyle = (type) => {
  const style = {
    "border-width": 1,
    "border-radius": 4,
    "border-color": "#dedfe2",
    "shadow-width": 0,
    ...common_style.minWidth40,
  };
  if (type === "primary") {
    style["background-color"] = "#007bff";
    style["text-color"] = "white";
  } else if (type === "success") {
    style["background-color"] = "#28a745";
    style["text-color"] = "white";
  } else if (type === "info") {
    style["background-color"] = "#6c757d";
    style["text-color"] = "white";
  } else if (type === "danger") {
    style["background-color"] = "#dc3545";
    style["text-color"] = "white";
  } else if (type === "warning") {
    style["background-color"] = "#ffc107";
    style["text-color"] = "white";
  } else {
    style["background-color"] = "#ffffff";
    style["text-color"] = "black";
  }
  return style;
};

const ZButton = ({ text="", style={}, type = "default" }: ZButtonProps) => {
  return (
    <Button
      style={{
        ...getStyle(type),
        ...style,
      }}
    >
      <Text>{text}</Text>
    </Button>
  );
};

export default ZButton;
