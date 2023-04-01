import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Card></Card>
      <Footer></Footer>
    </div>
  )
}

export default App