import Comp3 from "./Comp3";
const Comp2=({user})=>{

  return(
    <>
    <h1>Welcome to Component 2 </h1>
    <Comp3 user={user}></Comp3>

    </>
  )

  
}

export default Comp2;