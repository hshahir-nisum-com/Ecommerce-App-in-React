import React, { useEffect } from "react";
import { Container, Grid } from "@material-ui/core";
import "./menClothing.css";
import { shallowEqual, useSelector } from "react-redux";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import { useDispatch } from "react-redux";
import fetchProduct from "../../apis/products/fetchProduct";
import { fetchedData } from "../../redux/action/action";
import Product from "../product/Products";

function ElectronicD(props) {
  const globalState = useSelector((state) => state, shallowEqual);
  let { data } = globalState.fetchedData;
  const dispatch = useDispatch();
  console.log("from global State", data);

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

  let myArr = data.filter((category) => category.category === "men clothing");

  console.log("from myArr fashion", myArr);
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
  return (
    <Container>
      <br />
      <h1> Top Selling</h1>

      <div>
        <Grid
          className="unorder-list"
          container
          spacing={1}
          cols={getGridListCols()}
        >
          {myArr.map((val) => {
            return (
              <Grid item xs key={val.id} className="menClothing-wrapper">
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

export default withWidth()(ElectronicD);
