import "./styles.scss";
import logo from "./images/logo.svg";
import dollar from "./images/icon-dollar.svg";

function App() {
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
              <input type="text" id="bill" name="bill" placeholder="0" />
            </div>
            <div className="input">
              <label htmlFor="tip">Select Tip %</label>
              <div className="buttons" id="tip">
                <button type="button">5%</button>
                <button type="button">10%</button>
                <button type="button">15%</button>
                <button type="button">25%</button>
                <button type="button">50%</button>
                <input type="text" id="custom" placeholder="Custom"></input>
              </div>
            </div>
            <div className="input">
              <label htmlFor="people">Number of People</label>
              <input type="text" name="people" id="people" placeholder="0" />
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
                  <span>$0.00</span>
                </div>
              </div>
              <div className="row">
                <div className="tipLabel">
                  <span>Total</span>
                  <span>/ person</span>
                </div>
                <div className="amount">
                  <span>$0.00</span>
                </div>
              </div>
            </div>
            <button type="reset" id="reset" disabled>
              Reset
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default App;
