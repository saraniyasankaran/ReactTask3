import React from "react";
import ReactDOM from "react-dom";
import Image from "./image";
import Price from "./Price";
import Description from"./Description";
import Heading from "./Heading";
import Button from "./Button";
import AddButton from "./AddButton";
import ProductHooks from "./ProductHooks";
function App(){
  return(
    <div className="first">  
    
   <div>
  <Heading/>
    <Image /> 
  </div>
   <div className="side">
   <ProductHooks/>
   <Description />
   <Button/>    
  </div> 
  </div>
  );
}
export default App;
