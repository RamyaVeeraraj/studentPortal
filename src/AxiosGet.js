import React, { useEffect, useState } from 'react'
import axios from 'axios'

function MyFunction() {
    const[product,setProduct]=useState([]);
    const[search,SetSearch]=useState("");
    
    const ProductData = async ()=>{
        try{
            const data=await axios.get("https://jsonplaceholder.typicode.com/posts");
            console.log(data.data);
            setProduct(data.data);
            
            
        }catch(error){
            console.log(error)
        }
    }



    useEffect(()=>{
        ProductData();
    },[])

  return (
    <div>
        <input type="text" placeholder='search' onChange={(e)=>SetSearch(e.target.value)}></input>
        
        {product.filter((item)=>{
            
            if(search == ""){
                return item
            }else if(item.title.toLowerCase().includes(search.toLocaleLowerCase())){
                return item
            }

        })
          
        .map((item)=>{
            return(
                <p>{item.title}</p>
            )
        })

        }

        


    </div>
  )
}

export default MyFunction;