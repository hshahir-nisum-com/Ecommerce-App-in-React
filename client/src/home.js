import "./App.css";
import Slider from "./components/slider/slider";
import Strip from "./components/slider/strip";
import FlashSale from "./components/flashSale/flashSale";
import TopSelling from "./components/topSelling/topSelling";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch} from "react-redux";
import fetchProduct from './apis/products/fetchProduct';
import { fetchedData } from "./redux/action/action";
import { addtocart } from "./redux/action/action";
import fetchCart from "./apis/products/fetchCartValue";




function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      const data = await fetchProduct()
      dispatch( fetchedData(data))
    }
    fetchData();
    async function fetchData() {
      let count = await fetchCart();
      console.log("count :::::",count)
      dispatch(addtocart(count));
      
      return count;
    }
    fetchData()
  }, []);


  return (
    <div>
      <Container>
        <br /> <br />
        <Slider />
        {/* <Strip /> */}
        <FlashSale />
        <TopSelling />
      </Container>
    </div>
  );
}

export default App;
