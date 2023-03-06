import React from "react";
import ReactDOM from "react-dom/client";
import {useState} from 'react';
import Price from "./Price";

function ProductHooks(){
    var [add,setAdd]=useState(1);
    var [price,setPrice] = useState(15000);
  
    var Add=() =>
    {
        setAdd(add+1);
        setPrice(price+15000);
        
    }
    var Remove=()=>{
        if(add>1 && price>15000){
        setAdd(add-1);
        setPrice(price-15000);
        }else{
           alert("Quantity can't be less than 1")
        }
    }
    return (
        <div>
            <p class="pri">Rs.{price}</p>
            <button onClick={Add} class="add">Add</button>
            <button onClick={Remove} class="sub">Remove</button>
            <h3 className="quantity">Quantity:{add}</h3>
        </div>
    );
}
export default ProductHooks;