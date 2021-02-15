import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  IconButton,
  Paper,
  TextField,
  Grid,
  Container,
} from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import fetchCart from "../../apis/products/fetchCartValue";
import { useDispatch } from "react-redux";
import { cartItem } from "../../redux/action/action";
const MyStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing * 3,
    overflowX: "auto",
  },
  ppr: {
    marginTop: "75px",
    height: "55px",
    top: "100px",
    "@media (max-width: 900px)": {
      marginTop: "55px",
    },
  },
  iconButton: {
    padding: "10px",
    paddingTop: "17px",
    "@media (max-width: 900px)": {
      paddingLeft: "0px",
      paddingRight: "0px",
    },
  },

  divForSpan: {
    position: "relative",
    marginLeft: "3px",
    "@media (max-width: 900px)": {
      marginLeft: "0px",
    },
  },

  cart: {
    padding: 10,
    position: "absolute",
    fontSize: "40px",
    marginTop: "5px",
  },
  span: {
    position: "absolute",
    marginLeft: "40px",
  },
}));

function SearchBox() {
  const classes = MyStyle();
  const history = useHistory();
  const item = useSelector((state) => state.cartItem.item, shallowEqual);
  const [text, settext] = useState("");
  const [count, setCount] = useState(0);
  const [cartQuantity, setCartQuantity] = useState(0)
  const dispatch = useDispatch();
  useEffect(() => {
    const updatedCartQuantity = item.reduce((total, { quantity}) => {
      return parseInt(quantity) + parseInt(total)
      }, 0);
      setCartQuantity(updatedCartQuantity);
  }, [item])

  
  // useEffect(() => {
  //   async function fetchData() {
  //     let count = await fetchCart();
  //     console.log("count :::::",count)
  //     dispatch(addtocart(count));
      
  //     return count;
  //   }
  //   fetchData()
  // }, [dispatch])
 
  return (
    <Paper className={classes.ppr}>
      
      <Container>
        <Grid container>
          <Grid item xs={9} sm={11}>
            <TextField
              id="filled-search"
              label="Search in Store"
              type="search"
              fullWidth
              value={text}
              onChange={(e) => {
                settext(e.target.value);
              }}
              onKeyPress={(e) => {
                e.key === "Enter"
                  ? text.length > 1
                    ? history.push(`/searchresult/${text}`)
                    : history.push("/")
                  : console.log("else of ternary");
              }}
            />
          </Grid>
          {console.log("hello text", text)}
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <Link
              to={{
                pathname: `/searchresult/${text}`,
              }}
              className="electronic-Box"
            >
              <SearchIcon />
            </Link>
          </IconButton>
          <div className={classes.divForSpan}>
            <ShoppingCartOutlinedIcon
              fontSize="large"
              className={classes.cart}
            />
            <span className={classes.span}>{cartQuantity}</span>
          </div>
        </Grid>
      </Container>
    </Paper>
  );
}

export default SearchBox;
