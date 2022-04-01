import axios from 'axios'
import { useState, useEffect } from 'react'
import GameCard from './GameCard'

const UserGamesInProgress = ({ user, showGame }) => {
  const [userGamesInProgress, setUserGamesInProgress] = useState([])

  useEffect(() => {
    const getUserGamesInProgress = async () => {
      const response = await axios.get(
        `/users/${user.userId}/games/in_progress`
      )
      setUserGamesInProgress(response.data.userGames)
    }
    getUserGamesInProgress()
  }, [])

  return (
    <div className="in-progress-wrapper">
      <h3>Games In Progress</h3>
      <div className="in-progress">
        {userGamesInProgress.map((game) => (
          <GameCard
            key={game.gameDataId}
            id={game.gameDataId}
            name={game.gameName}
            image={game.gameBackgroundImage}
            showGame={showGame}
          />
        ))}
      </div>
    </div>
  )
}

export default UserGamesInProgress
