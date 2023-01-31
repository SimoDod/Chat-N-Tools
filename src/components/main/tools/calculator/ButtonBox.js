import classes from "./ButtonBox.module.css";

let data = {
  fNum: 0,
  sNum: 0,
  isTrue: true,
  condition: "",
  isSecondNum: false
};
const ButtonBox = (props) => {
  function numHandler(cond) {
    data.condition = cond;
    data.isTrue = false;
    props.clickHandler("");
  }

  function calc(fNum, sNum) {
    fNum = Number(fNum);
    sNum = Number(sNum);
    let result = "";

    switch (data.condition) {
      case "-":
        result = fNum - sNum;
        break;
      case "/":
        result = fNum / sNum;
        break;
      case "*":
        result = fNum * sNum;
        break;
      case "+":
        result = fNum + sNum;
        break;
      default:
        break;
    }
    return result;
  }

  const dataHandler = (e) => {
    const command = e.target.textContent;

    if (e.target.nodeName === "BUTTON" && !isNaN(Number(command))) {
      if(data.isSecondNum === true) {
        props.clickHandler('');
        data.isSecondNum = false;
      }
      
      props.clickHandler((prevResult) => {
        if (data.isTrue) {
          data.fNum = prevResult + command;
          return data.fNum;
        } else {
          data.sNum = prevResult + command;
          return data.sNum;
        }
      });
    } else if (command === "C") {
      props.clickHandler("");
      data.isTrue = true;
      data.fNum = 0;
      data.sNum = 0;
    } else {
      switch (command) {
        case "-":
          numHandler("-");
          break;
        case "/":
          numHandler("/");
          break;
        case "*":
          numHandler("*");
          break;
        case "+":
          numHandler("+");
          break;
        case "=":
          data.isTrue = true;
          props.clickHandler(calc(data.fNum, data.sNum));
          data.fNum = 0;
          data.sNum = 0;
          data.isSecondNum = true;
          break;
        default:
          break;
      }
    }
  };

  const symbolArray = [
    "1",
    "2",
    "3",
    "-",
    "4",
    "5",
    "6",
    "/",
    "7",
    "8",
    "9",
    "*",
    "0",
    "C",
    "=",
    "+",
  ];

  return (
    <ul className={classes.buttonBox} onClick={dataHandler}>
      {symbolArray.map((symbol) => (
        <li key={Math.random().toString()}>
          <button>{symbol}</button>
        </li>
      ))}
    </ul>
  );
};

export default ButtonBox;
