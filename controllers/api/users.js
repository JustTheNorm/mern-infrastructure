const User = require(`../../models/user`)
const jwt = require(`jsonwebtoken`)


  async function create(req, res) {
    console.log(req.body)
    // Baby step...
    try{
      // Add the user to the database
      const user = await User.create(req.body)
      // Create JWT token
      const token = createJWT(user)
      // send token to client
      res.json(token)
    } catch (err){
      res.status(400).json(`Bad Credentials`)
    }
  }

  function createJWT(user){
    return jwt.sign(
      {user},
      process.env.SECRET,
      {expiresIn: `24h`}
    )
    
  }

  module.exports = {
    create,
    createJWT
  };
  