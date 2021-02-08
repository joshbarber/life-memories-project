//* means we import everything from actions as api
import * as api from "../api";
import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

//have to make Action Creators. Action Creators are functions that return actions, and that action is just an object that has type and payload

//payload is where we store our posts
export const getPosts = () => async (dispatch) => {
  try {
    //we are getting response from api and destructuring it. The data represents the posts
    const { data } = await api.fetchPosts();

    //when the request is successful we dispatch the FETCH_ALL action
    //instead of return action we have dispatch action
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

//successfully using Redux to pass/dispatch an action from the data from our backend

//1) fetching data from the api
//2) sending data through action.payload. The action.payload is the actual posts

export const createPost = (post) => async (dispatch) => {
  try {
    //this is basically making an api request to our backend server
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    //this is returning the updated data/post
    const { data } = await api.updatePost(id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
