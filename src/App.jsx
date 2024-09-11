import { useState } from 'react'
import './App.css'
import { Header } from './Header'
import { Advertisement } from './Advertisement'
import { Uses } from './Uses'
import { Footer } from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Advertisement />
    <Uses />
    <Footer />
    </>
  )
}

export default App
