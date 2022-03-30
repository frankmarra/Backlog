import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DetermineUserGame from './DetermineUserGame'

const FindUsers = ({ backlogId }) => {
  const [selectedGame, setSelectedGame] = useState(null)

  useEffect(() => {
    const findUsers = async () => {
      console.log('backlog Id: ', backlogId)
      const response = await axios.get(
        `http://localhost:3001/api/games/${backlogId}`
      )
      setSelectedGame(response.data.game.gameUsers)
      console.log('selected game users: ', selectedGame)
    }
    findUsers()
  }, [])

  return (
    selectedGame && (
      <DetermineUserGame selectedGame={selectedGame} backlogId={backlogId} />
    )
  )
}

export default FindUsers
