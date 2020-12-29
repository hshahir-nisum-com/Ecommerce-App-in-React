import {  Container } from "@material-ui/core";
import React  from "react";
import {  Link } from "react-router-dom";
import Timer from './timer'
import "./flashSale.css";
import img1 from "./images/flash1.png";
import img2 from "./images/flash2.jpg";
import img3 from "./images/flash3.png";
import img4 from "./images/flash4.jpg";
import img5 from "./images/flash5.png";
import img6 from "./images/flash6.jpg";

export default function FlashSale() {
  const saleList = [
    {
      img: img1,
      title: "NESTLE Everyday 900gm",
      price: "RS. 915",
      actualPrice: "930",
      discount: "2%",
      id: "firstImg",
    },
    {
      img: img2,
      title: "Buy 1 get 1 free Bluetooth handsfree",
      price: "RS. 1015",
      actualPrice: "2000",
      discount: "40%",
      id: "secondImg",
    },
    {
      img: img3,
      title: "Finger Gloves",
      price: "RS. 120",
      actualPrice: "190",
      discount: "20%",
      id: "thirdImg",
    },
    {
      img: img4,
      title: "cocomo 5 pack",
      price: "RS. 5",
      actualPrice: "5",
      discount: "0%",
      id: "fourthImg",
    },
    {
      img: img5,
      title: "Black Disposable protective mask",
      price: "RS. 100",
      actualPrice: "120",
      discount: "10%",
      id: "fithImg",
    },
    {
      img: img6,
      title: "U1 Hnadfree high bass good quality",
      price: "RS. 129",
      actualPrice: "500",
      discount: "74%",
      id: "sixImg",
    },
  ];

  
  //  console.log(timerComponents)
  return (
    <div>
      <Container>
        <br />
        <h1> Flash Sale</h1>
        <div id="parent-flash-sale">
          <Timer />
          <hr />

          <div id="flashSale2">
            <ul className="unorder-list">
              {saleList.map((val) => {
                return (
                  <li id={val.id} className="li">
                    <Link className="flash-box">
                      <div>
                        <div>
                          <img src={val.img} alt="img Missing" id={val.id} />{" "}
                        </div>
                        <div className="FMCG2_1Text">
                          <a >{val.title}</a>
                          <div>
                            <span style={{ color: "orange" }}>{val.price}</span>
                          </div>
                          <span style={{ textDecoration: "line-through" }}>
                            Rs {val.actualPrice}
                          </span>
                        </div>
                        <div>
                          <span>{val.discount}</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
