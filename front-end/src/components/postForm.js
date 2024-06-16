import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../actions/postAction';

const PostForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addPost({ nombre: name, descripcion: description }));
    setName('');
    setDescription('');
  };

  return (
    <div className="row mb-3">
      <div className="col">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre"
          className="form-control"
        />
      </div>
      <div className="col">
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descripción"
          className="form-control"
        />
      </div>
      <div className="col">
        <button onClick={handleSubmit} className="btn btn-primary">
          Ingresar Post
        </button>
      </div>
    </div>
  );
};

export default PostForm;
