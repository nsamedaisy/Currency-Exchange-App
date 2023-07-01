import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Home } from "./pages/Home";
import { Wallet } from "./pages/Wallet";
import { Route, Routes } from "react-router-dom";
import { CurrencyContext } from "./context/Context";

const baseUrl =
"https://api.currencyapi.com/v3/latest?apikey=1CsPRodQTXYJSfhYvluRYzFUIp532gq9lQ3A9D5X";

function App() {
  const [currencies, setCurrencies] = useState(null);
  const [baseCurrency, setBaseCurrency] = useState([]);

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
        <Route path="wallet" element={<Wallet />} />
      </Routes>
    </CurrencyContext.Provider>
  );
}

export default App;