import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Notes from './Notes'

const DetermineUserGame = ({ selectedGame, backlogId }) => {
  const [isUserGame, setIsUserGame] = useState(false)
  const [user, setUser] = useState([])
  const [value, setValue] = useState('')
  const [userStatus, setUserStatus] = useState('')
  let { userId } = useParams()

  useEffect(() => {
    selectedGame.forEach((user) => {
      if (user.user == userId) {
        setIsUserGame(true)
        setUser(user)
        setUserStatus(user.status)
      }
    })
  }, [])

  const addGameToUser = async () => {
    axios
      .put(`http://localhost:3001/api/games/${backlogId}/${userId}`)
      .catch((err) => console.log(err))
    setIsUserGame(true)
    setUserStatus('Not Started')
  }

  const deleteGameFromUser = async () => {
    axios.delete(`http://localhost:3001/api/games/${backlogId}/${userId}`)
    setIsUserGame(false)
  }
  const handleChange = (event) => {
    setValue(event.target.value)
  }
  const updateGameStatus = async (choice) => {
    if (choice == userStatus) {
      console.log('that is already the status.  choose again')
    } else if (choice !== userStatus && choice == 'Not Started') {
      const response = await axios
        .put(`http://localhost:3001/api/users/${userId}/${backlogId}`, {
          status: 'Not Started'
        })
        .catch((err) => console.log(err))
      setUserStatus('Not Started')
    } else if (choice !== userStatus && choice == 'In Progress') {
      const response = await axios
        .put(`http://localhost:3001/api/users/${userId}/${backlogId}`, {
          status: 'In Progress'
        })
        .catch((err) => console.log(err))
      setUserStatus('In Progress')
    } else if (choice !== userStatus && choice == 'Completed') {
      const response = await axios
        .put(`http://localhost:3001/api/users/${userId}/${backlogId}`, {
          status: 'Completed'
        })
        .catch((err) => console.log(err))
      setUserStatus('Completed')
    }
  }

  return isUserGame ? (
    <div className="crud-buttons">
      <h4>This game is in your library!</h4>
      <p>Game Status: {userStatus}</p>
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
      <button onClick={() => deleteGameFromUser()}>Delete?</button>
      <Notes backlogId={backlogId} />
    </div>
  ) : (
    <div className="crud-buttons" onClick={() => addGameToUser()}>
      <button>Add To Your Backlog!</button>
    </div>
  )
}

export default DetermineUserGame
