import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import HandleLogin from '../components/HandleLogin'

const Login = () => {
  const [userList, setUserList] = useState([])
  let navigate = useNavigate()

  useEffect(() => {
    document.title = 'Backlog Login'
  })

  useEffect(() => {
    const getAllUsers = async () => {
      const response = await axios.get(`/users`)
      setUserList(response.data.users)
    }
    getAllUsers()
  }, [])

  return (
    <div className="login-page">
      <div className="login-form-wrapper">
        <HandleLogin userList={userList} />
      </div>
      <h3>Need to create an account?</h3>
      <button onClick={() => navigate(`/create_account`)}>Click Here!</button>
    </div>
  )
}

export default Login
