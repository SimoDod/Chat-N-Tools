import React from 'react'
import classes from './LocationInput.module.css'
const LocationInput = (props) => {
    
    const inputHandler = (e) => {
        e.preventDefault()
        props.clickHandler(e.target[0].value)
    }
    
    return (
    <div className={classes.input}>
        <form onSubmit={inputHandler}>
            <input placeholder='Enter city or town name'></input>
            <button>Get Weather</button>
        </form>
    </div>
  );
};

export default LocationInput;
