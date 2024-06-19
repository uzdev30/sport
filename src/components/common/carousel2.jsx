import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import girlplayer from "../../assets/images/girlsplayer.png";
//images
import png1 from "../../assets/images/01.png";
export default function Carousel2() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="bg-white">
      <Slider {...settings}>
        <div className=" w-[473px]">
          <img src={girlplayer} alt="" />
          <div className=" flex justify-between w-[573px]">
            <div className=" flex justify-between">
              <img src={png1} alt="" />
              <div className=" font-firFont mt-3 text-[14px]">Jake Will.</div>
            </div>
            <div className=" text-[24px] font-sevFont">04 June 2023</div>
          </div>
          <div className="mt-4 w-[573px]">
            <h3 className=" font-thirFont text-[22px]">
              5 Exercises Basketball Players Should Be Using To Develop Strength
            </h3>
            <p className=" font-firFont text-[18px] mt-3 w-[563px] leading-5">
              This article was written by Jake Willhoite from Healthlisted.com
              Strength in basketball isn’t all about a massive body mass or
              ripped muscles.
            </p>
          </div>
        </div>
        <div className=" w-[473px]">
          <img src={girlplayer} alt="" />
          <div className=" flex justify-between w-[573px]">
            <div className=" flex justify-between">
              <img src={png1} alt="" />
              <div className=" font-firFont mt-3 text-[14px]">Jake Will.</div>
            </div>
            <div className=" text-[24px] font-sevFont">04 June 2023</div>
          </div>
          <div className="mt-4 w-[573px]">
            <h3 className=" font-thirFont text-[22px]">
              5 Exercises Basketball Players Should Be Using To Develop Strength
            </h3>
            <p className=" font-firFont text-[18px] mt-3 w-[563px] leading-5">
              This article was written by Jake Willhoite from Healthlisted.com
              Strength in basketball isn’t all about a massive body mass or
              ripped muscles.
            </p>
          </div>
        </div>
        <div className=" w-[473px]">
          <img src={girlplayer} alt="" />
          <div className=" flex justify-between w-[573px]">
            <div className=" flex justify-between">
              <img src={png1} alt="" />
              <div className=" font-firFont mt-3 text-[14px]">Jake Will.</div>
            </div>
            <div className=" text-[24px] font-sevFont">04 June 2023</div>
          </div>
          <div className="mt-4 w-[573px]">
            <h3 className=" font-thirFont text-[22px]">
              5 Exercises Basketball Players Should Be Using To Develop Strength
            </h3>
            <p className=" font-firFont text-[18px] mt-3 w-[563px] leading-5">
              This article was written by Jake Willhoite from Healthlisted.com
              Strength in basketball isn’t all about a massive body mass or
              ripped muscles.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}
