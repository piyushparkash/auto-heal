import "./App.css";
import ChatBot from "react-simple-chatbot";
import steps from "./steps";
import { ThemeProvider } from "styled-components";

function App() {
  const theme = {
    background: "#f5f8fb",
    headerBgColor: "#2e78cd",
    headerFontColor: "#fff",
    headerFontSize: "15px",
    botBubbleColor: "#2e78cd",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4a4a4a",
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ChatBot
          enableSmoothScroll={true}
          floating={true}
          floatingIcon="/netapp-logo.png"
          botAvatar="/netapp-logo.png"
          placeholder="Hi, How can I help you?"
          steps={steps}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
