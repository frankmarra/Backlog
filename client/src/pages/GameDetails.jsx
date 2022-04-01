import { useParams } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import GameDetail from '../components/GameDetail'

const GameDetails = () => {
  let { userId } = useParams()

  // <Link to={`/users/${userId}`} className="back-button">
  //   Back
  // </Link>
  return (
    <div className="game-content-wrapper">
      <GameDetail />
    </div>
  )
}
export default GameDetails
