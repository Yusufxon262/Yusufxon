import firstlist from "./firstlist.css";

function firstList() {
  return (
    <>
      <div className="firstList" style={firstlist}>
        <div className="top">
          <img src="maluba.jpg" width="100" height="100" />
          <p>Hello,I am Alisher</p>
        </div>

        <div className="bottom">
          <h1>A Fullstack Devoloper</h1>
          <h1>A passionate learner and a problem solver</h1>
        </div>
      </div>
    </>
  );
}

export default firstList;
