import useSWR from 'swr';
import { fetcherWithFetch } from '../lib/fetcherWithFetch';

// fetch posts
const FetchWithSwr = () => {
  const { data, error, isLoading } = useSWR(
    'https://jsonplaceholder.typicode.com/posts?_limit=8',
    fetcherWithFetch
  );

  return (
    // ...
  );
};

//fetch single post
const {
  data,
  error,
  isLoading: loading,
} = useSWR(
  `https://jsonplaceholder.typicode.com/posts/${postId}`,
  fetcherWithFetch,
  {
    dedupingInterval: 1000 * 60 * 10, // cache for 10 minutes
  }
);

export default FetchWithSwr;