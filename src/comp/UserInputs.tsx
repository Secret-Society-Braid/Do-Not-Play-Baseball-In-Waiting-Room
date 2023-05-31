import { useState } from "react";
import "../styles/userInputs.css";
import MakePaper from './MakePaper';

const UserInputs = () => {

  const [lineCount, setLineCount] = useState(3);

  const [lines, setLines] = useState<string[]>(["test"]);

  const handleSubmit = () => {
    const inputs = document.querySelectorAll(".line-input");
    const newLines = Array.from(inputs).map((input) => input.getAttributeNames);
    setLines(newLines);
  }

  return (
    <>
      <div className="line-counter">
        <input
          type="button"
          value="-"
          onClick={() =>
            setLineCount((prev: number) => {
              if (prev == 1) return prev;
              else return prev - 1;
            })
          }
        />
        <h2>{lineCount}</h2>
        <input
          type="button"
          value="+"
          onClick={() => setLineCount((prev: number) => prev + 1)}
        />
      </div>
      <div className="line-inputs">
        {[...Array(lineCount)].map((_, i) => (
          <input
            key={i}
            type="text"
            placeholder={`${i + 1} 行目`}
            className="line-input"
          />
        ))}
      </div>
      <div className="submit">
        <input type="submit" value="貼り紙をつくる" onClick={handleSubmit}/>
      </div>
      <div className="result">
        <MakePaper {...lines} />
      </div>
    </>
  );
};

export default UserInputs;
