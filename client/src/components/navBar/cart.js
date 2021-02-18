import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { shallowEqual, useSelector } from "react-redux";
import { cartItems } from "../../redux/action/action";
import { useDispatch } from "react-redux";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ShowMoreText from "react-show-more-text";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import CancelIcon from "@material-ui/icons/Cancel";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

export default function cart({
  fetchCartVal,
  img,
  title,
  quantity,
  price,
  _id,
}) {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Box
            boxShadow={1}
            p={1}
            style={{ borderRadius: "5px", margin: "0 auto" }}
          >
            <img
              src={img}
              alt="img missing"
              width="150px"
              height="150px"
              style={{ margin: "0 auto", display: "block" }}
            />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box px={2}>
            <Grid container>
              <Grid
                item
                xs={4}
                style={{ height: "170px", position: "relative" }}
              >
                <span
                  style={{
                    display: "block",
                    marginBottom: "10px",
                    fontWeight: "bold",
                    color: "#4f4f4f",
                  }}
                >
                  {title}
                </span>
                <span
                  style={{
                    display: "block",
                    marginBottom: "10px",
                    color: "#979f8e",
                  }}
                >
                  Your Order is here
                </span>

                <span
                  style={{ position: "absolute", bottom: 0, cursor: "pointer" }}
                  onClick={async () => {
                    await axios.delete(
                      `http://localhost:8080/deleteproductquantity/${_id}`,
                      {
                        headers: {
                          "auth-token": localStorage.getItem("jwt"),
                        },
                      }
                    );
                    fetchCartVal();
                  }}
                >
                  <DeleteForeverIcon style={{ color: "#979f8e" }} />

                  <span
                    style={{
                      marginBottom: "10px",
                      position: "absolute",
                      width: "max-content",
                      color: "#979f8e",
                    }}
                  >
                    REMOVE ITEM
                  </span>
                </span>
              </Grid>
              <Grid item xs={8} style={{ position: "relative" }}>
                <Box
                  style={{
                    position: "relative",
                  }}
                >
                  <ButtonGroup
                    size="small"
                    aria-label="small outlined button group"
                    style={{ position: "absolute", right: 0 }}
                  >
                    <Button
                      onClick={async () => {
                        await axios.put(
                          `http://localhost:8080/increaseproductquantity/${_id}`,
                          {},
                          {
                            headers: {
                              "auth-token": localStorage.getItem("jwt"),
                            },
                          }
                        );
                        fetchCartVal();
                      }}
                    >
                      +
                    </Button>
                    <Button disabled>{quantity}</Button>

                    <Button
                      onClick={async () => {
                        await axios.put(
                          `http://localhost:8080/decreaseproductquantity/${_id}`,

                          {},
                          {
                            headers: {
                              "auth-token": localStorage.getItem("jwt"),
                            },
                          }
                        );
                        fetchCartVal();
                      }}
                    >
                      -
                    </Button>
                  </ButtonGroup>
                </Box>
                <span
                  style={{
                    display: "block",
                    position: "absolute",
                    bottom: "10px",
                    right: "0px",
                    color: "#979f8e",
                  }}
                >
                  $ {quantity * price}
                </span>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
