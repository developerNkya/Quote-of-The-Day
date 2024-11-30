import { useState, useEffect } from 'react';
import axios from 'axios';

interface FetchData {
  data: any;
  error: any;
}

const fetchQuotes = (url: string) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(url)
      .then(response => setData(response.data))
      .catch(error => setError(error));
  }, [url]);

  return { data, error };
};

export default fetchQuotes;