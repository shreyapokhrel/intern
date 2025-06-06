import React, { useInsertionEffect } from "react";

function Insertion() {
  useInsertionEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .box {
        width: 200px;
        height: 100px;
        background-color: lightgreen;
        border: 2px solid green;
        margin: 20px;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return <div className="box">This box is styled using useInsertionEffect</div>;
}

export default Insertion;
