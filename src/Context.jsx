import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import axios from 'axios';

export const ContextProvide=createContext()

export function Context(props) {
  const profile=[]
  const [item,setItem]=useState([])
  const [category,setCategory]=useState([])
  const [fetchError, setFetchError] = useState(null);
  const [load,setLoad]=useState(true)
  const [login,setLogin]=useState(false)
  useEffect(()=>{
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/categories.php`
        );
        if (response.data.categories==null) {throw Error("Items not found")};
        setItem(response.data.categories)
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      }finally{
        setLoad(false)
      }
    };
    fetchItems();


  },[])

  return (
    <>
    <ContextProvide.Provider value={[item,setItem,login,setLogin,profile]}>
      {props.children}
    </ContextProvide.Provider>
    </>
  )
}

