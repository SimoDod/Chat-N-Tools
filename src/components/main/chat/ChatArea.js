import classes from "./ChatArea.module.css";
import { Fragment, useState, useEffect } from "react";
import { collection, query, getDocs } from "@firebase/firestore";
import { firestore } from "../../../firebase_setup/firebase";

const ChatArea = () => {
  const [info, setInfo] = useState([]);

  const getData = async () => {
    setInfo([]);
    const q = query(collection(firestore, "chat_data"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setInfo((prev) => {
        const newState = [...prev];
        newState.push(doc.data());
        return newState;
      });
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const element = () => {
    return info
      .sort((elA, elB) => {
        return elA.chatData.timeStamp - elB.chatData.timeStamp;
      })
      .map((element) => {
        const message = element.chatData.message;
        const id = element.chatData.id;
        const color = element.chatData.color;
        const nickname = element.chatData.nickname;
        const date = element.chatData.date;
        const hours = element.chatData.time.hours;
        const minutes = element.chatData.time.minutes;
        const seconds = element.chatData.time.seconds;
        const time = `${hours}:${minutes}:${seconds}`;

        return (
          <p key={id}>
            <span style={{ fontSize: "11px" }}>
              [{date}][{time}]
            </span>{" "}
            &#60;{" "}
            <span className={classes.chat_nickname} style={{ color }}>
              {nickname}
            </span>{" "}
            &#62; {message}
          </p>
        );
      });
  };

  const scrollDown = () => {
    const objDiv = document.getElementById("chat-area-div");
    objDiv.scrollTop = objDiv.scrollHeight;
  };

  setTimeout(scrollDown, 20);

  return (
    <Fragment>
      <div id="chat-area-div" className={classes.chat_area}>
        {element()}
      </div>
      <button onClick={getData} className={classes.refresh}>
        Refresh
      </button>
    </Fragment>
  );
};

export default ChatArea;
