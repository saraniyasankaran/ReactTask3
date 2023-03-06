import React from "react";
import ReactDOM from "react-dom";
import lap1 from './lap1.jpg';
import "./index.css";

function Image(){
         return( 
         <div>
            <table>
                <tr>
                    <td>
            <img src={lap1} className="image" alt="lap1"></img>
            </td>
            </tr>
            </table>
         </div>);

}

export default Image;