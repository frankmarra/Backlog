import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { rawGKey } from '../globals'

const GameDetails = () => {
  const [gameDetails, setGameDetails] = useState(null)

  let { userId, gameId } = useParams()

  useEffect(() => {
    const getGameDetails = async () => {
      const response = await axios.get(
        `https://api.rawg.io/api/games/${gameId}?key=${rawGKey}`
      )
      setGameDetails(response.data)
      console.log(response.data)
    }
    getGameDetails()
  }, [])

  return (
    <div className="game-content">
      <div className="image-container">
        <img src={gameDetails.background_image} alt={gameDetails.name} />
      </div>
      <div className="game-info">
        <h2>{gameDetails.name}</h2>
        <h3>Released: {gameDetails.released}</h3>
        <h3>Rating: {gameDetails.rating}</h3>
        <p>{gameDetails.description_raw}</p>
      </div>
    </div>
  )
}
export default GameDetails
