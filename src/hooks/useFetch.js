import { useEffect, useState } from "react";

export const useFetch = ({ url }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.status === "error") {
          setIsError(true);
          return;
        }
        setData(res);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return { data, isLoading, isError };
};
