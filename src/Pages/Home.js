import React, {useState} from 'react'


function Home(){
    let [count,setCount] = useState(0) 
    return (
        <div>
            <h1>{count}</h1>
            <button onClick ={()=>{setCount (count+=1)}}>Increment</button>
            <button onClick ={()=>{setCount (0)}}>reset</button>
            <button onClick ={()=>{setCount (count-1)}}>decrement</button>

        </div>
    )


    // let [count,setCount] = useState(0);
     
    // const increment = ()=>{
    //     setCount(count+1);
    //     console.log("increment")
    // }

    // const decrement = () =>{
    //     setCount(count-1);
    // }

    // const reset = ()=>{
    //     setCount(0)
    // }

    // return (
    //     <div>
    //         <p>{count}</p>
    //            <button onClick = {decrement}>Decrement</button>
    //            <button onClick = {increment}>Increment</button>
    //            <button onClick = {reset}>Reset</button>


    //     </div>
    // )
}

export default Home