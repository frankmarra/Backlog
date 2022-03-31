import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const HandleLogin = ({ userList }) => {
  const [userName, setUserName] = useState('')
  let navigate = useNavigate()
  const handleUserNameChange = (e) => {
    e.preventDefault()
    setUserName(e.target.value)
  }

  const handleOnSubmit = async (e) => {
    if (userName === '') {
      console.log('please enter a user name')
    }
    e.preventDefault()
    userList.forEach((user) => {
      if (user.userName === userName) {
        navigate(`/users/${user._id}`)
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

export default HandleLogin
