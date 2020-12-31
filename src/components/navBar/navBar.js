import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  Container,
} from "@material-ui/core";
import { shallowEqual, useSelector } from "react-redux";
import SearchBox from "./searchBox";
import MenuIcon from '@material-ui/icons/Menu';

const MyStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing * 3,
    overflowX: "auto",
    zIndex: "-1",
  },
  navDisplayFlex: {
    display: `flex`,
    "flex-direction": "row",
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`,
    width: "max-content",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  divider: {
    height: 28,
    margin: 4,
  },

  header: {
    backgroundColor: "black",
    color: "white",
    margin: "auto",
    padding: "10px",
    textAlign: "center",
    fontSize: "small",
    width: "100%",
  },
  mySticky: {
    position: "sticky",
  },
  icontxt: {
    textDecoration: "none",
    color: "white",
    textTransform: `uppercase`,
  },
  menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },


    
  }

));

export default function NavBar() {
  const navLinks = [
    { title: "Men Clothing", path: "/menClothing" },
    { title: "electronics", path: "/electronics" },
    { title: "Fashions", path: "/fashions" },
    { title: "Contact Us", path: "/contactus" },
    { title: "Login / Signup", path: "/login" },
  ];
  const data = useSelector((state) => state, shallowEqual);
  
  const [mobileOpen, setMobileOpen] = React.useState(false);
  function handleDrawerToggle() {
      setMobileOpen(!mobileOpen)
    }


  const classes = MyStyle();
  return (
    <AppBar id="myHeader" className={classes.mySticky}>
      <div>
        <header className={classes.header}>
          Groceries delivery in Karachi / Mobile phones, Cosmetics, Toys &
          Electronics nationwide
        </header>

        <Toolbar>
          <Container className={classes.navDisplayFlex}>


          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
          >
            <MenuIcon />
          </IconButton>



            <IconButton edge="start" color="inherit" aria-label="home">
              <Link to="/" className={classes.icontxt}>
                <span>Super Store</span>
              </Link>
            </IconButton>

            <List component="nav" className={classes.navDisplayFlex}>
              {navLinks.map(({ title, path }) => {
                if (title !== navLinks[4].title) {
                  return (
                    <ListItem button key={title} className={classes.listvalues}>
                      <Link to={path} className={classes.linkText}>
                        {title}
                      </Link>
                    </ListItem>
                  );
                } else {
                  return (
                    <ListItem button key={title}>
                      <Link to={path} className={classes.linkText}>
                        {console.log("1", data.userName)}
                        {data.userName.length > 0 ? data.userName : title}
                      </Link>
                    </ListItem>
                  );
                }
              })}
            </List>
          </Container>
        </Toolbar>

        <SearchBox />
      </div>
    </AppBar>
  );
}
