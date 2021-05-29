import axios from 'axios'
import { useEffect, useState } from 'react';
const API_BASE_URL = "https://fakestoreapi.com/";

export function useGet(endpoint: string){
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    let didCancel = false;

    setError(null);
    setLoading(true);

    const getData = async () => {
      try {
        if(!didCancel){
          const response = await axios.get(`${API_BASE_URL}${endpoint}`)
          const responseJson  = await response.data;
          setData(responseJson);
        }
      } catch (error) {
        setError(error.message || "Something went wrong!")
      }

      setLoading(false)
    };

    getData();

    return () => {
      didCancel = true;
    }
  },[endpoint])

  return {data, error, loading};
}