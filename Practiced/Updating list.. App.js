import { Component } from 'react';
import './App.css';
import person from './Person/Person';
import Person from './Person/Person';

class App extends Component  {
  state =
    {
      employee: [
        { name: 'Hassan', age: 25 },
        { name: 'Basit', age: 26 },
        { name: 'Ajmal', age: 27 }
      ],
      showEmployee: false
    }
    delEmployee = (employeeIndex) => {
      const employee = this.state.employee;
      employee.splice(employeeIndex, 1);
      this.setState({employee: employee})
    }
  changeName = (event) => { 
    this.setState ({
      employee: [
        { name: 'Hassan', age: 25 },
        { name: event.target.value, age: 26 },
        { name: 'Ajmal', age: 27 }
      ]
    });
  }
  toggleData = () => {
    const doesShow = this.state.showEmployee;
    this.setState({showEmployee: !doesShow});
  };


  render(){
    const style = {
      backgroundColor: 'white',
      font:'inherit',
      padding:'8px',
      border: '1px solid blue',
      cursor:'pointer'
    };

    let employee = null
  if (this.state.showEmployee){
    employee =(
      <div>
        {this.state.employee.map((employee, index) => {
          return <Person 
          click ={() => this.delEmployee(index)}
          name={employee.name}
          age={employee.age}/>
        })}
        </div>
    )
  }  
    return (
      <div className="App">
        <h1>Hello! Welcome to React!</h1> 
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

