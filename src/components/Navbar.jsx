import { useContext } from "react"
import { GameContext } from "../App"

const Navbar = () => {
  const {xRound} = useContext(GameContext)
  return (
    <nav>
        <div className="logo">
            <i className="fa-solid fa-xmark x"></i>
            <i className="fa-solid fa-o o"></i>
        </div>

        <div className="current">
            {
            xRound ? 
                <i className="fa-solid fa-xmark"></i> :
                <i className="fa-solid fa-o"></i>
            } <span>turn</span>
        </div>
        <button>🌞</button>
    </nav>
  )
}

export default Navbar