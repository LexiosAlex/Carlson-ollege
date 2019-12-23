import React, { Component } from "react";
import {Redirect} from "react-router";

import Title from "../components/Title";

import defaultAvatar from "../images/noAvatar.png";
import valeraAvatar from "../images/valeraPersonal.jpg"

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
  render() {
    const {userState} = this.props;
    if (!userState.loggedIn) {
      return <Redirect push to="/user/login" />;
    }

    const userData = userState.userData;

    const ordersTable = userData.orders.map((item, index) => {
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

    return (
      <div className="account-container">
        <Title title={"Personal information"} />
        <div className="info-container">
          <section className="personal-info">
            <article>
              <h3>User information</h3>
              <img
                className="avatar-image"
                src={userData.firstName === 'Valera' ? valeraAvatar : defaultAvatar}
                alt={"user avatar"}
              />
              <p>Name: {userData.firstName}</p>
              <p>Surname: {userData.lastName}</p>
              <p>Email: {userData.email}</p>
            </article>
          </section>
          <section className="personal-info orders-info">
            <h3>Your orders:</h3>
            {userData.orders ? (
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
