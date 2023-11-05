import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import { useEffect, useState } from 'react';

function App() {

  const [load,setLoad]=useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setLoad(!load)
    },3000)
  },[])
  return (
    <div className="App">
      {load ? (<div className="loader"> <img src="https://imgs.search.brave.com/0bdmj6YLuwTLia_hddTcLcTISU2i6VYm2F7ASoIQNSw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50ZW5vci5jb20v/RlhfOUFjWWVHb2tB/QUFBai9sb2FkZXIt/bG9hZGluZy5naWY.gif" alt="loader"/> </div>) : (<><h1>NTWIST</h1>
      <Navbar/>
      <Hero/>
      
      </>)}
    </div>
  );
}

export default App;
