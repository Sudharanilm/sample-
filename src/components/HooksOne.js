import React, { useState } from "react";

const HooksOne = () => {
    const initialstate = 0;
    const [count, setCount] = useState(initialstate)
    return (
        <div className="container my-4 bg-light-bg-dark">
            <input type="text" value={count} placeholder="Enter the number" /><br /><br />
            {/* <button onClick={() => setCount}>{count}</button> &nbsp; */}
            <button onClick={() => setCount(initialstate)}>Reset</button> &nbsp;
            <button onClick={() => setCount(count + 1)}>+</button> &nbsp;
            <button onClick={() => setCount(count - 1)}>-</button> &nbsp;
            <button onClick={() => setCount(count * { count })}>*</button> &nbsp;
            <button onClick={() => setCount(count / { count })}>/</button> &nbsp;
            <br />
            <button onClick={() => setCount(count(0))}>1</button>
        </div>
    )
}

export default HooksOne;