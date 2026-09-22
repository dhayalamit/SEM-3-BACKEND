// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import Game from './Game'
// import Login from './login'
// import Reset from "./Reset";

// const App = () => {
//  let [apiData,SetApiData]=    useState([])
//   useEffect(()=>{

//    async function api(){
//       let res=  await   axios.get("http://localhost:3000/")
//       console.log(res.data);
      
//     }
//     api()



//           // fetch("http://localhost:4000/").then((res)=>{
//           //   return res.json()

//           // }).then((data)=>{
//           //   console.log(data);
//           //   SetApiData(data)
//           // })

//   },[])

//   return (
//     <div>
//       {/* {
//         apiData.map((val)=>{
//           return(<>
//           <h1>{val.id}</h1>
//           <h2>{val.name}</h2>
//           </>)

//         })
//       } */}

//       {/* < Game/> */}
//        {/* <Login /> */}

    
//     </div>
//   )
// }

// export default App



import React from "react";
import Signup from "./Signup";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Dash from "./Dash";
import Reset from "./Reset";

function App() {

  return (
    <div>
     <Routes>
      <Route  path="/"  element={<Signup/>}/>
      <Route  path="/login"  element={<Login/>}/>
      <Route  path="/dash"  element={<Dash/>}/>
      <Route  path="/reset/:token"  element={<Reset/>}/>


     </Routes>
    </div>
  );

}

export default App;