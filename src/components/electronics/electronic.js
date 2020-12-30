import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { shallowEqual, useSelector } from "react-redux";
import "./electronic.css";

function Electronic() {
  const globalState = useSelector((state) => state, shallowEqual);
  let { data } = globalState.fetchedData;
  console.log("from global State", data);
  let myArr = data.filter((category) => category.category === "electronics");
  console.log("from myArr electronic", myArr);

  return (
    <div>
      <Container>
        <br />
        <h1> Top Selling</h1>
        <div>
          <GridList className="unorder-electronic-list " cellHeight={320} cols={3}>
            {myArr.map((val) => {
              console.log("in map", val);
              return (
                <span key={val.id} className="electronic-wrapper">
                  {
                    <GridListTile key={val.id} className="li-electronic-sale">
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

export default Electronic;
