// import { useMemo, useState } from "react";

// export const AppMemo = () => {
//   const [count, setCount] = useState(10);

//   const expensiveCalc = (num) => {
//     let index2 = 0;
//     for (let index = 0; index < num; index++) {
//       index2 += 1;
//     }
//     console.log(index2);
//     return index2;
//   };

//   useMemo(() => expensiveCalc(count), [count]);

//   return (
//     <div>
//       <div>{count}</div>
//       <button onClick={() => setCount((prev) => prev * 10)}>+</button>
//     </div>
//   );
// };
