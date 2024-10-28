import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"
const useFetch=(url)=>
{
    const [data,setData]=useState([]);
    const [loading ,setLoading]=useState(false);
    const [error,setError]=useState(false);

    useEffect(()=>{
  const fetchData=async()=>
    {
        setLoading(true);
        try
        {
            const res=await axios.get(url);
            setData(res.data);
            console.log(res.data);
        }
        catch(err)
        {
            setError(true);
        }
        setLoading(false);
    };
    fetchData();
  }
,[url]);

const reFetch=async()=>
{
    setLoading(true);
    try
    {
        const res=await axios.get(url);
        setData(res.data);
    }
    catch(err)
    {
        setError(true);
    }
    setLoading(false);

}
return{data,loading,error,reFetch};
}
export default useFetch;
