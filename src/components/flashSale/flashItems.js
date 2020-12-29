import React, { useEffect, useState } from "react";
import Navbar from '../navBar'
import { Link } from "react-router-dom";
import imgFlash from "./images/flashSale.jpg";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import img1 from "./images/flash1.png";
import img2 from "./images/flash2.jpg";
import img3 from "./images/flash3.png";
import img4 from "./images/flash4.jpg";
import img5 from "./images/flash5.png";
import img6 from "./images/flash6.jpg";
import "./flashItems.css";

export default function FlashItems() {
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

  const calculateTimeLeft = () => {
    let time = new Date(`"2020-12-31"`)
    const difference = +new Date(time) - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={timerComponents}>
        {console.log(interval)}
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div>
      <Navbar />
      <Container>
        <div className="flashSaleImgBanner">
          <img src={imgFlash} alt="img" />
        </div>

        <h1> Flash Sale</h1>
        <div id="parentFlashSale">
          <div id="flashSale1">
            <div id="OnSaleNow">
              <span id="OnSale"> On Sale Now </span> Ending{" "}
              {timerComponents.length ? (
                timerComponents
              ) : (
                <span>Time's up!</span>
              )}
            </div>
          </div>
        </div>
        <div id="flashSale2FlashItems">
          <GridList className="unorderList" cellHeight={320} cols={6}>
            {saleList.map((val) => {
              return (
                <GridListTile id={val.id} className="liFlashSale">
                  <Link className="flashBox">
                    <div>
                      <div>
                        <img src={val.img} alt="img Missing" id={val.id} />{" "}
                      </div>
                      <div className="FMCG2_1Text">
                        <a>{val.title}</a>
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
                </GridListTile>
              );
            })}
          </GridList>
        </div>
      </Container>
    </div>
  );
}
