import React from "react";
import imgFlash from "./images/flashSale.jpg";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { Container , Grid } from "@material-ui/core";
import { useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import fetchProduct from "../../apis/products/fetchProduct";
import { fetchedData } from "../../redux/action/action";
import Product from "../product/Products";
import "./flashItems.css";

function FlashItems() {
  const globalState = useSelector((state) => state, shallowEqual);
  let { data } = globalState.fetchedData;

  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      if (data.length < 1) {
        const data = await fetchProduct();
        dispatch(fetchedData(data));
      }
    }
    fetchData();
  }, []);

  let myArr = data.filter(
    (category) =>
      category.category === "electronics" ||
      category.category === "women clothing"
  );
  return (
    <div>
      <Container>
        <div className="flash-sale-banner">
          <img src={imgFlash} alt="img" />
        </div>
        <h1> Flash Sale</h1>
        <div className="flash-sale2-flash-items">
          <Grid className="unorderList" container spacing={1}>
            {myArr.map((val) => {
              return (
                <Grid item xs key={val.id} className="fashion-wrapper">
                <Product
                  id={val.id}
                  img={val.image}
                  title={val.title}
                  price={val.price}
                  description={val.description}
                />
              </Grid>
              );
            })}
          </Grid>
        </div>
      </Container>
    </div>
  );
}
export default FlashItems;
 