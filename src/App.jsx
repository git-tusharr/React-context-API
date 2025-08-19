import { createContext,useState } from "react";

const myContext=createContext();

import Bhopal from "./Bhopal";

const App=()=>{
  const [city,setCity]=useState("Ujjain");
  return(
    <>

    <button onClick={()=>{setCity("Satna")}} >Change</button>
    <h1>Welcome to my app : {city}</h1>

    <myContext.Provider value={{city,setCity}}>
      <Bhopal></Bhopal>
    </myContext.Provider>
    
    </>
  )
}
export default App;
export {myContext};