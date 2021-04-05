import React, { memo, useEffect } from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');

    const timer = setTimeout(() => {
      alert('Data Saved in Cloud!')
    },1000);
    return () => {
      clearTimeout(timer);
      console.log('[Cockpit.js] Cleanup work in useEffect')
    }
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => 
    console.log('[Cockpit.js] Cleanup work in 2nd useEffect')
  })

    const assignedClasses =[];
    let btnClass = ''; 
    if(props.showEmployee){
        btnClass= classes.red ;
    }
    
    if (props.employeeLength <= 2) {
      assignedClasses.push(classes.red);
    } 
    if (props.employeeLength <= 1) {
      assignedClasses.push(classes.bold);
    }

return(
<div className={classes.Cockpit}>
    <h1>{props.title}</h1> 
    <p className={assignedClasses.join(' ')}>This is Working.</p>
    <button className={btnClass}
    onClick={props.clicked}>Click to Change
    </button>
</div>      
)}

export default React.memo(Cockpit);