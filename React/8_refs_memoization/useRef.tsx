// useRef is a hook that allows you to create a mutable reference that persists across re-renders.
// It can be used to store a value that does not trigger a re-render when it changes, such as a DOM element or a timer ID.

// put useRef inside event handlers, useEffect, or any other function that is not called during rendering.
import { useRef, useEffect } from "react";

function ButtonComponent() {
  const buttonRef = useRef(null);

  useEffect(() => {
    buttonRef.current.focus();
  }, []);

  // useEffect(() => {
  //   buttonRef.current.focus();
  //   buttonRef.current.textContent = "Hey, I'm different!";
  //   let timeout = setTimeout(() => {
  //     buttonRef.current.textContent = "Click Me!";
  //   }, 2000);

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, []);

  return <button ref={buttonRef}>Click Me!</button>;
}