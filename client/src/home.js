import "./App.css";
import Slider from "./components/slider/slider";
import Strip from "./components/slider/strip";
import FlashSale from "./components/flashSale/flashSale";
import TopSelling from "./components/topSelling/topSelling";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container } from "@material-ui/core";
import React, { useEffect,useState } from "react";
import { useDispatch} from "react-redux";
import fetchProduct from './apis/products/fetchProduct';
import { fetchedData } from "./redux/action/action";
import { cartItem } from "./redux/action/action";
import fetchCart from "./apis/products/fetchCartValue";
import axios from "axios";



function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      const data = await fetchProduct()
      dispatch( fetchedData(data))
    }
    fetchData();

    async function fetchCartVal() {
      const userFind = await axios.get("http://localhost:8080/getCart");
      console.log(" function call")
      if (userFind.data.length) {
        let { products } = userFind.data[0];
        let count = 0;
    
        for (let i = 0; i < products.length; i++) {
          console.log("products[i] :::", products[i]);
          dispatch(
            cartItem({
              productId: products[i].productId,
              quantity: products[i].quantity,
              name: products[i].name,
              price : products[i].price,
            })
          );
        }
    
      }
    }
      fetchCartVal() 
    
  }, [dispatch]);
  

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
