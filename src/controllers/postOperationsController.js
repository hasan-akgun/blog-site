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

  await closeDB();

  res.status(200).json({
    success: true,
    message: "Post created"
  })
}

const deletePost = async (req, res) => {
  const {id} = req.body

  await connectDB();
  const postsCollection = selectCollection("posts");

  await postsCollection.deleteOne({
    _id: new ObjectId(id)
  })

  await closeDB();

  res.status(200).json({
    success: true,
    message: "Post deleted"
  })
  
}

const readAllPosts = async (req, res) => {
  await connectDB();
  const postsCollection = selectCollection("posts");

  const allPosts = await postsCollection.find({}).toArray();

  await closeDB();

  res.status(200).json({
    success: true,
    message: "Post deleted",
    data: allPosts
  })
}
