import React, { useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { if (state.value > 0) state.value -= 1; },
    reset: (state) => { state.value = 0; },
    incrementByAmount: (state, action) => { state.value += action.payload; },
  },
});

const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});

function Counter() {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();
  const [customAmount, setCustomAmount] = useState(0);
  const evenOdd = count % 2 === 0 ? 'Even' : 'Odd';

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>Redux Counter</h1>
      <h2>{count}</h2>
      <p><em>{evenOdd}</em></p>

      <button
        onClick={() => dispatch(increment())}
        style={{ padding: '10px 15px', margin: '0 5px', cursor: 'pointer' }}
      >
        +
      </button>

      <button
        onClick={() => dispatch(decrement())}
        disabled={count === 0}
        style={{ padding: '10px 15px', margin: '0 5px', cursor: count === 0 ? 'not-allowed' : 'pointer' }}
      >
        -
      </button>

      <button
        onClick={() => dispatch(reset())}
        style={{ padding: '10px 15px', margin: '0 5px', cursor: 'pointer', backgroundColor: '#f44336', color: 'white' }}
      >
        Reset
      </button>

      <div style={{ marginTop: '1rem' }}>
        <input
          type="number"
          value={customAmount}
          onChange={(e) => setCustomAmount(Number(e.target.value))}
          style={{ width: '60px', marginRight: '10px', padding: '5px' }}
        />
        <button
          onClick={() => dispatch(incrementByAmount(customAmount))}
          style={{ padding: '8px 12px', cursor: 'pointer' }}
        >
          Increment by Amount
        </button>
      </div>
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
