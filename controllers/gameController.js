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

const getAllGames = async (req, res) => {
  try {
    const games = await Game.find()
    return res.status(200).json({ games })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
    return res.status(200).json({ users })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateUserGames = async (req, res) => {
  try {
    const game = await Game.updateOne(
      { _id: req.params.gameId },
      {
        $addToSet: {
          gameUsers: { user: req.params.userId, status: 'Not Started' }
        }
      }
    )
    return res.status(200).json({ game })
    return res.status(404).send('Game does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteUserGame = async (req, res) => {
  try {
    const game = await Game.updateOne(
      { _id: req.params.gameId },
      {
        $pull: {
          gameUsers: { user: req.params.userId }
        }
      }
    )
    return res.status(200).json({ game })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getGame = async (req, res) => {
  try {
    const game = await Game.findById(req.params.gameId)
    if (game) {
      return res.status(200).json({ game })
    }
    return res.status(404).send('Game not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getAllUserGames = async (req, res) => {
  try {
    const games = await Game.find()
    let userGames = []
    games.forEach((game) => {
      game.gameUsers.forEach((user) => {
        if (user._id == req.params.userId) {
          userGames.push(game)
        }
      })
    })
    if (userGames) {
      return res.status(200).json({ userGames })
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
  getAllGames,
  deleteUserGame,
  getGame,
  getAllUsers,
  updateUserGames,
  getAllUserGames
}
