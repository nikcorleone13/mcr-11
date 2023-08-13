import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SingleMovie from './pages/SingleMovie'
import Watchlist from './pages/Watchlist'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies/:movieTitle' element={<SingleMovie />} />
        <Route path='/watchlist' element={<Watchlist />} />
      </Routes>
    </>
  )
}

export default App
