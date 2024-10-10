import React, { useState, useCallback } from 'react';

// Child component
const CounterButton = React.memo(({ onIncrement }) => {
  console.log('Button rendered');
  return <button onClick={onIncrement}>Increment Count</button>;
});

// Parent component
const ParentComponent = () => {
  const [count, setCount] = useState(0);

  // Using useCallback to memoize the increment function
  const incrementCount = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, [count]); // Empty dependency array means this function won't change



  return (
    <div>
      <h1>Count: {count}</h1>
      <CounterButton onIncrement={incrementCount} />
    </div>
  );
};

export default ParentComponent;
