const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Posts
router.get('/', async (req, res) => {
  const posts = await loadPostsCollection();
  res.send(await posts.find({}).toArray());
})

// Add Post
router.post('/', async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.insertOne({
    text: req.body.text,
    createdAt: new Date()
  });
  res.status(201).send();
})

// Delete Post
router.delete('/:id', async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
  res.status(200).send();
})

async function loadPostsCollection () {
  const client = await mongodb.MongoClient.connect(
    `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds061621.mlab.com:61621/${process.env.DB_NAME}`, { 
      useNewUrlParser: true,
      useUnifiedTopology: true
  });

  return client.db('spawa_dev').collection('posts');
}

module.exports = router;
