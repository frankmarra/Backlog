import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import HandleUserCreate from '../components/HandleUserCreate'

const CreateNewUser = ({ allUsers }) => {
  // const [userName, setUserName] = useState('')
  // const [backlogUserId, setBacklogUserId] = useState(null)
  // let navigate = useNavigate()
  const [userList, setUserList] = useState([])
  useEffect(() => {
    document.title = 'Backlog Create User'
  })

  useEffect(() => {
    const getAllUsers = async () => {
      const response = await axios.get(`http://localhost:3001/api/users`)
      setUserList(response.data.users)
    }
    getAllUsers()
  }, [])

  // const handleOnSubmit = async () => {
  //   let foundUser = 0
  //   console.log(allUsers)
  //   allUsers.forEach((user) => {
  //     if (user.userName == userName.toLowerCase()) {
  //       foundUser++
  //     }
  //   })
  //   if (foundUser === 0) {
  //     const newUser = {
  //       userName: userName.toLowerCase()
  //     }
  //     const response = await axios
  //       .post('/users', newUser)
  //       .catch((err) => console.log(err))
  //     console.log('User Created')
  //     setBacklogUserId(response.data.user._id)
  //     navigate(`/users/${backlogUserId}`)
  //   }
  // }
  // const handleUserNameChange = (e) => {
  //   e.preventDefault()
  //   setUserName(e.target.value)
  // }

  return <HandleUserCreate userList={userList} />
}

export default CreateNewUser
