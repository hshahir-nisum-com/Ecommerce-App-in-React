import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const MyStyle = makeStyles(() => ({
  OnSaleNow: {
    width: "100%",
  },
  btn: {
    display: "inline-block",
    overflow: "auto",
    whiteSpace: "nowrap",
    margin: "0px auto",
    float: "right",
  },
  OnSale: {
    color: "rgb(235, 179, 88)",
  },
}));

function Timer() {
  const classes = MyStyle();
  //cal time function
  const calculateTimeLeft = () => {
    const difference = +new Date("2021-03-12") - +new Date();
    let timeLeft = {};
    if (difference) {
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
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div id="flash-sale1">
      <div id="OnSaleNow" className={classes.OnSaleNow}>
        <span className={classes.OnSale}> On Sale Now </span> Ending{" "}
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        <Link to="/flashSaleItems">
          <Button variant="outlined" color="primary" className={classes.btn}>
            More
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Timer;
