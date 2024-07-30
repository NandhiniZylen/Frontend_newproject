import React, {useState} from 'react'


function About(){
    let [name,setName] = useState();
    let [age,setAge] =useState(0);
    let [count,setCount] = useState(0);

return(
    <div>

    <p>Name :{name}</p>
    <button onClick = {()=>{setName ("Nandhini")}}>Name </button>
    <p>Age :{age}</p>
    <button onClick ={() =>{setAge (age+1)}}> Age</button>
     
     <p>Count ={count}</p>
    <button onClick = {()=>{setCount (count+1)}}>Increment</button>
    <button onClick = {()=>{setCount (0)}}>reset</button>
    <button onClick = {()=>{setCount (count-1)}}>decremnet</button>




    </div>
)

    // const updateName = ()=>{
    //       setName("Nandhini")
    // }

    // const incrementAge =()=>{
    //       setAge(age + 1);
    // }

    // const increment =()=>{
    //     setCount(count+1);
    // }

    // const decrement =() =>{
    //     setCount(count-1);
    // }

    // const reset =()=>{
    //     setCount(0)
    // }
    

    // return (<div className ="counter-container">
    //     <p>Name :{name}</p>
    //      <button onClick ={updateName}>set Name </button>   

    //      <p>Age :{age}</p>
    //      <button onClick ={incrementAge}>Increment Age </button>  
          
    //       <p classNAme = "counter display">{count}</p>
    //       <button className ="counter-button"  onClick ={decrement}> Decrement </button>
    //       <button  className ="counter-button" onClick ={increment}> Increment </button>
    //       <button  className ="counter-button" onClick ={reset}> Reset </button>
    //         </div>)


}


export default About