// import React, { useState, useMemo } from 'react';

import { useEffect, useMemo, useState } from "react"

// const ItemList = () => {
//   const [searchTerm, setSearchTerm] = useState('');


//   const [count,setCount]  = useState(0)
//   const items = [
//     'Apple',
//     'Banana',
//     'Cherry',
//     'Date',
//     'Fig',
//     'Grape',
//     'Honeydew',
//     'Kiwi',
//     'Lemon',
//     'Mango',
//   ];

//   // Using useMemo to memoize the filtered items
//   const filteredItems = useMemo(() => {
//     console.log('Filtering items...');
//     const data= items.filter(item => 
//       item.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     return data
//   }, [searchTerm]); // Dependency array: only re-run when searchTerm changes

//   return (
//     <div>
//       <h1>Item List</h1>
//       {count}
//       <button onClick={()=>setCount(count+1)}>Click to increase Count</button>
//       <input
//         type="text"
//         placeholder="Search items..."
//         value={searchTerm}
//         onChange={e => setSearchTerm(e.target.value)}
//       />
//       <ul>
//         {filteredItems.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ItemList;




const ItemFilterWithoutMemo = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [count, setCount] = useState(0);
  const [filteredItems, setFilteredItems] = useState([]);

  const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape', 'Honeydew', 'Kiwi', 'Lemon', 'Mango'];

  useEffect(() => {
    // Simulate a heavy filtering process with a delay
    const timer = setTimeout(() => {
      const result = items.filter(item => 
        item.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredItems(result);
      console.log("Filtered items without useMemo");
    }, 1000); // Simulate delay

    // Cleanup the timer on unmount or before the next effect runs
    return () => clearTimeout(timer);
  }, [searchTerm]);

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

export default ItemFilterWithoutMemo;
