import React, { useState } from "react";
import "../App.css";

function GPTInput({ onAskGPT }) {
  const [inputValue, setInputValue] = useState("Bridge 1 AFTT from Ethereum to Avalanche");

  const handleSubmit = () => {
    if (inputValue.trim()) {
      onAskGPT(inputValue);
      setInputValue("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="inputGPT">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Type your message here..."
      />
      <button onClick={handleSubmit}>Send</button>
    </div>
  );
}

export default GPTInput;
