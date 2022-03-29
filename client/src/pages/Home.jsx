import { useState, useEffect } from 'react'
import axios from 'axios'
import GameCard from '../components/GameCard'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Home = () => {
  const [user, setUser] = useState(useParams())
  const [userGames, setUserGames] = useState([])
  let navigate = useNavigate()
  useEffect(() => {
    document.title = 'Backlog Home'
  })
  useEffect(() => {
    const getUserGames = async () => {
      const response = await axios.get(
        `http://localhost:3001/api/users/${user.userId}/games`
      )
      setUserGames(response.data.userGames)
      console.log(userGames)
    }
    getUserGames()
  }, [])

  // const showGame = (gameId) => {
  //   navigate(``)
  // }
  // onClick={() => showGame(game._id)}
  return (
    <div>
      <h2>Backlog</h2>
      <section className="container">
        <div className="wrapper">
          {userGames.map((game) => (
            <div key={game._id}>
              <GameCard name={game.gameName} image={game.gameBackgroundImage} />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
