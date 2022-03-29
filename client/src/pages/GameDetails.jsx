import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { rawGKey } from '../globals'
import { Link } from 'react-router-dom'

const GameDetails = () => {
  const [gameDetails, setGameDetails] = useState(null)
  const [allGames, setAllGames] = useState([])

  let { userId, gameId } = useParams()

  useEffect(() => {
    const getGameDetails = async () => {
      const response = await axios.get(
        `https://api.rawg.io/api/games/${gameId}?key=${rawGKey}`
      )
      setGameDetails(response.data)
      console.log(gameDetails)
    }

    const getAllGames = async () => {
      const response = await axios.get(`http://localhost:3001/api/games`)
      setAllGames(response.data.games)
    }

    let foundGame = 0

    allGames.forEach((game) => {
      if (game.gameDataId == gameId) {
        foundGame++
      }
    })

    const addGame = async () => {
      console.log(foundGame)
      if (foundGame === 0) {
        const newGame = {
          gameName: gameDetails.name,
          gameReleaseDate: gameDetails.released,
          gameDescription: gameDetails.description_raw,
          gameGenre: gameDetails.genres,
          gameBackgroundImage: gameDetails.background_image,
          gameDataId: gameDetails.id
        }
        axios
          .post(`http://localhost:3001/api/games`, newGame)
          .catch((err) => console.log(err))
      }
    }

    getGameDetails()
    getAllGames()
    addGame()
  }, [])
  return (
    <div className="game-content-wrapper">
      {gameDetails && (
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
      )}
      <Link to={`/users/${userId}`}>Back</Link>
    </div>
  )
}
export default GameDetails
