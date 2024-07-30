
import React from 'react';
function Products (props){
    console.log(props.data)
    const productData ='datafromproducts'
    const handleclick =()=>{
        props.getData(productData)
    }
return(
    <div>Products

        <button onClick ={handleclick} >here</button>
    </div>
        
)
}

export default Products

