
import React, { useContext } from 'react';
import Context2 from './Context2';

const Input2 = () => {
  const { input,setInput } = useContext(Context2);

  console.log(input);

  return (
    <div style={{ backgroundColor: 'red' }}>
     
 {input}
    
    </div>
  );
};

export default Input2;
