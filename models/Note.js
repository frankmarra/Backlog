const { Schema } = require('mongoose')

const Note = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    game: { type: Schema.Types.ObjectId, ref: 'Game' },
    noteText: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Note
