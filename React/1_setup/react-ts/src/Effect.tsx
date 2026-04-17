import { use, useEffect, useState } from 'react';

useEffect(() => {
  //this runs after every render
});

useEffect(() => {
  // This runs only on mount (when the component appears)
}, []);

useEffect(() => {
  // This runs on mount *and also* if either a or b have changed since the last render
}, [a, b]);


useEffect(
  () => {
    // execute side effect
    return () => {
      // cleanup function on unmounting or re-running effect
    }
  },
  // optional dependency array
  [/* 0 or more entries */]
);

export default function Clock() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const key = setInterval(() => {
      setCounter((count) => count + 1);
    }, 1000);

    return () => {
      clearInterval(key);
    };
  }, []);

  return (
    <p>{counter} seconds have passed</p>
  );
}

// When not to use useEffect

// If you can calculate something during render, you don’t need an Effect.
// To cache expensive calculations, add useMemo instead of useEffect.
// To reset the state of an entire component tree, pass a different key to it.
// To reset a particular bit of state in response to a prop change, set it during rendering.
// Code that runs because a component was displayed should be in Effects, the rest should be in events.
// If you need to update the state of several components, it’s better to do it during a single event.
// Whenever you try to synchronize state variables in different components, consider lifting state up.
// You can fetch data with Effects, but you need to implement cleanup to avoid race conditions.

if (typeof window !== 'undefined') { // Check if we're running in the browser.
   // ✅ Only runs once per app load
  checkAuthToken();
  loadDataFromLocalStorage();
}

function App() {
  // ...
}
