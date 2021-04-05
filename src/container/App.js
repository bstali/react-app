import { Component } from 'react';
import classes from './App.module.css'; 
import Persons from '../components/Persons/Persons'; 
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component  {
  constructor(props){
    super(props);
    console.log('[App.js] Constructor')
  }
  state =
    {
      employee: [
        {id:'1', name: 'Hassan', age: 25 },
        {id:'2', name: 'Basit', age: 26 },
        {id:'3', name: 'Ajmal', age: 27 }
      ],
      showEmployee: false,
      showCockpit: true
    }

    static getDerivedStateFromProps (props, state){
      console.log('[App.js] getDerivedFromProps', props);
      return state;
    }
     
    componentDidMount(){
      console.log('[App.js] componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState){
      console.log('[App.js] shouldComponentUpdate')
      return true;
    }

    componentDidUpdate(){
      console.log('[App.js] componentDidUpdate')
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
    console.log('[App.js] render')
    let employee = null
    if (this.state.showEmployee){
    employee =
      <Persons
      employee={this.state.employee}
      changed={this.changeName}
      click={this.delEmployee}/> 
  }  

    return (
      
      <div className={classes.App}>
        <button 
        onClick={() => this.setState({showCockpit: false})}>
        Remove Cockpit
        </button>
        {this.state.showCockpit ? <Cockpit
        title={this.props.appTitle} 
        showEmployee={this.state.showEmployee}
        employeeLength={this.state.employee.length}
        clicked={this.toggleData}/> : null}
        {employee}
      </div>
      
    );
  }
    
} 
  
export default App; 
