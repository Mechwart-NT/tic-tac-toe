import { createContext, useState } from "react"
import GameField from "./components/GameField"

export const GameContext = createContext()

function App() {
  const [isXRound, setIsXRound] = useState(true)

  const toggleRound = () => { setIsXRound(prev => !prev) }

  return (
    <>
    <GameContext.Provider value={{xRound: isXRound, toggleRound: toggleRound}}>
      <GameField/>
    </GameContext.Provider>
    </>
  )
}

export default App
