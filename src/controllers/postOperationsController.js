const {connectDB, closeDB, selectCollection} = require("../config/databaseConfig");
const { ObjectId } = require("mongodb")

const createNewPost = async (req, res) => {
  const {title, content} = req.body

  await connectDB();
  const postsCollection = selectCollection("posts");

  await postsCollection.insertOne({
    title: title,
    content: content
  })

  res.status(200).json({
    success: true,
    message: "Post created"
  })
}
