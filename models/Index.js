const mongoose = require('mongoose')
const UserSchema = require('./User')
const GameSchema = require('./Game')
const NoteSchema = require('./Note')

const User = mongoose.model('users', UserSchema)
const Game = mongoose.model('games', GameSchema)
const Note = mongoose.model('notes', NoteSchema)

module.exports = {
  User,
  Game,
  Note
}
