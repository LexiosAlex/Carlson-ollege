import React, { Component } from "react";
import { Redirect, withRouter } from "react-router";

import defaultBcg from "../images/room-1.jpeg";
import { Link } from "react-router-dom";
import StyledHero from "../components/StyledHero";
import Banner from "../components/Banner";
import room2 from "../images/details-2.jpeg";
import room3 from "../images/details-3.jpeg";
import room4 from "../images/details-4.jpeg";
import Title from "../components/Title";

import defaultAvatar from "../images/noAvatar.png";

const timeConverter = UNIX_timestamp => {
  const a = new Date(UNIX_timestamp * 1000);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const date = a.getDate();
  const hour = a.getHours();
  const min = a.getMinutes();
  return `${date} ${month} ${year} ${hour}:${min}`;
};
console.log(timeConverter(0));

export default class Account extends Component {
  // componentDidMount() {
  //   const { appState, fetchRooms } = this.props;
  //
  //   if (appState.rooms.length === 0) {
  //     fetchRooms();
  //   }
  // }
  render() {
    // if (!loginData.loggedIn) {
    //   return <Redirect push to="/" />;
    // }
    const user = {
      name: "valera",
      lastName: "Albertovich",
      email: "tankist1337@mail.sru",
      orderedRooms: [
        {
          sys: {
            id: "1"
          },
          fields: {
            name: "single economy",
            slug: "single-economy",
            type: "single",
            price: 100,
            size: 200,
            capacity: 1,
            pets: false,
            breakfast: false,
            featured: false,
            description:
              "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
            extras: [
              "Plush pillows and breathable bed linens",
              "Soft, oversized bath towels",
              "Full-sized, pH-balanced toiletries",
              "Complimentary refreshments",
              "Adequate safety/security",
              "Internet",
              "Comfortable beds"
            ]
          }
        },
        {
          sys: {
            id: "1"
          },
          fields: {
            name: "single economy",
            slug: "single-economy",
            type: "single",
            price: 100,
            size: 200,
            capacity: 1,
            pets: false,
            breakfast: false,
            featured: false,
            description:
              "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
            extras: [
              "Plush pillows and breathable bed linens",
              "Soft, oversized bath towels",
              "Full-sized, pH-balanced toiletries",
              "Complimentary refreshments",
              "Adequate safety/security",
              "Internet",
              "Comfortable beds"
            ]
          }
        },
        {
          sys: {
            id: "1"
          },
          fields: {
            name: "single economy",
            slug: "single-economy",
            type: "single",
            price: 100,
            size: 200,
            capacity: 1,
            pets: false,
            breakfast: false,
            featured: false,
            description:
              "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
            extras: [
              "Plush pillows and breathable bed linens",
              "Soft, oversized bath towels",
              "Full-sized, pH-balanced toiletries",
              "Complimentary refreshments",
              "Adequate safety/security",
              "Internet",
              "Comfortable beds"
            ]
          }
        }
      ]
    };

    const ordersTable = user.orderedRooms.map((item, index) => {
      const { name, capacity, price, checkIn, checkOut } = item.fields;

      return (
        <article
          key={index}
          className={
            index % 2 === 0
              ? "account-order account-order--odd"
              : "account-order account-order--even"
          }
        >
          <h6>Name: {name}</h6>
          <p>Capacity: {capacity}</p>
          <div className="account-room-img">
            <img src={defaultAvatar} alt={"room image"} />
          </div>
          <p>price per night: ${price}</p>
          <p>check in {checkIn}</p>
          <p>check out {checkOut}</p>
          <p>total: $700</p>
        </article>
      );
    });

    const {
      name,
      capacity,
      price,
      checkIn,
      checkOut
    } = user.orderedRooms[0].fields;
    return (
      <div className="account-container">
        <Title title={"Personal information"} />
        <div className="info-container">
          <section className="personal-info">
            <article>
              <h3>User information</h3>
              <img
                className="avatar-image"
                src={defaultAvatar}
                alt={"user avatar"}
              />
              <p>Name: {user.name}</p>
              <p>Surname: {user.lastName}</p>
              <p>Email: {user.email}</p>
            </article>
          </section>
          <section className="personal-info orders-info">
            <h3>Your orders:</h3>
            {user.orderedRooms ? (
              ordersTable
            ) : (
              <p>You have no bookings, visit rooms page to book a room</p>
            )}
          </section>
        </div>
      </div>
    );
  }
}
