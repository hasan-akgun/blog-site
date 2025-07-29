const validateUsername = (req, res, next) => {
  const username = req.body.username || '';

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

  next();
}

const validateHTML = (req, res, next) => {
  const { username } = req.body

  const htmlRegex = /<\w+>/i;
  if (htmlRegex.test(username)) {
    res.status(400).json({
      success: false,
      message: "Please enter a valid comment"
    })
    return
  }

  next();
}

module.exports = {validateUsername, validateHTML}