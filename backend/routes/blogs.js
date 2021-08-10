const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");

router.post("/", async (req, res) => {
  const newPost = new Blog(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get a blog
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.send(blog);
  } catch (error) {
    res.status(404).json({ msg: "something went wrong" });
  }
});

//delete blog
router.delete("/:id", async (req, res) => {
  try {
    const blog = await Blog.deleteOne({ _id: req.params.id });
    res.status(204).send()
  } catch (error) {
    res.status(404).send({ error: "Blog doesn't exist!" });
  }
});

//get user's all blogs

router.get("/profile/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    const posts = await Blog.find({ userId: user._id });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
