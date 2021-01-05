import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import googleAppImg from "./images/google-play.png";
import iphonImg from "./images/iphone.png";

const footer = () => {
  const myStyle = makeStyles((theme) => ({
    
    footer: {
      padding: "24px 16px",
      backgroundColor: "#3f51b5",
      display: "flex",
      flexDirection: "row",
      bottom: "0",
      left: "0",
      "@media (max-width: 900px)": {
        flexDirection: "column",
        marginTop: "30px",
      },
      marginTop: "300px",

    },
    imgstyle: {
      width: "10vw",
      height: "5vh",
      "@media (max-width: 600px)": {
        width: "30vw",
        height: "5vh",
      },
    },
  }));

  const customerSupport = ["Help Center", "How to Buy", "Contact Us"];
  const policiesList = ["About Us", "Digital Payment", "Terms and condition"];

  const classes = myStyle();
  return (
    <div className={classes.root}>
    <footer className={classes.footer}>
      <Container>
        <h2 style={{ color: "white" }}>Customer Care</h2>
        <ul style={{ margin: "0px", paddingLeft: "0" }}>
          {customerSupport.map((temp) => {
            return (
              <li
                key={temp}
                className="customerSupportList"
                style={{
                  listStyle: "none",
                  marginTop: "5px",
                  paddingLeft: "0",
                  color: "white",
                }}
              >
                {temp}
              </li>
            );
          })}
        </ul>
      </Container>
      <Container>
        <h2 style={{ color: "white" }}>Policies and Support</h2>
        <ul style={{ margin: "0px", paddingLeft: "0" }}>
          {policiesList.map((temp) => {
            return (
              <li
                key={temp}
                className="customerSupportList"
                style={{
                  listStyle: "none",
                  marginTop: "5px",
                  paddingLeft: "0",
                  color: "white",
                }}
              >
                {temp}
              </li>
            );
          })}
        </ul>
      </Container>
      <Container>
        <h2 style={{ color: "white" }}>Happy Shopping</h2>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img
            src={googleAppImg}
            alt="googleImg"
            style={{ marginRight: "5px" }}
            className={classes.imgstyle}
          />

          <img src={iphonImg} alt="googleImg" className={classes.imgstyle} />
        </div>
      </Container>
    </footer>
    </div>
  );
};

export default footer;
