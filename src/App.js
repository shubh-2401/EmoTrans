import React, { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "❤️": "love",
  "😑": "annoyance",
  "😈": "Smiling Face with Horns Emoji",
  "😉": "Winking Face Emoji",
  "😱": "Shocked Emoji",
  "😡": "Angry Face Emoji",
  "😎": "Smiling Face With Sunglasses",
  "😨": "Scared Emoji"
};

var emojiWeKnow = Object.keys(emojiDictionary);
// console.log(Object.keys(emojiDictionary))

export default function App() {
  const [meaning, setMeaning] = useState("");
  function inputChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) meaning = "We don't have this in our Database";
    setMeaning(meaning);
  }

  // For emoji click
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
    console.log(setMeaning);
  }

  return (
    <div className="App">
      <h1>inside outt</h1>

      <div>
        <input onChange={inputChangeHandler}></input>
      </div>
      <h2>
        <div>{meaning}</div>
      </h2>

      <h3>emoji we know</h3>
      <span>
        {emojiWeKnow.map(function (emoji) {
          return (
            <span
              key={emoji}
              onClick={() => emojiClickHandler(emoji)}
              style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            >
              {emoji}
            </span>
          );
        })}
      </span>
    </div>
  );
}
