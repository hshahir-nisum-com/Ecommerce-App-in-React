import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link as materialLink,
  List,
  MenuItem,
  ListItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import { Link  } from "react-router-dom";
import SearchBox from "./searchBox";

const myStyle = makeStyles(() => ({
  header: {
    backgroundColor: "#400CCC",
    paddingRight: "79px",
    paddingLeft: "118px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    textAlign: "left",
    textTransform: "uppercase",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
  navDisplayFlex: {
    display: `flex`,
    "flex-direction": "row",
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: 'none !important',
    textTransform: `uppercase`,
    color: `white`,
    width: "max-content",
  },
}));

export default function Header() {
  const {
    header,
    logo,
    toolbar,
    drawerContainer,
    navDisplayFlex,
    linkText,
  } = myStyle();

  const navLinks = [
    { title: "Men Clothing", path: "/menClothing" },
    { title: "electronics", path: "/electronics" },
    { title: "Fashions", path: "/fashions" },
    { title: "Contact Us", path: "/contactus" },
    { title: "Login / Signup", path: "/login" },
  ];

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 600
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const myLogo = (
    <Typography variant="h6" component="h1" className={logo}>
      Super store
    </Typography>
  );

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
          >    
        {myLogo}
          </IconButton>

        <List component="nav" className={navDisplayFlex}>
          {getMenuButtons()}
        </List>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        <div>{myLogo}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return navLinks.map(({ title, path }) => {
      return (
        <Link
          {...{
            component: Link,
            to: path,
            color: "inherit",
            style: { textDecoration: "none" },
            key: path,
          }}
        >
          <MenuItem>{title}</MenuItem>
        </Link>
      );
    });
  };



  const getMenuButtons = () => {
    return navLinks.map(({ title, path }) => {
      if (title !== navLinks[4].title) {
        return (
          <ListItem button key={title}>
            <Link to={path} className={linkText}>
              {title}
            </Link>
          </ListItem>
        );
      } else {
        return (
          <ListItem button key={title}>
            <Link to={path} className={linkText}>
              {title}
            </Link>
          </ListItem>
        );
      }
    });
  };

  return (
    <div>
      <header>
        <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
      </header>
      <br /> <br /> <br /> <br />
      <SearchBox />
    </div>
  );
};
