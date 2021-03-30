import { Component } from 'react';
import './App.css';
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

  changeData = (newName) => {
    //console.log("clicked")
    this.setState ({
      employee: [
        { name: newName, age: 25 },
        { name: 'Basit', age: 26 },
        { name: 'Ajmal', age: 29 }
      ]
    });
  };
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
    return (
      <div className="App">
        <h1>Hello! Welcome to React!</h1> 
        { this.state.showEmployee ?
          <div>
        <Person 
          name={this.state.employee[0].name} 
          age={this.state.employee[0].age} />
        <Person 
          name={this.state.employee[1].name} 
          age={this.state.employee[1].age}
          click={this.changeData.bind(this, 'Ahmer')}
          changed={this.changeName} >My Hobbies: Racing</Person>
        <Person 
          name={this.state.employee[2].name} 
          age={this.state.employee[2].age} />
        </div> : null
        }
        <button
        style={style} 
        onClick={this.toggleData}>Click to Change</button>
      </div>
    );
  }
    
} 
  
export default App; 

