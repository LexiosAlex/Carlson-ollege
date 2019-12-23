import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Banner from "../components/Banner";
import StripeCheckoutButton from "../components/StripeCheckoutButton";
import { Link } from "react-router-dom";
import DateTimeRangePicker from "@wojtekmaj/react-datetimerange-picker";

import StyledHero from "../components/StyledHero";
import Hero from "../components/Hero";

const getRoom = (slug, rooms) => {
  let tempRooms = [...rooms];
  return tempRooms.find(room => room.slug === slug);
};

const getDaysTime = unixTime => {
  return Math.round(unixTime / 60 / 60 / 24 / 1000);
};

export default class SingleRoom extends Component {
  state = {
    slug: this.props.match.params.slug,
    defaultBcg,
    userCheckIn: new Date(),
    userCheckOut: new Date(),
    userSubTotal: null
  };

  componentDidMount() {
    const { roomsState, fetchRooms } = this.props;

    if (!roomsState.rooms) {
      fetchRooms();
    }
  }

  onChangeDate = date => {
    if (!date) {
      return;
    }
    const { rooms } = this.props.roomsState;
    const room = getRoom(this.state.slug, rooms);

    const userSubTotal = getDaysTime(date[1] - date[0]) * room.price;
    this.setState({
      userSubTotal,
      userCheckIn: date[0],
      userCheckOut: date[1]
    });
  };

  render() {
    const { rooms } = this.props.roomsState;
    const room = getRoom(this.state.slug, rooms);

    if (!room) {
      return (
        <Hero hero="roomsHero">
          <Banner
            titile="no such room could be found..."
            subtitle="It just disappeared"
          >
            <div className="error">
              <Link to="/rooms" className="btn-primary">
                back to rooms
              </Link>
            </div>
          </Banner>
        </Hero>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;

    const [mainImg, ...defaultImgs] = images;
    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner titile={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImgs.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h6>price: ${price}</h6>
              <h6>size: ${size} SQFT</h6>
              <h6>
                max capacity :{" "}
                {capacity > 1 ? ` ${capacity} people` : ` ${capacity} person`}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>-{item}</li>;
            })}
          </ul>
        </section>
        <section className="room-booking">
          <DateTimeRangePicker
            onChange={this.onChangeDate}
            value={[this.state.userCheckIn, this.state.userCheckOut]}
          />
          <p>
            {this.state.userSubTotal
              ? `your subtotal is: $ ${this.state.userSubTotal}`
              : ""}
          </p>
          {this.state.userSubTotal ? (
            <StripeCheckoutButton
              room={room}
              userSubTotal={this.state.userSubTotal}
              userCheckIn={this.state.userCheckIn}
              userCheckOut={this.state.userCheckOut}
            />
          ) : (
            ""
          )}
        </section>
      </>
    );
  }
}
