const User = require('../../models/users/user')

//get user
const index = async (req, res, next) => {
  try {
    const user = await User.find()
    res.json(user)
  } catch (error) {
    res.json({ message: err })
  }
}
//post user
const postUser = async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })
  try {
    const savePostUser = await user.save()
    res.json(savePostUser)
  } catch (error) {
    console.log(error.message)
  }
}

//search user
const searchUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId)
    res.json(user)
  } catch (error) {
    rew.json({ message: err })
  }
}
//update user
const updateUser = async (req, res) => {
  try {
    const user = await User.updateOne({
      _id: req.params.userId
    },
      {
        $set: {
          name: req.body.name,
          // age:req.body.age,
        }
      }
    )
    res.json(user)
  } catch (error) {
    res.json({ message: error })
  }
}
//delete user
const deleteUser = async (req, res) => {
  try {
    const user = await User.remove({
      _id: req.params.userId
    })
    res.json(user)
  } catch (error) {
    res.json({ message: error })
  }
}

module.exports = {
  index,
  postUser,
  searchUser,
  updateUser,
  deleteUser
}
