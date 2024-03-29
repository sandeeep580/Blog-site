import {useState,useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending,setIsPending] =useState(true);
    const [error,setError] =useState(null);

    useEffect(() => {
        const abortCont = new AbortController();


        setTimeout(()=> {
          fetch(url,{signal: abortCont.signal})
          .then(response=> {
            if(!response.ok){ //error coming back from server
              throw Error('Could not fetch the data for that resource');
            }
            return response.json();
          })

         .then(data=> {
           setIsPending(false);
           setData(data);
           setError(null);
         }) 

          .catch((err)=> {
            if(err.name==='AbortError'){
              console.log('fetch aborted');
            } else{
            // auto catches network error / connection error  
            setIsPending(false);
            setError(err.message);
            // console.log(err.message);
            }
          })
        },1000); 
        
        // abort the fetch
        // return () => console.log('fetch aborted');
        return ()=> abortCont.abort();
     },[url])

     return {data,isPending,error};
}

export default useFetch;