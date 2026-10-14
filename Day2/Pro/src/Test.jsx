import React from 'react'

const Test = () => {
    let res=[]
    for(let i=1;i<=50;i++){
        res.push(i);
    }
  return (
    <div>
        <p>{res}</p>
    <div>
        <p>{res.map((val)=>{
            return (
                <p>{val}</p>
            )
        })}</p>
    </div>
    </div>
  )
}
export default Test