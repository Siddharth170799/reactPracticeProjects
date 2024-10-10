import React, { useContext, useEffect, useState } from "react";
import Context from "./Context";

const Test = () => {
  const [data, setData] = useState("");

  const { input, setInput } = useContext(Context);

  const click = () => {
    if (!input) {
      setInput([data]);
    } else {
      setInput([...input, data]);
    }
  };

  console.log(input[0]);
  return (
    <div>
      <input value={data} onChange={(e) => setData(e.target.value)} />
      <button onClick={click}>ClICK</button>
    </div>
  );
};

export default Test;
