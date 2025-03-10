import { COLORS, COMMON_STYLE } from "./common_style";
import { ZButton, ZCard, ZColumn, ZRow } from "./components";
import { Render, Text, View } from "lvgljs-ui";
import React from "react";

// import { StyleProps } from "./components/types";
// import { CommonProps } from "lvgljs-ui/components/common";

function App() {
  return (
    <View
      style={{
        ...COMMON_STYLE.noBorder,
        ...COMMON_STYLE.fullHeight,
        ...COMMON_STYLE.fullWidth,
        ...{ "background-color": COLORS.PAGE_BACKGROUND },
      }}
    >
      <ZRow
        style={{
          ...COMMON_STYLE.padding20,
          ...{ "background-color": COLORS.PAGE_BACKGROUND },
        }}
      >
        <ZCard>
          <ZColumn>
            <ZRow>
              <Text>Button</Text>
            </ZRow>
            <ZRow>
              <ZButton type="default" text="Default"></ZButton>
              <ZButton type="primary" text="Primary"></ZButton>
              <ZButton type="success" text="Success"></ZButton>
              <ZButton type="info" text="Info"></ZButton>
              <ZButton type="danger" text="Danger"></ZButton>
              <ZButton type="warning" text="Warning"></ZButton>
            </ZRow>
            <ZRow>
              <ZButton text="1"></ZButton>
              <ZButton text="1"></ZButton>
              <ZButton text="1"></ZButton>
              <ZButton text="1"></ZButton>
              <ZButton text="1"></ZButton>
              <ZButton text="1"></ZButton>
              <ZButton text="1"></ZButton>
            </ZRow>
          </ZColumn>
        </ZCard>
        <ZCard>
          <ZColumn>
            <ZRow>
              <Text>Input</Text>
            </ZRow>
          </ZColumn>
        </ZCard>
      </ZRow>
    </View>
  );
}

Render.render(<App />);
