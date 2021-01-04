import React, { useState , useEffect } from "react";
import Strip from "../slider/strip";
import { Container } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { addtocart } from "../../redux/action/action";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import fetchProduct from '../../apis/products/fetchProduct';
import { fetchedData } from "../../redux/action/action";

const MyStyle = makeStyles(() => ({
  div: {
    display: "flex",
    flexDirection: "row",
  },
  imgClass: {
    width: "15vw",
    height: "25vh",
    margin: "50px",
  },
  txtBox: {
    width: "40vw",
  },
  butButtonStyle: {
    margin: "0 auto",
  },
  buyButton: {
    width: "10vw",
    marginTop: "10px",
    marginLeft: "1vw",
    "@media (max-width: 900px)": {
      marginTop: "10px",
      marginLeft: "1vw",
    },
  },
}));

function SingleProduct(props) {
  let { id } = useParams();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const buttonProps = {
    variant: isSmallScreen ? "outlined" : "contained",
    size: isSmallScreen ? "small" : "large",
  };

  const [count, setcount] = useState(0);

  const classes = MyStyle();
  const dispatch = useDispatch();
  let data = useSelector((state) => state, shallowEqual);
  data = data.fetchedData.data;


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


  const filteredResult = data.filter((temp) => temp.id == id);
  console.log(filteredResult[0]);
  const { image, title, price, description } = filteredResult[0];

  return (
    <div style={{ marginTop: "150px" }}>
      {/* {console.log("props ",props)} */}
      <Strip />
      <Container>
        <Box component="div" className={classes.div}>
          <Box>
            <img src={image} alt="img" className={classes.imgClass} />
          </Box>
          <Box className={classes.txtBox}>
            <h1>{title}</h1>
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
                {count < 0 ? (
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
                onClick={() => {
                  dispatch(
                    addtocart({
                      productDetail: props.location.aboutProps,
                      quantity: count,
                    })
                  );
                }}
                size={buttonProps.size}
              >
                Add to Cart
              </Button>

              <Button
                color="primary"
                className={classes.buyButton}
                size={buttonProps.size}
                variant={buttonProps.variant}
              >
                Buy Now
              </Button>
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
