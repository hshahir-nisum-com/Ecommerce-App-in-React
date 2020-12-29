import "./App.css";
import { Route, Switch } from "react-router-dom";
import FlashItems from "./components/flashSale/flashItems";
import SignIn from './components/signIn'
import Singup from './components/signUp'
import Home from "./home";
import { makeStyles } from "@material-ui/core/styles";






function App() {

  return (
    <main className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/flashSaleItems" component={FlashItems} exact />
        <Route path="/login" component={SignIn} exact />
        <Route path="/signup" component={Singup} exact />
      </Switch>
    </main>
  );
}

export default App;
