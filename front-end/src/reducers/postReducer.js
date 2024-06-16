import { FETCH_POSTS, FILTER_POSTS, ADD_POST } from '../actions/postAction';

const initialState = {
  allPosts: [],
  filteredPosts: [],
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        allPosts: action.payload,
        filteredPosts: action.payload,
      };
    case FILTER_POSTS:
      return {
        ...state,
        filteredPosts: state.allPosts.filter((post) =>
          post.nombre.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    case ADD_POST:
      return {
        ...state,
        allPosts: [...state.allPosts, action.payload],
        filteredPosts: [...state.allPosts, action.payload],
      };
    default:
      return state;
  }
};

export default postsReducer;
