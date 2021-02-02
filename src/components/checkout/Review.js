import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";


const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "170px",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

export default function Review({ location }) {
  const classes = useStyles();
  const history = useHistory();
  const globalState = useSelector((state) => state, shallowEqual);
  const { name, add, cardTitle } = location.state;
  let { id, price, quantity, totalPrice } = globalState.addToCart;
  console.log("from global State", globalState.addToCart);
  return (
    <React.Fragment>
      <CssBaseline />

      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h6" gutterBottom>
            Order summary
          </Typography>
          <List disablePadding>
            <ListItem className={classes.listItem}>
              Product Name:{" "}
              <ListItemText primary={globalState.addToCart.name} />
              <Typography variant="body2">{price} $</Typography>
            </ListItem>

            <ListItem className={classes.listItem}>
              <ListItemText primary={`Quantity :  ${quantity}`} />
              <ListItemText primary={`Total  `} />

              <Typography variant="subtitle1" className={classes.total}>
                {totalPrice} $
              </Typography>
            </ListItem>
          </List>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom className={classes.title}>
                Shipping
              </Typography>
              <Typography gutterBottom>{name}</Typography>
              <Typography gutterBottom>{add}</Typography>
            </Grid>
            <Grid item container direction="column" xs={12} sm={6}>
              <Typography variant="h6" gutterBottom className={classes.title}>
                Payment details
              </Typography>
              <Grid container>
                <React.Fragment>
                  <Typography gutterBottom>{cardTitle}</Typography>
                </React.Fragment>
              </Grid>
            </Grid>
          </Grid>
          <React.Fragment>
            <div className={classes.buttons}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  history.push({
                    pathname: `/orderplaced/${id}`,
                    state: {
                      name,
                      add,
                      cardTitle,
                    },
                  });
                }}
                className={classes.button}
              >
                Proceed
              </Button>
            </div>
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}
