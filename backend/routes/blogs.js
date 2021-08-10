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

// //create blog
// router.post("/", async (req, res) => {
//   try {
//     const post = new Blog({
//       title: req.body.title,
//       desc: req.body.desc,
//     });
//     const savedBlog = await post.save();
//     res.json(savedBlog);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// //delete blog
// router.delete("/:id", async (req, res) => {
//   try {
//     const blog = await Blog.deleteOne({ _id: req.params.id });
//     res.status(204).send()
//   } catch (error) {
//     res.status(404).send({ error: "Post doesn't exist!" });
//   }
// });
module.exports = router;
