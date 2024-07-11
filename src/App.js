import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Input from './Input';
import Input2 from './Input2';
import Context from './Context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [input, setInput] = useState('');



  return (
    <Context.Provider value={{ input, setInput }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Input />} />
          <Route path="/input2" element={<Input2 />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
