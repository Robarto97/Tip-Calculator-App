import "./styles.scss";
import logo from "./images/logo.svg";
import { useEffect, useState } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [tip, setTip] = useState("");
  const [tipAmount, setTipAmount] = useState("0.00");
  const [totalAmount, setTotalAmount] = useState("0.00");

  const buttons = document.querySelectorAll(".buttons>button");
  const resetButton = document.querySelector("#reset");

  const handleTipClick = (e) => {
    const currTarget = e.target;
    buttons.forEach((button) => {
      button.classList.remove("clicked");
    });
    currTarget.classList.add("clicked");
    setTip(currTarget.innerText.replace("%", ""));
  };
  const handleReset = () => {
    document.querySelector("#bill").value = "";
    setBill("");
    document.querySelector("#people").value = "";
    setPeople("");
    buttons.forEach((button) => {
      button.classList.remove("clicked");
    });
    setTip("");
    setTipAmount("0.00");
    setTotalAmount("0.00");
  };

  const handleCheck = (e) => {
    if (e.target.value === "") {
      document.querySelector("#people").classList.add("error");
      document.querySelector("#errorMessage").style.display = "block";
    }
  };

  useEffect(() => {
    if (bill !== "" && people !== "" && tip !== "") {
      resetButton.disabled = false;
      const tipAmountRes =
        Math.floor((((bill / people) * tip) / 100) * 100) / 100;
      setTipAmount(tipAmountRes);
      const totalTipRes = (
        bill / people +
        ((bill / people) * tip) / 100
      ).toFixed(2);
      setTotalAmount(totalTipRes);
    } else {
      document.querySelector("#reset").disabled = true;
    }
  }, [bill, tip, people]);

  return (
    <div className="App">
      <main>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <form>
          <div className="info">
            <div className="input">
              <label htmlFor="bill">Bill</label>
              <input
                onChange={(e) => setBill(e.target.value)}
                type="text"
                id="bill"
                name="bill"
                placeholder="0"
                value={bill}
              />
            </div>
            <div className="input">
              <label htmlFor="tip">Select Tip %</label>
              <div className="buttons" id="tip">
                <button onClick={handleTipClick} type="button">
                  5%
                </button>
                <button onClick={handleTipClick} type="button">
                  10%
                </button>
                <button onClick={handleTipClick} type="button">
                  15%
                </button>
                <button onClick={handleTipClick} type="button">
                  25%
                </button>
                <button onClick={handleTipClick} type="button">
                  50%
                </button>
                <input
                  onChange={(e) => {
                    setTip(e.target.value);
                  }}
                  type="text"
                  id="custom"
                  placeholder="Custom"
                ></input>
              </div>
            </div>
            <div className="input">
              <span id="errorMessage">Can't be zero</span>
              <label htmlFor="people">Number of People</label>
              <input
                onBlur={handleCheck}
                onChange={(e) => {
                  document.querySelector("#errorMessage").style.display =
                    "none";
                  document.querySelector("#people").classList.remove("error");
                  setPeople(e.target.value);
                }}
                type="text"
                name="people"
                id="people"
                placeholder="0"
                value={people}
              />
            </div>
          </div>
          <div className="tipAmount">
            <div className="rows">
              <div className="row">
                <div className="tipLabel">
                  <span>Tip Amount</span>
                  <span>/ person</span>
                </div>
                <div className="amount">
                  <span>${tipAmount}</span>
                </div>
              </div>
              <div className="row">
                <div className="tipLabel">
                  <span>Total</span>
                  <span>/ person</span>
                </div>
                <div className="amount">
                  <span>${totalAmount}</span>
                </div>
              </div>
            </div>
            <button onClick={handleReset} type="reset" id="reset">
              Reset
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default App;
