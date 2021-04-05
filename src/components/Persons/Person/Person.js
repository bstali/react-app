import React, { Component } from 'react';
import classes from './Person.module.css';

class Person extends Component{
    render(){
        console.log('[Person.js] rendering...');
    return(
        <div className={classes.Person} >
        <h2 onClick={this.props.click}>My name is {this.props.name}. I'm a Person and my age is: {this.props.age}</h2>
        <h2>{this.props.children}</h2>
        <input type='text' onChange={this.props.changed} value={this.props.name}/>
     </div>
    )   
}}
export default Person;