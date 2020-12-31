import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { shallowEqual, useSelector } from "react-redux";
import "./fashion.css";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

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
  console.log("from global State", data);
  let myArr = data.filter(
    (category) =>
      category.category === "jewelery" || category.category === "women clothing"
  );
  console.log("from myArr fashion", props.width);

  return (
    <div>
      <Container>
        <br />
        <h1> Top Selling</h1>
        <div>
          <GridList
            className="unorder-fashion-list "
            cellHeight={320}
            cols={getGridListCols()}
          >
            {myArr.map((val) => {
              console.log("in map", val);
              return (
                <span key={val.id} className="fashion-wrapper">
                  {
                    <GridListTile key={val.id} className="li-fashion-sale">
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
                            <img
                              src={val.image}
                              alt="img Missing"
                              id={val.id}
                            />{" "}
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
                    </GridListTile>
                  }
                </span>
              );
            })}
          </GridList>
        </div>
      </Container>
    </div>
  );
}

export default withWidth()(Fashion);
