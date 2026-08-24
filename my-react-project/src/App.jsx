import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
 let [apiData,SetApiData]=    useState([])
  useEffect(()=>{

   async function api(){
      let res=  await   axios.get("http://localhost:4000/")
      console.log(res.data);
      
    }
    api()



          // fetch("http://localhost:4000/").then((res)=>{
          //   return res.json()

          // }).then((data)=>{
          //   console.log(data);
          //   SetApiData(data)
          // })

  },[])

  return (
    <div>
      {
        apiData.map((val)=>{
          return(<>
          <h1>{val.id}</h1>
          <h2>{val.name}</h2>
          </>)

        })
      }
    </div>
  )
}

export default App