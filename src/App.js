import "./App.css";
import { Route, Switch } from "react-router-dom";
import FlashItems from "./components/flashSale/flashItems";
import SignIn from './components/signin signup/signIn'
import Singup from './components/signin signup/signUp'
import SingProduct from "./components/singleProduct/singleProduct"
import Home from "./home";
import NavBar from './components/navBar/tempnavBar'
import MenClothing from './components/menClothing/menClothing'
import Fashions from './components/fashion/fashion'
import Electronics from './components/electronics/electronic'
import Footer from "./components/footer/footer";


function App() {

  return (
    <main className="App">
      <NavBar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/flashSaleItems" component={FlashItems} exact />
        <Route path="/login" component={SignIn} exact />
        <Route path="/signup" component={Singup} exact />
        <Route path="/productdisplay" component={SingProduct} exact />
        <Route path="/menClothing" component={MenClothing} exact />
        <Route path="/fashions" component={Fashions} exact />
        <Route path="/electronics" component={Electronics} exact />
      </Switch>
      <Footer />
    </main>
  );
}

export default App;
