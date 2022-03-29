const { User, Game } = require('../models/Index')

const createUser = async (req, res) => {
  try {
    const user = await new User(req.body)
    await user.save()
    return res.status(201).json({ user })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId)
    if (user) {
      return res.status(200).json({ user })
    }
    return res.status(404).send('User not found')
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

const updateUserGameStatus = async (req, res) => {
  try {
    const game = await Game.findById(req.params.gameId)
    game.gameUsers.forEach((user) => {
      if (user.user == req.params.userId) {
        user.status = req.body.status
      }
    })
    await game.save()

    return res.status(200).json({ game })
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
        if (user.user == req.params.userId) {
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
  getUser,
  getAllUsers,
  updateUserGameStatus,
  getAllUserGames
}
