import { useState, memo } from "react";

const ButtonComponent = memo(({ children, onClick }) => {
  let i = 0;
  let j = 0;
  const ITERATION_COUNT = 10_000;
  while (i < ITERATION_COUNT) {
    while (j < ITERATION_COUNT) {
      j += 1;
    }
    i += 1;
    j = 0;
  }

  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
});

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevState) => prevState + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <ButtonComponent onClick={handleClick}>Click me!</ButtonComponent>
    </div>
  );
}