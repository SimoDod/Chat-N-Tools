import { useState } from "react";
import ButtonBox from "./ButtonBox";
import Screen from "./Screen";
import Wrapper from "./Wrapper";

const Calculator = () => {
  const [enteredValue, setEnteredValue] = useState("");

  return (
    <Wrapper>
      <Screen value={enteredValue} />
      <ButtonBox clickHandler={setEnteredValue}></ButtonBox>
    </Wrapper>
  );
};

export default Calculator;
