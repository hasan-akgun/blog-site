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

const readAllRequests = async (req, res) => {
  await connectDB();
  const reuestsCollection = selectCollection("posts");
  let allRequests;

  try {
    allRequests = await reuestsCollection.find({}).toArray();
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "All requests couldnt be retrieved",
    })
  } finally {
    await closeDB();
  }

  res.status(200).json({
    success: true,
    message: "All requests retrieved",
    data: allRequests
  })
}

module.exports = {saveRequest, readAllRequests};