import { useState } from "react"
import GameField from "./components/GameField"

function App() {
  const [isXRound, setIsXRound] = useState(true)

  const toggleRound = () => { setIsXRound(prev => !prev) }

  return (
    <>
      <GameField xRound={isXRound} toggleRound={toggleRound}/>
    </>
  )
}

export default App
