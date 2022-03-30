import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FindUsers from './FindUsers'

const SetBacklogId = ({ allGamesAgain }) => {
  const [backlogId, setBacklogId] = useState(null)

  let { gameId } = useParams()

  useEffect(() => {
    const findBacklogId = async () => {
      console.log('backlog games again: ', allGamesAgain)
      allGamesAgain.forEach((game) => {
        if (game.gameDataId === gameId) {
          setBacklogId(game._id)
          console.log(backlogId)
        }
      })
    }
    findBacklogId()
  }, [])

  return backlogId && <FindUsers backlogId={backlogId} />
}

export default SetBacklogId
