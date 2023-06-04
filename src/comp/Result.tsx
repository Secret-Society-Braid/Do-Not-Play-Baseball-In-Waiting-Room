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

  const resultArr: string[] = [`┏${" ━".repeat(3)} ┓\n`];

  const resultLines: string[] = [...Array(longestLength)].map((_, i: number) => {
    return `${thirdLineSplited[i] ? `┃ ${thirdLineSplited[i]} ` : "┃ 　 "}${secondLineSplited[i] ? `${secondLineSplited[i]} ` : "　 "}${firstLineSplited[i] ? `${firstLineSplited[i]} ┃` : "　 ┃"}\n`
  });

  resultArr.push(...resultLines);

  resultArr.push(`┗${" ━".repeat(3)} ┛\n`);

  return (
    <>
      <pre>
        {resultArr.map((line: string) => {
          return (
            <>
              {line}
            </>
          )
        })}
      </pre>
      <input type="button" value="結果をコピー！" className={"copy"} onClick={() => {
        navigator.clipboard.writeText(resultArr.join(""));
      }} />
      <input type="button" value="Twitterへ張り出す！" className="twitter-intent" onClick={() => {
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(resultArr.join(""))}&hashtags=${encodeURIComponent("控え室で野球をしてはいけませんジェネレーター")}&url=${encodeURIComponent("https://secret-society-braid.github.io/Do-Not-Play-Baseball-In-Waiting-Room/")}`);
      }} />
    </>
  );
}

export default Result;
