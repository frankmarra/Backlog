const { Router } = require('express')
const gameControllers = require('../controllers/gameController')
const userControllers = require('../controllers/userControllers')
const noteControllers = require('../controllers/noteControllers')
const router = Router()

router.get('/', (req, res) => res.send('This is the root'))

router.post('/users', userControllers.createUser)

router.get('/users', userControllers.getAllUsers)

router.get('/users/:userId', userControllers.getUser)

router.get('/users/:userId/games', userControllers.getAllUserGames)

router.put('/users/:userId/:gameId', userControllers.updateUserGameStatus)

router.put('/games/:gameId/:userId', gameControllers.updateUserGames)

router.delete('/games/:gameId/:userId', gameControllers.deleteUserGame)

router.post('/games', gameControllers.createGame)

router.get('/games', gameControllers.getAllGames)

router.get('/games/:gameId', gameControllers.getGame)

router.post('/notes/:userId/:gameId', noteControllers.createNote)

router.get('/notes/:userId/:gameId', noteControllers.getNotesByGame)

router.put('/notes/:noteId', noteControllers.updateNote)

router.delete('/notes/:noteId', noteControllers.deleteNote)

module.exports = router
