import { Component } from 'react';
import classes from './App.module.css'; 
import Person from '../components/Persons/Person/Person'; 

class App extends Component  {
  state =
    {
      employee: [
        {id:'1', name: 'Hassan', age: 25 },
        {id:'2', name: 'Basit', age: 26 },
        {id:'3', name: 'Ajmal', age: 27 }
      ],
      showEmployee: false
    }
    delEmployee = (employeeIndex) => {
      // better approach to update an array.. first make copy then mutate it.
      //const employee = this.state.employee.slice();
      const employee = [...this.state.employee]
      employee.splice(employeeIndex, 1);
      this.setState({employee: employee})
    }
  changeName = (event, id) => { 
    const employeeIndex = this.state.employee.findIndex(emp => {
      return emp.id === id;
    });
    const emp = {...this.state.employee[employeeIndex]};
    emp.name= event.target.value;
    const employee=[...this.state.employee];
    employee[employeeIndex]= emp;

    this.setState ({employee: employee}); 
  }
  toggleData = () => {
    const doesShow = this.state.showEmployee;
    this.setState({showEmployee: !doesShow});
  }
  

  render(){
    let employee = null
    let btnClass=''
  if (this.state.showEmployee){
    employee =(
      <div>
        {this.state.employee.map((employee, index) => {
          return <Person
          changed={(event) => this.changeName(event, employee.id)} 
          click ={() => this.delEmployee(index)}
          name={employee.name}
          age={employee.age}
          key={employee.id}/>
        })}
        </div>
    )
    btnClass= classes.red;
  }  

    const assignedClasses =[];
    if (this.state.employee.length<=2) {
      assignedClasses.push(classes.red);
    } 
    if (this.state.employee.length<=1) {
      assignedClasses.push(classes.bold);
    }
  
    return (
      
      <div className={classes.App}>
        <h1>Hello! Welcome to React!</h1> 
        <p className={assignedClasses.join(' ')}>This is Working.</p>
        <button className={btnClass}
        onClick={this.toggleData}>Click to Change
        </button>
        {employee}
      </div>
      
    );
  }
    
} 
  
export default App; 
