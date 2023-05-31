import "../styles/userInputs.css";

const UserInputs = () => {

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
                onChange={() => {}}
              />
          );
        })}
      </div>
      <div className="submit">
        <input type="submit" value="貼り紙をつくる" onClick={() => {}}/>
      </div>
      <div className="result">
      </div>
    </>
  );
};

export default UserInputs;
