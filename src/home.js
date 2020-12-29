import "./App.css";
import NavBar from "./components/navBar";
import Signin from "./components/signIn";
import SignUp from "./components/signUp";
import Slider from "./components/slider/slider";
import Strip from "./components/slider/strip";
import FlashSale from "./components/flashSale/flashSale";
import TopSelling from './components/topSelling/topSelling';
import Footer from './components/footer/footer'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container } from "@material-ui/core";

function App() {
  return (
    <div>
      
      <NavBar />
      <Container>
        {/* <Signin/> */}
        {/* <SignUp /> */}
        <br /> <br />  
        <Slider />
        <Strip />

        <FlashSale />
        <TopSelling/>

      </Container>
      <Footer/>
    </div>
  );
}

export default App;
