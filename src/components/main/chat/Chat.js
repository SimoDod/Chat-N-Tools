import ChatArea from "./ChatArea";
import ChatForm from "./ChatForm";
import ChatWrapper from "./ChatWrapper";

const Chat = (props) => {
  return (
    <ChatWrapper>
      <ChatArea />
      <ChatForm />
    </ChatWrapper>
  );
};

export default Chat;
