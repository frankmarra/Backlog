import { useState, useEffect } from 'react'
import axios from 'axios'
import GameCard from '../components/GameCard'
import UserInfo from '../components/UserInfo'
import Search from '../components/Search'
// import SearchResults from '../components/SearchResults'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { rawGKey } from '../globals'

const Home = () => {
  const [user, setUser] = useState(useParams())
  const [userGames, setUserGames] = useState([])
  const [userInfo, setUserInfo] = useState({})
  const [searchResults, setSearchResults] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  let navigate = useNavigate()
  useEffect(() => {
    document.title = 'Backlog Home'
  })
  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(
        `http://localhost:3001/api/users/${user.userId}`
      )
      setUserInfo(response.data.user)
    }
    getUser()

    const getUserGames = async () => {
      const response = await axios.get(
        `http://localhost:3001/api/users/${user.userId}/games`
      )
      setUserGames(response.data.userGames)
    }
    getUserGames()
  }, [])

  const getSearchResults = async (e) => {
    e.preventDefault()
    const response = await axios.get(
      `https://api.rawg.io/api/games?key=${rawGKey}&search=${searchQuery}`
    )
    setSearchResults(response.data.results)
    setSearchQuery('')
  }

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

  const showGame = (gameId) => {
    navigate(`/users/${user.userId}/games/${gameId}`)
  }
  return (
    <div>
      <section className="container">
        <div className="content">
          <UserInfo userInfo={userInfo} userGames={userGames} />
          <Search
            onChange={handleChange}
            value={searchQuery}
            onSubmit={getSearchResults}
          />
          <div className="search-results-wrapper">
            <div className="search-results">
              {searchResults.map((result) => (
                <GameCard
                  key={result.id}
                  name={result.name}
                  image={result.background_image}
                  rating={result.rating}
                  id={result.id}
                  showGame={showGame}
                />
              ))}
            </div>
          </div>
          <div className="wrapper">
            {userGames.map((game) => (
              <div key={game._id}>
                <GameCard
                  id={game._id}
                  name={game.gameName}
                  image={game.gameBackgroundImage}
                  showGame={showGame}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
