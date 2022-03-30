import axios from 'axios'
import { useEffect, useState } from 'react'
import SetBacklogId from './SetBacklogId'

const GetGamesAgain = () => {
  const [allGamesAgain, setAllGamesAgain] = useState([])
  useEffect(() => {
    const getAllGames = async () => {
      const response = await axios.get(`http://localhost:3001/api/games`)
      console.log(response.data.games)
      setAllGamesAgain(response.data.games)
      console.log('got games again: ', allGamesAgain)
    }
    getAllGames()
  }, [])

  return <SetBacklogId allGamesAgain={allGamesAgain} />
}

export default GetGamesAgain
