import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Login = () => {
  const [userName, setUserName] = useState('')
  const [userId, setUserId] = useState('')

  useEffect(() => {
    document.title = 'Backlog Login'
  })

  const handleUserNameChange = (e) => {
    e.preventDefault()
    setUserName(e.targe.value)
  }

  const handleOnSubmit = async (e) => {
    if (userName === '') {
      console.log('please enter a user name')
    }
    e.preventDefault()
    const users = await axios.get(`http://localhost:3001/api/users`)
    users.forEach((user) => {
      if (user.name === userName) {
        setUserId(user._id)(<Link to={`/users/${userId}`} state={userId} />)
      }
    })
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
