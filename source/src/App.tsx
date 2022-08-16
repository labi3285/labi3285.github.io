import { HashRouter as Router, Link, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './views/Home/index'
import Product from './views/Product/index'
import Contact from './views/Contact/index'
import Schedule from './views/Schedule/index'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={Home()}></Route>
          <Route path="/product" element={Product()}></Route>

          <Route path="/contact" element={Contact()}></Route>
          <Route path="/schedule" element={Schedule()}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
