import {
  Toolbar,
  IconButton,
  List,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import MenuButton from "./menuButton";
import { Link } from "react-router-dom";

const myStyle = makeStyles(() => ({
  logo: {
    textAlign: "left",
    textTransform: "uppercase",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },

  navDisplayFlex: {
    display: `flex`,
    "flex-direction": "row",
    justifyContent: `space-between`,
  },
}));

function desktopDisplay() {
  const { logo, toolbar, navDisplayFlex } = myStyle();
  const myLogo = (
    <IconButton variant="h6" component="h1" className={logo}>
     <Link to='/' style={{
       textDecoration : 'none',
       color : 'white'
     }}> Super store </Link>
    </IconButton>
  );

  return (
    <Toolbar className={toolbar}>
      <IconButton color="inherit"  edge="start">
        {myLogo}
      </IconButton>
      <List component="nav" className={navDisplayFlex}>
        <MenuButton />
      </List>
    </Toolbar>
  );
}

export default desktopDisplay;
