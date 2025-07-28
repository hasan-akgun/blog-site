const { connectDB, closeDB, selectCollection } = require("../config/databaseConfig")

const saveRequest = async (req, res) => {

  const { username, fileurl } = req.body;
  await connectDB();
  const requestsCollection = selectCollection("requests")

  try {
    await requestsCollection.insertOne({
      username: username,
      fileurl: fileurl
    })
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Request couldnt created"
    })
  } finally {
    await closeDB();
  }

  res.status(200).json({
    success: true,
    message: "Request saved"
  })

}

const readAllPosts = async (req, res) => {
  await connectDB();
  const postsCollection = selectCollection("posts");
  let allPosts;

  try {
    allPosts = await postsCollection.find({}).toArray();
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "All posts couldnt be retrieved",
    })
  } finally {
    await closeDB();
  }

  res.status(200).json({
    success: true,
    message: "All posts retrieved",
    data: allPosts
  })
}

module.exports = {saveRequest};