import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Input from './Input';
import Input2 from './Input2';
import Context2 from './Context2';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Quiz from './Quiz';
import Timer from './Timer';
import MainPage from './MainPage';

function App() {
  // const [input, setInput] = useState('');

  return (
    // <Context2.Provider value={{ input, setInput }}>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Input />} />
    //       <Route path="/input2" element={<Input2/>} />
    //     </Routes>
    //   </BrowserRouter>
    // </Context2.Provider>
    // <Quiz/>
    // <Timer/>

    <BrowserRouter>
    <Routes>
      <Route path ='/' element={<MainPage/>}/>
      <Route path ='/Quiz' element={<Quiz/>}/>
      </Routes></BrowserRouter>
  );
}

export default App;
