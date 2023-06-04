import "../styles/result.css";

const Result = (prop: { firstLine: string, secondLine: string, thirdLine: string}) => {

  // ┏ ━ ┓
  // ┃ ┃ ┃
  // ┗ ━ ┛

  const firstLineSplited = prop.firstLine.split("");
  const secondLineSplited = prop.secondLine.split("");
  const thirdLineSplited = prop.thirdLine.split("");

  const longestLength: number = Math.max(
    firstLineSplited.length,
    secondLineSplited.length,
    thirdLineSplited.length
  );

  return (
    <>
      <pre>
        {`┏${" ━".repeat(3)} ┓\n`} 
        {[...Array(longestLength)].map((_, i: number) => {
          return (
            <>
              ┃
              {thirdLineSplited[i] ? ` ${thirdLineSplited[i]} ` : " 　 "}
              {secondLineSplited[i] ? `${secondLineSplited[i]} ` : "　 "}
              {firstLineSplited[i] ? `${firstLineSplited[i]} ` : "　 "}
              ┃
              <br />
            </>
          )
        })}
        {`┗${" ━".repeat(3)} ┛`}
      </pre>
    </>
  );
}

export default Result;
