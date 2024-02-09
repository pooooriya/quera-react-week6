import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      state += action.payload;
      break;
    case "DECREMENT":
      state -= action.payload;
      break;
    default:
      break;
  }
  return state;
}

export const AppReducer = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <div>{count}</div>
      <button
        onClick={() => {
          dispatch({
            type: "INCREMENT",
            payload: 2
          });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "DECREMENT",
            payload: 2
          });
        }}
      >
        -
      </button>
    </div>
  );
};
