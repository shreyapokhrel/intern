import React, { useRef, forwardRef, useImperativeHandle } from "react";

const Imperative = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focusInput: () => inputRef.current.focus(),
  }));

  return <input ref={inputRef} placeholder="Click button to focus" />;
});

const App = () => {
  const inputRef = useRef();
 
  return (
    <div>
      <Imperative ref={inputRef} />
      <button onClick={() => inputRef.current.focusInput()}>Focus</button>
    </div>
  );
};

export default App;
