import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar'; 
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Sobre from './pages/sobre/Sobre';
import Login from './pages/login/Login';
import CriarConta from './pages/conta/CriarConta';
import Score from './pages/score/Score';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      
      <Sobre/>

    </>
  );
}

export default App;