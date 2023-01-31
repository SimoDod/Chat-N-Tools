import classes from './ChatWrapper.module.css'

const ChatWrapper = ({children}) => {
    return ( <div className={classes.wrapper}>{children}</div> );
}
 
export default ChatWrapper;