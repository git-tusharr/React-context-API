import Comp2 from "./Comp2";
const Comp1=({user})=>{

  return(
    <>
    <h1>Welcome to Component 1 </h1>
    <Comp2 user={user}></Comp2>

    </>
  )

  
}

export default Comp1;