import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  const [barColor, setBarColor] = useState('White');
  return (
    <main>
      <Navbar barColor={barColor} />
      <Outlet context={setBarColor} />
    </main>
  );
}

export default App;
