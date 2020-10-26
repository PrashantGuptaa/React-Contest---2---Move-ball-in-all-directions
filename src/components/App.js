import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition,setBallPosition] = useState({
    left: "0px",
    top: "0px",
  });
  const reset = () => {};
  const start = () => {
    setRenderBall(true);
  };
  const renderChoice = () => {
  };

const keyEventHandler = () =>{

}

React.useEffect(()=>{
  document.addEventListener('keydown', keyEventHandler);
}
)

  return (
    <div className="playground">
     {  renderBall ? <div className="ball" style={ballPosition}></div>
     :  <button onClick={start} className="start">
          Start
        </button>
      }
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;