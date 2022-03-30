import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DetermineUserGame = ({ selectedGame, backlogId }) => {
  const [isUserGame, setIsUserGame] = useState(false)
  const [user, setUser] = useState([])
  const [value, setValue] = useState('')
  const [statusChangeMessage, setStatusChangeMessage] = useState('')
  let { userId } = useParams()

  useEffect(() => {
    selectedGame.forEach((user) => {
      if (user.user == userId) {
        setIsUserGame(true)
        setUser(user)
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
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  const updateGameStatus = async (choice) => {
    if (choice == user.status) {
      setStatusChangeMessage('This is the current game status')
    } else if (choice !== user.status && choice == 'Not Started') {
      const response = await axios
        .put(`http://localhost:3001/api/users/${userId}/${backlogId}`, {
          status: 'Not Started'
        })
        .catch((err) => console.log(err))
      setStatusChangeMessage(user.status)
    } else if (choice !== user.status && choice == 'In Progress') {
      const response = await axios
        .put(`http://localhost:3001/api/users/${userId}/${backlogId}`, {
          status: 'In Progress'
        })
        .catch((err) => console.log(err))
      setStatusChangeMessage(user.status)
    } else if (choice !== user.status && choice == 'Completed') {
      const response = await axios
        .put(`http://localhost:3001/api/users/${userId}/${backlogId}`, {
          status: 'Completed'
        })
        .catch((err) => console.log(err))
      setStatusChangeMessage(user.status)
    }
  }

  return isUserGame ? (
    <div className="crud-buttons">
      <h4>This game is in your library!</h4>
      <p>Game Status: {user.status}</p>
      <div className="drop-down-menu">
        <label>
          Update Status?
          <select value={value} onChange={handleChange}>
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </label>
        <button onClick={() => updateGameStatus(value)}>Update!</button>
      </div>
      <p>{statusChangeMessage}</p>
      <button onClick={() => deleteGameFromUser()}>Delete?</button>
    </div>
  ) : (
    <div className="crud-buttons" onClick={() => addGameToUser()}>
      <button>Add To Your Backlog!</button>
    </div>
  )
}

export default DetermineUserGame
