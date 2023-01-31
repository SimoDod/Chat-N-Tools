import "./App.css";
import { Fragment, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Contacts from "./components/main/views/Contancts";
import Aboutus from "./components/main/views/Aboutus";
import Footer from "./components/footer/footer";
import Tools from "./components/main/tools/Tools";
import Chat from "./components/main/chat/Chat";

function App() {
  const [currentPage, setcurrentPage] = useState("Chat");

  let view = "";

  switch (currentPage) {
    case "Chat":
      view = <Chat />
      break;
    case "Contacts":
      view = <Contacts />;
      break;
    case "About me":
      view = <Aboutus />;
      break;
    case "Tools":
      view = <Tools />
      break;

    default:
      break;
  }

  return (
    <Fragment>
      <Navbar clickHandler={setcurrentPage} />
      <main>{view}</main>
      <Footer />
    </Fragment>
  );
}

export default App;
