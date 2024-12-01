import React, { useState } from "react";
import "../App.css";

function GPTInput({ onAskGPT }) {
  const [inputObjective, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="inputGPT">
      <input
        type="text"
        value={inputObjective}
        onChange={handleInputChange}
        id="inputField"
        placeholder="bridge 10 USDT from polygon to avalanche"
      />
      <button
        id="actionButton"
        onClick={() => {
          onAskGPT(inputObjective);
        }}
      >
        &rarr;
      </button>
    </div>
  );
}

export default GPTInput;
