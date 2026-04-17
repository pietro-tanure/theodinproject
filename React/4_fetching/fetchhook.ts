import useFetch from 'react-fetch-hook';

// usefetch hook
const ReactFetchHook = () => {
  const { isLoading, data, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=8'
  );

  return (
    // ...
  );
};

export default ReactFetchHook;