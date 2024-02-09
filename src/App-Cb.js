// import React, { useCallback, useEffect, useRef, useState } from "react";

// export const AppCb = () => {
//   const ref = useRef(0);
//   const [data, setData] = useState({ id: 1, name: "ali" });

//   const objData = useCallback(() => {
//     return data;
//   }, [data.name, data.id]);

//   const handleIncrement = useCallback(() => {
//     setData({ ...data, ...{ id: 2, name: "pouriya" } });
//   }, []);

//   useEffect(() => {
//     console.log("من تغییر کردم");
//   }, [objData]);

//   //   const [count, setCount] = useState(0);

//   //   const handleIncrement = useCallback(() => {
//   //     setCount((prev) => prev + 1);
//   //   }, []);

//   //   const handleDecrement = useCallback(() => {
//   //     setCount((prev) => prev - 1);
//   //   }, []);

//   //   console.log(++ref.current);
//   console.log(data);
//   return (
//     <div>
//       {/* <div>{count}</div> */}
//       <button onClick={handleIncrement}>+</button>
//       {/* <button onClick={handleDecrement}>-</button> */}
//     </div>
//   );
// };
