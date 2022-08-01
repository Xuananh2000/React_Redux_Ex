import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./actions/counter";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
      <div>
        <h1>Counter {counter}</h1>
        <button onClick={() => dispatch(increment(1))}>Increment</button>
        <button onClick={() => dispatch(decrement(1))}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
  );
}

export default App;
