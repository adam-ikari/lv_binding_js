import { COLORS, COMMON_STYLE } from "../common_style";
import { Button, Text } from "lvgljs-ui";
import { StyleProps } from "lvgljs-ui/core/style";
import React, { useMemo } from "react";

enum ZButtonType {
  Default = "default",
  Primary = "primary",
  Success = "success",
  Info = "info",
  Danger = "danger",
  Warning = "warning",
}

enum ZButtonSize {
  Small = "small",
  Default = "default",
  Large = "large",
}

interface ZButtonProps {
  text?: string;
  style?: StyleProps;
  type?: ZButtonType;
  size?: ZButtonSize;
}

const baseStyle: StyleProps = {
  "border-width": 1,
  "border-radius": 4,
  "border-color": "#dedfe2",
  "shadow-width": 0,
  ...COMMON_STYLE.minWidth40,
  ...COMMON_STYLE.fontSizeDefault,
  ...COMMON_STYLE.flexRow,
  ...COMMON_STYLE.juestifyContentCenter,
  ...COMMON_STYLE.alignItemsCenter,
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

const sizeStyleMap: Record<string, StyleProps> = {
  small: {
    ...COMMON_STYLE.minWidth32,
    ...COMMON_STYLE.minHeight32,
    ...COMMON_STYLE.fontSizeSmall,
  },
  default: {
    ...COMMON_STYLE.minWidth40,
    ...COMMON_STYLE.minHeight40,
    ...COMMON_STYLE.fontSizeDefault,
  },
  large: {
    ...COMMON_STYLE.minWidth48,
    ...COMMON_STYLE.minHeight48,
    ...COMMON_STYLE.fontSizeLarge,
  },
};

const ZButton = (props: ZButtonProps) => {
  const {
    text = "",
    style: propStyle = {},
    type = ZButtonType.Default,
    size = ZButtonSize.Default,
  } = props;

  const computedStyle = useMemo(() => {
    return {
      ...baseStyle,
      ...typeStyleMap[type],
      ...sizeStyleMap[size],
    };
  }, [type, size]);

  return (
    <Button
      style={{
        ...computedStyle,
        ...propStyle,
      }}
    >
      <Text>{text}</Text>
    </Button>
  );
};

export type { ZButtonProps };
export { ZButtonSize, ZButtonType };
export default ZButton;
