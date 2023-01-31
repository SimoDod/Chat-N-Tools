import classes from './WWrapper.module.css'
 
const WWrapper = ({children}) => {
    return ( <div className={classes.wweather}>{children}</div> );
}
 
export default WWrapper;