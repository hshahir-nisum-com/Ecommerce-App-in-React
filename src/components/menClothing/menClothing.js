import React, { useEffect, useState } from "react";
import { Container , Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./menClothing.css";
import { shallowEqual, useSelector } from "react-redux";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import { useDispatch} from "react-redux";
import fetchProduct from '../../apis/products/fetchProduct';
import { fetchedData } from "../../redux/action/action";




function ElectronicD(props) {

    const globalState = useSelector((state) => state, shallowEqual);
    let { data } = globalState.fetchedData;
    console.log("from global State", data);

    const dispatch = useDispatch();
    useEffect(() => {
      async function fetchData() {
        if (data.length<1){
          console.log("in if cond")
        const data = await fetchProduct()
        console.log("api Fetched Resul",data)
        dispatch( fetchedData(data))
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

        <div >
          <Grid className="unorder-list" container spacing={1} cols={getGridListCols()}>
            {myArr.map((val) => {
              return (
                <Grid item xs key={val.id} className="menClothing-wrapper">
                  {(
                    <Container  key={val.id} className="li-menCat-sale">
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
                        className="menCat-Box"
                      >
                        <div className="men-clothing-container">
                          <div>
                            <img
                              src={val.image}
                              alt="img Missing"
                              id={val.id}
                            />{" "}
                          </div>
                          <div className="men-clothing-text">
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
                  )}
                </Grid>
              );
            })}
          </Grid>
        </div>
      </Container>
    
  );
}

export default withWidth()(ElectronicD);
