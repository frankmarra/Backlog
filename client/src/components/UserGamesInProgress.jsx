import axios from 'axios'
import { useState, useEffect } from 'react'
import GameCard from './GameCard'

const UserGamesInProgress = ({ user, showGame }) => {
  const [userGamesInProgress, setUserGamesInProgress] = useState([])

  useEffect(() => {
    const getUserGamesInProgress = async () => {
      const response = await axios.get(
        `http://localhost:3001/api/users/${user.userId}/games/in_progress`
      )
      setUserGamesInProgress(response.data.userGames)
    }
    getUserGamesInProgress()
  }, [])

  return (
    <div className="in-progress-wrapper">
      <h2>Games In Progress</h2>
      <div className="in-progress">
        {userGamesInProgress.map((game) => (
          <div key={game.gameDataId}>
            <GameCard
              id={game.gameDataId}
              name={game.gameName}
              image={game.gameBackgroundImage}
              showGame={showGame}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserGamesInProgress
