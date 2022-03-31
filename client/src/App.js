import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import GameDetails from './pages/GameDetails'
import CreateNewUser from './pages/CreateNewUser'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/users/:userId" element={<Home />} />
          <Route path="/create_account" element={<CreateNewUser />} />
          <Route
            path="/users/:userId/games/:gameId"
            element={<GameDetails />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
