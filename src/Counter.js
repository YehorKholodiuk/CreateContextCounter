import React from 'react';
import {useCounter} from "./CounterContext";

const Counter = () => {
    const {count, increment, decrement} = useCounter()
    return (
        <div>
        <h1>Counter</h1>
        <p>{count}</p>
            <button onClick={decrement}> - </button>
            <button onClick={increment}> + </button>
        </div>
    );
};

export default Counter;
