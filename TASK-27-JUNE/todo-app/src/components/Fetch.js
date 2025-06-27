import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setError(null);

    try {
      const response = await axios.get(url, options);
      setData(response.data);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } 
  }, [url, options]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error };
}

export default useFetch;
