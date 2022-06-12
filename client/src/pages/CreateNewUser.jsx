import { useState, useEffect } from 'react'
import axios from 'axios'
import HandleUserCreate from '../components/HandleUserCreate'

const CreateNewUser = () => {
  const [userList, setUserList] = useState([])
  useEffect(() => {
    document.title = 'Backlog Create User'
  }, [])

  useEffect(() => {
    const getAllUsers = async () => {
      const response = await axios.get(`/users`)
      setUserList(response.data.users)
    }
    getAllUsers()
  }, [])

  return <HandleUserCreate userList={userList} />
}

export default CreateNewUser
