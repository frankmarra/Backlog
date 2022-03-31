import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import GameDetail from '../components/GameDetail'

const GameDetails = () => {
  let { userId } = useParams()

  return (
    <div className="game-content-wrapper">
      <GameDetail />
      <Link to={`/users/${userId}`}>Back</Link>
    </div>
  )
}
export default GameDetails
