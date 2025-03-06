import Card from "./components/Card";
import Column from "./components/Column";
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
      <Column>
        <Card>
        <Column>
          <Text>Button</Text>
          <View
            style={{
              ...style.flexRow,
              "border-width": 0,
              width: "auto",
              height: "auto",
            }}
          >
            <Button
              style={{
                "background-color": "#ffffff",
                "text-color": "black",
                ...style.button,
              }}
            >
              <Text>Default</Text>
            </Button>
            <Button
              style={{
                "background-color": "#409efe",
                ...style.button,
              }}
            >
              <Text>Primery</Text>
            </Button>
            <Button
              style={{
                "background-color": "#67c239",
                ...style.button,
              }}
            >
              <Text>Success</Text>
            </Button>
          </View>
          </Column>
        </Card>
      </Column>
      <View
        style={{
          // "background-color": "blue",
          display: "flex",
          "flex-direction": "row",
          "flex-grow": 1,
          height: "100%",
          "border-width": 0,
        }}
      >
        <Button style={{ "background-color": "grey" }}>
          <Text>Hello</Text>
        </Button>
      </View>
    </View>
  );
}

Render.render(<App />);
