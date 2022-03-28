const { Router } = require('express')
const gameControllers = require('../controllers/gameController')
const router = Router()

router.get('/', (req, res) => res.send('This is the root'))

router.post('/users', gameControllers.createUser)

router.get('/users', gameControllers.getAllUsers)

router.get('/users/:userId/games', gameControllers.getAllUserGames)

router.put('/games/:gameId/:userId', gameControllers.updateUserGames)

router.delete('/games/:gameId/:userId', gameControllers.deleteUserGame)

router.post('/games', gameControllers.createGame)

router.get('/games', gameControllers.getAllGames)

router.get('/games/:gameId', gameControllers.getGame)

module.exports = router
