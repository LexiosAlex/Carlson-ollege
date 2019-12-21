import React, {Component} from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms"

class Home extends Component {
  componentDidMount() {
    const {roomsState, fetchRooms} = this.props;

    if (roomsState.rooms.length === 0) {
      fetchRooms()
    }
  }


  render() {
    const {featuredRooms, loading} = this.props.roomsState;
    return (
      <>
        <Hero>
          <Banner
            titile="luxurious rooms"
            subtitle="delux rooms starting at $299"
          >
            <Link to="/rooms" className="btn-primary">
              Our rooms
            </Link>
          </Banner>
        </Hero>
        <Services/>
        <FeaturedRooms featuredRooms={featuredRooms} loading={loading}/>
      </>
    );
  }
}

export default Home;
