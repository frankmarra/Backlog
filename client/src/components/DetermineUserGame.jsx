import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DetermineUserGame = ({ selectedGame, backlogId }) => {
  const [isUserGame, setIsUserGame] = useState(false)
  let { userId } = useParams()

  useEffect(() => {
    selectedGame.forEach((user) => {
      if (user.user == userId) {
        setIsUserGame(true)
        console.log(isUserGame)
      }
    })
  }, [])

  const addGameToUser = async () => {
    axios
      .put(`http://localhost:3001/api/games/${backlogId}/${userId}`)
      .catch((err) => console.log(err))
    setIsUserGame(true)
  }

  const deleteGameFromUser = async () => {
    axios.delete(`http://localhost:3001/api/games/${backlogId}/${userId}`)
    setIsUserGame(false)
  }

  return isUserGame ? (
    <div className="crud-buttons">
      <h4>This game is in your library!</h4>
      <button onClick={() => deleteGameFromUser()}>Delete?</button>
    </div>
  ) : (
    <div className="crud-buttons" onClick={() => addGameToUser()}>
      <button>Add To Your Backlog!</button>
    </div>
  )
}

export default DetermineUserGame
