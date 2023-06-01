import { useState } from "react";
import "../styles/userInputs.css";
import { useDispatch } from "react-redux";

const UserInputs = () => {

  const [ firstLine, setFirstLine ] = useState<string>("");
  const [ secondLine, setSecondLine ] = useState<string>("");
  const [ thirdLine, setThirdLine ] = useState<string>("");

  const dispatch = useDispatch();

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
                  console.log(`detect change at line ${i + 1}: ${e.target.value}`);
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
      <div className="submit">
        <input type="submit" value="貼り紙をつくる" onClick={() => {
          console.log(`firstLine: ${firstLine}`);
          console.log(`secondLine: ${secondLine}`);
          console.log(`thirdLine: ${thirdLine}`);
          dispatch({ type: "lineResponder/setFirst", payload: firstLine });
          dispatch({ type: "lineResponder/setSecond", payload: secondLine });
          dispatch({ type: "lineResponder/setThird", payload: thirdLine });
        }}/>
      </div>
      <div className="result">
      </div>
    </>
  );
};

export default UserInputs;
