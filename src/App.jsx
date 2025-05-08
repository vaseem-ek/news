import { useState } from 'react'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
    
  </div>
  )
}

export default App
