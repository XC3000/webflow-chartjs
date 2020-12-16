import "./App.css";
import React, { useState } from "react";
import Charts from "./Charts";
import { Select } from "antd";
import greengraph from "../src/images/green.png";
import blackgraph from "../src/images/black.png";

const { Option } = Select;

function App() {
  const [principal, setPrincipal] = useState("");
  const [years, setYears] = useState(1);
  /* const investType = ["Free", "Basic", "Premium"]; */

  window.addEventListener("resize", changeDivSize);

  function changeDivSize() {
    window.location.reload();
  }

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  console.log(principal, years);

  return (
    <div className="App">
      <div className="edufund">
        <div className="edufund__rangeselect">
          <div className="edufund__rangeslect__firstsection">
            <p className="edufund__rangeslect__firstsection__text">
              It&apos;s your money. <br /> Make the most of it.
            </p>
            <div className="edufund__rangeselect__investment_details">
              I can invest{" "}
              <input
                type="text"
                defaultValue="$"
                maxLength="6"
                onChange={(e) => setPrincipal(e.target.value)}
              />{" "}
              every month. <br />
              at{" "}
              <Select
                defaultValue="free"
                style={{ width: 120, fontSize: "18px", fontWeight: "400" }}
                onChange={handleChange}
              >
                <Option value="free">Free</Option>
                <Option value="basic">Basic</Option>
                <Option value="premium">Premium</Option>
              </Select>
              risk for{" "}
              <input
                type="number"
                onChange={(e) => setYears(e.target.value)}
                defaultValue="1"
                min="1"
              />{" "}
              years
            </div>
            <div className="edufund__rangeselect__currencyselect">
              <p>Investment in</p>
              <div className="edufund__rangeselect__currencyselect__buttons">
                <button>$</button>
                <button className="active">₹</button>
              </div>
            </div>
            <div className="edufund__rangeselect__expectations">
              <h2>What to expect</h2>
              <div className="edufund__expectations__firstdiv">
                <img src={greengraph} alt="green graph" />
              </div>
              <div className="edufund__expectations__seconddiv">
                <img src={blackgraph} alt="black graph" />
              </div>
            </div>
          </div>
        </div>
        <div className="edufund__chart">
          <Charts />
        </div>
      </div>
    </div>
  );
}

export default App;
