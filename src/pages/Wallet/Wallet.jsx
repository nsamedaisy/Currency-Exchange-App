import React, { useContext, useState } from "react";
import "./Wallet.css";
import { CurrencyContext } from "../../utils/Context";

import { FundsDeposit } from "./FundsDeposit";

export const Wallet = () => {
  const { baseCurrency } = useContext(CurrencyContext);
  const [selected, setSelected] = useState("USD");
  const [showPopUp, setShowPopUp] = useState(false);
  const walletName = localStorage.getItem("user");
  const [balance, setBalance] = useState({ USD: 0, EUR: 0, XAF: 0 });

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  const convertCurrency = (amount, fromCurrency, toCurrency) => {
    const exchangeRates = {
      USD: {
        EUR: 0.85,
        XAF: 550,
      },
      EUR: {
        USD: 1.18,
        XAF: 655,
      },
      XAF: {
        USD: 0.0018,
        EUR: 0.0015,
      },
    };

    const rate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = amount * rate;

    return convertedAmount;
    // console.log(convertedAmount)
  };

  const handleDeposit = (amount, currency) => {
    const baseCurrency = "USD";
    const convertedAmount = convertCurrency(amount, currency, baseCurrency);

    setBalance((prevBalance) => ({
      ...prevBalance,
      [currency]: prevBalance[currency] + amount,
      [baseCurrency]: prevBalance[baseCurrency] + convertedAmount,
    }));
  };

  const handleWithdraw = (amount, currency) => {
    const baseCurrency = "USD";
    const convertedAmount = convertCurrency(amount, currency, baseCurrency);

    setBalance((prevBalance) => ({
      ...prevBalance,
      [currency]: prevBalance[currency] - amount,
      [baseCurrency]: prevBalance[baseCurrency] - convertedAmount,
    }));
  };

  return (
    <div className="wallet">
      <h2 className="walletname">Wallet's Id: {walletName}</h2>
      <div className="walletContainer">
        <div className="header">
          <button onClick={() => setShowPopUp(true)} className="depositBtn">
            Deposit
          </button>
          <button onClick={() => handleWithdraw(50, "USD")} className="withdrawBtn">
            Withdraw
          </button>
          <div className="balance">
            {baseCurrency.map((currency) => (
              <span key={currency.code}>
                {balance[currency.code]} {currency.code}
                <br />
              </span>
            ))}
          </div>
          <div className="selectCurrency">
            <label htmlFor="currency">
              Select Currency:
              <select
                name="selectedCurrency"
                value={selected}
                onChange={handleSelect}
              >
                {baseCurrency.map((currency) => (
                  <option key={currency.code} value={currency.code}>
                    {currency.code}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </div>
      {showPopUp && (
        <FundsDeposit
          handleDeposit={handleDeposit}
          selectedCurrency={selected}
          setShowPopUp={setShowPopUp}
        />
      )}
    </div>
  );
};
