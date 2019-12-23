import React, { Component } from "react";
import { Redirect } from "react-router";

import Title from "../components/Title";

import defaultAvatar from "../images/noAvatar.png";
import valeraAvatar from "../images/valeraPersonal.jpg";

const timeConverter = BSONTIMESTAMP => {
  const a = new Date(BSONTIMESTAMP);
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
  const minutes = a.getMinutes();
  return `${date} ${month} ${year} ${hour}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
};

export default class Account extends Component {
  render() {
    const { userState } = this.props;
    if (!userState.loggedIn) {
      return <Redirect push to="/user/login" />;
    }

    const userData = userState.userData;

    const ordersTable = userData.orders.map((item, index) => {
      const { name, totalPrice, userCheckIn, userCheckOut, mainImg } = item;

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
          <div className="account-room-img">
            <img src={mainImg} alt={"room image"} />
          </div>
          <p>check in {timeConverter(userCheckIn)}</p>
          <p>check out {timeConverter(userCheckOut)}</p>
          <p>total: ${totalPrice}</p>
        </article>
      );
    });

    return (
      <div className="account-bg-container">
        <div className="account-container">
          <Title title={"Personal information"} />
          <div className="info-container">
            <section className="personal-info">
              <article>
                <h3>User information</h3>
                <img
                  className="avatar-image"
                  src={
                    userData.firstName === "Valera"
                      ? valeraAvatar
                      : defaultAvatar
                  }
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
      </div>
    );
  }
}
