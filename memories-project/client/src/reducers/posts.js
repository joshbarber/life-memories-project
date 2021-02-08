import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

//intliazed state to empty array since our posts is going to be an array
export default (posts = [], action) => {
  switch (action.type) {
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    case UPDATE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case FETCH_ALL:
      return action.payload;
    //we have to copy the previous posts and store the new post which is located in action.payload
    case CREATE:
      return [...posts, action.payload];

    default:
      return posts;
  }
};
