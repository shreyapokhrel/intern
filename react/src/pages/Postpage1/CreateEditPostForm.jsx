import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTitle, setBody, setPost } from '../../redux/postSlice';

const CreateEditPostForm = ({ initialData = {}, onSubmit }) => {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.post.title);
  const body = useSelector((state) => state.post.body);

  useEffect(() => {
    if (initialData.title || initialData.body) {
      dispatch(setPost(initialData));
    }
  }, [initialData, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, body });
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ marginBottom: '10px' }}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => dispatch(setTitle(e.target.value))}
          style={{ width: '100%', padding: '8px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Body:</label>
        <textarea
          value={body}
          onChange={(e) => dispatch(setBody(e.target.value))}
          style={{ width: '100%', padding: '8px' }}
        />
      </div>
      <button type="submit" style={{ padding: '8px 16px' }}>
        Submit
      </button>
    </form>
  );
};

export default CreateEditPostForm;
