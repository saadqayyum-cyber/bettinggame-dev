import React, { useState } from "react";
export default function Test() {
  const [disable, setDisable] = useState(false);
  const [clickCount, setClickCount] = useState(1);

  const handlechange = (e) => {
    setClickCount(clickCount + 1);
    if (clickCount > 3) {
      console.log("win");
      setDisable(true);
    } else {
      console.log("lose");
    }
  };
  return (
    <>
      <input
        type="radio"
        onChange={handlechange}
        disabled={disable}
        name="one"
      />
      <input
        type="radio"
        onChange={handlechange}
        disabled={disable}
        name="one"
      />
      <input
        type="radio"
        onChange={handlechange}
        disabled={disable}
        name="one"
      />
    </>
  );
}
