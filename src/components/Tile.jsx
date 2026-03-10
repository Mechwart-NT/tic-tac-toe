import { useState } from "react"

const Tile = (props) => {
  const [symbol, setSymbol] = useState("")

  const clickHappend = () => {
    if(symbol != "") return;

    setSymbol(props.xRound ? "x" : "o")
    props.toggleRound()
  }

  return (
    <button onClick={clickHappend} className={"tile " + symbol}>
      {symbol == "x" && <i className="fa-solid fa-xmark"></i>}
      {symbol == "o" && <i className="fa-solid fa-o"></i>}
    </button>
  )
}

export default Tile