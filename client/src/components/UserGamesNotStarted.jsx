import axios from 'axios'
import { useState, useEffect } from 'react'
import GameCard from './GameCard'

const UserGamesNotStarted = ({ user, showGame }) => {
  const [userGamesNotStarted, setUserGamesNotStarted] = useState([])

  useEffect(() => {
    const getUserGamesNotStarted = async () => {
      const response = await axios.get(
        `/users/${user.userId}/games/not_started`
      )
      setUserGamesNotStarted(response.data.userGames)
    }
    getUserGamesNotStarted()
  }, [])

  return (
    <div className="not-started-wrapper">
      <div className="not-started">
        {userGamesNotStarted.map((game) => (
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

export default UserGamesNotStarted
