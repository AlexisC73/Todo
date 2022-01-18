import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import AuthProvider from './services/AuthProvider'
import './styles/main.scss'
import Home from './pages/Home'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
