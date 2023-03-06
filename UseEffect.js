import React from "react";
import {useState,useEffect} from 'react';


function Use(){
    const [a,setA]=useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            if(a==1){
                alert("Timer is started");
                setA((a)=>a+1);
            }
            else if(a==15){
                alert("Timer is midway");
                setA((a)=>a+1);
            }
            else if(a==30){
                alert("Time finished");
               
            }
            else{
            setA((a)=>a+1);
            }

        },800);

    })
   return(
    <div>
        
    </div>
   )
    
}

export default Use;