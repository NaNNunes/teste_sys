import { useState } from 'react'

import VerificadorCpf from "./componentes/VerificadorCpf.jsx";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <VerificadorCpf/>
    </>
  )
}

export default App
