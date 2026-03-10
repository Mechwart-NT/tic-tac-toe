import Tile from "./Tile"

const GameField = () => {
  return (
    <section className="gameField">
        { [...Array(9)].map( _ => <Tile/>) }
    </section>
  )
}

export default GameField