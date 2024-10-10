


// // // import React from 'react';
// // // import './App.css';
// // // import Quiz from './Quiz';
// // // import Quiz2 from './Quiz2';

// // // function App() {
// // //   return (
// // //   //  <Quiz/>
// // //   <Quiz2/>
// // //   );
// // // }

// // // export default App;

// // // src/App.js
// // import React, { useState } from 'react';
// // import BarChart from './BarChart';
// // import Test from './Test';
// // import Context from './Context';
// // import { useMemo } from 'react';
// // const App = () => {
// // //   // const [data, setData] = useState([25, 30, 45, 60, 20, 65, 75]);

// // //   const [input,setInput] =  useState(null)



// // //   return (
// // //     // <div>
// // //     //   <h1>Bar Chart with Chart.js and React</h1>
// // //     //   <BarChart data={data} />
// // //     // </div>
// // // <Context.Provider value={{input,setInput}}>
// // // <Test/>
// // // </Context.Provider>
  
// // //   );

// // const [input, setInput] = useState(2);

// // // Memoizing the result of 2 + input
// // const result = useMemo(() => {
// //   console.log('Calculating 2 + input...');
// //   return 2 + input;
// // }, [input]); // Dependency on 'input'

// // console.log(result)

// // return (
// //   <div>
// //     <h1>Simple Calculator</h1>
// //     <input
// //       type="number"
// //       value={input}
// //       onChange={(e) => setInput(Number(e.target.value))}
// //     />
// //     <h2>Result of 2 + {input} is: {result}</h2>
// //   </div>
// // );
// // };

// // export default App;





// // import React, { useState, useCallback } from 'react';
// // import MainLazy from './MainLazy';

// // const Counter = React.memo(({ increment }) => {
// //   console.log('Counter component rendered');
// //   return <button onClick={increment}>Increment</button>;
// // });

// // const App = () => {
// //   const [count, setCount] = useState(0);


// //   const [count2,setCount2] = useState(0)

// //   // Memoizing the increment function
// //   const increment = useCallback(() => {
// //     setCount(c => c + 1);
// //   }, [count]); // No dependencies, so the function will not change

 
// //   return (
// //     <div>
// //       <h1>Count: {count}</h1>
// //       <Counter increment={increment} />
// //       {count2}
// //       <button onClick={()=>setCount2(count2 + 1)}>Click to increase the count2</button>
// //     </div>
// //     // <MainLazy/>
// //   );
// // };

// // export default App;


// import React from 'react';
// import Memo from './Memo';
// import ItemList from './Memo2';
// import DataDisplay from './Practice';
// import explorer from './Data';
// import RoadsideCoder from './RoadsideCoder';
// import Optimize from './Optimize';
// import ExpensiveWithoutMemo from './Memo2';
// import ExpensiveWithMemo from './Optimize2';
// import ProductFilterWithoutMemo from './Memo2';
// import ItemFilterWithoutMemo from './Memo2';
// import ItemFilterWithMemo from './Optimize2';
// import ParentComponent from './CallBack';
// import MainLazy from './MainLazy';

// const App =()=>{


//   return (
//     <>

// <MainLazy/>
// </>

//   )
// }

// export default App


// Parent Component
import React from 'react';

// Child Component
const Child = ({children}) => {
  return (
    <div style={{ border: '1px solid red', padding: '10px', margin: '10px' }}>
      <h3>Child Component</h3>
      <div>{children}</div> {/* Render children here */}
    </div>
  );
};

// Parent Component
const App = () => {
  return (
    <div>
      <h1>Parent Component</h1>
      <Child>
        <p>This is child 1.</p>
        <p>This is child 2.</p>
        <button>Click Me!</button>
      </Child>
      <Child>
        <p>This is another child!</p>
      </Child>
    </div>
  );
};

// Export Parent Component
export default App;


