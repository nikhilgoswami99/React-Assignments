import { useState } from "react";
import styles from "./App.module.css";
import Data_Sliders from "./components/sliders/sliders";
import Chart from "./components/chart/chart";
import Navbar from "./components/navbar/nav";

function App() {
  const [homeValue, setHomeValue] = useState(3000);
  const [downPayment, setDownPayment] = useState(3000 * 0.2);
  const [loanAmount, setLoanAmount] = useState(3000 * 0.8);
  const [interestRate, setInterestRate] = useState(5);
  const [loanTerm, setLoanTerm] = useState(5);

  function onChangeData(e) {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "home") {
      const downPaymentValue = value * 0.2;
      const loanAmountValue = value * 0.8;

      setHomeValue(value);
      setDownPayment(downPaymentValue);
      setLoanAmount(loanAmountValue);
    } else if (name === "down") {
      const downPaymentValue = value;
      const loanAmountValue = homeValue - value;

      setDownPayment(downPaymentValue);
      setLoanAmount(loanAmountValue);
    } else if (name === "loan") {
      const loanAmountValue = value;
      const downPaymentValue = homeValue - value;

      setLoanAmount(loanAmountValue);
      setDownPayment(downPaymentValue);
    } else if (name === "interest") {
      const interestRateValue = value;

      setInterestRate(interestRateValue);
    } else if (name === "tenure") {
      const loanTermValue = value;

      setLoanTerm(loanTermValue);
    }
  }

  return (
    <>
      <Navbar></Navbar>
      <div className={styles.main_content}>
        <Data_Sliders
          homeValue={homeValue}
          downPayment={downPayment}
          loanAmount={loanAmount}
          interestRate={interestRate}
          loanTerm={loanTerm}
          onChangeData={(e) => {
            onChangeData(e);
          }}
        ></Data_Sliders>
        <Chart
          homeValue={homeValue}
          downPayment={downPayment}
          loanAmount={loanAmount}
          interestRate={interestRate}
          loanTerm={loanTerm}
        ></Chart>
      </div>
    </>
  );
}

export default App;
