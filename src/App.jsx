import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import EvenNumbers from './components/EvenNumbers';
function App() {
  const [numbers, setNumbers] = useState(0);
  // const [windowPrev,setWindowPrev] = useState([]);

  const [output,setOutput] = useState([]);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/numbers/e" element={<EvenNumbers numbers={numbers} setNumbers={setNumbers} output={output} setOutput={setOutput} />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
