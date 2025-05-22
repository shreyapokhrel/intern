import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 },
  },
});
const { increment, decrement } = counterSlice.actions;
const store = configureStore({
  reducer: counterSlice.reducer,
});

function Counter() {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>Redux Counter</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())} style={{ marginLeft: '1rem' }}>-</button>
    </div>
  );
}
export default function CounterApp() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
