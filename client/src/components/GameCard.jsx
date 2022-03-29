const GameCard = (props) => {
  return (
    <div className="card game-card" key={props.id}>
      <div className="img-wrapper">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="info-wrapper">
        <h3>{props.name}</h3>
      </div>
    </div>
  )
}

export default GameCard
