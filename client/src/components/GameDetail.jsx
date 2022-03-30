import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { rawGKey } from '../globals'
import AddGameToDB from './AddGameToDB'

const GameDetail = () => {
  const [gameDetails, setGameDetails] = useState(null)
  const [allGames, setAllGames] = useState([])

  let { gameId } = useParams()

  useEffect(() => {
    const getGameDetails = async () => {
      const response = await axios.get(
        `https://api.rawg.io/api/games/${gameId}?key=${rawGKey}`
      )
      setGameDetails(response.data)
      console.log(gameDetails)
    }
    getGameDetails()
    const getAllGames = async () => {
      const response = await axios.get(`http://localhost:3001/api/games`)
      setAllGames(response.data.games)
    }
    getAllGames()
  }, [])

  return (
    gameDetails && (
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
        <AddGameToDB allGames={allGames} gameDetails={gameDetails} />
      </div>
    )
  )
}

export default GameDetail