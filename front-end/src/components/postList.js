import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, deletePost } from "../actions/postAction";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.filteredPosts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deletePost(id)); 
  };

  return (
    <div className="row mb-3">
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.nombre}</td>
              <td>{post.descripcion}</td>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(post.id)} // Llama a handleDelete con el ID del post
              >
                Eliminar
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostList;
