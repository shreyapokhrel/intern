import React, { useState, useMemo } from "react";

function UseMemo() {
  const [text, setText] = useState("");
  const length = useMemo(() => {
    console.log("Calculating length");
    return text.length;
  }, [text]);

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Length of text: {length}</p>
    </div>
  );
}

export default UseMemo;
