const { Schema } = require('mongoose')

const User = new Schema(
  {
    userName: { type: String, required: true },
    userEmail: { type: String, required: true },
    userPasswordDigest: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = User
