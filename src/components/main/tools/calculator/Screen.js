import classes from "./Screen.module.css";
import { Textfit } from 'react-textfit';

const Screen = ({value}) => {
    return (
    <Textfit className={classes.screen} mode="single" max={70}>
      {value}
    </Textfit>
  );
};

export default Screen;
