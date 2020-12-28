import "./App.css";
import NavBar from "./components/navBar";
import Signin from "./components/signIn";
import SignUp from "./components/signUp";
import Slider from "./components/slider/slider";
import Strip from "./components/slider/strip";
import FlashSale from "./components/flashSale/flashSale";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import FlashItems from "./components/flashSale/flashItems";
import Home from "./home";

function App() {
  return (
    <main className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/flashSaleItems" component={FlashItems} exact />
      </Switch>
      {/* <Home/> */}
    </main>
  );
}

export default App;
