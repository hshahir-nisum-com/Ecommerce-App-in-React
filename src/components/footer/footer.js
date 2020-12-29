import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import googleAppImg from "./images/google-play.png";
import iphonImg from "./images/iphone.png";

const footer = () => {
  const myStyle = makeStyles((theme) => ({
    footer: {
      padding: '24px 16px',
      marginTop: "auto",
      backgroundColor: "#3f51b5",
    },
  }));

  const customerSupport = ["Help Center", "How to Buy", "Contact Us"];
  const policiesList = ["About Us", "Digital Payment", "Terms and condition"];

  const classes = myStyle();
  return (
    <div>
      <footer
        className={classes.footer}
        style={{ background: "primary", display: "flex", flexDirection: "row" }}
      >
        <Container>
          <div>
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
          </div>
        </Container>
        <Container>
          <div>
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
          </div>
        </Container>
        <Container>
          <div>
            <h2 style={{ color: "white" }}>Happy Shopping</h2>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img
                src={googleAppImg}
                alt="googleImg"
                style={{ width: "5vw", height: "2vw", marginRight: "5px" }}
              />

              <img
                src={iphonImg}
                alt="googleImg"
                style={{ width: "5vw", height: "2vw" }}
              />
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default footer;
