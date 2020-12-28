import "./App.css";
import NavBar from "./components/navBar";
import Signin from "./components/signIn";
import SignUp from "./components/signUp";
import Slider from "./components/slider/slider";
import Strip from "./components/slider/strip";
import FlashSale from "./components/flashSale/flashSale";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import FlashItems from "./components/flashSale/flashItems";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container } from "@material-ui/core";

function App() {
  return (
    <main className="App">
      <header id="header">
        Groceries delivery in Karachi / Mobile phones, Cosmetics, Toys &
        Electronics nationwide
      </header>

      <NavBar />
      <Container>
        {/* <Signin/> */}
        {/* <SignUp /> */}
        <br />
        <Slider />
        <Strip />

        <FlashSale />
      </Container>
    </main>
  );
}

export default App;
