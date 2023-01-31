import classes from "./ChatForm.module.css";
import handleSubmit from "../../../handles/handlesubmit";

const dataHandler = (e) => {
  e.preventDefault();
  const userNickname = e.target[0].value;
  const userMessage = e.target[1].value;

  if (userNickname.length < 3 || userMessage.length < 1) {
    window.alert(
      "Nickname must be atleast 3 characters long and Message can't be empty"
    );
    return;
  }

  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  if (seconds < 10) seconds = "0" + seconds;
  if (minutes < 10) minutes = "0" + minutes;
  if (hours < 10) hours = "0" + hours;

  const formOject = Object.fromEntries(new FormData(e.target));
  const myStore = {
    id: Math.random().toString(),
    date: date.toISOString().split("T")[0],
    time: { hours, minutes, seconds },
    timeStamp: Date.now(),
    ...formOject,
  };
  e.target.reset();
  handleSubmit(myStore);
};

const reRender = () => {
  setTimeout(function(){
    window.location.reload();
 }, 300);
 
}

const ChatForm = (props) => {
  
  return (
    <form onSubmit={dataHandler} className={classes.form}>
      <input
        name="nickname"
        className={classes.nickname}
        placeholder="Nickname"
      ></input>
      <input name="message" placeholder="Message"></input>
      <p className={classes.color_picker_info}>Pick a color:</p>
      <div className={classes.color_picker}>
        <p>
          <input type="radio" name="color" value="red" />
          <label htmlFor="size_1">Red</label>
        </p>
        <p>
          <input
            type="radio"
            name="color"
            value="green"
            defaultChecked="checked"
          />
          <label htmlFor="size_2">Green</label>
        </p>
        <p>
          <input type="radio" name="color" value="blue" />
          <label htmlFor="size_3">Blue</label>
        </p>
      </div>

      <button onClick={reRender} name="chat_data" type="submit">
        Send
      </button>
    </form>
  );
};

export default ChatForm;
