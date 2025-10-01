import './App.css'
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tech from './components/Tech';

function App() {

  return (
     <BrowserRouter>
      <div className='relative z-0 bg-primary'> 
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar></Navbar>
          <Hero></Hero>
          <Tech></Tech>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
