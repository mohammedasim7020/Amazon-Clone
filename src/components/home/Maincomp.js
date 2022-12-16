import React, { useEffect } from "react";
import Banner from "./Banner";
import Slide from "./Slide";
import "./maincomp.css";
import { getProducts } from "../actions/action";
import { useDispatch, useSelector } from "react-redux";
const Maincomp = () => {
  
  const dispatch = useDispatch();

  // get data from redux store
  const { products } = useSelector((state) => state.getproductsData);
  console.log(products);


  // dispatch all api data to redux
  useEffect(()=>{
    dispatch(getProducts())
  },[])
  return (
    <div className="home_section">
      <div className="banner_section">
        <Banner />
      </div>

      <div className="slide_part">
        <div className="left_slide">
          <Slide title="Deal of The Day" />
        </div>
        <div className="right_slide">
          <h4>Festive latest launches</h4>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/T3/DesktopGateway_CategoryCard2x_758X608_T3._SY608_CB639883570_.jpg"
            alt=""
          />
          <a href="#">see More</a>
        </div>
      </div>
      <Slide title="Today's Deal" />
      <div className="center_img">
        <img
          src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
          alt="img"
        />
      </div>
      <Slide title="Best Seler" />
      <Slide title="Upto 80% off" />
    </div>
  );
};

export default Maincomp;
