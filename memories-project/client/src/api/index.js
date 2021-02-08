import axios from "axios";

const url = "http://localhost:5000/posts";

//these are the api calls to our routes

//fecth all data/posts
export const fetchPosts = () => axios.get(url);
//create data/post
export const createPost = (newPost) => axios.post(url, newPost);
//update data/post
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);

export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
