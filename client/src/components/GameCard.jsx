const GameCard = ({ image, name, showGame, id }) => {
  return (
    <div className="card game-card" key={id} onClick={() => showGame(id)}>
      <div className="img-wrapper">
        <img src={image} alt={name} />
      </div>
      <div className="info-wrapper">
        <h3>{name}</h3>
      </div>
    </div>
  )
}

export default GameCard
