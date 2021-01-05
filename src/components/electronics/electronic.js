import React, { useEffect, useState } from "react";
import { Container , Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import "./electronic.css";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import { useDispatch} from "react-redux";
import fetchProduct from '../../apis/products/fetchProduct';
import { fetchedData } from "../../redux/action/action";
import Product from '../product/Products';


function Electronic(props) {
  


 
  const globalState = useSelector((state) => state, shallowEqual);
  let { data } = globalState.fetchedData;

  const dispatch = useDispatch();
    useEffect(() => {
      async function fetchData() {
        if (data.length<1){
        const data = await fetchProduct()
        dispatch( fetchedData(data))
        }
      }
      fetchData();
    }, []);


   
  let myArr = data.filter((category) => category.category === "electronics" || category.category === "women clothing");

  return (
    <div>
      <Container>
        <br />
        <h1> Top Selling</h1>
        <div>
          <Grid className="unorder-electronic-list "  container spacing={1} >
            {myArr.map((val) => {
              return (
                <Grid item xs key={val.id} className="electronic-wrapper">
                  {
                    <Container key={val.id} className="li-electronic-sale">
                      <Link
                        to={{
                          pathname: `/productdisplay/${val.id}`,
                          aboutProps: {
                            img: val.image,
                            title: val.title,
                            price: val.price,
                            id: val.id,
                            description: val.description,
                          },
                        }}
                        className="electronic-Box"
                      >
                        <div className="electronic-container">
                          <div>
                            <img
                              src={val.image}
                              alt="img Missing"
                              id={val.id}
                            />{" "}
                          </div>
                          <div className="electronic-text">
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
    </div>
  );
}

export default withWidth()(Electronic);
