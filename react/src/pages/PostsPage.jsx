import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>All Posts</h2>
      {posts.map(post => (
        <div
          key={post.id}
          style={{
            border: '1px solid #ccc',
            marginBottom: '10px',
            padding: '10px',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9',
          }}
        >
          <Link to={`/posts/${post.id}`} style={{ textDecoration: 'none', color: '#3498db' }}>
            <h3>{post.title}</h3>
          </Link>
          <p>{post.body.slice(0, 80)}...</p>
        </div>
      ))}
    </div>
  );
};

export default PostsPage;
