import React, { useReducer } from "react";

const initialState = { on: false };

function reducer(state, action) {
  switch (action.type) {
    case "toggle":
      return { on: !state.on };
    default:
      return state;
  }
}

export default function Reducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const style = {
    padding: "20px",
    backgroundColor: state.on ? "lightgreen" : "lightcoral",
    color: "white",
    textAlign: "center",
    borderRadius: "8px",
    userSelect: "none",
  };

  return (
    <div style={style}>
      <h2>Toggle is {state.on ? "ON" : "OFF"}</h2>
      <button onClick={() => dispatch({ type: "toggle" })}>
        Toggle
      </button>
    </div>
  );
}
