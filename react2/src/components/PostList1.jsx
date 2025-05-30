import React from "react";
import PostCard1 from "./PostCard1";

const PostsList1 = ({ posts, onDelete }) => {
  return (
    <div>
      {posts.map((post) => (
        <PostCard1 key={post.id} post={post} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default PostsList1;
