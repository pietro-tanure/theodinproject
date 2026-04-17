const value = useMemo(
  () => ({ someState, someFunction }),
  [someState, someFunction]
);

return <Context value={value}>{children}</Context>;


const handleClick = useMemo(
  () => () => setCount((prevState) => prevState + 1),
  []
);
// or
const memoizedHandleClick = useMemo(() => handleClick, []);


// useCallback is like memo but for functions
const handleClick = useCallback(
  () => setCount((prevState) => prevState + 1),
  []
);
// or
const memoizedHandleClick = useCallback(handleClick, []);