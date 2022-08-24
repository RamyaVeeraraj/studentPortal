import React, { useState } from 'react'
import { Link, TextField } from '@mui/material'
import { API_URL } from './Url';
import axios from 'axios'; 
// import {useNavigate} from 'react-router-dom'


  function Crud() {
      const[Name,setName]=useState("");
      const[UserId,setUserId]=useState("");
      const[Pwd,setPwd]=useState("");
      // const navigate=useNavigate()

      const Post1= async()=>{
       await axios.post(API_URL,{Name,UserId,Pwd})
        console.log(Post1)
        // navigate("/Login") 
      }
      



       
  return (
    <div> 
                                                                         
        <p><TextField id="filled-basic" label="Name" variant="filled" onChange={(e)=>setName(e.target.value)} /></p>
        <p><TextField id="filled-basic" label="UserId" variant="filled" onChange={(e)=>setUserId(e.target.value)}/></p>
        <p><TextField id="filled-basic" label="Pwd" variant="filled" onChange={(e)=>setPwd(e.target.value)}/></p>
        <button onClick={Post1}><Link href="/Login"> Submit </Link></button>
    </div>
  )
}

export default Crud