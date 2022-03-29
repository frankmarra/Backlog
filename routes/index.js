const { Router } = require('express')
const gameControllers = require('../controllers/gameController')
const userControllers = require('../controllers/userControllers')
const router = Router()

router.get('/', (req, res) => res.send('This is the root'))

router.post('/users', userControllers.createUser)

router.get('/users', userControllers.getAllUsers)

router.get('/users/:userId/games', userControllers.getAllUserGames)

router.put('/users/:userId/:gameId', userControllers.updateUserGameStatus)

router.put('/games/:gameId/:userId', gameControllers.updateUserGames)

router.delete('/games/:gameId/:userId', gameControllers.deleteUserGame)

router.post('/games', gameControllers.createGame)

router.get('/games', gameControllers.getAllGames)

router.get('/games/:gameId', gameControllers.getGame)

router.post('/notes/:userId/:gameId', gameControllers.createNote)

router.put('/notes/:noteId', gameControllers.updateNote)

router.get('/notes/:userId/:gameId', gameControllers.getNotesByGame)

router.delete('/notes/:noteId', gameControllers.deleteNote)

module.exports = router
