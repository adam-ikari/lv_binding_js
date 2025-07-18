import { Button, EAlignType, Render, View } from "lvgljs-ui";
import React, { useState } from "react";

const App = () => {
  const [isDraged, setDraged] = useState(false);
  const [pos, setPos] = useState([0, 0]);
  return (
    <>
      <View
        onPressing={(e) => {
          console.log(
            "onPressing " +
              "event:" +
              JSON.stringify(e) +
              "pos:" +
              JSON.stringify(e.pos) +
              "coords:" +
              JSON.stringify(e.target.coords),
          );
          setDraged(true);
          setPos(e.pos);
        }}
      ></View>
      {isDraged && (
        <View
          align={{
            type: EAlignType.ALIGN_TOP_LEFT,
            pos: pos,
          }}
        ></View>
      )}
    </>
  );
};

Render.render(<App />);
