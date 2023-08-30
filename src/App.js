import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Home } from "./pages/Home/HomePage";
import { Wallet } from "./pages/Wallet/Wallet";
import { Route, Routes } from "react-router-dom";
import { CurrencyContext } from "./utils/Context";

const baseUrl =
  "https://api.currencyapi.com/v3/latest?apikey=yxwOCSE37Lu64dfvxhbaSrh8SduHenuI2FFeBArJ";

function App() {
  const [currencies, setCurrencies] = useState(null);
  const [baseCurrency, setBaseCurrency] = useState([]);

  console.clear()

  console.log('this is base currency', baseCurrency);
  const updateBaseCurrency = (data) => {
    ["USD", "EUR", "XAF"].forEach((cur) => {
      setBaseCurrency((prev) => [...prev, data[`${cur}`]]);
    });
  };

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setCurrencies(response.data);
      updateBaseCurrency(response.data.data);
    });
  }, []);


  return (
    <CurrencyContext.Provider value={{ baseCurrency }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="wallet/Wallet" element={<Wallet />} />
      </Routes>
    </CurrencyContext.Provider>
  );
}

export default App;
