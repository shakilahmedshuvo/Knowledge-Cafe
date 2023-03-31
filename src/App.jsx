import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Card from './components/Card/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Card></Card>
    </div>
  )
}

export default App