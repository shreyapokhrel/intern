import React, { useEffect, useState } from 'react';

const Fetchapi = () => {
  const [posts, setPosts] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data); 
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>Fetched Posts</h2>
      {posts.length === 0 ? (
        <p>Loading...</p>
      ) : (
        posts.map(post => (
          <div key={post.id} style={{ border: '1px solid #ccc', marginBottom: '10px', padding: '10px' }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Fetchapi;
