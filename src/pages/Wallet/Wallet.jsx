import React, { useContext, useState } from "react";
import "./Wallet.css";
import { CurrencyContext } from "../../utils/Context";
import { DepositForm } from "../../components/handlExchange/DepositForm";
import { PopUp } from "../../components/popups/Popup";
import { FundsDeposit } from "../../components/FundCard";
// import { SiMoneygram } from "react-icons/si";

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

    valTo = valTo?.value;
    console.log("this is value to", valTo);

    let valFrom = baseCurrency?.filter((curren) => curren.code !== selected);

    console.log(valFrom);
  };
  balance();

  return (
    <div className="wallet">
      <div className="walletContainer">
        <div className="header">
          <button onClick={() => setShowPopUp(true)} className="depositeBtn">
            Deposit
          </button>

          
          <div className="balance">
            <span> 100000: {selected}</span>
          </div>

          <div className="selectCurrency">
            <label htmlFor="currency">
              {/* select currency */}
              <select
                name="selectedCurrency"
                value={selected}
                onChange={handleSelect}
              >
                {baseCurrency.map((currency) => (
                  <option className="optionIterms" value={baseCurrency.code}>
                    {currency.code}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </div>

      <div className="exchangeSection">
        <h2 className="text-center">wallet's Id: {walletName}</h2>
        <FundsDeposit />
      </div>

      <PopUp trigger={showPopUp} setTrigger={setShowPopUp}>
            <DepositForm />
          </PopUp>
    </div>
  );
};