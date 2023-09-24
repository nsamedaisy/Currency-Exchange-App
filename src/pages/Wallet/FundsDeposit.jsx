import React, { useState } from "react";
import "./FundsDeposit.css";

export const FundsDeposit = ({
  handleDeposit,
  selectedCurrency,
  setShowPopUp,
}) => {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleDeposit(amount, selectedCurrency);
    setShowPopUp(false);
  };
  const handleChange = (e) => {
    e.preventDefault();
    setAmount(e.target.value);
    console.log(amount);
  };

  return (
    <div className="popup">
      <form onSubmit={handleSubmit}>
        <h3>Deposit Funds</h3>
        <div className="inputAmt">
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          name="amount"
          value={amount}
          onChange={handleChange}
        />
        </div><br />
        <button className="btnFund" type="submit">Deposit</button>
      </form>
    </div>
  );
};