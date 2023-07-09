import React, { useContext, useState } from "react";
import "./Wallet.css";
import { CurrencyContext } from "../../utils/Context";

import { FundsDeposit } from "../../components/FundCard";

export const Wallet = () => {
  const { baseCurrency } = useContext(CurrencyContext);
  const [selected, setSelected] = useState("USD");
  const [showPopUp, setShowPopUp] = useState(false);
  const walletName = localStorage.getItem("user");

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  // handle wallet's total balance
  const balance = () => {
    let valTo = baseCurrency?.find((cur) => {
      if (cur.code === selected) {
        return cur?.value;
      }
    });

    let valTo1 = valTo?.value;
    console.log("this is value to", valTo1);

    let valFrom = baseCurrency?.filter((curren) => curren.code !== selected);

    console.log(valFrom);
  };
  balance();

  return (
    <div class="wallet">
      <h2 class="walletname">wallet's Id: {walletName}</h2>
      <div class="walletContainer">
        <div class="header">
          <button onClick={() => setShowPopUp(true)} class="depositeBtn">
            Deposit
          </button>
          <div class="balance">
            <span> 100000: {selected}</span>
          </div>

          <div class="selectCurrency">
            <label htmlFor="currency">
              {/* select currency */}
              <select
                name="selectedCurrency"
                value={selected}
                onChange={handleSelect}
              >
                {baseCurrency.map((currency) => (
                  <option class="optionIterms" value={baseCurrency.code}>
                    {currency.code}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </div>
      <div>
        <FundsDeposit />
      </div>
    </div>
  );
};
