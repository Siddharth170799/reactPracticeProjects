


// import React from 'react';
// import './App.css';
// import Quiz from './Quiz';
// import Quiz2 from './Quiz2';

// function App() {
//   return (
//   //  <Quiz/>
//   <Quiz2/>
//   );
// }

// export default App;

// src/App.js
import React, { useState } from 'react';
import BarChart from './BarChart';

const App = () => {
  const [data, setData] = useState([25, 30, 45, 60, 20, 65, 75]);

  return (
    <div>
      <h1>Bar Chart with Chart.js and React</h1>
      <BarChart data={data} />
    </div>
  );
};

export default App;
