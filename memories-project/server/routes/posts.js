import express from "express";

import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.js";

const router = express.Router();

//route to fetch data
router.get("/", getPosts);

//route to create data
router.post("/", createPost);

//route to edit data
//we need the id for editing
router.patch("/:id", updatePost);

//route to delete data
router.delete("/:id", deletePost);

//route to likeCount
router.patch("/:id/likePost", likePost);

export default router;
