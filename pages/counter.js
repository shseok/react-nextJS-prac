import React, {useState} from 'react';
import Counter from "../components/Counter";

//deconstruct
// Pair, Tuple

const CounterPage = () => {
    const [count /*value*/, setCount/*method*/] = useState(0); // react hook / useState란 hook!을 썼다

    // const state /* array */ = useState(0);
    // const count = state[0];
    // const setCount = state[1];

    return (
        <div>
            <Counter
                count={count}
                onCounterClick={() => setCount(count+1)}
            />
        </div>
    );
}
// state persistency - 휘발성을 가진 상태다

// 현실에서의 동작을 데이터화 하는 것. ClickEvent 
// ClickEvent
//      -좌표
//      -DOM element
// Event-dreiven architecture -> 검색해서 알아보기!

// event, event handler, listener, callback

export default CounterPage;

// const CounterPage = () => {
//     return (
//         <div>
//             Counter
//         </div>
//     );
// }

// export default CounterPage;