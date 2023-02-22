import React from "react";
import { Component } from "react";

class Task3 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            a:2,
            b:2,
            c:2,
            d:2
        };
    }
    changeA=()=>{
        this.setState({a:"5"});
    }
    changeB=()=>{
        this.setState({b:"3"});
    }
    changeC=()=>{
        this.setState({c:"6"});
    }
    changeD=()=>{
        this.setState({d:"8"});
    }
    render(){
        return(
            <>
             <button onClick={this.changeA}>Change a</button><br/><br/>
             <button onClick={this.changeB}>Change b</button><br/><br/>
             <button onClick={this.changeC}>Change c</button><br/><br/>
             <button onClick={this.changeD}>Change d</button><br/><br/>
            <h1>{this.state.a*this.state.a + this.state.b*this.state.b + this.state.c*this.state.c + this.state.d*this.state.d + 2*this.state.a*this.state.b+2*this.state.b*this.state.c+2*this.state.c*this.state.d + 2*this.state.d*this.state.a}</h1>
            </>
        );
    }


}

export default Task3;