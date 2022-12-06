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
  "😨": "Scared Emoji",
  "🚣": "Person Rowing Boat",
  "🗾": "Map of Japan",
  // "🏔️": "Snow-Capped Mountain",
  "⛰️": "Mountain",
  "🌋": "Volcano",
  "🗻": "Mount Fuji",
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
      <h1 className="heading">Welcome To EmoTrans</h1>
      <p className="subText">Emoji Translator</p>
      <input className="inputBox" onChange={inputChangeHandler}></input>
      <div className="output">{meaning}</div>
      <h3 className="subText">emoji we know</h3>
      <span>
        {emojiWeKnow.map(function (emoji) {
          return (
            <span
              className="emojisWeKnow"
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
