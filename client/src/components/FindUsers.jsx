import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DetermineUserGame from './DetermineUserGame'

const FindUsers = ({ backlogId }) => {
  const [selectedGame, setSelectedGame] = useState(null)
  // const [isUserGame, setIsUserGame] = useState(false)
  let { userId } = useParams()

  useEffect(() => {
    const findUsers = async () => {
      console.log('backlog Id: ', backlogId)
      const response = await axios.get(
        `http://localhost:3001/api/games/${backlogId}`
      )
      setSelectedGame(response.data.game.gameUsers)
      console.log('selected game users: ', selectedGame)
      // selectedGame.forEach((user) => {
      //   if (user.user == userId) {
      //     setIsUserGame(true)
      //     console.log(isUserGame)
      //   }
      // })
    }
    findUsers()
  }, [])

  // const addGameToUser = async () => {
  //   axios
  //     .put(`http://localhost:3001/api/games/${backlogId}/${userId}`)
  //     .catch((err) => console.log(err))
  //   setIsUserGame(true)
  // }

  // const deleteGameFromUser = async () => {
  //   axios.delete(`http://localhost3001/api/games/${backlogId}/${userId}`)
  //   setIsUserGame(false)
  // }
  // isUserGame ? (
  //   <div className="crud-buttons">
  //     <h4>This game is in your library!</h4>
  //     <button onClick={() => deleteGameFromUser()}>Delete?</button>
  //   </div>
  // ) : (
  //   <div className="crud-buttons" onClick={() => addGameToUser()}>
  //     <button>Add To Your Backlog!</button>
  //   </div>
  // )
  return (
    selectedGame && (
      <DetermineUserGame selectedGame={selectedGame} backlogId={backlogId} />
    )
  )
}

export default FindUsers
