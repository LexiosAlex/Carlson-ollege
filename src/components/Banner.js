import React from "react";

const Banner = ({ children, titile, subtitle }) => {
  return (
    <div className="banner">
      <h1> {titile}</h1>
      <div />
      <p>{subtitle}</p>
      {children}
    </div>
  );
};

export default Banner;
