import { useEffect, useRef, useState } from "react";
import { Card } from "./components/Card";
import { useFetch } from "./hooks/useFetch";

export const AppEffect = () => {
  //   const [isActive, setIsActive] = useState(false);
  const { data, isError, isLoading } = useFetch({
    url: "https://dog.ceo/api/breeds/image/random"
  });

  //   const [count, setCount] = useState({
  //     id: 1,
  //     name: "pouriya"
  //   });

  //   useEffect(() => {
  //     // setCount([...count, { id: 1, name: "pouriya" }]);
  //   }, []);

  //   useEffect(() => {
  //     if (count.name) {
  //       alert("test");
  //     }
  //   }, [count.name]);

  //   const handleClick = () => {
  //     setCount({ ...count, name: "ali" });
  //   }

  useEffect(() => {
    console.log(isLoading);
    return (x) => {
      console.log(x, "isLoading");
      console.log(isLoading, "isLoading");
    };
  }, [isLoading]);

  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0
    });
    return () => {};
  }, []);

  useEffect(() => {
    return (x) => {
      //   console.log(x, "isError");
    };
  }, [isError]);

  if (isLoading) {
    return <div>loading ...</div>;
  }

  if (isError) {
    return <div>Error!!!</div>;
  }

  return (
    <div>
      <Card src={data?.message} alt={data?.message} />
      {/* {isActive && <Card />} */}
      {/* <button onClick={() => setIsActive(!isActive)}>Switch Active</button> */}
      {/* <div>{count.name}</div>
      <button onClick={handleClick}>Click</button> */}
    </div>
  );
};

// componentdidmount
// useEffect(() => {
// }, [])

// componentdidupdate
//   useEffect(() => {
// if (count.name) {
//     alert("test");
//   }
// }, [count.name]);
// درست بعد ست استیت شدن بخوایم کاری انجام دهیم
