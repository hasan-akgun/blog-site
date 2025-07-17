const validateUsername = (req, res, next) => {
  const { username, password } = req.body;

  if (typeof username !== "string") {
    res.status(400).json({
      success: false,
      message: "enter a valid name"
    })
    return
  }

  const space = /\s/;
  if (space.test(username)) {
    res.status(400).json({
      success: false,
      message: "Dont use spaces"
    })
    return
  }
}

const validateHTML = (req, res, next) => {
  const { username } = req.body

  const htmlRegex = /<\w+>/i;
  if (htmlRegex.test(comment)) {
    res.status(400).json({
      success: false,
      message: "Please enter a valid comment"
    })
    return
  }

  res.status(200).json({
    success: true,
    message: "success"
  })
}

module.exports = {validateUsername, validateHTML}