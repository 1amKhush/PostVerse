import { useState } from 'react'
import './App.css'
import Header from './components/Header/header'
import PosterPage from './components/PosterPage/PosterPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <PosterPage />
    </>
  )
}

export default App
