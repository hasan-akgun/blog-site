const createSession = (req, res)=>{
  const {username} = req.body

  req.session.username = username;
  res.status(200).json({
    success: true,
    message: "Session created"
  })
}

module.exports={createSession};