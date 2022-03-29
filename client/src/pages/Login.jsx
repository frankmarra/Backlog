import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [userName, setUserName] = useState('')
  const [userList, setUserList] = useState([])
  let navigate = useNavigate()

  useEffect(() => {
    document.title = 'Backlog Login'
  })

  const handleUserNameChange = (e) => {
    e.preventDefault()
    setUserName(e.target.value)
  }
  const navToUser = (userList) => {
    userList.forEach((user) => {
      if (user.userName === userName) {
        navigate(`/users/${user._id}`)
      }
    })
  }
  const handleOnSubmit = async (e) => {
    if (userName === '') {
      console.log('please enter a user name')
    }
    e.preventDefault()
    const response = await axios.get(`http://localhost:3001/api/users`)
    setUserList(response.data.users)
    navToUser(userList)
  }
  return (
    <form onSubmit={handleOnSubmit}>
      <label>
        Username:
        <input onChange={handleUserNameChange} type="text" name="username" />
      </label>
      <button type="submit">Login!</button>
    </form>
  )
}

export default Login
