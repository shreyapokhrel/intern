import React, { createContext, useState, useEffect, useContext } from 'react';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [value, setValue] = useState('Hello Context');
  const [count, setCount] = useState(() => {
    const stored = localStorage.getItem('count');
    return stored ? parseInt(stored) : 0;
  });
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  const updateValue = (newVal) => setValue(newVal);
  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  const resetAll = () => {
    setValue('Hello Context');
    setCount(0);
    setTheme('light');
    localStorage.removeItem('count');
  };

  return (
    <MyContext.Provider
      value={{
        value,
        updateValue,
        count,
        increment,
        decrement,
        theme,
        toggleTheme,
        resetAll,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};


export const useAppContext = () => useContext(MyContext);
