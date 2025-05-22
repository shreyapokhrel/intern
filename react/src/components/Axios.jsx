import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AxiosComponent = () => {
  const [store, setStore] = useState([]);

  const getData = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        console.log(res.data);
        setStore(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {store.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Axios;
