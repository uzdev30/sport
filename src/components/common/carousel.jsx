import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//images
import tennis from "../../assets/images/tennis.webp";

export default function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div className=" w-[1447px]  text-white h-[707px]">
        <div className=" absolute   px-52 pt-40">
          <img
            width={1467}
            height={707}
            className=" border-lightYellow rounded-[40px]"
            src={tennis}
            alt=""
          />
        </div>
        <div className=" p-[350px] relative ">
          <h3 className=" uppercase text-[130px]">pererenan</h3>
        </div>
      </div>
      <div className=" w-[1447px] text-black h-[707px]">
        <div className=" absolute">
          <img src={tennis} alt="" />
        </div>
        <div className="">
          <h3>1dwldfdfsdffewe</h3>
        </div>
      </div>{" "}
      <div className=" w-[1447px] text-black h-[707px]">
        <div className=" absolute">
          <img src={tennis} alt="" />
        </div>
        <div className="">
          <h3>1dwldfdfsdffewe</h3>
        </div>
      </div>
    </Slider>
  );
}
