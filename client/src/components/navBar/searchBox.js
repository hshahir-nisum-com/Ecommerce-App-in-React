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
    borderRadius : "0px",
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
    padding: "10px",
    marginLeft: "3px",
    "@media (max-width: 900px)": {
      marginLeft: "0px",
    },
  },

  cart: {
    position: "absolute",
    fontSize: "40px",
  },
  span: {
    position: "absolute",
    display: "block",
    fontSize: "15px",
    marginLeft: "45px",
    marginBottom: "25px",
  },
}));

function SearchBox() {
  const classes = MyStyle();
  const history = useHistory();
  const totalCount = useSelector(
    (state) => state.cartItem.totalCount,
    shallowEqual
  );
  const [text, settext] = useState("");


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
          <div
            className={classes.divForSpan}
            onClick={() => {
              history.push("/orderListInCart")
            }}
          >
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
              <ShoppingCartOutlinedIcon
                fontSize="large"
                className={classes.cart}
              />
              <span className={classes.span}>{totalCount}</span>
            </IconButton>
          </div>
          
        </Grid>
      </Container>
    </Paper>
  );
}

export default SearchBox;
