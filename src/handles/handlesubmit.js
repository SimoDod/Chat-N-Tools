import { addDoc, collection } from "@firebase/firestore";
import { firestore } from "../firebase_setup/firebase";

const handleSubmit = (chatdata) => {
  const ref = collection(firestore, "chat_data"); // Firebase creates this automatically
  let data = {
    chatData: chatdata,
  };
  try {
    addDoc(ref, data);
  } catch (err) {
    console.log(err);
  }
};

export default handleSubmit;

