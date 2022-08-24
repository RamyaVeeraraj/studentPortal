import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_URL } from './Url';
import { Link, TextField } from '@mui/material';

function Login() {
    //  const[UserId1,setUserId1]=useState([]);
    //  const[Pwd1,setPwd1]=useState([]);
     const[api,setApi]=useState([])
    

     const Get = async ()=>{
      try{
          const data=await axios.get(API_URL);
          console.log(data.data);
          //  setUserId1(data.data)
          //  setPwd1(data.data)
          setApi(data.data)
            
      }    
      
      catch(error){
          console.log(error)
      }
  }
  
  useEffect(()=>{
    Get();
  },[])
   

 
  return (
    <div>
         {api.map((data)=>{
          return(
           <p key={data.id}>
            <TextField id="filled-basic" label="UserId"  value={data.UserId} variant="filled"></TextField><br/>
           <TextField id="filled-basic" label="Pwd"  value={data.Pwd} variant="filled"></TextField><br/>
           <button onClick={Get}> <Link href="/Logout"> Login </Link></button>
           </p>
         )})}
        
        
    </div>
  )
}

export default Login