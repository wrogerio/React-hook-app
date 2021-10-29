import React from "react";
import { useCounter } from "../../hooks/useCounter";

export const CounterWithCustomHook = () => {
    const { state, increment, decrement, reset } = useCounter();

    return (
        <>
            <h1>Couner With Custom Hook: {state}</h1>
            <hr />
            <button class="btn btn-primary me-2" onClick={() => decrement(3)}>
                +1
            </button>
            <button class="btn btn-danger me-2" onClick={reset}>
                Reset
            </button>
            <button class="btn btn-primary" onClick={() => increment(3)}>
                +1
            </button>
        </>
    );
};
