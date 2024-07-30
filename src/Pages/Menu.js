import React from 'react'
import image from "../image/pexels-photo-757889.jpeg"


function Menu(){
    
    return (
        <div className ="container1">
        <div className ="image">  
                <img src ={image}></img>
            </div>
    
        <div class="line0" >
            
          
            <p class = "line1">PERFUME</p>
            <h1 class = "line2">Garbrielle Essence Eau De Parfum</h1>
            <p class ="line3">A floral, sloar and voluptuous
            interpretation composed by oliver Polge, Perfumer-Creator for the house of CHANEL</p>
            <span class="line4">$149.99 </span>  
            <span class ="line5"> <s>$169.99</s></span>
          <div>
            
             <button class= "line6">
             Add to card
          </button>
            </div>
        </div>
</div>
    )
}

export default Menu