import { useContext } from "react"
import { GameContext, LightContext } from "../App"

const Navbar = () => {
  const {xRound} = useContext(GameContext)
  const {isLight, toggleLight} = useContext(LightContext)
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
        
        <div className="buttonHolder">
          <button onClick={toggleLight}>
            {
              isLight ? 
              <i class="fa-regular fa-sun"></i> :
              <i class="fa-regular fa-moon"></i>
            }
          </button>
        </div>
    </nav>
  )
}

export default Navbar