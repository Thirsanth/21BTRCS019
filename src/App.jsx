import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import EvenNumbers from './components/EvenNumbers';
import PrimeNumbers from './components/PrimeNumbers';
import RandNumbers from './components/RandNumber';
import FiboNumbers from './components/FiboNumbers';
function App() {
  // const [numbers, setNumbers] = useState(0);
  // const [windowPrev,setWindowPrev] = useState([]);

  const [output,setOutput] = useState([]);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/numbers/e" element={<EvenNumbers output={output} setOutput={setOutput} />} />
      <Route path="/numbers/p" element={<PrimeNumbers output={output} setOutput={setOutput} />} />
      <Route path="/numbers/r" element={<RandNumbers output={output} setOutput={setOutput} />} />
      <Route path="/numbers/f" element={<FiboNumbers output={output} setOutput={setOutput} />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
