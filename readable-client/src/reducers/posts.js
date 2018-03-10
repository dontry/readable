import {
  FETCH_POSTS,
  FETCH_POSTS_BY_CATEGORY,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  RESET_FETCHED_POSTS,
  FETCH_POST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
  RESET_FETCHED_POST,
  ADD_POST,
  ADD_POST_FAILURE,
  ADD_POST_SUCCESS,
  UPDATE_POST,
  UPDATE_POST_FAILURE,
  UPDATE_POST_SUCCESS,
  DELETE_POST,
  DELETE_POST_FAILURE,
  DELETE_POST_SUCCESS,
  RESET_DELETED_POST
} from "../actions/posts";

const INITIAL_STATE = {
  postsList: { posts: [], error: null, loading: false },
  newPost: { post: null, error: null, loading: false },
  activePost: { post: null, error: null, loading: false },
  deletedPost: { post: null, error: null, loading: false }
};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch (action.type) {
    //Fetch post list
    case FETCH_POSTS:
    case FETCH_POSTS_BY_CATEGORY:
      return { ...state, postsList: { posts: [], error: null, loading: true } };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        postsList: { posts: action.payload, error: null, loading: false }
      };
    case FETCH_POSTS_FAILURE:
      error = action.payload || { message: action.payload.message };
      return {
        ...state,
        postsList: { posts: [], error: error, loading: false }
      };
    case RESET_FETCHED_POSTS:
      return {
        ...state,
        postsList: { posts: [], error: null, loading: false }
      };
    //Fetch a post
    case FETCH_POST:
      return { ...state, activePost: { ...state.activePost, loading: true } };
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        activePost: { post: action.payload, error: null, loading: false }
      };
    case FETCH_POST_FAILURE:
      error = action.payload || { message: action.payload.message };
      return {
        ...state,
        activePost: { post: null, error: error, loading: false }
      };
    case RESET_FETCHED_POST:
      return {
        ...state,
        activePost: { post: null, error: null, loading: false }
      };
    //Create a post
    case ADD_POST:
      return { ...state, newPost: { ...state.newPost, loading: true } };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        newPost: { post: action.payload, error: null, loading: false}
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        newPost: { post: null, error: null, loading: false }
      };
    case RESET_NEW_POST:
      return {
        ...state,
        newPost: { post: null, error: null, loading: false }
      };
    //Delete a post
    case DELETE_POST:
      return { ...state, deletedPost: { ...state.deletedPost, loading: true } };
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        deletedPost: { post: action.payload, error: null, loading: false }
      };
    case DELETE_POST_FAILURE:
      error = action.payload || { message: action.payload.message };
      return {
        ...state,
        deletedPost: { post: action.payload, error: error, loading: false }
      };
    case RESET_DELETED_POST:
      return {
        ...state,
        deletedPost: { post: null, error: null, loading: fale }
      };
    default:
      return state;
  }
}