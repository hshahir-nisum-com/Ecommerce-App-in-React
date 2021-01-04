import {
  Toolbar,
  IconButton,
  Drawer,
  Typography,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import DrawerMenu from "./drawerMenu";
import React from "react";
import { Link } from "react-router-dom";

const myStyle = makeStyles(() => ({
  logo: {
    // textAlign: "left",
    textTransform: "uppercase",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
}));

function mobileMenu({ handleDrawerOpen, handleDrawerClose, drawerOpen }) {
  const { logo, drawerContainer } = myStyle();
  console.log(handleDrawerClose);

  const myLogo = (
    <IconButton variant="h6" component="h1" className={logo}>
     <Link to='/' style={{
       textDecoration : 'none',
       color : 'white'
     }}> Super store </Link>
    </IconButton>
  );

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
        <div className={drawerContainer}>
          <DrawerMenu />
        </div>
      </Drawer>

      <div>{myLogo}</div>
    </Toolbar>
  );
}

export default mobileMenu;
