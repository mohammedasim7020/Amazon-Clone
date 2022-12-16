import React from "react";
import Carousel from "react-material-ui-carousel";
import "./banner.css";

const data = [
  "https://rukminim1.flixcart.com/flap/1680/280/image/1defb861e409319b.jpg?q=50",
  " https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50",
  "https://rukminim1.flixcart.com/flap/1680/280/image/8d4150cc4f3f967d.jpg?q=50",
  "https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/0ee77a3ebfc4ad2f.jpg?q=50",
  "https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/c5490ae6630eb1b7.jpg?q=50"
];
const Banner = () => {
  return (
    <Carousel
      className="carasousel"
      autoPlay={true}
      animation="slide"
      indicators={false}
      navButtonsAlwaysVisible={true}
      cycleNavigation={true}
      navButtonsProps={{
        style: {
          background: "#fff",
          color: "#494949",
          borderRadius: 0,
          marginTop: -22,
          height: "104px",
        },
      }}
    >
      {data.map((image, ke) => {
        return <img src={image} alt="" key={ke}  className="banner_img"/>;
      })}
    </Carousel>
  );
};

export default Banner;
