import classes from "./Navbar.module.css";

const Navbar = (props) => {
  
  const clickHandler = (e) => {
    const command = e.target.textContent;
    props.clickHandler(command)
  }
  
  return (
    <nav>
      <ul className={classes.navbar}>
        <li>
          <button onClick={clickHandler}>Chat</button>
        </li>
        <li>
          <button onClick={clickHandler}>Tools</button>
        </li>
        <li>
          <button onClick={clickHandler}>About me</button>
        </li>
        <li>
          <button onClick={clickHandler}>Contacts</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
