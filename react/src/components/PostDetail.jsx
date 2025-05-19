import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!post) return <p>Loading post...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <Link to="/posts" style={{ marginBottom: '20px', display: 'inline-block', color: '#3498db' }}>
        &larr; Back to Posts
      </Link>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetail;
