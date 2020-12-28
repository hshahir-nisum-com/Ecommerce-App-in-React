import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  Paper,
  Container,
  TextField,
  Grid,
} from "@material-ui/core";
import { Home} from "@material-ui/icons";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchIcon  from "@material-ui/icons/Search";

const MyStyle = makeStyles((theme) => ({
  navDisplayFlex: {
    display: `flex`,
    "flex-direction": "row",
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`,
  },
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  divForSpan :{
    position : 'relative',
  },
  span: {
    position : 'absolute',
    // marginRight : "20px"
    marginLeft : '40px'
    
  },
  cart:{
    padding : 10,
    position : 'absolute'
  },
}));




export default function navBar() {
    const navLinks = [
      { title: "Electronic Devices", path: "/electronicDevices" }, 
      { title: "Groceries", path: "/groceries" },
      {title : 'Fashions', path : '/fashions'},
      {title : 'Contact Us', path :'/contactus'},
      {title : 'Login / Signup' , path : '/loginSignup'},
    ];


  const classes = MyStyle();

    
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Container className={classes.navDisplayFlex}>
              <IconButton edge="start" color="inherit" aria-label="home">
                <Link to="/" style={{textDecoration:'none',
                  color:'white'}}>
                  <Home fontSize="large" />{" "}
                </Link>
              </IconButton>

              <List component="nav" className={classes.navDisplayFlex}>
                {navLinks.map(({ title, path }) => (
                  <ListItem button key={title}>
                    <Link to={path} className={classes.linkText}>
                      {title}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Container>
          </Toolbar>
        </AppBar>

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
                <span className={classes.span}>0</span>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
}
