const {MongoClient} = require("mongodb");
require("dotenv").config();

const client = new MongoClient(process.env.DATABASE);

const connectDB = async () => {
  try {
    await client.connect();
    console.log("DB Connected");

  } catch (error) {
    console.log(error);
  }
}

const closeDB = async () => {
  try {
    await client.close();
    console.log("DB Closed")
  } catch (error) {
    console.log(error)
  }
  
}

const selectConnection = (collectionName) => {

  try {
    const database = client.db("blog_db");
    const collection = database.collection(collectionName);
    return collection;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {connectDB, closeDB, selectConnection};