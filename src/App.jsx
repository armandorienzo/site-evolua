import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import CadastroClientePage from './components/CadastroClientePage.jsx'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastro-cliente" element={<CadastroClientePage />} />
      </Routes>
    </Router>
  )
}

export default App

