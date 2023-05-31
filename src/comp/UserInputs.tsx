import "../styles/userInputs.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../features/lineCounterSlice";

const UserInputs = () => {

  const lineCount = useSelector((state: any) => state.lineCounter.count);
  const dispatch = useDispatch();

  return (
    <>
      <div className="line-counter">
        <input
          type="button"
          value="+"
          onClick={() => dispatch(increment())}
        />
        <h2>{lineCount}</h2>
        <input
          type="button"
          value="-"
          onClick={() => dispatch(decrement())}
        />
      </div>
      <div className="line-inputs">
        {[...Array(lineCount)].map((_, i) => (
          <input
            type="text"
            key={i}
            placeholder={`${i + 1} 行目`}
            className={"line-input"}
          />
        ))}
      </div>
      <div className="submit">
        <input type="submit" value="貼り紙をつくる" onClick={() => {}}/>
        <input type="submit" value="行数をリセット" onClick={() => dispatch(reset())}/>
      </div>
      <div className="result">
      </div>
    </>
  );
};

export default UserInputs;
