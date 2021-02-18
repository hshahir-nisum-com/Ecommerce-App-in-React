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
import Cart from "./cart";
import Divider from "@material-ui/core/Divider";

export default function OrderListInCart() {
  const dispatch = useDispatch();
  const [totalPrice, settotalPrice] = useState(0)
  const { items, totalCount } = useSelector(
    (state) => state.cartItem,
    shallowEqual
  );
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
    
    if (getTotalCount ) {
      settotalPrice(getTotalItem.data.products.reduce((total,{price ,quantity})=>{
      
        return ((parseInt(price) * parseInt(quantity)) + total)
      },0))
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
    <Container px={5}>
      <Box mt={20} >
        <Grid container spacing={5}>
          <Grid item xs={8}>
            <Box boxShadow={1} p={3} bgcolor="#ffffff">
              <Box mb={3} >
                <Typography variant="h6">
                   {items.length == 0 ? <span>Cart is Empty</span> : <span> Cart  {items.length} X items </span> } 
                </Typography>
              </Box>
              {items.map(({ name, price, quantity, _id, image }) => {
                return (
                  <React.Fragment key={_id}>
                    <Cart
                      fetchCartVal={fetchCartVal}
                      img={image}
                      title={name}
                      quantity={quantity}
                      price={price}
                      _id={_id}
                    />
                    <Divider
                      variant="middle"
                      style={{ marginTop: "25px", marginBottom: "25px" }}
                    />
                  </React.Fragment>
                );
              })}
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box boxShadow={1} p={3}>
              <span style={{ position: "relative", display: "block" }}>
                <span
                  style={{
                    fontWeight: "bold",
                    display: "block",
                    position: "absolute",
                    left: 0,
                    width: "max-content",
                  }}
                >
                  {" "}
                  The Total Amount of 
                </span>
                <span
                style={{
                    fontWeight: "bold",
                    display: "block",
                    position: "absolute",
                    right: 0,
                    width: "max-content",
                  }}
                >
                  {
                    totalPrice
                  } 
                </span>
              </span>
              <span
                style={{
                  position: "relative",
                  display: "block",
                  margin: "20px 0",
                  padding: "20px 0",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    display: "block",
                    position: "absolute",
                    left: 0,
                    width: "max-content",
                  }}
                >
                  {" "}
                  Shipping
                </span>
                <span
                  style={{
                    display: "block",
                    position: "absolute",
                    right: "0",
                    width: "max-content",
                  }}
                >
                  {" "}
                  N/A
                </span>
              </span>
              <Divider />
              <span style={{display : "block", padding: "20px 0"}}>
              <Button variant="contained" color="primary" fullWidth>
                Go to CheckOut
              </Button>
              </span>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
