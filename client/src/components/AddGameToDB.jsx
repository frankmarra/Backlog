import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FindUsers from './FindUsers'

const AddGameToDB = ({ allGames, gameDetails }) => {
  const [backlogId, setBacklogId] = useState(null)
  let { userId, gameId } = useParams()
  useEffect(() => {
    const addGame = async () => {
      let foundGame = 0
      console.log(allGames)
      console.log('gameId: ', gameId)
      allGames.forEach((game) => {
        if (game.gameDataId == gameId) {
          foundGame++
          setBacklogId(game._id)
        }
      })
      console.log('game: ', foundGame)
      console.log('user ID: ', userId)
      if (foundGame === 0) {
        const newGame = {
          gameName: gameDetails.name,
          gameReleaseDate: gameDetails.released,
          gameDescription: gameDetails.description_raw,
          gameBackgroundImage: gameDetails.background_image,
          gameDataId: gameDetails.id
        }

        const response = await axios
          .post(`http://localhost:3001/api/games`, newGame)
          .catch((err) => console.log(err))
        console.log('Game Added')
        setBacklogId(response.data.game._id)
      } else {
        console.log('Game is already in DB')
      }
    }
    addGame()
  }, [])

  return backlogId && <FindUsers backlogId={backlogId} />
}

export default AddGameToDB
