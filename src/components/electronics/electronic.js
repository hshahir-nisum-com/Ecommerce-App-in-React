import React, { useEffect } from "react";
import { Container, Grid } from "@material-ui/core";
import { shallowEqual, useSelector } from "react-redux";
import "./electronic.css";
import withWidth from "@material-ui/core/withWidth";
import { useDispatch } from "react-redux";
import fetchProduct from "../../apis/products/fetchProduct";
import { fetchedData } from "../../redux/action/action";
import Product from "../product/Products";

function Electronic() {
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
        <br />
        <h1> Top Selling</h1>
        <div>
          <Grid className="unorder-electronic-list " container spacing={1}>
            {myArr.map((val) => {
              return (
                <Grid item xs key={val.id} className="electronic-wrapper">
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

export default withWidth()(Electronic);
