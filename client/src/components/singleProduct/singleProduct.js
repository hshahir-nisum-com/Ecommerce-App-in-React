import React, { useState, useEffect } from "react";
import Strip from "../slider/strip";
import { Container } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { useDispatch } from "react-redux";
import { addtocart } from "../../redux/action/action";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import fetchProduct from "../../apis/products/fetchProduct";
import { useHistory } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";

const MyStyle = makeStyles(() => ({
  div: {
    display: "flex",
    flexDirection: "row",
  },
  imgClass: {
    margin: "30px 50px 20px 0",
    width: "450px",
    height: "400px",
    "@media (max-width:900px)": {
      margin: "10px",
      width: "150px",
      height: "180px",
    },
  },
  txtBox: {
    width: "40vw",
    marginTop: "30px",
  },
  butButtonStyle: {
    margin: "0 auto",
  },
  buyButton: {
    width: "fit-content",
    marginTop: "10px",
    marginLeft: "1vw",
    "@media (max-width: 900px)": {
      marginTop: "10px",
      marginLeft: "1vw",
      display: "flex",
      width: "150px",
    },
  },
  title: {
    fontSize: "30px",
    "@media (max-width: 900px)": {
      fontSize: "15px",
    },
  },
  btnGrp: {},
}));

function SingleProduct(props) {
  const [count, setcount] = useState(0);
  const [arr, setArr] = useState([]);
  const classes = MyStyle();
  let { id } = useParams();
  const theme = useTheme();
  const history = useHistory();
  const token = localStorage.getItem("jwt");
  const globalState = useSelector((state) => state, shallowEqual);
  let { quantity } = globalState.addToCart;

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const buttonProps = {
    variant: isSmallScreen ? "outlined" : "contained",
    size: isSmallScreen ? "small" : "large",
  };

  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      const data = await fetchProduct();
      setArr(data);
    }
    getData();
  }, []);

  let data_temp = 0;
  const filteredResult = arr.filter((temp) => temp.id == id);
  if (filteredResult[0] != null) {
    data_temp = filteredResult[0];
  }

  const { image, title, price, description } = data_temp;

  return (
    <div style={{ marginTop: "150px" }}>
      <Strip />
      <Container>
        <Box component="div" className={classes.div}>
          <Box component="div">
            <img src={image} alt="img" className={classes.imgClass} />
          </Box>
          <Box className={classes.txtBox}>
            <span className={classes.title}>{title}</span>
            <p>
              <span> Price : {price}</span> <br />
            </p>
            <Box component="div" className={classes.btnGrp}>
              Quantity{" "}
              <ButtonGroup
                size="small"
                aria-label="small outlined button group"
              >
                <Button
                  onClick={() => {
                    setcount(count + 1);
                  }}
                >
                  +
                </Button>
                {<Button disabled>{count}</Button>}
                {count < 1 ? (
                  <Button disabled>-</Button>
                ) : (
                  <Button
                    onClick={() => {
                      setcount(count - 1);
                    }}
                  >
                    -
                  </Button>
                )}
              </ButtonGroup>
            </Box>
            <Box component="div" className={classes.butButtonStyle}>
              <Button
                variant={buttonProps.variant}
                color="primary"
                className={classes.buyButton}
                onClick={async () => {
                  dispatch(addtocart(count));
                  console.log(
                    "quantity ::::::::::::::::::::::::::::::::::::::::::::::",
                    globalState.addToCart
                  );

                  if (count > 0) {
                    await fetch("http://localhost:8080/addtocart", {
                      method: "POST",
                      body: JSON.stringify({
                        products: [
                          {
                            productId: id,
                            name: title,
                            price: price,
                            quantity: count,
                          },
                        ],
                      }),
                      headers: { "Content-Type": "application/json" },
                    });
                  }
                }}
                size={buttonProps.size}
              >
                Add to Cart
              </Button>
              {quantity > 0 ? (
                <span>
                  {token ? (
                    <Button
                      color="primary"
                      className={classes.buyButton}
                      size={buttonProps.size}
                      variant={buttonProps.variant}
                      onClick={() =>
                        history.push({
                          pathname: "/checkout",
                          state: {},
                        })
                      }
                    >
                      Buy Now
                    </Button>
                  ) : (
                    <Button
                      color="primary"
                      className={classes.buyButton}
                      size={buttonProps.size}
                      variant={buttonProps.variant}
                      onClick={() =>
                        history.push({
                          pathname: "/login",
                          state: {},
                        })
                      }
                    >
                      Buy Now
                    </Button>
                  )}
                </span>
              ) : (
                <Button
                  color="primary"
                  className={classes.buyButton}
                  size={buttonProps.size}
                  variant={buttonProps.variant}
                  disabled
                >
                  Buy Now
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      </Container>
      <Container>
        <h1>Product Detail</h1>
        <p>{description}</p>
      </Container>
    </div>
  );
}

export default SingleProduct;