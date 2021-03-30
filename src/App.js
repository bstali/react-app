import { Component } from 'react';
import './App.css'; 
import Person from './Person/Person'; 

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
    const employeeIndex = this.state.employee.findIndex(e => {
      return e.id === id;
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
    console.log('hello');
  }
  

  render(){
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font:'inherit',
      padding:'8px',
      border: '1px solid blue',
      cursor:'pointer',
    };

    let employee = null
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
    style.backgroundColor = 'red';
  
  }  

    const classes =[];
    if (this.state.employee.length<=2) {
      classes.push('red');
    } 
    if (this.state.employee.length<=1) {
      classes.push('bold');
    }
  
    return (
      
        <div className="App">
        <h1>Hello! Welcome to React!</h1> 
        <p className={classes.join(' ')}>This is Working.</p>
      <button
        style={style} 
        onClick={this.toggleData}>Click to Change
      </button>
      {employee}
      </div>
      
    );
  }
    
} 
  
export default App; 
