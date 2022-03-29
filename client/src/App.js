import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'

// <Route path="/games/:gameId" element={<GamePage />}/>

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/users/:userId" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
