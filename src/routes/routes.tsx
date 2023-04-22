import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import { Profile } from '../pages/Profile';
import PokemonProvider from '../context/PokemonsContext'

export default function Rotas() {
  return (
    <BrowserRouter>
      <PokemonProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Profile' element={<Profile />} />
        </Routes>
      </PokemonProvider>
    </BrowserRouter>


  )
}
