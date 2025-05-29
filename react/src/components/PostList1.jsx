import React from 'react';
import { Link } from 'react-router-dom';
import { usePosts } from '../context/PostContext';
import { Loader, Notification } from '@mantine/core';

const PostsList1 = () => {
  const { posts, loading, error } = usePosts();

  if (loading) return <Loader size="lg" style={{ marginTop: "2rem" }} />;
  if (error) return <Notification color="red">Error: {error}</Notification>;

  return (
    <div>
      {posts.map((post) => (
        <Link
          to={`/posts/${post.id}`}
          key={post.id}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div
            className="post-card"
            style={{ padding: '10px', borderBottom: '1px solid #ddd' }}
          >
            <h3 style={{ marginBottom: '5px' }}>{post.title}</h3>
            <p style={{ color: '#555' }}>{post.body.substring(0, 80)}...</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostsList1;
