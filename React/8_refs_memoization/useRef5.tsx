import { useRef } from 'react';

// You can create a ref from parent to child to access the DOM element of the child component.
function MyInput({ ref }) {
  return <input ref={ref} />;
};

export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  );
}
