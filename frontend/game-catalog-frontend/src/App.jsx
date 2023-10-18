import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DeleteGame from './pages/DeleteGame'
import EditGame from './pages/EditGame'
import ShowGame from './pages/ShowGame'
import CreateGame from './pages/CreateGame'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/games/create' element={<CreateGame/>}/>
      <Route path='/games/details/:id' element={<ShowGame/>}/>
      <Route path='/games/edit/:id' element={<EditGame/>}/>
      <Route path='/games/delete/:id' element={<DeleteGame/>}/>
    </Routes>
  )
}

export default App