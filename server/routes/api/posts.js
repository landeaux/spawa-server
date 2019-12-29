const router = require('express').Router();
const mongoose = require('mongoose');

const Post = mongoose.model('Post');

// Get Posts
router.get('/', async (req, res) => {
  res.send(await Post.find());
});

// Add Post
router.post('/', async (req, res) => {
  const post = new Post();
  post.text = req.body.text;
  await post.save();
  res.status(201).send();
});

// Delete Post
router.delete('/:id', async (req, res) => {
  await Post.deleteOne({ _id: req.params.id });
  res.status(200).send();
});

module.exports = router;
