import axios from 'axios';
import { useEffect, useState } from 'react';


export const fetcherWithAxios = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

// fetch post list
useEffect(() => {
  const fetchDataForPosts = async () => {
    try {
      const postsData = await fetcherWithAxios(
        'https://jsonplaceholder.typicode.com/posts?_limit=8'
      );
      setData(postsData);
      setError(null);
    } catch (err) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  fetchDataForPosts();
}, []);

// fetch single post
useEffect(() => {
  const fetchSinglePost = async () => {
    try {
      const postData = await fetcherWithAxios(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );

      setData(postData);
      setError(null);
    } catch (err) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  fetchSinglePost();
}, [postId]);

// post request
export const postRequestWithAxios = async (data) => {
  const response = await axios.post(
    'https://jsonplaceholder.typicode.com/posts',
    {
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    }
  );
  return response.data;
};

useEffect(() => {
  const fetchDataForPosts = async () => {
    try {
      const postsData = await postRequestWithAxios({
        userId: 11,
        id: 101,
        title: 'New post title',
        body: 'The post body content',
      });
      setData(postsData.data);
      // ...
    } catch (err) {}
    finally {}
  };
  fetchDataForPosts();
}, []);