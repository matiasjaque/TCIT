import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Filter from './components/postFilter';
import PostList from './components/postList';
import AddPostForm from './components/postForm';
import { fetchPosts } from './actions/postAction';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="text-center my-4">Gestión de Posts</h1>
      <Filter />
      <PostList />
      <AddPostForm />
    </div>
  );
};

export default App;
