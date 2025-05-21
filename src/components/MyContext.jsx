import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export function MyProvider({ children }) {
  const [value, setValue] = useState('Initial Value');
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');

  const updateValue = (newValue) => setValue(newValue);
   const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  const resetAll = () => {
    setValue('Initial Value');
    setCount(0);
    setTheme('light');
  };


  return (
    <MyContext.Provider value={{
      value,
      count,
      theme,
      updateValue,
      increment,
      decrement,
      toggleTheme,
      resetAll,
    }}>
      {children}
    </MyContext.Provider>
  );
}
