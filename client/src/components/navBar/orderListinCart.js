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

export default function OrderListInCart() {
  const dispatch = useDispatch();


  async function fetchCartVal() {
    const getTotalCount = await axios.get(
      "http://localhost:8080/gettotalcount",
      {
        headers: {
          "auth-token": localStorage.getItem("jwt"),
        },
      }
    );
    const getTotalItem = await axios.get("http://localhost:8080/getcart", {
      headers: {
        "auth-token": localStorage.getItem("jwt"),
      },
    });
    if (getTotalCount) {
      dispatch(
        cartItems({
          item: getTotalItem.data.products,
          count: getTotalCount.data.totalCount,
        })
      );
    }
  }
  useEffect(() => {
    fetchCartVal();
  }, []);
  return (
    <Container maxWidth="xl" px={5}>
      <Box mt={20}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Box boxShadow={1} p={5}>
              <Box mb={3}>
                <Typography variant="h6">Cart ( items)</Typography>
              </Box>
              <Grid container spacing={3}>
              <Grid item xs={4}>
                <Box boxShadow={1} p={1}>
                  image
                </Box>
              </Grid>
              <Grid item xs={8}>
                <Box px={2}>
                  <Grid container>
                      <Grid item xs={4}>
                          <span style={{display:'block',marginBottom : "20px"}}>this is title</span>
                          <span style={{marginBottom : "20px"}}>Your Order is here</span>

                      </Grid>
                      <Grid item xs={8}>
                        <Box >
                        <ButtonGroup
                        size="small"
                        aria-label="small outlined button group"
                        style={{}}
                      >
                        <Button
                          onClick={async () => {
                            await axios.put(
                              "http://localhost:8080/increaseproductquantity",

                              { index },
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
                              "http://localhost:8080/decreaseproductquantity",

                              { index },
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
                      </Grid>
                  </Grid>
                </Box>
              </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Paper>xs=4</Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
