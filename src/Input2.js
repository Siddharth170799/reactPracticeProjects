
import React, { useContext } from 'react';
import Context from './Context';

const Input2 = () => {
  const { input,setInput } = useContext(Context);

  console.log(input);

  return (
    <div style={{ backgroundColor: 'red' }}>
     
 {input}
    
    </div>
  );
};

export default Input2;
