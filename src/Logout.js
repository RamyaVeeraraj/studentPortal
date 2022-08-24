import { Link } from '@mui/material';
import React from 'react'
// import {useNavigate} from 'react-router-dom'

function Logout() {
  //  const navigate=useNavigate();
   
    //  navigate("/Login");

  return (
    <div> <Link href="/Login"> Logout </Link></div>
  )
}

export default Logout