const { Schema } = require('mongoose')

const Game = new Schema(
  {
    gameName: { type: String, required: true },
    gameReleaseDate: { type: String, required: true },
    gameDescription: { type: String, required: true },
    gameGenre: [{ type: String, required: true }],
    gameBackgroundImage: { type: String, required: true },
    gameDeveloper: [{ type: String, required: true }],
    gameDataId: { type: String, required: true },
    gameUsers: [
      {
        user: { type: Schema.Types.ObjectId, ref: 'User' },
        status: { type: String }
      }
    ]
  },
  { timestamps: true }
)

module.exports = Game
