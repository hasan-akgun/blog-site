const {connectDB, closeDB, selectCollection} = require("../config/databaseConfig")

const verifyUser = async (req, res, next) => {

  const {username, password} = req.body;
  let user

  await connectDB();
  const usersCollection = selectCollection("users");

  user = await usersCollection.find({username: username}).toArray();

  if(user.length === 0){
    res.status(404).json({
      success: false,
      message: "User couldnt find"
    })
    closeDB()
    return
  }

  if(user[0].password === password){
    closeDB()
    next()
  }
  else{
    res.status(404).json({
      success: false,
      message: "Incorrect password"
    })
    closeDB()
    return
  }


}

module.exports = {verifyUser};