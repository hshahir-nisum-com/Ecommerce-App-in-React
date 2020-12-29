
import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import {  Link } from "react-router-dom";

function Timer() {

    //cal time function
  const calculateTimeLeft = () => {
    console.log(+new Date("2020-12-31") )
    const difference = +new Date("2021-01-02") - +new Date();
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
        {/* {console.log(interval)} */}
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });



    return (
        <div id="flash-sale1">
            <div id="OnSaleNow">
              <span id="OnSale"> On Sale Now </span> Ending{" "}
              {timerComponents.length ? (
                timerComponents
              ) : (
                <span>Time's up!</span>
              )}
              <Link to="/flashSaleItems">
              <Button variant="outlined" color="primary" id="btn">
               More 
              </Button>
              </Link>
            </div>
          </div>
    )
}

export default Timer
