import { useState, useEffect } from "react";
import axios from 'axios';
import myData from '../dataset/cars.json';

 const useFetch = (url) => {

  const [data, setData] = useState(null);

  useEffect(() => {

    async function getData() {
       
      localStorage.setItem("note","Ahmad")
      const datamin= await  fetch(url)
      const res = await datamin.json()
 
      setData(res)
    }


    getData()
  }, [url]);


  return data;
};
export default useFetch;

