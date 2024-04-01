import { Routes, Route } from 'react-router-dom'
import Navbar from './components/food-recipe/Navbar';
import Home from './pages/food-recipe/Home';
import Favorites from './pages/food-recipe/Favorites';

function App() {

  return (
    <div className='bg-slate-500'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
    </div>
  )
}

export default App
