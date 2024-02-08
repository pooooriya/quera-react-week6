// // import { useRef, useState } from "react";

// const App = () => {
//   // const [count, setCount] = useState(0);
//   // const ref = useRef();

//   // const handleStart = () => {
//   //   if (ref.current) return;
//   //   const id = setInterval(() => {
//   //     setCount((prev) => prev + 1);
//   //   }, 1000);

//   //   ref.current = id;
//   // };

//   // const handleStop = () => {
//   //   clearInterval(ref.current);
//   //   ref.current = null;
//   // };

//   // const handleReset = () => {
//   //   clearInterval(ref.current);
//   //   ref.current = null;
//   //   setCount(0);
//   // };

//   return (
//     <div>
//       {/* <div ref={ref}>Hello Quera</div> */}
//       {/* <div>00:{count}</div>
//       <button onClick={handleStart}>Start</button>
//       <button onClick={handleStop}>Stop</button>
//       <button onClick={handleReset}>Reset</button> */}
//     </div>
//   );
// };

// export default App;

// // console.log(5 || 6)  => age gozare aval drost bud return kon vgrna agr gozare dovom sahih bud return vagrna hichkodam return nmishvand
// // console.log(5 && 6  && 7  && 8  && 9) => agr avali drost bud => dovomi return kon

// // const useRef = (intial) => {
// //   let intialRef = intial;
// //   const ref = {
// //     get current() {
// //       return intialRef;
// //     },
// //     set current(x) {
// //       intialRef = x;
// //       // code babate rerender shudn react neveshte nashude ast !!!!!!!!!!!!!!!!!
// //     }
// //   };

// //   Object.seal(ref);
// //   return ref;
// // };
