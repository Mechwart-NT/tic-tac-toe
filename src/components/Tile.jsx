import { useContext, useState } from "react"
import { GameContext } from "../App"

const Tile = () => {
  const [symbol, setSymbol] = useState("")
  const {xRound, toggleRound} = useContext(GameContext)

  const clickHappend = () => {
    if(symbol != "") return;

    setSymbol(xRound ? "x" : "o")
    toggleRound()
  }

  return (
    <button onClick={clickHappend} className={"tile " + symbol}>
      {symbol == "x" && <i className="fa-solid fa-xmark"></i>}
      {symbol == "o" && <i className="fa-solid fa-o"></i>}
    </button>
  )
}

export default Tile