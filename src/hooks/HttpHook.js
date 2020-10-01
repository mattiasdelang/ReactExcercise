import { useState, useEffect } from 'react';
import axios from "axios";

export function useGet(url) {
  const [request, setRequest] = useState({data:null, error:null, loading:false});

  useEffect(() => {
    setRequest({data:null, error:null, loading:true});

    axios
        .get(url)
        .then(res => {setRequest(req => { return {data:res.data, error:null, loading:false}})})
        .catch(error => {setRequest(req => { return {data:null, error:error.message, loading:false}})})
    ;
  }, [url]);

  return request;
}