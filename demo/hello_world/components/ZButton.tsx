import { COLORS, COMMON_STYLE } from "../common_style";
import { Button, Text } from "lvgljs-ui";
import { StyleProps } from "lvgljs-ui/core/style";
import React, { useMemo } from "react";

interface ZButtonProps {
  text: string;
  style?: StyleProps;
  type: "default" | "primary" | "success" | "info" | "danger" | "warning";
}

const baseStyle: StyleProps = {
  "border-width": 1,
  "border-radius": 4,
  "border-color": "#dedfe2",
  "shadow-width": 0,
  ...COMMON_STYLE.minWidth40,
};

const typeStyleMap: Record<string, StyleProps> = {
  primary: {
    "background-color": COLORS.PRIMARY,
    "text-color": COLORS.WHITE,
  },
  success: {
    "background-color": COLORS.SUCCESS,
    "text-color": COLORS.WHITE,
  },
  info: {
    "background-color": COLORS.INFO,
    "text-color": COLORS.WHITE,
  },
  danger: {
    "background-color": COLORS.DANGER,
    "text-color": COLORS.WHITE,
  },
  warning: {
    "background-color": COLORS.WARNING,
    "text-color": COLORS.WHITE,
  },
  default: {
    "background-color": COLORS.WHITE,
    "text-color": COLORS.REGULAR_TEXT,
  },
};

const ZButton = ({
  text = "",
  style: propStyle = {},
  type = "default",
}: ZButtonProps) => {
  const computedStyle = useMemo(() => {
    return { ...baseStyle, ...typeStyleMap[type] };
  }, [type]);

  return (
    <Button style={{ ...computedStyle, ...propStyle }}>
      <Text>{text}</Text>
    </Button>
  );
};

export type { ZButtonProps };
export default ZButton;
