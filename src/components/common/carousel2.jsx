import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import girlplayer from "../../assets/images/girlsplayer.png";
import family from "../../assets/images/family.png";
import balls from "../../assets/images/balls.png";
//images
import png1 from "../../assets/images/01.png";
import png2 from "../../assets/images/02.png";
import png3 from "../../assets/images/03.png";
export default function Carousel2() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="bg-white px-10 pt-10">
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
          <img src={family} alt="" />
          <div className=" flex justify-between mt-5 w-[573px]">
            <div className=" flex justify-between">
              <img src={png3} alt="" />
              <div className=" font-firFont mt-3 text-[14px]"> Foxi.zacon</div>
            </div>
            <div className=" text-[24px] font-sevFont">03 June 2023</div>
          </div>
          <div className="mt-4 w-[573px]">
            <h3 className=" font-thirFont text-[22px]">
              Golden Knights out to fulfill owner's quest to win Stanley Cup in
              6th year
            </h3>
            <p className=" font-firFont text-[18px] mt-3 w-[563px] leading-5">
              The Vegas Golden Knights will play the Florida Panthers in the
              Stanley Cup Final beginning Saturday.
            </p>
          </div>
        </div>
        <div className=" w-[473px]">
          <img src={balls} alt="" />
          <div className=" flex justify-between w-[573px]">
            <div className=" flex justify-between">
              <img src={png2} alt="" />
              <div className=" font-firFont mt-3 text-[14px]">Bong Lozada</div>
            </div>
            <div className=" text-[24px] font-sevFont">01 June 2023</div>
          </div>
          <div className="mt-4 w-[573px]">
            <h3 className=" font-thirFont text-[22px]">
              ‘Outdoor’ Badminton Gets Support From Local Federation
            </h3>
            <p className=" font-firFont text-[18px] mt-3 w-[563px] leading-5">
              The Badminton World Federation is developing Air Badminton and the
              country’s governing body, Philippine Badminton Association.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}
