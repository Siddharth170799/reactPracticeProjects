import React, { useState, useMemo } from 'react';

const ItemFilterWithMemo = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [count, setCount] = useState(0);

  const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape', 'Honeydew', 'Kiwi', 'Lemon', 'Mango'];

  // Using useMemo to memoize the filtered items
  const filteredItems = useMemo(() => {
    // Simulate a heavy filtering process
    const result = items.filter(item => 
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log("Filtered items with useMemo");
    return result;
  }, [searchTerm]); // Dependency array: only re-run when searchTerm changes

  return (
    <div>
      <input
        type="text"
        placeholder="Search items..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Increase Count ({count})</button>
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemFilterWithMemo;
