import { ZButton, ZCard, ZColumn, ZRow } from "./components";
import common_style from "./common_style";
import { Render, Text, View } from "lvgljs-ui";
import React from "react";

function App() {
  return (
    <View
      style={{
        ...common_style.noBorder,
        ...common_style.fullHeight,
        ...common_style.fullWidth,
      }}
    >
      <ZRow
        style={{
          ...common_style.padding20,
        }}
      >
        <ZCard style={common_style.card}>
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
