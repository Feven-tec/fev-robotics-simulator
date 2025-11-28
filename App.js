import React, { useState } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input) return;
    const userMessage = { text: input, sender: "User" };
    const botMessage = {
      text: getBotResponse(input),
      sender: "FevBot"
    };
    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  const getBotResponse = (message) => {
    const msg = message.toLowerCase();
    if (msg.includes("robot")) return "I am your virtual robot! Ready to move!";
    if (msg.includes("study")) return "Let's study together! I can suggest tips and videos.";
    return "I am FevBot, your AI assistant!";
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Fev Robotics AI Simulator</h1>
      <div style={{ border: "1px solid #ccc", padding: "10px", height: "300px", overflowY: "auto" }}>
        {messages.map((m, i) => (
          <div key={i}><b>{m.sender}:</b> {m.text}</div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        style={{ width: "70%", padding: "10px", marginTop: "10px" }}
      />
      <button onClick={handleSend} style={{ padding: "10px 20px", marginLeft: "10px" }}>Send</button>
    </div>
  );
}

export default App;
