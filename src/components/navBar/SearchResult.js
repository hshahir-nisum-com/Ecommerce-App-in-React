import React, { useEffect, useState } from "react";
import { Container, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import { useDispatch } from "react-redux";
import fetchProduct from "../../apis/products/fetchProduct";
import { fetchedData } from "../../redux/action/action";
import { useParams } from "react-router-dom";

function SearchResult(props) {
  
    let { text } = useParams();
    console.log("pass data throguh routes",text)
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
  console.log("from global State", data.length);

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
      category.title.toLowerCase().startsWith(text.toLowerCase()) 
  );
  console.log("from myArr fashion", props.width);

  return (
    <Container>
      <br />
      <h1> Search Result</h1>
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
                {
                  <Container key={val.id} className="li-fashion-sale">
                    <Link
                      to={{
                        pathname: "/productdisplay",
                        aboutProps: {
                          img: val.image,
                          title: val.title,
                          price: val.price,
                          id: val.id,
                          description: val.description,
                        },
                      }}
                      className="fashion-Box"
                    >
                      <div className="fashion-container">
                        <div>
                          <img src={val.image} alt="img Missing" id={val.id} />{" "}
                        </div>
                        <div className="fashion-text">
                          <span>{val.title}</span>
                          <div>
                            <span style={{ color: "orange" }}>
                              Rs : {val.price}
                            </span>
                          </div>
                        </div>
                        <div>
                          <span>{val.discount}</span>
                        </div>
                      </div>
                    </Link>
                  </Container>
                }
              </Grid>
            );
          })}
        </Grid>
      </div>
    </Container>
  );
}

export default withWidth()(SearchResult);
