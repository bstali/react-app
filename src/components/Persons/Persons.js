import React, { PureComponent } from 'react'
import Person from './Person/Person'

class Persons extends PureComponent { 
/*  static getDerivedStateFromProps(props, state){
    console.log('[Persons.js] getDerivedFromState')
    return state;
  }*/
  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   if (nextProps.employee !== this.props.employee)
  //   return true;
  //   else {
  //     return false;
  //   }
  //}
  getSnapshotBeforeUpdate(preProps, preState){
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message: "snapshot!"};
  }
  componentDidUpdate(preProps, preState, snapshot){
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount(){
    console.log('[Persons.js] componentWillUnmount')
  }; 

  render(){
        console.log('[Person.js] rendering...');
        return this.props.employee.map((employee, index) => {
           return(
            <Person
            changed={(event) => this.props.changed(event, employee.id)} 
            click ={() => this.props.click(index)}
            name={employee.name}
            age={employee.age}
            key={employee.id}/>
            )
           })   
    }}


export default Persons;