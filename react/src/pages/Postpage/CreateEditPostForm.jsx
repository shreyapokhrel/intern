import React, { useState, useEffect } from 'react';

const CreateEditPostForm = ({ initialData = {}, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    if (initialData.title) setTitle(initialData.title);
    if (initialData.body) setBody(initialData.body);
  }, [initialData]);

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
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: '100%', padding: '8px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Body:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
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
