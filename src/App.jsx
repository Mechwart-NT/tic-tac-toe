import { createContext, useState } from "react"
import GameField from "./components/GameField"
import Navbar from "./components/Navbar"

export const GameContext = createContext()

function App() {
  const [isXRound, setIsXRound] = useState(true)

  const toggleRound = () => { setIsXRound(prev => !prev) }

  return (
    <>
    <GameContext.Provider value={{xRound: isXRound, toggleRound: toggleRound}}>
      <Navbar/>
      <GameField/>
    </GameContext.Provider>
    </>
  )
}

export default App
