import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const HandleUserCreate = ({ userList }) => {
  const [userName, setUserName] = useState('')
  const [userCreated, setUserCreated] = useState(false)
  const [userId, setUserId] = useState(null)
  let navigate = useNavigate()

  const handleOnSubmit = async (event) => {
    event.preventDefault()
    let foundUser = 0
    userList.forEach((user) => {
      if (user.userName == userName.toLowerCase()) {
        foundUser++
      }
    })
    if (foundUser === 0) {
      const newUser = {
        userName: userName.toLowerCase()
      }
      const response = await axios
        .post('http://localhost:3001/api/users', newUser)
        .catch((err) => console.log(err))
      setUserId(response.data.user._id)
      console.log('userId: ', userId)
      setUserCreated(true)
      console.log('user Created: ', userCreated)
    }
  }
  const handleUserNameChange = (event) => {
    event.preventDefault()
    setUserName(event.target.value)
  }

  return userCreated ? (
    <div className="user-created-wrapper">
      <h2>Thanks for joining Backlog!</h2>
      <h3>Click the button to go to your homepage!</h3>
      <button onClick={() => navigate(`/users/${userId}`)}>Your Backlog</button>
    </div>
  ) : (
    <form onSubmit={handleOnSubmit}>
      <div>
        <label>Choose a user name:</label>
        <input type="text" name="name" onChange={handleUserNameChange} />
        <button type="submit">Create!</button>
      </div>
    </form>
  )
}

export default HandleUserCreate
