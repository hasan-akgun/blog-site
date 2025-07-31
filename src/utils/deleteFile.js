const fs = require("fs").promises

const deleteFile = async (filePath) => {
  try {
    await fs.access(filePath);

    await fs.unlink(filePath);
    console.log("file deleted")
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('File does not exist');
    } else {
      console.error('Error deleting file:', err);
    }
  }
}

module.exports={deleteFile}