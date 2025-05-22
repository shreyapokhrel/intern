import React, { useEffect, useState } from 'react';
import PostsList from './PostsList'; 

const Fetchapi = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) throw new Error('Failed to fetch posts');
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Fetched Posts</h2>
      <PostsList posts={posts} loading={loading} error={error} />
    </div>
  );
};

export default Fetchapi;
