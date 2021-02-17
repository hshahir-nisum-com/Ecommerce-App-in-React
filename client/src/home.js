import "./App.css";
import Slider from "./components/slider/slider";
import Strip from "./components/slider/strip";
import FlashSale from "./components/flashSale/flashSale";
import TopSelling from "./components/topSelling/topSelling";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import fetchProduct from "./apis/products/fetchProduct";
import { fetchedData } from "./redux/action/action";
import { cartItems } from "./redux/action/action";
import fetchCart from "./apis/products/fetchCartValue";
import axios from "axios";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      const data = await fetchProduct();
      console.log("call fetchedData");
      dispatch(fetchedData(data));
    }
    fetchData();

    async function fetchCartVal() {
      const getTotalCount = await axios.get(
        "http://localhost:8080/gettotalcount",
        {
          headers: {
            "auth-token": localStorage.getItem("jwt"),
          },
        }
      );
      const getTotalItem = await axios.get("http://localhost:8080/getcart", {
        headers: {
          "auth-token": localStorage.getItem("jwt"),
        },
      });
      console.log("getTotalCount",getTotalCount)
      if (getTotalCount.data.totalCount >0 ) {
        dispatch(
          cartItems({
            item: getTotalItem.data.products,
            count: getTotalCount.data.totalCount,
          })
        );
      }
    }
    fetchCartVal();
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
