import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Paper, TextField, Grid } from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchIcon from "@material-ui/icons/Search";
import { shallowEqual, useSelector } from "react-redux";

const MyStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing * 3,
    overflowX: "auto",
    zIndex: "-1",
  },
  
  iconButton: {
    padding: 10,
  },
 
  divForSpan: {
    position: "relative",
  },

  cart: {
    padding: 10,
    position: "absolute",
  },
  span: {
    position: "absolute",
    marginLeft: "40px",
  }

}));

function SearchBox() {
  const classes = MyStyle();
  const data = useSelector((state) => state, shallowEqual);
  return (
    <div>
      <Paper>
        <Grid container spacing={1}>
          <Grid item xs={2} sm={3}>
            <Paper></Paper>
          </Grid>
          <Grid item xs={5} sm={5}>
            <TextField
              id="filled-search"
              label="Search in Store"
              type="search"
              fullWidth
            />
          </Grid>

          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>

          <Grid item xs={1} sm={3}>
            <div className={classes.divForSpan}>
              <ShoppingCartOutlinedIcon
                fontSize="large"
                className={classes.cart}
              />
              <span className={classes.span}>{data.addToCart.quantity}</span>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default SearchBox;
