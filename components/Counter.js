import React from "react";

// const Counter = () => 
//     <div>
//         CounterComponent
//     </div>;

// export default Counter;

const Counter = ({
    count,
    onCounterClick
}) =>
    <div>
        <p>count : {count}</p>
        <button onClick={onCounterClick}>increment </button>
    </div>; // return 안해주는 이유가 한 줄로 판단되기 때문?

export default Counter;