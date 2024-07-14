
import React, { useContext } from 'react';
import Context2 from './Context2';
import { useNavigate } from 'react-router-dom';

function Input() {
  const { input, setInput } = useContext(Context2);
  const navigate =useNavigate();

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={()=>navigate("/input2")}>CLick to Navigate</button>
    </div>
  );
}

export default Input;