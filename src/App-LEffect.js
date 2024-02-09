import React, { useLayoutEffect, useRef, useState } from "react";

export const AppLEffect = () => {
  const ref = useRef();
  useLayoutEffect(() => {
    // sync
    // console.log(ref?.current?.getClientRects());
    // console.log(window?.);
    // setTimeout(() => {
    //   console.log("hello");
    // }, 1000);
    // console.log("salam");
    // setInterval(() => {
    //   setfirst((prev) => !prev);
    // }, 1000);
  }, []);

  return <div ref={ref}>AppLEffect</div>;
};
