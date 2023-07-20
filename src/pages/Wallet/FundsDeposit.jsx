import React, { useState } from "react";

export const FundsDeposit = ({ handleDeposit, selectedCurrency, setShowPopUp }) => {
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleDeposit(amount, selectedCurrency);
    setShowPopUp(false);
  };

  return (
    <div className="popup">
      <form onSubmit={handleSubmit}>
        <h3>Deposit Funds</h3>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
        />
        <button type="submit">Deposit</button>
      </form>
    </div>
  );
};