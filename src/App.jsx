import { createContext, useState } from "react"
import GameField from "./components/GameField"
import Navbar from "./components/Navbar"

export const GameContext = createContext()
export const LightContext = createContext()

function App() {
  const [isXRound, setIsXRound] = useState(true)
  const [isLight, setIsLight] = useState(false)

  const toggleRound = () => { setIsXRound(prev => !prev) }

  const toggleLight = () => { setIsLight(prev => !prev) }

  return (
    <>
    <LightContext.Provider value={{ isLight, toggleLight }}>
    <GameContext.Provider value={{xRound: isXRound, toggleRound: toggleRound}}>
      <Navbar/>
      <GameField/>
    </GameContext.Provider>
    </LightContext.Provider>
    </>
  )
}

export default App
