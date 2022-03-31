import axios from 'axios'
import { useEffect, useState } from 'react'
import DetermineUserGame from './DetermineUserGame'

const FindUsers = ({ backlogId }) => {
  const [selectedGame, setSelectedGame] = useState(null)

  useEffect(() => {
    const findUsers = async () => {
      const response = await axios.get(`/games/${backlogId}`)
      setSelectedGame(response.data.game.gameUsers)
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
