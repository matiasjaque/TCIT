import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterPosts } from '../actions/postAction';
import '../index.css'

const Filter = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleFilter = () => {
    dispatch(filterPosts(name));
  };

  return (
    <div className="row mb-3" >
      <div className="col">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Filtrar por nombre"
          className="form-control"
        />
      </div>
      <div className="col">
        <button onClick={handleFilter} className="btn btn-primary">
          Buscar
        </button>
      </div>
    </div>
  );
};

export default Filter;
