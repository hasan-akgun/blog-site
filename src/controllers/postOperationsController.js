const { connectDB, closeDB, selectCollection } = require("../config/databaseConfig");
const { ObjectId } = require("mongodb")

const createNewPost = async (req, res) => {
  const { title, content } = req.body

  await connectDB();
  const postsCollection = selectCollection("posts");

  try {
    await postsCollection.insertOne({
      title: title,
      content: content
    })
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Post couldnt created"
    })
    return;

  } finally {
    await closeDB();
  }


  res.status(200).json({
    success: true,
    message: "Post created"
  })
}

const deletePost = async (req, res) => {
  const { id } = req.body

  await connectDB();
  const postsCollection = selectCollection("posts");

  try {
    await postsCollection.deleteOne({
      _id: new ObjectId(id)
    })
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Post couldnt be deleted"
    })
    return

  } finally {
    await closeDB();
  }

  res.status(200).json({
    success: true,
    message: "Post deleted"
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

const readOnePost = async (req, res) => {
  const { id } = req.params

  await connectDB();
  const postsCollection = selectCollection("posts");
  let post;
  try {
    post = await postsCollection.find({
      _id: new ObjectId(id)
    }).toArray();

  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Post couldnt be retrieved",
    })
  } finally {
    await closeDB();
  }

  res.status(200).json({
    success: true,
    message: "Post retrieved",
    data: post
  })
}

const updatePost = async (req, res) => {
  const { id, title, content } = req.body

  await connectDB();
  const postsCollection = selectCollection("posts");

  try {
    await postsCollection.updateOne(
      { _id: new ObjectId(id) },

      {
        $set: { title: title, content: content },
        $currentDate: { lastModified: true }
      }
    );
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Post couldnt be updated",
    })
  } finally {
    await closeDB();
  }

  res.status(200).json({
    success: true,
    message: "Post updated",
  })
}

module.exports = { createNewPost, deletePost, readAllPosts, readOnePost, updatePost };


