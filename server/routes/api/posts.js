const router = require('express').Router();
const mongoose = require('mongoose');
const Post = mongoose.model('Post');

// Get Posts
router.get('/', async (req, res) => {
  try {
    res.send(await Post.find())
  } catch (err) {
    throw(err)
  }
});

// Add Post
router.post('/', async (req, res) => {
  try {
    var post = new Post();
    post.text = req.body.text;
    await post.save();
    res.status(201).send();
  } catch (err) {
    throw(err)
  }
});

// Delete Post
router.delete('/:id', async (req, res) => {
  try {
    await Post.deleteOne({ _id: req.params.id })
    res.status(200).send();
  } catch (err) {
    throw(err)
  } 
});

module.exports = router;
