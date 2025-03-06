import ZCard from "./components/ZCard";
import ZColumn from "./components/ZColumn";
import ZRow from "./components/ZRow";
import ZButton from "./components/ZButton";
import style from "./style";
import { Button, Render, Text, View } from "lvgljs-ui";
import React from "react";

function App() {
  return (
    <View
      style={{
        ...style.flexRow,
        ...style.fullHeight,
        ...style.fullWidth,
      }}
    >
      <ZCard>
        <ZColumn>
          <Text>Button</Text>
          <ZRow>
            <ZButton>Default</ZButton>
          </ZRow>
        </ZColumn>
      </ZCard>
      <ZCard>
        <ZColumn>
          <Text>Input</Text>
        </ZColumn>
      </ZCard>
    </View>
  );
}

Render.render(<App />);
