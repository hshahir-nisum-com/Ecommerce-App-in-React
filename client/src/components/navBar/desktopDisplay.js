import { Toolbar, IconButton, List, makeStyles } from "@material-ui/core";
import React from "react";
import MenuButton from "./menuButton";
import Logo from "./logo";

const myStyle = makeStyles(() => ({
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
  const { toolbar, navDisplayFlex } = myStyle();

  return (
    <Toolbar className={toolbar}>
      <IconButton color="inherit" edge="start">
        <Logo />
      </IconButton>
      <List component="nav" className={navDisplayFlex}>
        <MenuButton />
      </List>
    </Toolbar>
  );
}

export default desktopDisplay;
