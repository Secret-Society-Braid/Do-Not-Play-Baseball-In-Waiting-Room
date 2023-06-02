import { useState } from "react";
import "../styles/userInputs.css";
import Result from "./Result";

const UserInputs = () => {

  const [ firstLine, setFirstLine ] = useState<string>("");
  const [ secondLine, setSecondLine ] = useState<string>("");
  const [ thirdLine, setThirdLine ] = useState<string>("");

  return (
    <>
      <div className="line-inputs">
        {[...Array(3)].map((_, i: number) => {
          return (
              <input
                type="text"
                key={i}
                placeholder={`${i + 1}行目`}
                className="line-input"
                onChange={(e) => {
                  switch (i) {
                    case 0:
                      setFirstLine(e.target.value);
                      break;
                    case 1:
                      setSecondLine(e.target.value);
                      break;
                    case 2:
                      setThirdLine(e.target.value);
                      break;
                  }
                }}
              />
          );
        })}
      </div>
      <div className="result">
        こんな張り紙ができました！
        <Result firstLine={firstLine} secondLine={secondLine} thirdLine={thirdLine} />
      </div>
    </>
  );
};

export default UserInputs;
