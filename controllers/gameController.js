const { Game, Note } = require('../models/Index')

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

const updateNote = async (req, res) => {
  try {
    const note = await Note.updateOne(
      { _id: req.params.noteId },
      {
        $set: { noteText: req.body.noteText }
      }
    )
    return res.status(200).json({ note })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const getNotesByGame = async (req, res) => {
  try {
    const notes = await Note.find()
    let gameNotes = []
    notes.forEach((note) => {
      if (note.user == req.params.userId && note.game == req.params.gameId) {
        gameNotes.push(note)
      }
    })
    if (gameNotes) {
      return res.status(200).json({ gameNotes })
    }
    return res.status(404).send('Notes for this game do not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.noteId)
    return res.status(200).send('Note Deleted')
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

const updateUserGames = async (req, res) => {
  try {
    const game = await Game.updateOne(
      { _id: req.params.gameId },
      {
        $addToSet: {
          gameUsers: { user: req.params.userId, status: req.body.status }
        }
      }
    )
    return res.status(200).json({ game })
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

module.exports = {
  createGame,
  createNote,
  updateNote,
  getNotesByGame,
  deleteNote,
  getAllGames,
  deleteUserGame,
  getGame,
  updateUserGames
}
