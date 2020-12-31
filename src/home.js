import "./App.css";
import Slider from "./components/slider/slider";
import Strip from "./components/slider/strip";
import FlashSale from "./components/flashSale/flashSale";
import TopSelling from "./components/topSelling/topSelling";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container } from "@material-ui/core";
import { useDispatch} from "react-redux";
import { fetchedData } from "./redux/action/action";
import React, { useEffect } from "react";
import axios from "axios";

function App() {


  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      dispatch( fetchedData(data))
    }
    fetchData();
  }, []);


  return (
    <div>
      <Container>
        <br /> <br />
        <Slider />
        <Strip />
        <FlashSale />
        <TopSelling />
      </Container>
    </div>
  );
}

export default App;
