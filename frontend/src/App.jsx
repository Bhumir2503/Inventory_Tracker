import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'



function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/*" element={<h1>Testing</h1>} />
      </Routes>
    </HashRouter>
  )
}

export default App
