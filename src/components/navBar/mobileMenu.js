import { Toolbar, IconButton, Drawer, makeStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import DrawerMenu from "./drawerMenu";
import React from "react";
import Logo from './logo'

const myStyle = makeStyles(() => ({

  drawerContainer: {
    padding: "20px 30px",
  },
}));

function mobileMenu({ handleDrawerOpen, handleDrawerClose, drawerOpen }) {
  const {  drawerContainer } = myStyle();
  console.log(handleDrawerClose);

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

      <div><Logo/></div>
    </Toolbar>
  );
}

export default mobileMenu;
