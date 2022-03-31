import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const HandleUserCreate = ({ userList }) => {
  const [userName, setUserName] = useState('')
  let navigate = useNavigate()

  const navToUserPage = (userId) => {
    navigate(`/users/${userId}`)
  }
  const handleOnSubmit = async () => {
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
      navToUserPage(response.data.user._id)
    }
  }
  const handleUserNameChange = (e) => {
    e.preventDefault()
    setUserName(e.target.value)
  }

  return (
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
