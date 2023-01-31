import { Fragment } from "react";
import Calculator from "./calculator/Calculator";
import classes from './Tools.module.css'
import Weather from "./weather/Weather";

const Tools = () => {
    return ( 
        <Fragment>
            <h1 className={classes.tools}>1. Calculator</h1>
            <Calculator />
            <hr></hr>
            <h1 className={classes.tools}>2. Weather forecast </h1>
            <Weather />
        </Fragment>
     );
}
 
export default Tools;