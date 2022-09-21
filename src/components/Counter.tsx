import React, {useState} from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(prevState => prevState + 1);
    };

    return (
        <div>
            <div>{count}</div>
            <button onClick={incrementCount} className={classes.button}>Increment</button>
        </div>
    );
};
