import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const HandleLogin = ({ userList }) => {
  const [userName, setUserName] = useState('')
  let navigate = useNavigate()
  const handleUserNameChange = (event) => {
    event.preventDefault()
    setUserName(event.target.value)
  }

  const handleOnSubmit = async (event) => {
    event.preventDefault()
    if (userName === '') {
      alert('please enter a user name.')
    }
    userList.forEach((user) => {
      if (user.userName === userName.toLowerCase()) {
        navigate(`/users/${user._id}`)
      }
    })
  }

  return (
    <form className="login-form" onSubmit={handleOnSubmit}>
      <label>
        Username:
        <input onChange={handleUserNameChange} type="text" name="username" />
      </label>
      <button className="login-button" type="submit">
        Login!
      </button>
    </form>
  )
}

export default HandleLogin
