
import './App.css';
import styled from 'styled-components'
import Contact from './components/Contact';
import Hero from './components/Hero';
import Who from './components/Who';
import Works from './components/Works';
// import Test from './components/atoms/test/Test';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className='container'>
      <BrowserRouter>
      <Hero/>
      <Who/>
      <Works/>
      <Contact/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
