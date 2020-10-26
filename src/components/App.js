import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px"
  });
  const reset = () => {
    setRenderBall(false);
setX(0); setY(0);
let newobj = {
  left: `0px`,
  top: `0px`
};
setBallPosition(newobj);
  };
  const start = () => {
    setRenderBall(true);
  };
  const renderChoice = () => {};

  const keyEventHandler = (event) => {
    let left = x,
      top = y;
    console.log(event.keyCode);
    if (event.keyCode === 37) {
      left = x - 5;
      setX(left);
    } else if (event.keyCode === 38) {
      top = y - 5;
      setY(top);
    } else if (event.keyCode === 39) {
      left = x + 5;
      setX(left);
    } else if (event.keyCode === 40) {
      top = y + 5;
      setY(top);
    }else{return;}
    let newobj = {
      left: `${left}px`,
      top: `${top}px`
    };
    setBallPosition(newobj);
  };

  React.useEffect(() => {
    document.addEventListener("keydown", keyEventHandler);
    return () => {
      document.removeEventListener("keydown", keyEventHandler);
    };
  });

  return (
    <div className="playground">
      {renderBall ? (
        <div className="ball" style={ballPosition}></div>
      ) : (
        <button onClick={start} className="start">
          Start
        </button>
      )}
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
