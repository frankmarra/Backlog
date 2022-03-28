const { Game, Note, User } = require('../models/Index')

const createUser = async (req, res) => {
  try {
    const user = await new User(req.body)
    await user.save()
    return res.status(201).json({ user })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createGame = async (req, res) => {
  try {
    const game = await new Game(req.body)
    await game.save()
    return res.status(201).json({ game })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createNote = async (req, res) => {
  try {
    const note = await new Note(req.body)
    await note.save()
    return res.status(201).json({ note })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getAllUserGames = async (req, res) => {
  try {
    const games = await Game.find()
    let userGames = []
    games.forEach((game) => {
      if (game.gameUsers._id == req.params.id) {
        userGames.push(game)
      }
    })
    if (userGames) {
      return res.status(200).json({ userGame })
    }
    return res.status(404).send('You have no games.')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createUser,
  createGame,
  createNote,
  getAllUserGames
}
