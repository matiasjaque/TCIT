import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FILTER_POSTS = 'FILTER_POSTS';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';

export const fetchPosts = () => async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3000/posts');
      dispatch({ type: FETCH_POSTS, payload: response.data });
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

export const filterPosts = (name) => ({
  type: FILTER_POSTS,
  payload: name,
});

export const addPost = (post) => async (dispatch) => {
  const response = await axios.post('http://localhost:3000/posts', post);
  dispatch({ type: ADD_POST, payload: response.data });
};

// Método para eliminar un post por ID
export const deletePost = (id) => async (dispatch) => {
    try {
      await axios.delete(`http://localhost:3000/posts/${id}`);
      dispatch({ type: DELETE_POST, payload: id });
  
      // Después de eliminar, obtener la lista actualizada de posts
      dispatch(fetchPosts()); // Esta acción debería actualizar el estado con la lista actualizada
    } catch (error) {
      console.error('Error deleting post:', error);
      // Puedes manejar errores aquí si es necesario
    }
  };
