"use client";

import { useState } from "react";
import CountUp from "react-countup";

export default function Counter() {
  const [Counter, setCounter] = useState([
    {
      id: "counter1",
      cardClass: "single-count",
      iconClass: "fa fa-map-marker",
      title: "#1 Google 3-Pack Rankings",
      number: "185",
    },
    {
      id: "counter2",
      cardClass: "single-count",
      iconClass: "fa fa-line-chart",
      title: "Average Client ROAS Scale",
      number: "480",
    },
    {
      id: "counter3",
      cardClass: "single-count",
      iconClass: "fa fa-check-circle",
      title: "Growth Projects Delivered",
      number: "240",
    },
    {
      id: "counter4",
      cardClass: "single-count last",
      iconClass: "fa fa-users",
      title: "Engineers & SEO Leads",
      number: "35",
    },
  ]);

  return (
    <>
      {Counter.map((singleCounter) => (
        <div className="col-lg-3 col-md-3 col-12" key={singleCounter.id}>
          <div className={singleCounter.cardClass}>
            <i className={singleCounter.iconClass}></i>
            <div className="main-count">
              <h3>{singleCounter.title}</h3>
              <h6>
                <span className="counter">
                  <CountUp
                    end={singleCounter.number}
                    delay={1}
                    enableScrollSpy
                  />
                </span>
                +
              </h6>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
