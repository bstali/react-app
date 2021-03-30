import React from 'react';
import './Person.css';
import Radium from 'radium';
const person = props =>{
    const style = {
        '@media min-width: 500px':{
            width: '450px'
    } 
    }
    return(
    <div className="Person"  style={style}>
       <h2 onClick={props.click}>My name is {props.name}. I'm a Person and my age is: {props.age}</h2>
       <h2>{props.children}</h2>
       <input type='text' onChange={props.changed} value={props.name}/>
    </div>
    ) 
}
export default Radium(person);
