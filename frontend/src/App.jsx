import './css/App.css'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import NavBar from './components/Navbar'
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <div>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </main>
    </div>
  )
}

export default App
