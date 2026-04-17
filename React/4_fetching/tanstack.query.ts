// ...
import { useQuery } from '@tanstack/react-query';
import { fetcherWithFetch } from '../lib/fetcherWithFetch';

export const fetcherWithFetch = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }

  return response.json();
};

// use axios
// export const fetcherWithAxios = async (url) => {
//   const response = await axios.get(url);
//   return response.data;
// }; 

const ReactQuery = () => {
  // fetching posts
  const { data, error, isPending: loading } = useQuery({
    queryKey: ['posts'],
    queryFn: () =>
      fetcherWithFetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=8'
      ),
  });

  // fetching single post
  // const { data, error, isPending: loading } = useQuery({
  //   queryKey: ['post', parseInt(postId)],
  //   queryFn: () =>
  //     fetcherWithFetch(
  //       `https://jsonplaceholder.typicode.com/posts/${postId}`
  //     ),
  //   staleTime: 1000 * 60 * 10, // cache for 10 minutes
  // });

  // use axios
  // const { data, error, isPending: loading } = useQuery({
  //   queryKey: ['posts'],
  //   queryFn: () =>
  //     fetcherWithAxios(
  //       'https://jsonplaceholder.typicode.com/posts?_limit=8'
  //     ),
  // });

  return (
    // ...
  );
};

export default ReactQuery;