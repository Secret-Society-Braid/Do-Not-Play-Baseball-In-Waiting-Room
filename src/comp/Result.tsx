import "../styles/result.css";

const Result = (prop: { firstLine: string, secondLine: string, thirdLine: string}) => {

  // ┏ ━ ┓
  // ┃ ┃ ┃
  // ┗ ━ ┛

  return (
    <>
      <div id="firstRow">
        <span>┏ ━ ━ ━ ┓</span><br />
        <span>┃</span><span>こ　こ　こ</span><span>┃</span><br />
        ┃こ  こ  こ┃
      </div>
    </>
  );
}

export default Result;
