import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Programs from './pages/Programs';

function App() {
  return (
    <>
      <div>
        <Sidebar/>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path ='name/:id' element={<Programs/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
