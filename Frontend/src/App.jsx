import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Posts from './pages/Posts'
import NavBar from './components/NavBar/NavBar'

const App = () => {
  
  return (
    <div className='relative h-screen w-screen bg-black text-white'>
      <NavBar />
      <Routes>
        <Route path='/create-post' element={<CreatePost />} />
        <Route path='/posts' element={<Posts />} />
      </Routes>
    </div>
  )
}

export default App