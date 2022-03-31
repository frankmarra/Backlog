import axios from 'axios'
import { useState, useEffect } from 'react'
import GameCard from './GameCard'

const UserGamesCompleted = ({ user, showGame }) => {
  const [userGamesCompleted, setUserGamesCompleted] = useState([])
  const [hasCompleteGames, setHasCompleteGames] = useState(false)

  useEffect(() => {
    const getUserGamesCompleted = async () => {
      const response = await axios.get(
        `http://localhost:3001/api/users/${user.userId}/games/completed`
      )
      setUserGamesCompleted(response.data.userGames)
    }
    getUserGamesCompleted()
    if (userGamesCompleted !== []) {
      setHasCompleteGames(true)
    }
  }, [])

  return hasCompleteGames ? (
    <div className="completed-wrapper">
      <h2>Games Completed</h2>
      <div className="completed">
        {userGamesCompleted.map((game) => (
          <div key={game.gameDataId}>
            <GameCard
              id={game.gameDataId}
              name={game.gameBackgroundImage}
              showGame={showGame}
            />
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div></div>
  )
}

export default UserGamesCompleted
