import { Container, Grid } from "@material-ui/core";
import React from "react";
import "./topSelling.css";
import { useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import fetchProduct from "../../apis/products/fetchProduct";
import { fetchedData } from "../../redux/action/action";
import Product from "../product/Products";

function TopSelling() {
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
      category.category === "men clothing" ||
      category.category === "women clothing"
  );

  return (
    <div>
      <Container>
        <br />
        <h1> Top Selling</h1>

        <div id="flashSale2FlashItems">
          <Grid className="unorderList" container spacing={1}>
            {myArr.map((val) => {
              return (
                <Grid item xs id={val.id} className="li-flash-sale">
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

export default TopSelling;
