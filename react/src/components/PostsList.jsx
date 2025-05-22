import React from 'react';
import { Link } from 'react-router-dom';

const PostsList = ({ posts, loading, error }) => {
  if (loading) return <p className="loading">Loading posts...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div>
      {posts.map(post => (
        <Link to={`/posts/${post.id}`} key={post.id} style={{ textDecoration: 'none' }}>
          <div className="post-card">
            <h3>{post.title}</h3>
            <p>{post.body.substring(0, 80)}...</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostsList;
