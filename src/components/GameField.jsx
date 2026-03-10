import Tile from "./Tile"

const GameField = (props) => {
  return (
    <section className="gameField">
        { [...Array(9)].map( _ => <Tile 
          xRound={props.xRound} 
          toggleRound={props.toggleRound} 
        />) }
    </section>
  )
}

export default GameField