
import React, { useContext } from 'react';
import Context from './Context';

function Input() {
  const { input, setInput } = useContext(Context);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
    </div>
  );
}

export default Input;