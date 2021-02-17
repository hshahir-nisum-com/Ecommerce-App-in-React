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

const MyStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  wrapperOfList: {
    marginTop: "150px",
  },
}));
export default function OrderListInCart() {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const classes = MyStyle();
  const { items, totalCount } = useSelector(
    (state) => state.cartItem,
    shallowEqual
  );
  const [expand, setExpand] = useState(false);
  const onClick = () => {
    setExpand(!expand);
  };

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

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper
            className={classes.paper}
            style={{ backgroundColor: "#400ccc", color: "white" }}
          >
            PRODUCT NAME
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper
            className={classes.paper}
            style={{ backgroundColor: "#400ccc", color: "white" }}
          >
            PRODUCT PRICE
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper
            className={classes.paper}
            style={{ backgroundColor: "#400ccc", color: "white" }}
          >
            PRODUCT QUANTITY
          </Paper>
        </Grid>
      </React.Fragment>
    );
  }
  return (
    <Container className={classes.wrapperOfList}>
      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid container item xs={12} spacing={4}>
            <FormRow />
          </Grid>
          <Grid container item xs={12} spacing={4}>
            {items.map(({ name, price, quantity, _id }, index) => {
              return (
                <React.Fragment key={_id}>
                  <Grid item xs={4}>
                    <Paper className={classes.paper}>
                      <ShowMoreText
                        lines={1}
                        more={"Show More"}
                        less={"Show Less"}
                        onClick={onClick}
                        expanded={expand}
                        width={250}
                        keepNewLines={true}
                      >
                        {name}
                      </ShowMoreText>
                    </Paper>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper className={classes.paper}>{price}$</Paper>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper className={classes.paper}>
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

                      <IconButton
                        aria-label="delete"
                        style={{ float: "right", padding: "3px" }}
                        onClick={async () => {
                          console.log("hi!!!!")
                          await axios.delete(
                            `http://localhost:8080/deleteproductquantity/${_id}`,{
                              headers: {
                                "auth-token": localStorage.getItem("jwt"),
                              },
                              data :{ index },
                            }
                          );
                          fetchCartVal();
                        }}
                      >
                        <CancelIcon color="action" />
                      </IconButton>
                    </Paper>
                  </Grid>
                </React.Fragment>
              );
            })}
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
