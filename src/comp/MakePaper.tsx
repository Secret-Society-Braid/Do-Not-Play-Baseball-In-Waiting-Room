const MakePaper = (lines: string[]) => {

  return (
    <>
      <h3>MakePaper</h3>
      <div className="user-lines">
        {lines.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </>
  );
};

export default MakePaper;
