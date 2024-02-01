import { useState } from 'react';
import './App.css';

import Header from './components/Header';
import MainArea from './components/MainArea';
import Footer from './components/Footer';
import GlobalNav from './components/GlobalNav';
function App() {
  const [count, setCount] = useState(0);
  const [page, setPage] = useState('Home'); 

  const go = (event, page) => {
    if (event) {
      event.preventDefault();
    }
    setPage(page);
   
  };

  return (
    <div className="app">
    <Header go={go} page={page}  />
    <MainArea go={go} page={page} />
    <Footer/>
    </div>
  );
}

export default App;



