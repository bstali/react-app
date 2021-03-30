import React from 'react';
import './Person.css'
const person = props =>{
    return(
    <div className="Person">
       <h2 onClick={props.click}>My name is {props.name}. I'm a Person and my age is: {props.age}</h2>
       <h2>{props.children}</h2>
       <input type='text' onChange={props.changed} value={props.name}/>
    </div>
    ) 
}
export default person;
