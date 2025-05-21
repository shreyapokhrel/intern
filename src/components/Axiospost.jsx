import React, { useState } from 'react';
import axios from 'axios';

const Axiospost = () => {
  const [inputData, setInputData] = useState({
    fname: '',
    lname: ''
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/todos', inputData)
      .then((res) => {
        console.log('Post response:', res.data);
      })
      .catch((err) => {
        console.error('Post error:', err);
      });
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    axios.put('https://jsonplaceholder.typicode.com/todos/1', inputData)
      .then((res) => {
        console.log('Update response:', res.data);
      })
      .catch((err) => {
        console.error('Update error:', err);
      });
  };

  const handleDelete = (event) => {
    event.preventDefault();
    axios.delete('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) => {
        console.log('Delete response:', res.data);
      })
      .catch((err) => {
        console.error('Delete error:', err);
      });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Axios</h2>
      <form>
        <input
          type="text"
          name="fname"
          placeholder="Enter First Name"
          onChange={handleInput}
          value={inputData.fname}
        />
        <br />
        <input
          type="text"
          name="lname"
          placeholder="Enter Last Name"
          onChange={handleInput}
          value={inputData.lname}
        />
        <br /><br />
        <button onClick={handleSubmit}>Submit</button>{' '}
        <button onClick={handleUpdate}>Update</button>{' '}
        <button onClick={handleDelete}>Delete</button>
      </form>
    </div>
  );
};

export default Axiospost;
