import { useState } from 'react';
import './WordsCounter-style.css'



const WordsCounter = () => {

  const [charCount, setCharCount] = useState(0);
  const [numberCount, setNumberCount] = useState(0);
  const [alphaCount, setAlphaCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);

  const getWordCount = (str) => {
    let splited = str.trim().split(/\s+/);
    if (splited === '') {
      return 0;
    }
    return splited.length;
  };

  const counter = (str) => {
    let alphaCount = 0;
    let numberCount = 0;
    let charCount = 0;

    for (let i = 0; i < str.length; i++) {
      if (str[i] !== '' && str[i] !== '\n') {
        charCount++;
      }
      if ((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z')) {
        alphaCount++;
      } else if (str[i] >= '0' && str[i] <= '9') {
        numberCount++;
      }
    }

    setCharCount(charCount);
    setNumberCount(numberCount);
    setAlphaCount(alphaCount);
  };

  const wordsCounter = () => {
    const inputText = document.getElementById('inputBox').value;
    const words = getWordCount(inputText);
    setWordCount(words);
    counter(inputText);
  };


  return (
    <>
      <div className="container">
        <h1 className="heading">Words Counter</h1>
        <textarea name="inputBox" id="inputBox" rows={20} cols={30} placeholder="Enter your text" onInput={wordsCounter} defaultValue={""} />
        
        <div className="outputBox">
          <div>
            <label htmlFor="words">Total Words :-</label>
            <input type="button" defaultValue={0} id="words" value={wordCount} readOnly />
          </div>
          <div>
            <label htmlFor="char">Total Characters :-</label>
            <input type="button" defaultValue={0} id="char" value={charCount} readOnly />
          </div>
          <div>
            <label htmlFor="alphabets">Total Alphabets :-</label>
            <input type="button" defaultValue={0} id="alphabets" value={alphaCount} readOnly />
          </div>
          <div>
            <label htmlFor="number">Total Number :-</label>
            <input type="button" defaultValue={0} id="number" value={numberCount} readOnly />
          </div>
        </div>

      </div>
    </>
  )
}

export default WordsCounter