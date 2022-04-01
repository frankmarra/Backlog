import axios from 'axios'
import { useState, useEffect } from 'react'
import GameCard from './GameCard'

const UserGamesCompleted = ({ user, showGame }) => {
  const [userGamesCompleted, setUserGamesCompleted] = useState([])

  useEffect(() => {
    const getUserGamesCompleted = async () => {
      const response = await axios.get(`/users/${user.userId}/games/completed`)
      setUserGamesCompleted(response.data.userGames)
    }
    getUserGamesCompleted()
  }, [])

  return (
    <div className="completed-wrapper">
      <h3>Games Completed</h3>
      <div className="completed">
        {userGamesCompleted.map((game) => (
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

export default UserGamesCompleted
