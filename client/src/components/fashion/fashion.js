import React, { useEffect } from "react";
import { Container, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import "./fashion.css";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import { useDispatch } from "react-redux";
import fetchProduct from "../../apis/products/fetchProduct";
import { fetchedData } from "../../redux/action/action";
import Product from "../product/Products";
 
function Fashion(props) {
  const getGridListCols = () => {
    if (isWidthUp("xl", props.width)) {
      return 4;
    }

    if (isWidthUp("lg", props.width)) {
      return 3;
    }

    if (isWidthUp("sm", props.width)) {
      return 3;
    }

    return 1;
  };

  const globalState = useSelector((state) => state, shallowEqual);
  let { data } = globalState.fetchedData;

  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      if (data.length < 1) {
        console.log("in if cond");
        const data = await fetchProduct();
        console.log("api Fetched Resul", data);
        dispatch(fetchedData(data));
      }
    }
    fetchData();
  }, []);

  let myArr = data.filter(
    (category) =>
      category.category === "jewelery" || category.category === "women clothing"
  );
  console.log("from myArr fashion", props.width);

  return (
    <Container>
      <br />
      <h1> Top Selling</h1>
      <div>
        <Grid
          className="unorder-fashion-list "
          container
          spacing={1}
          cols={getGridListCols()}
        >
          {myArr.map((val) => {
            console.log("in map", val);
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
  );
}

export default withWidth()(Fashion);
