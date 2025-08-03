const fs = require("fs").promises
const path = require("path")

const deleteFile = async (req, res, next) => {
  const {fileurl} = req.body
  const {id} = req.body


  const rootPath = process.cwd()
  try {
    const fullPath = path.join(rootPath, "public", fileurl)
    console.log(fullPath)

    await fs.access(fullPath);

    await fs.unlink(fullPath);
    console.log("file deleted")
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('File does not exist');
      res.status(400).json({
        success: false,
        message: "file doesnt exist"
      })
    } else {
      console.error('Error deleting file:', err);
      res.status(400).json({
        success: false,
        message: "Error deleting file:"
      })
    }
  }

  next();
}

module.exports={deleteFile}