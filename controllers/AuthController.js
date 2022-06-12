const { User } = require('../models/Index')
const middleware = require('../middleware/index')

const Login = async (req, res) => {
  try {
    const user = await User.findOne({
      userEmail: req.body.email
    })
    if (
      user &&
      (await middleware.comparePassword(
        user.userPasswordDigest,
        req.body.password
      ))
    ) {
      let payload = {
        id: user._id,
        email: user.userEmail
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const Register = async (req, res) => {
  try {
    const { email, password, name } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const user = await new User({
      userName: name,
      userEmail: email,
      userPasswordDigest: passwordDigest
    })
    await user.save()
    return res.status(201).json({ user })
  } catch (error) {
    throw error
  }
}

module.exports = {
  Login,
  Register
}
