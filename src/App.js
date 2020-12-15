import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="edufund">
        <div className="edufund__rangeselect">
          <div className="edufund__rangeslect__firstsection">
            <p className="edufund__rangeslect__firstsection__text">
              It's your money. <br /> Make the most of it.
            </p>
            <div className="edufund__rangeselect__investment_details">
              I can invest <input type="text" /> every month. <br />
              at <input type="text" /> risk for <input type="text" /> years
            </div>
          </div>
        </div>
        <div className="edufund__chart">hi</div>
      </div>
    </div>
  );
}

export default App;


