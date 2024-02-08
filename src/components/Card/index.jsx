// import { useEffect, useState } from "react";

export const Card = ({ src, alt }) => {
  //   const [count, setCount] = useState(0);

  //   const logfunc = (e) => {
  //     console.log(e);
  //   };
  //   useEffect(() => {
  //     setInterval(() => {
  //       setCount((prev) => prev + 1);
  //     }, 1000);
  //     document.addEventListener("mousemove", logfunc);
  //     return () => {
  //       document.removeEventListener("mousemove", logfunc);
  //     };
  //   }, []);

  // fetch data !!!!!

  return <img src={src} alt={alt} />;
};
