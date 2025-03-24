import { StyleProps } from "lvgljs-ui/core/style";
import { ColorType } from "lvgljs-ui/core/style/color";

const COMMON_STYLE: Record<string, StyleProps> = {
  flexRow: {
    display: "flex",
    "flex-direction": "row",
  },
  flexColumn: {
    display: "flex",
    "flex-direction": "column",
  },
  juestifyContentCenter: {
    "justify-content": "center",
  },
  alignItemsCenter: {
    "align-items": "center",
  },
  noBorder: {
    "border-width": 0,
  },
  autoWidth: {
    width: "auto",
  },
  fullWidth: {
    width: "100%",
  },
  minWidth10: {
    "min-width": 10,
  },
  minWidth20: {
    "min-width": 20,
  },
  minWidth30: {
    "min-width": 30,
  },
  minWidth40: {
    "min-width": 40,
  },
  minWidth48: {
    "min-width": 48,
  },
  minWidth50: {
    "min-width": 50,
  },
  fullHeight: {
    height: "100%",
  },
  autoHeight: {
    height: "auto",
  },
  minHeight12: {
    height: 12,
  },
  minHeight24: {
    height: 24,
  },
  minHeight32: {
    height: 32,
  },
  minHeight40: {
    height: 40,
  },
  minHeight48: {
    height: 48,
  },
  padding0: {
    padding: 0,
  },
  padding10: {
    padding: 10,
  },
  padding20: {
    padding: 20,
  },
  fontSizeSmall: {
    "font-size": 12,
  },
  fontSizeDafault: {
    "font-size": 14,
  },
  fontSizeLarge: {
    "font-size": 16,
  },
};

const COLORS: Record<string, ColorType> = {
  // 主题色
  PRIMARY: "#409EFF", // 主品牌色
  SUCCESS: "#67C23A", // 成功状态
  INFO: "#909399", // 信息提示
  DANGER: "#F56C6C", // 危险状态
  WARNING: "#E6A23C", // 警告状态

  // 基础色
  WHITE: "#FFFFFF", // 纯白
  BLACK: "#000000", // 纯黑

  // 边框色
  BORDER: "#DEDFE2", // 默认边框
  BORDER_LIGHT: "#EBEEF5", // 浅色边框
  BORDER_DARK: "#DCDFE6", // 深色边框

  // 背景色
  PAGE_BACKGROUND: "#F2F3F5", // 页面背景
  CARD_BACKGROUND: "#FFFFFF", // 卡片背景
  BUTTON_BACKGROUND: "#FFFFFF", // 按钮背景
  INPUT_BACKGROUND: "#FFFFFF", // 输入框背景
  SELECT_BACKGROUND: "#FFFFFF", // 选择框背景

  // 其他背景色
  BACKGROUND: "#F5F7FA", // 默认背景
  BACKGROUND_LIGHT: "#FAFAFA", // 浅色背景
  BACKGROUND_DARK: "#E4E7ED", // 深色背景

  // 文本色
  PRIMARY_TEXT: "#303133", // 主要文字
  REGULAR_TEXT: "#606266", // 常规文字
  SECONDARY_TEXT: "#909399", // 次要文字
  PLACEHOLDER_TEXT: "#C0C4CC", // 占位文字

  // 灰色系
  GREY: "#F0F0F0", // 默认灰
  GREY_LIGHT: "#F5F5F5", // 浅灰
  GREY_DARK: "#DCDCDC", // 深灰
};

export { COMMON_STYLE, COLORS };
