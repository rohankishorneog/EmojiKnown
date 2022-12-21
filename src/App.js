import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😄": "happy",
  "😔": "sad",
  "😡": "angry",
  "😃": "excited",
  "😭": "Crying",
  "🐶": "dog"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");
  function inputChangeHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Sorry, we dont have this emoji in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Decryptor</h1>
      <input onChange={inputChangeHandler}></input>
      <div>
        <h3>Meaning of the emoji: {meaning}</h3>
      </div>
      <div>
        <h3>
          Emojis we know{" "}
          <span role="img" aria-labelledby="">
            👇
          </span>
        </h3>
        {emojisWeKnow.map(function (emoji) {
          return (
            <span onClick={() => emojiClickHandler(emoji)} key={emoji}>
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
