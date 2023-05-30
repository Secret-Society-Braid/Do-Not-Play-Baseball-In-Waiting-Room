const Banner = () => {
  
  const lines: string[] = [
    "劇場で野球をしては",
    "いけません！！！"
  ];

  return (
    <>
      <div className="banner">
        {lines.map((line: string, i: number) => {
          return (
            <div key={i} className="banner-line">
              {line}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Banner;
