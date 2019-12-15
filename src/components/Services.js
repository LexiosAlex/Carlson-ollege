import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "If you love all things fruity and toasty-malty, we will show you the best places in the city"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "If you love all things fruity and toasty-malty, we will show you the best places in the city"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttle",
        info:
          "If you love all things fruity and toasty-malty, we will show you the best places in the city"
      },
      {
        icon: <FaBeer />,
        title: "Strongest beer",
        info:
          "If you love all things fruity and toasty-malty, we will show you the best places in the city"
      },
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          })}
        </div>
      </section>
    );
  }
}
