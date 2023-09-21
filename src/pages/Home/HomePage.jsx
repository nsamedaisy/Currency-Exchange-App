import React, { useState } from "react";
// import globe from "../assets/globe.png";
// import landingpic1 from "../assets/landingpic1.png";
// import headerpic from "../assets/headerpic.png";
import { useNavigate } from "react-router-dom";
import { PopUp } from "../../components/popups/Popup";
import { Login } from "../../components/form/LoginForm";
import HomeImage from "../../assets/home.png";
import "./HomePage.css";
import dollar from "../../assets/dollar.png";
import euro from "../../assets/euro.png";
import franc from "../../assets/franc.png";

// import { About } from "../components/about/about";

export const Home = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const navigate = useNavigate();

  // hande login authentication
  const handleStart = () => {
    localStorage.getItem("user")
      ? navigate("./Wallet")
      : setShowPopUp(true);
  };
  return (
    <div class="container">
      <div class="nav">
        <div class="logo-nav">
          <a class="navbar-logo" href="/">
            <img src={dollar} alt="logo" class="logo" />
            <img src={euro} alt="logo" class="logo" />
            <img src={franc} alt="logo" class="logo" />
          </a>
        </div>
        <div class="nav-login">
          <a href="/" class="log-in">
            Log in
          </a>{" "}
          <button class="headBtn" onClick={handleStart}>
            start now
          </button>
        </div>
      </div>
      <div class="homePage">
        <h1 class="head1"> Currency Exchange Within The Currency Wallet</h1>
        <p class="p1 exch">
          Order currency exchange transactions from your currency wallet at any
          time.
        </p>
        <div class="wrapMe">
          <h2 class="h2">The Best You Will Get Sign UP For Free And Get An Account</h2>
          <p class="p2">
            Quick transaction execution, attractive exchange rates and no need
            to have currency accounts with banks - these are just some of the
            advantages of our currency wallet.
          </p>
        </div>

        <div class="wrap-me">
          <img src={HomeImage} alt="homeimage" class="homeimage" />
          <div>
            <h3 class="head3">3 currencies at your fingertips </h3>
            <p class="p3 fingertps">
              Gain instant access to the 3 popular currencies offered at
              attractive rates.{" "}
            </p>
            <h3 class="head3">Take charge of your money </h3>
            <p class="p3 charge">
              Top up your currency wallet and withdraw money when you need it.{" "}
            </p>
            <h3 class="head3">How to Start</h3>
            <p class="p3 start">
              Conversion using the currency wallet means you can easily access
              all of the currencies in the portal`s offer. Simply select the
              payment method you want to use to top up your wallet and then
              order an exchange transaction.
            </p>
          </div>
        </div>

        <h3 class="head3 h3">How does it work?</h3>
        <p class="p3 work">
          Currency exchange using the currency wallet is fast and convenient.
          All you have to do is top up your wallet, check the rate and place an
          order. The exchanged currency will be available to you shortly
          afterwards.
        </p>

        <PopUp trigger={showPopUp} setTrigger={setShowPopUp}>
          <Login />
        </PopUp>
      </div>
      {/* <About /> */}
    </div>
  );
};
