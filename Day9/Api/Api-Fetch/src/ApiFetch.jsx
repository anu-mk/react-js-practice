import React, { useEffect, useState } from 'react'
import './Api.css'

const ApiFetch = () => {
    let[data,setData]=useState([])
    async function getusers(){
        let data=await fetch("https://api.github.com/users")
        let finaldata=await data.json()

        setData(finaldata)
    } 
    useEffect(()=>{
        getusers();
    },[])

  return (
    <div className="main">
        {data.map((users)=>{
            return(
                <div key={users.id} className="box">
                    <p>{users.login}</p>
                    <img src={users.avatar_url} alt={users.login} />
                    <p>{users.id}</p>
                </div>
            )
        })}
        
    </div>
  )
}

export default ApiFetch