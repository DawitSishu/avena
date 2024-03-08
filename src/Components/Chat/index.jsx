import { useState } from "react";
import "./App.css";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

const API_KEY = "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";

const systemMessage = {
  role: "system",
  content: `
  You are a software engineer tasked with developing a comprehensive customer base support system for Cooperative Bank of Ethiopia (Coop). The goal is to create a user-friendly and efficient platform that enhances customer experience and addresses their inquiries and concerns. The support system should be capable of handling various customer interactions, including account-related queries, transaction issues, and general banking assistance.

  Consider the specific needs of a corporate bank like Cooperative Bank of Ethiopia and design features that cater to the unique requirements of corporate clients. Ensure that the system incorporates security measures to safeguard sensitive financial information. Integration with existing banking systems is crucial for seamless data flow and accurate customer support.
  
  Key functionalities to include:
  
  User authentication and authorization for secure access.
  A ticketing system to manage and track customer queries efficiently.
  Integration with the bank's database to retrieve and display account information.
  Real-time transaction tracking and status updates.
  Multichannel support, including web, mobile, and possibly chat services.
  Knowledge base or FAQs section to provide instant solutions to common queries.
  Automated responses for routine inquiries, allowing customer support agents to focus on complex issues.
  Reporting and analytics tools to track system performance and customer satisfaction.
  Consider the importance of scalability, as Cooperative Bank of Ethiopia's customer base may grow over time. Prioritize a responsive and intuitive design to ensure accessibility for users with varying technical expertise.
  
  Keep in mind that the primary objective is to enhance customer support efficiency, foster positive customer relationships, and uphold the reputation of Cooperative Bank of Ethiopia as a reliable financial institution.
  `,
};

function App() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm COOP Ask me anything about your concern",
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role, content: messageObject.message };
    });

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => data.json())
      .then((data) => {
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "ChatGPT",
          },
        ]);
        setIsTyping(false);
      });
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ position: "relative", height: "500px", width: "700px" }}>
        <MainContainer>
          <ChatContainer>
            <MessageList
              scrollBehavior="smooth"
              typingIndicator={
                isTyping ? <TypingIndicator content="ሃኪም is typing" /> : null
              }
            >
              {messages.map((message, i) => {
                console.log(message);
                return <Message key={i} model={message} />;
              })}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
}

export default App;
