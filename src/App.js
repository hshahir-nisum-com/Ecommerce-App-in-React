import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import FlashItems from "./components/flashSale/flashItems";
import SignIn from "./components/signin signup/signIn";
import Singup from "./components/signin signup/signUp";
import SingProduct from "./components/singleProduct/singleProduct";
import Home from "./home";
import NavBar from "./components/navBar/navBar";
import MenClothing from "./components/menClothing/menClothing";
import Fashions from "./components/fashion/fashion";
import Electronics from "./components/electronics/electronic";
import Footer from "./components/footer/footer";
import SearchResult from "./components/navBar/SearchResult";
import Contactus from "./components/aboutUs/Contactus";
import checkout from "./components/checkout/checkoutForm";
import payment from "./components/checkout/paymentForm";
import reviews from "./components/checkout/Review";
import placed from "./components/checkout/finished";
import forgetPass from './components/signin signup/forgetPass';


function App() {
  return (
    <main>
      <NavBar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/flashSaleItems" component={FlashItems} exact />
        <Route path="/login" component={SignIn} exact />
        <Route path="/signup" component={Singup} exact />
        <Route path="/productdisplay/:id" component={SingProduct} exact />
        <Route path="/menClothing" component={MenClothing} exact />
        <Route path="/fashions" component={Fashions} exact />
        <Route path="/electronics" component={Electronics} exact />
        <Route path="/searchresult/:text" component={SearchResult} exact />
        <Route path="/contactus" component={Contactus} exact />
        <Route path="/checkout" component={checkout} exact />
        <Route exact path="/orderplaced/:id" component={placed} />
        <Route exact path="/forgetPassword" component={forgetPass} />
        <Route exact path="/reviewForm" component={reviews} />
        <Route exact Path="/payment" component={payment} />



        <Redirect to="/" />
      </Switch>
      <Footer />
    </main>
  );
}

export default App;
