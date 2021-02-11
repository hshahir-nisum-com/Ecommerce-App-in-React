import { AppBar, makeStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import MobileMenu from "./mobileMenu";
import SearchBox from "./searchBox";
import DesktopDisplay from "./desktopDisplay";

const myStyle = makeStyles(() => ({
  header: {
    backgroundColor: "#400CCC",
    paddingRight: "79px",
    paddingLeft: "118px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
      margin: 0,
      paddingRight: 0,
      width: "100%",
      left: 0,
    },
  },
}));

export default function Header() {
  const { header } = myStyle();

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

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <MobileMenu
        handleDrawerClose={handleDrawerClose}
        handleDrawerOpen={handleDrawerOpen}
        drawerOpen={drawerOpen}
      />
    );
  };

  return (
    <div>
      <header  style={{marginBottom : '100px'}}>
        <AppBar>
          <AppBar className={header}>
            {mobileView ? displayMobile() : <DesktopDisplay />}
          </AppBar>
          <SearchBox />
        </AppBar>
      </header>
    </div>
  );
}
