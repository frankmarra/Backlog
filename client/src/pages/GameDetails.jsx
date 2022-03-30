// import axios from 'axios'
// import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { rawGKey } from '../globals'
import { Link } from 'react-router-dom'
import GameDetail from '../components/GameDetail'

const GameDetails = () => {
  // const [gameDetails, setGameDetails] = useState(null)
  // const [allGames, setAllGames] = useState([])
  // const [backlogId, setBacklogId] = useState(null)
  // const [selectedGame, setSelectedGame] = useState(null)
  // const [isUserGame, setIsUserGame] = useState(null)

  let { userId } = useParams()
  // let foundGame = 0

  // useEffect(() => {
  //   getGameDetails()
  //   getAllGames()
  // }, [])

  // useEffect(() => {
  //   if (gameDetails && allGames) {
  //     setTimeout(() => {
  //       addGame()
  //     }, 1000)
  //   }
  // }, [gameDetails])
  // useEffect(() => {
  //   if (isUserGame) {
  //     setTimeout(() => {
  //       determineUserGame()
  //     }, 1500)
  //   }
  // }, [isUserGame])

  // const getAllGames = async () => {
  //   const response = await axios.get(`http://localhost:3001/api/games`)
  //   setAllGames(response.data.games)
  // }

  // const getGameDetails = async () => {
  //   const response = await axios.get(
  //     `https://api.rawg.io/api/games/${gameId}?key=${rawGKey}`
  //   )
  //   setGameDetails(response.data)
  // }

  // const addGame = async () => {
  //   allGames.forEach((game) => {
  //     if (game.gameDataId == gameId) {
  //       foundGame++
  //       setBacklogId(game._id)
  //       if (game.gameUsers.user == userId) {
  //         setIsUserGame(true)
  //         console.log('user game?: ', isUserGame)
  //       }
  //     }
  //   })
  //   console.log('game: ', foundGame)
  //   console.log('user ID: ', userId)
  //   if (foundGame === 0) {
  //     const newGame = {
  //       gameName: gameDetails.name,
  //       gameReleaseDate: gameDetails.released,
  //       gameDescription: gameDetails.description_raw,
  //       gameBackgroundImage: gameDetails.background_image,
  //       gameDataId: gameDetails.id
  //     }

  //     await axios
  //       .post(`http://localhost:3001/api/games`, newGame)
  //       .catch((err) => console.log(err))
  //   }
  // }

  // const determineUserGame = async () => {
  //   console.log('backlog Id: ', backlogId)
  //   const response = await axios.get(
  //     `http://localhost:3001/api/games/${backlogId}`
  //   )
  //   setSelectedGame(response.data.game.gameUsers)
  //   console.log('selected game users: ', selectedGame)
  //   setTimeout(() => {
  //     selectedGame.forEach((user) => {
  //       if (user == userId) {
  //         setIsUserGame(true)
  //       }
  //     })
  //   }, 1000)
  // }

  // const addGameToUser = async () => {
  //   axios
  //     .put(`http://localhost:3001/api/games/${backlogId}/${userId}`)
  //     .catch((err) => console.log(err))
  //   setIsUserGame(true)
  // }

  // const deleteGameFromUser = async () => {
  //   axios.delete(`http://localhost3001/api/games/${backlogId}/${userId}`)
  //   setIsUserGame(false)
  // }

  // {gameDetails && (
  //   <div className="game-content">
  //     <div className="image-container">
  //       <img src={gameDetails.background_image} alt={gameDetails.name} />
  //     </div>
  //     <div className="game-info">
  //       <h2>{gameDetails.name}</h2>
  //       <h3>Released: {gameDetails.released}</h3>
  //       <h3>Rating: {gameDetails.rating}</h3>
  //       <p>{gameDetails.description_raw}</p>
  //     </div>
  //   </div>
  // )}
  // {isUserGame ? (
  //   <div className="crud-buttons">
  //     <h4>This game is in your library!</h4>
  //     <button onClick={() => deleteGameFromUser()}>Delete?</button>
  //   </div>
  // ) : (
  //   <div className="crud-buttons" onClick={() => addGameToUser()}>
  //     <button>Add To Your Backlog!</button>
  //   </div>
  // )}
  // console.log('is user game(2nd check)": ', isUserGame)
  return (
    <div className="game-content-wrapper">
      <GameDetail />

      <Link to={`/users/${userId}`}>Back</Link>
    </div>
  )
}
export default GameDetails
