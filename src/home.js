import "./App.css";
import Slider from "./components/slider/slider";
import Strip from "./components/slider/strip";
import FlashSale from "./components/flashSale/flashSale";
import TopSelling from "./components/topSelling/topSelling";
import Footer from "./components/footer/footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container } from "@material-ui/core";

function App() {
  return (
    <div>
      <Container>
        <br /> <br />
        <Slider />
        <Strip />
        <FlashSale />
        <TopSelling />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
