import React from "react";

export const CounterApp = () => {
    const [state, setCounter] = React.useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40,
    });

    const { counter1, counter2 } = state;

    const increment = () => {
        setCounter({ ...state, counter1: counter1 + 1 });
    };

    const decrement = () => {
        setCounter({ ...state, counter1: counter1 - 1 });
    };

    return (
        <div>
            <h1>Counter App</h1>
            <h2>
                {counter1} | {counter2}
            </h2>
            <button className="btn btn-primary me-2" onClick={decrement}>
                -1
            </button>
            <button className="btn btn-primary" onClick={increment}>
                +1
            </button>
        </div>
    );
};
