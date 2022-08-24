import React from 'react';

function File() {
    const students = [
        {
            name: "Raja",
            maths: 25,
            physics: 35,
            chemistry: 45
        },
        {
            name: "Ravi",
            maths: 25,
            physics: 67,
            chemistry: 85
        },
        {
            name: "Albert",
            maths: 45,
            physics: 55,
            chemistry: 45
        },
        {
            name: "Ivan",
            maths: 65,
            physics: 89,
            chemistry: 43
        },
        {
            name: "Nutan",
            maths: 65,
            physics: 95,
            chemistry: 45
        },
        {
            name: "Uday",
            maths: 95,
            chemistry: 87
        },
    ]   
        const out=students.map((data)=>{
            let maths1=Math.round(data.maths.reduce((acc,c)=> acc + c,0)/data.maths.length);
            console.log(maths1)
            let chemst=Math.round(data.maths.reduce((acc,c)=> acc + c,0)/data.maths.length);
            console.log(chemst)
            let phy=Math.round(data.maths.reduce((acc,c)=> acc + c,0)/data.maths.length);
            console.log(phy)
            }) 
        console.log(out);

    

  return (
    <div>{out}</div>
  )
}

export default File